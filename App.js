import './App.css';
import ListaPokemon from './components/ListaPokemon/ListaPokemon';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      <h1>Pokedex </h1>
      <Search pokelink="https://www.pokeapi.co/api/v2/pokemon"/>

    <ListaPokemon/>
      </header>
   
    </div>
  );
}

export default App;
