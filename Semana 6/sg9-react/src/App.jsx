import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Estructura/Header/Header";
import Menu from "./Estructura/Menu/Menu";
import Recomendacion from "./Estructura/Recomendacion/Recomendacion";
import Footer from "./Estructura/Footer/Footer";

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
