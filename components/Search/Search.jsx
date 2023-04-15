import { Component } from "react";
import './estilos.css';

export default class Search extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            img:'',
            hp:'',
            attack:'',
            defensa:'',
            numero:'',
            type1:'',
        }
    }

    traerDatos= async() =>{
        let respuesta= await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await respuesta.json();
        console.log(data);

        this.setState({
            img:data.sprites.front_default,
            hp:data.stats[0].base_stat,
            attack:data.stats[1].base_stat,
            defensa:data.stats[2].base_stat,
            numero:data.id,
            type1:data.types[0].type.name,
        })
    }


    handleName= (event) =>{
        let aux= event.target.value.toLowerCase();this.setState({name:aux})
    }

    handleSubit=(event)=>{
        let name= this.state.name;
        console.log(name);
        this.traerDatos();
    }




    render(){
        console.log(this.state.name);
        if(this.state.img===''){

            return(
                <div id="container" className='card text-bg-danger mb-3'>
                    <div id="header" className='card -header '>
                        Pokemon Search
                    </div>
<div id="card-body" className='card-body ' >
    <h1 className='text-black'></h1>
    <label className="text-black">Get Pokemon</label><br/>
    <input Type="text"
    placeHolder='Name Pokemon'
    onChange={this.handleName}></input><br/>
<button className='btn btn-primary' type='subit'
onClick={this.handleSubit}>Search</button>


</div>
                </div>
            )
        }else{

        return(
 <div id="cont-ret"  className='card'>


<div id="circulos">
    <div id="circulo1"></div>
    <div id="circulo2"></div>
    <div id="circulo3"></div>
    <div id="circulo4"></div>
</div>

<div id="num-typo">
    <div id="numero">Nº {this.state.numero}</div>
    <div id="tipo">Type: {this.state.type1}</div>
</div>

        
    <div id="card-ret" className='card-body'>
        <img id="img-ret" src={this.state.img} alt={this.state.name}></img>
           
           <div id="state">
            <div id="hp" className="card text-black">HP {this.state.hp}</div>
            <div id="attack" className="card text-black">Attack {this.state.attack}</div>
            <div id="defense" className="card text-black">Defense {this.state.defensa}</div>
            </div>

<div id="ovalos">
    <div id="ovalo1"></div>
    <div id="ovalo2"></div>
</div>

<div id="nombre-boton">
        <div id="nombre-ret" className='cad-header text-black'>
             {this.state.name}
        </div>

            <br/>

            <button id="boton-ret" className='bnt bnt-primary'
            onClick={()=> {this.setState({name:'',img:''})}}>Get Back</button>

</div>
    </div>

 </div>

    
        )
    }
}
}
