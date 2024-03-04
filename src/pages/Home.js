import React, { useEffect } from 'react';
import './style.css';
import ScrollReveal from 'scrollreveal';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    // Configuración de ScrollReveal
    ScrollReveal().reveal('.textoprincipal', {
      duration: 1000,
      origin: 'bottom',
      distance: '50px',
      delay: 200,
      easing: 'ease-in-out',
      reset: true
    });

    // Verificar si dataLayer está definido antes de utilizarlo
    /*eslint-disable no-undef */
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = [];
    }
   

    // Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-921PJHV1TT';
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-921PJHV1TT');
  }, []);


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://cdn.hswstatic.com/gif/gettyimages-ec2879-002.jpg"
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

      {/* Botones de enlace en la esquina inferior derecha */}
      <div className="social-links">
        <a href="https://api.whatsapp.com/send?phone=5219381233920" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61553377829842" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/tu_pagina" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <FaInstagram />
        </a>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 order-md-2">
          <img
            src="https://optimiza.es/wp-content/uploads/2019/06/OPTIMIZA-EXPERTOS-EN-MATERIALES-1080x675.jpg"
            className="img-fluid rounded shadow"
            alt="Segunda imagen"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <div className="text-container">
            <p className="textoprincipal">
              Nuestros cursos están diseñados y liderados por expertos de la industria, y se centran en proporcionarte las herramientas prácticas y teóricas que necesitas para sobresalir en tu carrera. Ya sea que estés comenzando en el sector petrolero o busques avanzar en tu carrera, estamos aquí para ayudarte a alcanzar tus metas.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src="https://www.proalt.es/wp-content/uploads/2019/08/plataforma-petrolera-en-alta-mar.jpg"
            className="img-fluid rounded shadow"
            alt="Segunda imagen"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <div className="text-container">
            <p className="textoprincipal">
              Explora nuestra amplia gama de cursos especializados, descubre cómo nuestra capacitación puede impulsar tu crecimiento profesional, y únete a nuestra comunidad de profesionales comprometidos con la excelencia en la industria petrolera.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <div className="text-container">
            <p className="textoprincipal">
              En SCR Drilling Offshore, nos enorgullece contar con los mejores asesores de la industria. Nuestros instructores no solo poseen una amplia experiencia práctica en el ramo, sino que también están altamente calificados en términos de conocimientos teóricos y habilidades pedagógicas.
              <br/><br/>
              Nuestros instructores están cuidadosamente seleccionados por su experiencia comprobada en la industria, asegurando que nuestros estudiantes reciban una capacitación de la más alta calidad. Con un profundo conocimiento de las mejores prácticas, tecnologías innovadoras y desafíos específicos del sector, nuestros instructores están comprometidos a brindarte la orientación y el apoyo necesarios para alcanzar tus objetivos profesionales.
              <br/><br/>
              Además, nuestros instructores no solo son expertos en sus campos respectivos, sino que también están comprometidos con el éxito de cada alumno. Ofrecen un enfoque personalizado y atención individualizada para garantizar que cada estudiante pueda aprovechar al máximo su experiencia de aprendizaje con nosotros.
              <br/><br/>
              Al elegir SCR Drilling Offshore para tu capacitación en el sector petrolero, puedes confiar en que estarás aprendiendo de los mejores en el campo. Nuestros asesores están aquí para inspirarte, guiarte y ayudarte a alcanzar tu máximo potencial en la industria del offshore drilling.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <div className="benefits-container"><br/>
            <h2><center>Beneficios Clave de Nuestra Capacitación:</center></h2>
            <ul>
              <li>Adquisición de habilidades prácticas y teóricas fundamentales para sobresalir en el sector.</li>
              <li>Oportunidades de crecimiento profesional y desarrollo de una carrera sólida en un entorno desafiante pero apasionante.</li>
              <li>Acceso a conocimientos liderados por expertos de la industria, garantizando una capacitación de calidad y relevante.</li>
              <li>Apoyo y orientación personalizada para alcanzar tus metas profesionales y maximizar tu potencial en el sector.</li>
              <li>Certificaciones reconocidas que respaldan tu experiencia y competencia en el mercado laboral.</li>
              <li>Flexibilidad en horarios y modalidades de capacitación, adaptándonos a tus necesidades y circunstancias individuales.</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
