import React from 'react';
import "./style.css";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://lh3.googleusercontent.com/proxy/QXgz2jz-fRAb3a2kEITnEgQ3f-vWXFOMWT421nHdV44mE3lANKBKpdMkyNXGwfTWc9AjsJcbXK9APzQo-j8W5ggxByOlLsIAs1_KpWtrGfkjJ9FzDY8iMVM"
            className="img-fluid rounded shadow"
            alt="Imagen SCR Driling 1"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6">
          <p className="textoprincipal">
            En SCR Drilling Offshore, nos enorgullece ser líderes en la capacitación para el sector petrolero. Con una larga trayectoria de excelencia y experiencia en la industria, estamos comprometidos con brindarte las habilidades y el conocimiento necesarios para destacar en un entorno tan desafiante como apasionante.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
