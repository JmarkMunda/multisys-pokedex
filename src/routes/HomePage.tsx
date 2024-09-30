import "@/App.css";
import Navbar from "@/components/layout/Navbar";
import PokemonList from "@/components/layout/PokemonList";
import useNavbarControls from "@/hooks/useNavbarControls";
import { PokemonResult } from "@/components/layout/PokemonList/types";
import { getAllPokemon } from "@/services/pokemonService";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { searchValue, viewMode, handleSearchChange, toggleViewMode } =
    useNavbarControls();

  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);

  const fetchPokemons = async () => {
    const data = await getAllPokemon();
    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <Navbar
        searchValue={searchValue}
        viewMode={viewMode}
        handleSearchChange={handleSearchChange}
        toggleViewMode={toggleViewMode}
      />

      <PokemonList data={pokemons} />
    </>
  );
};

export default HomePage;
