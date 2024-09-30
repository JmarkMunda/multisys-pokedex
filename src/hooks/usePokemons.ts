import { LIMIT } from "@/lib/constants";
import { getAllPokemon } from "@/services/pokemonService";
import { useQuery } from "@tanstack/react-query";

const usePokemons = (currentPage: number, searchValue?: string) => {
  const limits = !searchValue ? LIMIT : 150;

  const query = useQuery({
    queryKey: ["pokemons", currentPage, limits],
    queryFn: () => getAllPokemon(limits, limits * (currentPage - 1)),
  });

  const filteredData = query.data?.results.filter((result) =>
    result.name.includes(searchValue?.toLowerCase() ?? "")
  );

  const results = searchValue ? filteredData : query.data?.results;
  const total = (searchValue ? filteredData?.length : query.data?.count) ?? 0;

  return {
    pokemons: results,
    isLoading: query.isPending,
    total,
  };
};

export default usePokemons;
