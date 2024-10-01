import { getPokemon } from "@/services/pokemonService";
import { useQuery } from "@tanstack/react-query";

const usePokemon = (id: string) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id!),
  });
};

export default usePokemon;
