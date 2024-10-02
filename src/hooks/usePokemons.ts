import { TabType } from "@/components/pages/HomePage/TabsButton/types";
import { LIMIT } from "@/lib/constants";
import { CapturedPokemonType } from "@/lib/types";
import { getLocalStorage } from "@/lib/utils";
import { getAllPokemon } from "@/services/pokemonService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const usePokemons = (
  currentPage: number,
  currentTab: TabType,
  searchValue?: string
) => {
  const [pokemons, setPokemons] = useState<Partial<CapturedPokemonType>[]>([]);
  const limits = !searchValue ? LIMIT : 150;

  const { data, isPending } = useQuery({
    queryKey: ["pokemons", currentPage, limits],
    queryFn: () => getAllPokemon(limits, limits * (currentPage - 1)),
  });

  useEffect(() => {
    const myPokemons: CapturedPokemonType[] | null =
      getLocalStorage("my-pokemons");
    const sourceData = currentTab === "all" ? data?.results : myPokemons ?? [];
    const filteredData = sourceData?.filter((result) =>
      result.name?.includes(searchValue?.toLowerCase() ?? "")
    );
    setPokemons(filteredData ?? sourceData ?? []);
  }, [currentTab, searchValue, data?.results]);

  return {
    pokemons,
    isLoading: isPending,
    total: data?.count ?? 0,
  };
};

export default usePokemons;
