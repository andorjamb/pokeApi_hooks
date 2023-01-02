
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Pokemons from './pages/Pokemons'
import Pokesingle from './components/Pokesingle'

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:pokesingle" element={<Pokesingle />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
