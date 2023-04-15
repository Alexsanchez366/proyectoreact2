import Card from '../Detail/Card';



export default function DisplayPoke({pokemones}){


    return(
        <div>
            {pokemones.map((pokemon,indice)=> 
            <Card key={indice} pokemon={pokemon}/>
            )}
        </div>
    )
}