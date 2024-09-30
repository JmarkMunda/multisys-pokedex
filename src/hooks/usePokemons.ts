import { LIMIT } from "@/lib/constants";
import { getAllPokemon } from "@/services/pokemonService";
import { useQuery } from "@tanstack/react-query";

const usePokemons = (currentPage: number) => {
  const query = useQuery({
    queryKey: ["pokemons", currentPage],
    queryFn: () => getAllPokemon(LIMIT, LIMIT * (currentPage - 1)),
  });

  return { ...query, total: query.data?.count ?? 0 };
};

export default usePokemons;
