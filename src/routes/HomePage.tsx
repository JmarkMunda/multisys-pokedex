import "@/App.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PokemonList from "@/components/layout/PokemonList";
import Loading from "@/components/layout/Loading";
import useNavbarControls from "@/hooks/useNavbarControls";
import usePagination from "@/hooks/usePagination";
import usePokemons from "@/hooks/usePokemons";

const HomePage = () => {
  // Navbar
  const { searchValue, viewMode, handleSearchChange, toggleViewMode } =
    useNavbarControls();
  // Pagination
  const { currentPage, totalPages, handlePrevPage, handleNextPage } =
    usePagination(searchValue);
  // List all pokemons
  const { pokemons, isLoading } = usePokemons(currentPage, searchValue);

  return (
    <>
      <Navbar
        searchValue={searchValue}
        viewMode={viewMode}
        handleSearchChange={handleSearchChange}
        toggleViewMode={toggleViewMode}
      />

      {isLoading ? (
        <Loading text="Get ready! Gotta catch ’em all" />
      ) : (
        <>
          <PokemonList
            data={pokemons ?? []}
            viewMode={viewMode}
            currentPage={currentPage}
          />
          {!searchValue && (
            <Footer
              currentPage={currentPage}
              totalPages={totalPages}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
            />
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
