import "./App.css";
import { useEffect, useState } from "react";
import { getAllPokemon } from "./services/pokemonService";
import { PokemonResult } from "./components/layout/PokemonList/types";
import PokemonList from "./components/layout/PokemonList";
import Navbar from "./components/layout/Navbar";
import useNavbarControls from "./hooks/useNavbarControls";

function App() {
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
}

export default App;
