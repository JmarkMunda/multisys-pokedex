import React from "react";
import { Props } from "./types";
import { Badge } from "@/components/ui/Badge";
import { capitalize, getTypeColor } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import usePokemon from "@/hooks/usePokemon";
import capturedIcon from "@/assets/captured.png";
import useCaptureRelease from "@/hooks/useCaptureRelease";

const PokemonCard = ({
  name,
  url,
  viewMode,
  currentPage,
  index,
  date,
  nickname,
}: Props) => {
  const navigate = useNavigate();
  const id = url.split("/").at(-2);
  const isGridView = viewMode === "grid";
  const { checkIfPokemonCaptured } = useCaptureRelease();

  // Get Pokemon Details
  const { data } = usePokemon(id!);

  // Handlers
  const handleCardClick = (id: string) => {
    navigate(`/pokemon/${id}`, { state: { page: currentPage } });
  };

  return (
    <div
      onClick={() => handleCardClick(data!.id)}
      className={`relative min-w-full ${
        isGridView && "lg:min-w-[calc(25%-32px)]"
      } ${
        isGridView && "sm:min-w-[calc(50%-32px)]"
      } transition-all ease-in-out`}>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-10px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ delay: index! * 0.1 }}
        style={{ willChange: "auto" }}>
        <div
          className={`shadow-md rounded-lg p-4 cursor-pointer flex items-center gap-4 bg-white m-2 ${
            isGridView ? "flex-col" : "flex-row gap-16"
          } `}>
          {/* IMAGE */}
          <div className="w-32 h-32">
            <img
              src={data?.sprites?.other.home.front_default ?? ""}
              alt="image"
              className="w-full h-full object-contain hover:drop-shadow-xl"
            />
          </div>

          {/* NAME & TYPE */}
          <div>
            <p
              className={`text-xl font-bold mb-4 ${
                isGridView && "text-center"
              }`}>
              {capitalize(name)}
            </p>
            {nickname && (
              <p className="font-bold text-sm text-gray-500">
                Nickname: {nickname}
              </p>
            )}
            {date ? (
              <p className="font-bold text-sm text-gray-500">Date: {date}</p>
            ) : (
              <div
                className={`flex items-center gap-2 ${
                  isGridView && "justify-center"
                }`}>
                {data?.types.map(({ type }) => (
                  <Badge key={type.name} className={getTypeColor(type.name)}>
                    {type.name}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* CAPTURED */}
          {checkIfPokemonCaptured(id!) && (
            <div
              className={`absolute top-2 right-8 sm:top-1/2 sm:-translate-y-1/2 sm:right-16 flex items-center gap-2 transition-all ease-out hover:font-bold hover:drop-shadow-xl hover:scale-125 ${
                isGridView && "top-4 sm:top-8 sm:-translate-y-0 sm:right-8"
              }`}>
              <img src={capturedIcon} className="w-8 h-8" />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(PokemonCard);
