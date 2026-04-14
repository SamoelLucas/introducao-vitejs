import { Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';
import Exemplo03 from './pages/exemplos/ex-03';

import Atividade01 from './pages/atividade/atividade-01';
import Atividade02 from './pages/atividade/atividade-02';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exemplo/1" element={<Exemplo01 />}/>
      <Route path="/exemplo/2" element={<Exemplo02 />}/>
      <Route path="/exemplo/3" element={<Exemplo03 />}/>
      <Route path="/atividade/1" element={<Atividade01 />}/>
      <Route path="/atividade/2" element={<Atividade02 />}/>
    </Routes>
  )
}

export default App;