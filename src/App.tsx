import './App.css';
import Proyecto_1_Contador from './proyecto_1/Interaccion';
import CambioBackground from './proyecto_2/interaccion';
import Pokedex from './Proyecto_4/pokedex';

function App() {
  return (
    <div className="App">
      <h3>Weslen Colindres Proyecto ver.0.1</h3>
      <hr/>
      <Proyecto_1_Contador />
      <hr/>
      <CambioBackground/>
     
      <Pokedex/>
    </div>
  );
}

export default App;
