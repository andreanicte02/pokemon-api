import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SearchPokemon() {
    
    const navigate = useNavigate();

    const [strPokemon, setstrPokemon] = useState('')

    const clickSearchPokemon = (event) =>{

       console.log(strPokemon);

        navigate(`/Pokemon/`,{
            state:{
                namePokemon:strPokemon,
            }
        });

    }

    const onChageStrPokemon=(event)=>{

        const valueStrPokemon = event.target.value;
        setstrPokemon(valueStrPokemon);

        
    }
    
    return (
        <div style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:'column',
            height:'100vh'
            

        }}>
            <h1>
                Buscar pokemon
            </h1>


            <div>
                <input onChange={onChageStrPokemon}></input>
            </div>

            <br/>
            
            <div>
                <button onClick={clickSearchPokemon}>
                    Buscar

                </button>
            </div>
        </div>
    )
}
