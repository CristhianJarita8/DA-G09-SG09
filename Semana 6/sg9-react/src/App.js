import React from 'react';
import './App.css';
import Header from './Estructura/Header';
import Menu from './Estructura/Menu';
import Recomendacion from './Estructura/Recomendacion';
import Footer from './Estructura/Footer';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Recomendacion />
      <Footer />
    </div>
  );
}

export default App;
