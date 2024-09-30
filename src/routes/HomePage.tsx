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
    usePagination();
  // List all pokemons
  const { data, isPending } = usePokemons(currentPage);

  return (
    <>
      <Navbar
        searchValue={searchValue}
        viewMode={viewMode}
        handleSearchChange={handleSearchChange}
        toggleViewMode={toggleViewMode}
      />

      {isPending ? (
        <Loading />
      ) : (
        <>
          <PokemonList data={data?.results ?? []} currentPage={currentPage} />
          <Footer
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
