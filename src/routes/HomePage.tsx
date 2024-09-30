import "@/App.css";
import Navbar from "@/components/layout/Navbar";
import PokemonList from "@/components/layout/PokemonList";
import useNavbarControls from "@/hooks/useNavbarControls";
import { getAllPokemon } from "@/services/pokemonService";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { searchValue, viewMode, handleSearchChange, toggleViewMode } =
    useNavbarControls();

  const { data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getAllPokemon,
  });

  return (
    <>
      <Navbar
        searchValue={searchValue}
        viewMode={viewMode}
        handleSearchChange={handleSearchChange}
        toggleViewMode={toggleViewMode}
      />

      <PokemonList data={data?.results ?? []} />
    </>
  );
};

export default HomePage;
