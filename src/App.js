import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SkillsShpere from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Banner />
        <SkillsShpere />
        <Project />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
