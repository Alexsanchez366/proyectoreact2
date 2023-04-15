import axios from "axios";
import { useEffect, useState } from "react";
import './Card.css';



export default function Card ({pokemon}) {

const[onePokemon, setOnePokemon] = useState({
    name:'',
    sprites: {front_default: ''},
    id:'',
    types:[{type:{name:''}}] ,
   stats:[{base_stat:''}],




});


    const datosPokemon=(url)=>{
        axios.get(url)
        .then((respuesta)=>{
            console.log(respuesta);
            setOnePokemon(respuesta.data);
        })
    }

    useEffect(()=>{
        datosPokemon(pokemon.url)
    },[pokemon.url])

  return (
    <div class="card text-bg-danger" style={{display: 'inline-block'}}>
        <div className='card m-2'>
            <div id="name" className='card-header text-black'>{onePokemon.name}</div>
            <div className='card-body text-bg-danger'>
                <div id="n-type">
                <p id="n" className='card-title text-black'>N`{onePokemon.id} </p>
                <p id="type" className='card-title text-black'>Type: {onePokemon.types[0].type.name}</p>
            </div>
            <img src={onePokemon.sprites.front_default} alt="imagen pokemon"></img>
                <p id="hp" className='card-title text-black'>Hp {onePokemon.stats[0].base_stat}</p>
                <p id="atake" className='card-title text-black'>Attack {onePokemon.stats[1].base_stat}</p>
                <p id="defensa" className='card-title text-black'>Defense {onePokemon.stats[2].base_stat}</p>            
            </div>
        </div>
    </div>
  )
}
