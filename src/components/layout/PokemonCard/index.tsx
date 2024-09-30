import React, { useEffect, useState } from "react";
import { Props } from "./types";
import { getPokemon } from "@/services/pokemonService";
import { PokemonDetailsType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { getTypeColor } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ name, url }: Props) => {
  // Do fetching here
  const [details, setDetails] = useState<PokemonDetailsType | null>(null);
  const navigate = useNavigate();

  const fetchPokemon = async () => {
    const id = url.split("/").at(-2);
    if (!id) return;
    const data = await getPokemon(id);
    setDetails({
      id: data.id,
      name: data.name,
      image: data.sprites.other.home.front_default,
      types: data.types,
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div
      onClick={() => handleCardClick(details!.id)}
      className="relative min-w-full lg:min-w-[calc(25%-32px)] sm:min-w-[calc(50%-32px)] transition-all ease-in-out">
      <div className="shadow-md rounded-lg p-4 cursor-pointer flex flex-col items-center gap-4 bg-white m-2">
        {/* IMAGE */}

        <img
          src={details?.image ?? ""}
          alt="pokemon-image"
          className="w-32 h-32 object-contain hover:drop-shadow-xl"
        />

        {/* NAME */}
        <p className="text-xl font-bold">{name}</p>

        {/* TYPE */}
        <div className="flex items-center gap-2">
          {details?.types.map(({ type }) => (
            <Badge key={type.name} className={getTypeColor(type.name)}>
              {type.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(PokemonCard);
