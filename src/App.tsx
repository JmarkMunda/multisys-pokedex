import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <nav className="container flex items-center justify-between">
        <p>Pokedex</p>
        <Button>Click me</Button>
      </nav>
    </>
  );
}

export default App;

