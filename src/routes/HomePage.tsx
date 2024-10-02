import "@/App.css";
import Footer from "@/components/pages/HomePage/Footer";
import Navbar from "@/components/pages/HomePage/Navbar";
import PokemonList from "@/components/pages/HomePage/PokemonList";
import TabsButton from "@/components/pages/HomePage/TabsButton";
import Loading from "@/components/ui/Loading";
import useNavbarControls from "@/hooks/useNavbarControls";
import usePagination from "@/hooks/usePagination";
import usePokemons from "@/hooks/usePokemons";
import useTab from "@/hooks/useTab";

const HomePage = () => {
  // Navbar
  const { searchValue, viewMode, handleSearchChange, toggleViewMode } =
    useNavbarControls();

  // Tabs
  const { currentTab, handleTabClick } = useTab();

  // Pagination
  const { currentPage, totalPages, handlePrevPage, handleNextPage } =
    usePagination(searchValue, currentTab);

  // List all pokemons
  const { pokemons, isLoading } = usePokemons(
    currentPage,
    currentTab,
    searchValue
  );

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
          {/* ALL OR CAPTURED TAB */}
          <TabsButton currentTab={currentTab} handleTabClick={handleTabClick} />
          {/* LIST */}
          <PokemonList
            data={pokemons ?? []}
            viewMode={viewMode}
            currentPage={currentPage}
          />
          {/* PAGINATION */}
          {currentTab === "all" && !searchValue && (
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
