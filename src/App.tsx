import "./App.css";
import Navbar from "./components/layout/Navbar";
import useNavbarControls from "./hooks/useNavbarControls";

function App() {
  const { searchValue, viewMode, handleSearchChange, toggleViewMode } =
    useNavbarControls();

  return (
    <>
      <Navbar
        searchValue={searchValue}
        viewMode={viewMode}
        handleSearchChange={handleSearchChange}
        toggleViewMode={toggleViewMode}
      />

      <main className="container">
        <p>Hello World</p>
      </main>
    </>
  );
}

export default App;

