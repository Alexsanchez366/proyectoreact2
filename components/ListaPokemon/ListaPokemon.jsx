import { useEffect, useState } from "react";
import axios from 'axios';
import DisplayPoke from './DisplayPoke';

export default function ListaPokemon(){
    const[pokemons, setPokemons]= useState([
        {"name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"}
    ]);

    const traerPokemones=()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=151&limit=176')
        .then((respuesta)=> {
            setPokemons(respuesta.data.results);
           console.log(pokemons);

        })
    }
    useEffect(()=> {
        traerPokemones();

    },[pokemons.length])
    
    return(
        <div>
           <DisplayPoke pokemones={pokemons}/>
        </div>
    )
}