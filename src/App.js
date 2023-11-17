import './App.css'
import Rotas from './Rotas/Rotas';
import Rodape from './componentes/Rodape/Rodape.js';
import Cabecalho from './componentes/cabecalho/Cabecalho.js'

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Rotas/>
      <Rodape/>
    </div>
  );
}

export default App
