import { Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';
import atividade01 from './pages/atividades/atividade-01';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exemplo/1" element={<Exemplo01 />}/>
      <Route path="/exemplo/2" element={<Exemplo02 />}/>
      <Route path="/exemplo/2" element={<atividade01 />}/>
    </Routes>
  )
}

export default App;