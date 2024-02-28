import React, { useEffect } from 'react';
import './style.css';
import ScrollReveal from 'scrollreveal'; // Importa la biblioteca ScrollReveal

const Home = () => {
  useEffect(() => {
    // Inicializa la biblioteca ScrollReveal
    ScrollReveal().reveal('.textoprincipal', {
      duration: 1000,   // Duración de la animación en milisegundos
      origin: 'bottom', // Dirección desde la que aparecerá el elemento
      distance: '50px', // Distancia desde la que aparecerá el elemento
      delay: 200,       // Retardo en milisegundos antes de que comience la animación
      easing: 'ease-in-out', // Tipo de animación
      reset: true       // Reiniciar la animación en cada desplazamiento
    });
  }, []); // La dependencia vacía [] asegura que este efecto se ejecute solo una vez después del montaje inicial del componente

  return (
    <div className="container">
      {/* Agrega la etiqueta de Google Analytics aquí */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-921PJHV1TT"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-921PJHV1TT');
        `}
      </script>
      {/* Fin de la etiqueta de Google Analytics */}
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
          <p className="textoprincipal"><br/> 
            En SCR Drilling Offshore, nos enorgullece ser líderes en la capacitación para el sector petrolero. Con una larga trayectoria de excelencia y experiencia en la industria, estamos comprometidos con brindarte las habilidades y el conocimiento necesarios para destacar en un entorno tan desafiante como apasionante.
          </p>
        </div>
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
            <p className="textoprincipal"><br/> Nuestros cursos están diseñados y liderados por expertos de la industria, y se centran en proporcionarte las herramientas prácticas y teóricas que necesitas para sobresalir en tu carrera. Ya sea que estés comenzando en el sector petrolero o busques avanzar en tu carrera, estamos aquí para ayudarte a alcanzar tus metas.</p>
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
            <p className="textoprincipal"><br/> Explora nuestra amplia gama de cursos especializados, descubre cómo nuestra capacitación puede impulsar tu crecimiento profesional, y únete a nuestra comunidad de profesionales comprometidos con la excelencia en la industria petrolera.</p>
          </div>
        </div>
      </div>
      <br/><br/> 
    </div>
  );
}

export default Home;
