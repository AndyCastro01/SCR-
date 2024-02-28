import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cursos from './pages/Cursos';
import Insumos from './pages/Insumos';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="https://i.postimg.cc/65p10pzQ/LOGO.png" alt="Logo" className="navbar-logo" /> {/* Agrega aquí la imagen del logo */}
              Scr Drilling Offshore
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto"> {/* Alinea las secciones a la derecha */}
                <li className="nav-item">
                  <Link className="nav-link nav-link-big" to="/">Home</Link> {/* Aumenta el tamaño del texto */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-big" to="/about">Nosotros</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-big" to="/contact">Contacto</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto"> {/* Alinea las secciones a la derecha */}
                <li className="nav-item">
                  <Link className="nav-link nav-link-big" to="/cursos">Cursos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-big" to="/insumos">Insumos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/insumos" element={<Insumos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
