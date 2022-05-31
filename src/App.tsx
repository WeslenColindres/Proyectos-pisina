import Proyecto_1_Contador from './proyecto_1/Interaccion';
import CambioBackground from './proyecto_2/interaccion';
import Pokedex from './Proyecto_4/pokedex';
import {Route, Routes} from 'react-router-dom';
import Layout from './Componentes/Proyecto_3/components/Layout';
import Home from './Proyecto_3/page/Home';

function App() {
  return (
    <>
    <Layout>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/PageUno" element={<Proyecto_1_Contador/>}/>
        <Route path="/PageDos" element={<CambioBackground/>}/>
        <Route path="/PageTres" element={<Pokedex/>}/>
        {/* <Route path="/PageCTA" element={<PageCTA/>}/> */}
      </Routes>
      
    </Layout>
    <hr/>
    <h3>Weslen Colindres Proyecto ver.0.6</h3>
    </>
  );
}

export default App;
