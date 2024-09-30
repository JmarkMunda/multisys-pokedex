import React from "react";
import { Props } from "./types";
import { getPokemon } from "@/services/pokemonService";
import { Badge } from "@/components/ui/Badge";
import { capitalize, getTypeColor } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const PokemonCard = ({ name, url, currentPage, index }: Props) => {
  const navigate = useNavigate();
  const id = url.split("/").at(-2);

  const { data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id!),
  });

  const handleCardClick = (id: string) => {
    navigate(`/pokemon/${id}`, { state: { page: currentPage } });
  };

  return (
    <div
      onClick={() => handleCardClick(data!.id)}
      className="relative min-w-full lg:min-w-[calc(25%-32px)] sm:min-w-[calc(50%-32px)] transition-all ease-in-out">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-10px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ delay: index! * 0.1 }}
        style={{ willChange: "auto" }}>
        <div className="shadow-md rounded-lg p-4 cursor-pointer flex flex-col items-center gap-4 bg-white m-2">
          {/* IMAGE */}
          <div className="w-32 h-32">
            <img
              src={data?.sprites?.other.home.front_default ?? ""}
              alt="image"
              className="w-full h-full object-contain hover:drop-shadow-xl"
            />
          </div>

          {/* NAME */}
          <p className="text-xl font-bold">{capitalize(name)}</p>

          {/* TYPE */}
          <div className="flex items-center gap-2">
            {data?.types.map(({ type }) => (
              <Badge key={type.name} className={getTypeColor(type.name)}>
                {type.name}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(PokemonCard);
