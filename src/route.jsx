import {
    createBrowserRouter,
} from "react-router-dom";
import AppPokemon from "./Pokemons/AppPokemon";
import AppSearchPokemon from "./Search/AppSearchPokemon";


const router = createBrowserRouter([
    {
      path: "/",
      element: <AppSearchPokemon/>,
    },
    {
      path: "/Pokemon",
      element: <AppPokemon/>
    }
  ]);

export default router;

