
import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Ejemplo1 from './pages/Ejemplo1';

function App() {
  return (
    <div className="App">


      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ejemplo1' element={<Ejemplo1 />} />



          { /*aca va los links*/}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
