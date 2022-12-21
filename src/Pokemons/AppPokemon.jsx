import PokemonLoader from "./PokemonLoader"
import { useLocation } from "react-router-dom";

export default function AppPokemon() {

    const location = useLocation();

    // get userId
    let namePokemon = location.state.namePokemon.toLowerCase();


    return (
        <>
          <PokemonLoader namePokemon={namePokemon}/>  
        </>
    )
}
