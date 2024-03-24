import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cursos from "./pages/Cursos";
import Insumos from "./pages/Insumos";

function App() {
  return (
    <Router>
   

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/insumos" element={<Insumos />} />
          </Routes>
        </div>
    
    </Router>
  );
}

export default App;
