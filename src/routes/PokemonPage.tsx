import { getTypeColor } from "@/lib/utils";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import usePokemon from "@/hooks/usePokemon";
import Header from "@/components/pages/PokemonPage/Header";
import DisplayImage from "@/components/pages/PokemonPage/DisplayImage";
import BadgeTypes from "@/components/pages/PokemonPage/BadgeTypes";
import Details from "@/components/pages/PokemonPage/Details";
import Stats from "@/components/pages/PokemonPage/Stats";
import CaptureReleaseButton from "@/components/pages/PokemonPage/CaptureReleaseButton";
import CaptureModal from "@/components/pages/PokemonPage/CaptureModal";
import ReleaseModal from "@/components/pages/PokemonPage/ReleaseModal";
import useCapture from "@/hooks/useCapture";
import useCaptureReleaseModal from "@/hooks/useCaptureReleaseModal";

const PokemonPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Capture Release Modal
  const {
    showCaptureModal,
    showReleaseModal,
    handleOpenCaptureModal,
    handleCloseCaptureModal,
    handleOpenReleaseModal,
    handleCloseReleaseModal,
  } = useCaptureReleaseModal();

  // Get Pokemon Details
  const { data } = usePokemon(id!);

  // Capturing Pokemon
  const { isPokemonCaptured } = useCapture(id!, data!.name);

  if (!data) return;

  return (
    <section className={`${getTypeColor(data.types[0].type.name)} h-screen`}>
      <div className="flex flex-col h-full">
        {/* HEADER */}
        <Header
          id={data.id}
          name={data.name}
          handleBackClick={() => navigate("/", { state: { page: state.page } })}
        />

        {/* OVERLAPPED IMAGE */}
        <DisplayImage image={data.sprites?.other.home.front_default} />

        {/* DESCRIPTION CONTAINER */}
        <div className="bg-white text-black rounded-tl-[10%] rounded-tr-[10%] flex-2 h-full pt-[120px] shadow-sm">
          <div className="container flex flex-col items-center">
            <BadgeTypes types={data.types} />
            <div className="w-full sm:flex sm:justify-between sm:items-start">
              <Details
                baseExp={data?.base_experience}
                weight={data?.weight}
                height={data?.height}
                isCaptured={isPokemonCaptured()}
              />
              <Stats stats={data?.stats} />
            </div>

            <CaptureReleaseButton
              isCaptured={isPokemonCaptured()}
              handleOpenCaptureModal={handleOpenCaptureModal}
              handleOpenReleaseModal={handleOpenReleaseModal}
            />

            <CaptureModal
              id={data.id}
              name={data.name}
              isVisible={showCaptureModal}
              onClose={handleCloseCaptureModal}
            />

            <ReleaseModal
              id={data.id}
              isVisible={showReleaseModal}
              onClose={handleCloseReleaseModal}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonPage;
