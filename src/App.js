import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Blank from "./components/Blank";
import Planes from "./components/Planes";
import Equipo from "./components/Equipo";
import Contacto from "./components/Contacto";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Showcase />
      <Blank />
      <Planes />
      <Equipo />
      <Contacto />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
