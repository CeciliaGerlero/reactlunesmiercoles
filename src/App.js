
import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Ejemplo1 from './pages/Ejemplo1';
import Ejemplo2 from './pages/Ejemplo2';
import Ejemplo3 from './pages/Ejemplo3';
import CargaJson from './pages/Ejemplo4';
import Ejemplo5 from './pages/Ejemplo5';

function App() {
  return (
    <div className="App">


      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ejemplo1' element={<Ejemplo1 />} />
          <Route path='/ejemplo2' element={<Ejemplo2 />} />
          <Route path='/ejemplo3' element={<Ejemplo3 />} />
          <Route path='/ejemplo4' element={<CargaJson />} />
          <Route path='/ejemplo5' element={<Ejemplo5 />} />


          { /*aca va los links*/}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
