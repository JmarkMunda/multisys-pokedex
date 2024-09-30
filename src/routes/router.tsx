import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import PokemonPage from "./PokemonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "pokemon/:id",
    element: <PokemonPage />,
  },
]);

export default router;
