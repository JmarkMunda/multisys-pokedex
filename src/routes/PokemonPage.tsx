import { capitalize, getTypeColor } from "@/lib/utils";
import { getPokemon } from "@/services/pokemonService";
import { Link, useParams } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PiSwordLight, PiShield, PiBoot, PiHeart } from "react-icons/pi";
import { RxMagicWand } from "react-icons/rx";
import { GiHeartArmor } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";

const PokemonPage = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id!),
  });

  const generateStatsIcon = (name: string) => {
    switch (name) {
      case "hp":
        return <PiHeart />;
      case "attack":
        return <PiSwordLight />;
      case "defense":
        return <PiShield />;
      case "special-attack":
        return <RxMagicWand />;
      case "special-defense":
        return <GiHeartArmor />;
      case "speed":
        return <PiBoot />;
      default:
        return;
    }
  };

  if (!data) return;

  return (
    <section className={`${getTypeColor(data.types[0].type.name)} h-screen`}>
      <div className="flex flex-col h-full">
        {/* HEADER */}
        <div className="container flex-1 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center cursor-pointer hover:text-blue-600">
            <FaCaretLeft /> Back
          </Link>
          <h1 className="text-3xl font-bold">{capitalize(data.name)}</h1>
          <span>#{data.id}</span>
        </div>

        {/* OVERLAPPED IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={data.sprites?.other.home.front_default}
            alt="pokemon-image"
            className="w-64 h-6w-64 object-contain drop-shadow-2xl mb-[-120px] z-10"
          />
        </div>

        {/* DETAILS */}
        <div className="bg-white text-black rounded-tl-[10%] rounded-tr-[10%] flex-2 h-full pt-[120px] shadow-sm">
          <div className="container flex flex-col items-center">
            {/* TYPE */}
            <div className="flex items-center gap-2 mb-8">
              {data?.types.map(({ type }) => (
                <Badge key={type.name} className={`${getTypeColor(type.name)}`}>
                  {capitalize(type.name)}
                </Badge>
              ))}
            </div>

            <div className="w-full sm:flex sm:justify-between sm:items-start">
              {/*EXP, HEIGHT & WEIGHT */}
              <div className="mb-8 p-4 sm:flex-1">
                <p className="text-xl font-bold text-gray-900">Details:</p>
                <p>
                  Experience: <span>{data.base_experience} XP</span>
                </p>
                <p>
                  Weight: <span>{data.weight}</span>
                </p>
                <p>
                  Height: <span>{data.height}</span>
                </p>
              </div>

              {/* STATS */}
              <div className="p-4 mb-8 rounded-xl bg-gray-400/10 sm:flex-1 shadow-sm">
                <p className="text-xl font-bold text-gray-900">Stats:</p>
                {data.stats?.map(({ base_stat, stat }) => (
                  <div key={stat.name} className="my-2">
                    <div className="flex items-center gap-2">
                      {generateStatsIcon(stat.name)}
                      <span>
                        {stat.name} ({base_stat})
                      </span>
                    </div>
                    <motion.div
                      className={
                        "h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
                      }
                      initial={{ width: 0 }}
                      animate={{ width: `${base_stat / 2}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CAPTURE BUTTON */}
            <Button>Capture</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonPage;
