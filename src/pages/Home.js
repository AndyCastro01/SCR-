import React, { useState, useEffect } from "react";
import "./style.css";
import ScrollReveal from "scrollreveal";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCourseDetails1, setShowCourseDetails1] = useState(false);
  const [showCourseDetails2, setShowCourseDetails2] = useState(false);
  const [showCourseDetails3, setShowCourseDetails3] = useState(false);
  const [showCourseDetails4, setShowCourseDetails4] = useState(false);
  const [showCourseDetails5, setShowCourseDetails5] = useState(false);
  const [showCourseDetails6, setShowCourseDetails6] = useState(false);
  const [showCourseDetails7, setShowCourseDetails7] = useState(false);
  const [showCourseDetails8, setShowCourseDetails8] = useState(false);
  const [showCourseDetails9, setShowCourseDetails9] = useState(false);
  const [showCourseDetails10, setShowCourseDetails10] = useState(false);
  const [showCourseDetails11, setShowCourseDetails11] = useState(false);
  const [showCourseDetails12, setShowCourseDetails12] = useState(false);
  const [showCourseDetails13, setShowCourseDetails13] = useState(false);
  const [showCourseDetails14, setShowCourseDetails14] = useState(false);
  const [showCourseDetails15, setShowCourseDetails15] = useState(false);
  const [showCourseDetails16, setShowCourseDetails16] = useState(false);

  const images = [
    "https://msipipeprotection.com/wp-content/uploads/AdobeStock_139899101.jpeg",
    "https://www.bop-products.com/website/wp-content/uploads/2021/03/shutterstock_1495483385.jpg",
    "https://www.morrowsheppard.com/wp-content/uploads/offshore-drilling-process-1-jpg.webp",
    "https://revistaseguridad360.com/wp-content/uploads/2021/08/Industria-petrolera-scaled.jpg",
    "https://maquinadocnc.com.mx/wp-content/uploads/2021/03/maquinado-de-piezas-cnc-para-la-industria-petrolera.png",
  ];

  useEffect(() => {
    ScrollReveal().reveal(".textoprincipal", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
      reset: true,
    });

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const toggleCourseDetails1 = () => {
    setShowCourseDetails1(!showCourseDetails1);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails2 = () => {
    setShowCourseDetails2(!showCourseDetails2);
    setShowCourseDetails1(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails3 = () => {
    setShowCourseDetails3(!showCourseDetails3);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails4 = () => {
    setShowCourseDetails4(!showCourseDetails4);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails5 = () => {
    setShowCourseDetails5(!showCourseDetails5);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails6 = () => {
    setShowCourseDetails6(!showCourseDetails6);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails7 = () => {
    setShowCourseDetails7(!showCourseDetails7);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails8 = () => {
    setShowCourseDetails8(!showCourseDetails8);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails9 = () => {
    setShowCourseDetails9(!showCourseDetails9);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails10 = () => {
    setShowCourseDetails10(!showCourseDetails10);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails11 = () => {
    setShowCourseDetails11(!showCourseDetails11);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails12 = () => {
    setShowCourseDetails12(!showCourseDetails12);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails13 = () => {
    setShowCourseDetails13(!showCourseDetails13);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails14 = () => {
    setShowCourseDetails14(!showCourseDetails14);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails15(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails15 = () => {
    setShowCourseDetails15(!showCourseDetails15);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails16(false);
  };
  
  const toggleCourseDetails16 = () => {
    setShowCourseDetails16(!showCourseDetails16);
    setShowCourseDetails1(false);
    setShowCourseDetails2(false);
    setShowCourseDetails3(false);
    setShowCourseDetails4(false);
    setShowCourseDetails5(false);
    setShowCourseDetails6(false);
    setShowCourseDetails7(false);
    setShowCourseDetails8(false);
    setShowCourseDetails9(false);
    setShowCourseDetails10(false);
    setShowCourseDetails11(false);
    setShowCourseDetails12(false);
    setShowCourseDetails13(false);
    setShowCourseDetails14(false);
    setShowCourseDetails15(false);
  };
  
  
  

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand style={{ marginLeft: "2%" }}>
          <img
            src="https://i.postimg.cc/65p10pzQ/LOGO.png"
            alt="Logo"
            className="navbar-logo"
          />
          <strong className="titulobarra">SCR Drilling Offshore</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: "45%" }}>
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#cursos">Cursos</Nav.Link>
            <Nav.Link href="#rentayventa">Suministros</Nav.Link>
            <Nav.Link href="#contacto">Servicios</Nav.Link>
            <Nav.Link href="#beneficios">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <br id="inicio" /> <br /><br/><br/><br/><br/>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentImageIndex ? "active" : ""}`}
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              borderRadius: "10px",
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          ></div>
        ))}
        <div className="text-container-banner" style={{ marginBottom: "20px" }}>
          <h1 className="banner-text">
            <strong>SCR Drilling Offshore</strong>{" "}
            <h5 className="subtitle">Forjando líderes en seguridad: inspirando confianza en cada sector.</h5>
          </h1>
        </div>
      </div>

      <h6 id="nosotros" className="paraid">.</h6>

      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row mt-5">
          <h2>
            <br />
            <p className="tnosotros">Nosotros:</p>
            <div className="row mt-5">
              <div className="col-md-6">
                <img
                  src="https://i.ibb.co/Y3Ffz54/nosotros1.png"
                  className="img-fluid rounded shadow"
                  alt="nosotros 1"
                  style={{ borderRadius: "10px", width: "100%" }}
                />
             
             </div>
              <div className="col-md-6 order-md-1">
                <div className="text-container">
                  <p className="textoprincipal">
                    En SCR Drilling Offshore nuestros instructores están
                    cuidadosamente seleccionados por su experiencia comprobada
                    en la industria, asegurando que nuestros estudiantes reciban
                    una capacitación de la más alta calidad. Con un profundo
                    conocimiento de las mejores prácticas nuestros instructores
                    están comprometidos a brindarte la orientación y el apoyo
                    necesarios para alcanzar tus objetivos profesionales.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-6 order-md-2">
                  <img
                    src="https://i.postimg.cc/ncFtcKrK/nosotros2.png"
                    className="img-fluid rounded shadow"
                    alt="nosotros 1"
                    style={{ borderRadius: "10px", width: "100%" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="text-container">
                    <p className="textoprincipal">
                      Además, nuestros instructores no solo son expertos en sus
                      campos respectivos, sino que también están comprometidos
                      con el éxito de cada alumno. Ofrecen un enfoque
                      personalizado y atención individualizada para garantizar
                      que cada estudiante pueda aprovechar al máximo su
                      experiencia de aprendizaje con nosotros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <img
                  src="https://i.postimg.cc/Pr24Zk3f/slider-opaco.png"
                  className="img-fluid rounded shadow"
                  alt="nosotros 1"
                  style={{ borderRadius: "10px", width: "100%" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <div className="text-container">
                  <p className="textoprincipal">
                    Al elegir SCR Drilling Offshore para tu capacitación en el
                    sector petrolero, puedes confiar en que estarás aprendiendo
                    de los mejores en el campo. Nuestros asesores están aquí
                    para inspirarte, guiarte y ayudarte a alcanzar tu máximo
                    potencial en la industria del offshore drilling.
                  </p>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <br />
        <h6 id="cursos" className="paraid">.</h6>
        <br />
        <br />
        <br />
        <h2 >
          <p className="tnosotros">Cursos:</p>
        </h2>

        <div className="row mt-5">
          <div className="col">
            <img
              src="https://i.postimg.cc/VvN7m0g9/5.png"
              className="img-fluid rounded shadow imagen-cursos"
              alt="curso integral libreta de mar"
            />
            <br />
            <br />
            <button className="more-info-btn" onClick={toggleCourseDetails1}>
              Más Información
            </button>
            {showCourseDetails1 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                  <h3>Curso integral para Libreta de Mar tipo D</h3>
                  <br />
                  <p>
                    <strong>Incluye:</strong>
                  </p>
                  <ul>
                    <li>
                      Examen médico SCIT en cualquier unidad médica de México.
                    </li>
                    <li>
                      Curso básico de seguridad para plataformas y barcazas.
                    </li>
                    <li>
                      Alineación de documentos para tramitar libreta de mar en
                      capitania.
                    </li>
                  </ul>
                  <p>
                    <strong>Requisitos:</strong>
                  </p>
                  <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
                    <li>INE o IFE ambos lados.</li>
                    <li>Acta de nacimiento (actualizada).</li>
                    <li>CURP (Actualizada).</li>
                    <li>Constancia de situación fiscal (RFC) Actualizada.</li>
                    <li>Comprobante de Domicilio.</li>
                    <li>Libreta de mar vencida (solo renovación).</li>
                  </ul>
                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://api.whatsapp.com/send/?phone=5219381233920&text=Estoy+interesado+en+el+Curso+Integral+para+obtener+la+Libreta+de+Mar+Tipo+D&type=phone_number&app_absent=0"
                        )
                      }
                    >
                      Registrarse
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails1}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col">
              <img
                src="https://i.postimg.cc/1ttQYH2s/2.png"
                className="img-fluid rounded shadow imagen-cursos"
                alt="siganatario version 2020"
              />
              <br />
              <br />
              <button className="more-info-btn" onClick={toggleCourseDetails2}>
                Más Información
              </button>
              {showCourseDetails2 && (
                <div className="course-details-modal">
                  <div className="course-details-content">
                    <h3>
                      <center>Signatario Versión 2020</center>
                    </h3>
                    <br />
                    <p>
                      <strong>Se entrega:</strong>
                    </p>
                    <ul>
                      <li>Constancia.</li>
                      <li>Validacion.</li>
                      <li>Credencial en PVC.</li>
                    </ul>
                    <p>
                      <strong>Requisitos:</strong>
                    </p>
                    <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
                      <li>INE o IFE ambos lados.</li>
                      <li>CURP (Actualizada).</li>
                      <li>Foto para la credencial.</li>
                    </ul>
                    <div className="buttons-container">
                      <button
                        className="whatsapp-btn"
                        onClick={() =>
                          window.open(
                            "https://wa.me/5219381233920?text=Estoy%20interesado%20en%20el%20Curso%20de%20Signatario"
                          )
                        }
                      >
                        Registrarse
                      </button>
                      <button
                        className="close-btn"
                        onClick={toggleCourseDetails2}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
  
          <div className="row mt-5">
            <div className="col">
              <img
                src="https://i.postimg.cc/Qtmp0Srj/1.png"
                className="img-fluid rounded shadow imagen-cursos"
                alt="curso integral de las 27 constancias SSPA"
              />
              <br />
              <br />
              <button className="more-info-btn" onClick={toggleCourseDetails3}>
                Más Información
              </button>
              {showCourseDetails3 && (
                <div className="course-details-modal">
                  <div className="course-details-content">
                    <h3>Curso integral de 27 constancias SSPA</h3>
                    <br />
                    <p>
                      <strong>Se entregan:</strong>
                    </p>
                    <ul>
                      <li>28 Constancias(Incluye Signatario).</li>
                      <li>28 DC-3</li>
                      <li>5 Credenciales en PVC</li>
                    </ul>
                    <p>
                      <strong>Temario del curso:</strong>
                    </p>
                    <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
                      <li>SEGURIDAD, SALUD Y PROTECCIÓN AMBIENTAL.</li>
                      <li>
                        REGLAMENTO FEDERAL DE SEGURIDAD, HIGIENE Y MEDIO AMBIENTE
                        DE TRABAJO.
                      </li>
                      <li>
                        REGLAMENTO DE SEGURIDAD E HIGIENE DE PETRÓLEOS MEXICANOS Y
                        ORGANISMOS SUBSIDIARIOS.
                      </li>
                      <li>BÁSICO DE SEGURIDAD.</li>
                      <li>
                        CONCEPTOS BÁSICOS Y DEFINICIONES SOBRE PLANES DE RESPUESTA
                        A EMERGENCIAS, QUE HACER DURANTE UNA EMERGENCIA.
                      </li>
                      <li>CONCEPTOS BÁSICOS SOBRE PROTECCIÓN AMBIENTAL.</li>
                      <li>
                        GENERALIDADES DE LOS PRIMEROS AUXILIOS, HEMORRAGIAS,
                        REANIMACIÓN CARDIOPULMONAR (RCP).
                      </li>
                      <li>MANEJO DE EXTINTORES.</li>
                      <li>MANEJO A LA DEFENSIVA (VEHÍCULOS).</li>
                      <li>EQUIPO DE RESPIRACIÓN AUTÓNOMO.</li>
                      <li>
                        USO DE EQUIPO DE DETECCIÓN DE GASES: EXPLOSIMETRO, OXIGENO
                        Y TOXICIDAD.
                      </li>
                      <li>HOJA DE DATOS DE SEGURIDAD DE SUSTANCIAS.</li>
                      <li>CLASIFICACIÓN Y MANEJO DE LOS RESIDUOS PELIGROSOS.</li>
                      <li>DISPOSITIVOS DE DETECCIÓN Y PRIMEROS AUXILIOS.</li>
                      <li>
                        LEY GENERAL DEL EQUILIBRIO ECOLÓGICO Y LA PROTECCIÓN AL
                        AMBIENTE Y SUS REGLAMENTOS.
                      </li>
                      <li>
                        LEY GENERAL PARA LA PREVENCIÓN Y GESTIÓN INTEGRAL DE LOS
                        RESIDUOS Y SU REGLAMENTO.
                      </li>
                      <li>TEORÍA DE LA COMBUSTIÓN.</li>
                      <li>
                        CLASIFICACIÓN Y USO DE EQUIPOS DE PROTECCIÓN RESPIRATORIA.
                      </li>
                      <li>RIESGOS ATMOSFÉRICOS.</li>
                      <li>RIESGOS EN ESPACIOS CONFINADOS.</li>
                      <li>IDENTIFICACIÓN DE ÁREAS DE RIESGO EN EL TRABAJO.</li>
                      <li>PROCEDIMIENTOS CRÍTICOS.</li>
                      <li>ANÁLISIS DE SEGURIDAD PARA EL TRABAJO (AST).</li>
                      <li>AUDITORIAS EFECTIVAS.</li>
                      <li>ANÁLISIS CAUSA RAÍZ (ACR).</li>
                      <li>SOBREVIVENCIA EN EL MAR.</li>
                      <li>VERIFICADOR DE GAS.</li>
                      <li>
                        CONOCIMIENTO Y APLICACIÓN DEL ANEXO SSPA (SE CAPACITA PARA
                        QUE APRENDAS A INTEGRAR LA CARPETA DEL ANEXO SSPA).
                      </li>
                      <li>
                        SISTEMA DE PERMISOS PARA TRABAJO CON RIESGO (SIGNATARIO
                        VERSION 2020).
                      </li>
                    </ul>
                    <div className="buttons-container">
                      <button
                        className="whatsapp-btn"
                        onClick={() =>
                          window.open(
                            "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20el%20Curso%20Integral%20de%20las%2027%20constancias%20SSPA.")}
                        >
                          Registrarse
                        </button>
                        <button
                          className="close-btn"
                          onClick={toggleCourseDetails3}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col">
                <img
                  src="https://i.postimg.cc/BnwYSS8x/4.png"
                  className="img-fluid rounded shadow imagen-cursos"
                  alt="maniobrista rigger"
                />
                <br />
                <br />
                <button className="more-info-btn" onClick={toggleCourseDetails4}>
                  Más Información
                </button>
                {showCourseDetails4 && (
                  <div className="course-details-modal">
                    <div className="course-details-content">
                      <h3>
                        <center>Maniobrista Rigger</center>
                      </h3>
                      <br />
                      <p>
                        <strong>Se entrega:</strong>
                      </p>
                      <ul>
                        <li>4 Constancias.</li>
                        <li>4 DC-3.</li>
                        <li>2 Credenciales en PVC.</li>
                      </ul>
                      <p>
                        <strong>Incluye:</strong>
                      </p>
                      <ul>
                        <li>Trabajo en alturas.</li>
                        <li>Maniobras e izajes.</li>
                        <li>Montaje y desmontaje de andamios.</li>
                        <li>Nudos y amarres.</li>
                      </ul>
                      <div className="buttons-container">
                        <button
                          className="whatsapp-btn"
                          onClick={() =>
                            window.open(
                              "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20el%20curso%20de%20Maniobrista%20Rigger."
                            )
                          }
                        >
                          Registrarse
                        </button>
                        <button
                          className="close-btn"
                          onClick={toggleCourseDetails4}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
    
            <div className="row mt-5">
              <div className="col">
                <img
                  src="https://i.postimg.cc/63mtC2pY/3.png"
                  className="img-fluid rounded shadow imagen-cursos2"
                  alt="maniobrista rigger"
                />
                <br />
                <br />
                <button className="more-info-btn" onClick={toggleCourseDetails5}>
                  Más Información
                </button>
                {showCourseDetails5 && (
                  <div className="course-details-modal">
                    <div className="course-details-content">
                      <h3>
                        <center>Rig Pass IADC</center>
                      </h3>
                      <br />
                      <p>
                        <strong>Se entrega:</strong>
                      </p>
                      <ul>
                        <li>Credencial.</li>
                        <li>Validacion ante la IADC.</li>
                        <li>Constancia.</li>
                      </ul>
                      <p>
                        <strong>Requisitos:</strong>
                      </p>
                      <ul>
                        <li>INE.</li>
                        <li>CURP.</li>
                        <li>Foto para la credencial.</li>
                      </ul>
                      <div className="buttons-container">
                        <button
                          className="whatsapp-btn"
                          onClick={() =>
                            window.open(
                              "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20el%20curso%20de%20RigPass."
                            )
                          }
                        >
                          Registrarse
                        </button>
                        <button
                          className="close-btn"
                          onClick={toggleCourseDetails5}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <br />
        <h6 id="rentayventa" className="paraid">.</h6>
        <br />
        <br />
        <br />
            <h2 >
          <p className="tnosotros">Renta y venta de equipos:</p>
        </h2>
        <div className="row mt-5">
  <div className="col-lg-3 col-md-6">
    <div className="text-center">
      <img
        src="https://i.postimg.cc/j20BmnBh/det2-removebg-preview.png"
        className="img-fluid rounded shadow imagen-cursos"
        alt="Alt de la primera imagen"
      /><br/> 
      <p><strong className="titulorenta">Detectores de gases</strong></p>
      <button className="more-info-btn" onClick={toggleCourseDetails6}>
        Más Información
      </button>
    </div>
    {showCourseDetails6 && (
      <div className="course-details-modal">
        <div className="course-details-content">
          <h3>Información del Curso 1</h3>
          <p>
            Aquí puedes colocar cualquier información relevante sobre el curso
            1. Por ejemplo, requisitos, duración, temas, etc.
          </p>
          <div className="buttons-container">
            <button
              className="whatsapp-btn"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=5219381233920&text=Estoy+interesado+en+este+curso"
                )
              }
            >
              Registrarse
            </button>
            <button className="close-btn" onClick={toggleCourseDetails6}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  <div className="col-lg-3 col-md-6">
    <div className="text-center">
      <img
        src="URL_DE_LA_SEGUNDA_IMAGEN"
        className="img-fluid rounded shadow imagen-cursos"
        alt="Alt de la segunda imagen"
      />
      <p>Curso</p>
      <button className="more-info-btn-sm" onClick={toggleCourseDetails7}>
        Más Información
      </button>
    </div>
    {showCourseDetails7 && (
      <div className="course-details-modal">
        <div className="course-details-content">
          <h3>Información del Curso 2</h3>
          <p>
            Aquí puedes colocar cualquier información relevante sobre el curso
            2. Por ejemplo, requisitos, duración, temas, etc.
          </p>
          <div className="buttons-container">
            <button
              className="whatsapp-btn"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=5219381233920&text=Estoy+interesado+en+este+curso"
                )
              }
            >
              Registrarse
            </button>
            <button className="close-btn" onClick={toggleCourseDetails7}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  <div className="col-lg-3 col-md-6">
    <div className="text-center">
      <img
        src="URL_DE_LA_TERCERA_IMAGEN"
        className="img-fluid rounded shadow imagen-cursos"
        alt="Alt de la tercera imagen"
      />
      <p>Curso</p>
      <button className="more-info-btn-sm" onClick={toggleCourseDetails8}>
        Más Información
      </button>
    </div>
    {showCourseDetails8 && (
      <div className="course-details-modal">
        <div className="course-details-content">
          <h3>Información del Curso 3</h3>
          <p>
            Aquí puedes colocar cualquier información relevante sobre el curso
            3. Por ejemplo, requisitos, duración, temas, etc.
          </p>
          <div className="buttons-container">
            <button
              className="whatsapp-btn"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=5219381233920&text=Estoy+interesado+en+este+curso"
                )
              }
            >
              Registrarse
            </button>
            <button className="close-btn" onClick={toggleCourseDetails8}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  <div className="col-lg-3 col-md-6">
    <div className="text-center">
      <img
        src="URL_DE_LA_CUARTA_IMAGEN"
        className="img-fluid rounded shadow imagen-cursos"
        alt="Alt de la cuarta imagen"
      />
      <p>Curso</p>
      <button className="more-info-btn-sm" onClick={toggleCourseDetails9}>
        Más Información
      </button>
    </div>
    {showCourseDetails9 && (
      <div className="course-details-modal">
        <div className="course-details-content">
          <h3>Información del Curso 4</h3>
          <p>
            Aquí puedes colocar cualquier información relevante sobre el curso
            4. Por ejemplo, requisitos, duración, temas, etc.
          </p>
          <div className="buttons-container">
            <button
              className="whatsapp-btn"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=5219381233920&text=Estoy+interesado+en+este+curso"
                )
              }
            >
              Registrarse
            </button>
            <button className="close-btn" onClick={toggleCourseDetails9}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
</div>












    
            <div className="row mt-5" id="beneficios">
              <div className="col">
                <div className="benefits-container">
                  <br />
                  <h2>
                    <center>Beneficios Clave de Nuestra Capacitación:</center>
                  </h2>
                  <ul>
                    <li>
                      Adquisición de habilidades prácticas y teóricas fundamentales
                      para sobresalir en el sector.
                    </li>
                    <li>
                      Oportunidades de crecimiento profesional y desarrollo de una
                      carrera sólida en un entorno desafiante pero apasionante.
                    </li>
                    <li>
                      Acceso a conocimientos liderados por expertos de la industria,
                      garantizando una capacitación de calidad y relevante.
                    </li>
                    <li>
                      Apoyo y orientación personalizada para alcanzar tus metas
                      profesionales y maximizar tu potencial en el sector.
                    </li>
                    <li>
                      Certificaciones reconocidas que respaldan tu experiencia y
                      competencia en el mercado laboral.
                    </li>
                    <li>
                      Flexibilidad en horariosy modalidades de capacitación, adaptándonos a tus necesidades y circunstancias individuales.
                </li>
              </ul>
          
            </div>
          </div>
        </div>
      </div>
      <br/> <br/> <br/>
      <div className="social-links">
        <a
          href="https://api.whatsapp.com/send?phone=5219381233920"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61553377829842"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
        >
          <FaFacebook />
        </a>
        <a
          href=" "
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
};

export default Home;

    
  
