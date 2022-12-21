import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Pokemon from "./Pokemon";

export default function PokemonLoader({ namePokemon }) {

    const urlApi = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;

    const [dataPokemon, setdataPokemon] = useState(null);

    useEffect(() => {

        const loadDataPokemon = async () => {

            const result = await axios.get(urlApi);

            if(result===404){

                return;
            }

            
            setdataPokemon(result.data);

            
        }

        loadDataPokemon();


        return () => {

        }
    }, [])


    return (
        <>{
            dataPokemon ?

            <Pokemon
                name={dataPokemon.name}
                type={dataPokemon.types?.[0].type?.name}
                urlImg={dataPokemon.sprites?.other?.dream_world?.front_default}
                abilities={dataPokemon.abilities}
                />
            :
            <h1>
                No existe el pokemon 404
            </h1>
        }

        </>
    )
}
