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
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
      <br id="inicio" /> <br />
      <br />
      <br />
      <br />
      <br />
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
            <h5 className="subtitle">
              Forjando líderes en seguridad: inspirando confianza en cada
              sector.
            </h5>
          </h1>
        </div>
      </div>
      <h6 id="nosotros" className="paraid">
        .
      </h6>
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
        <h6 id="cursos" className="paraid">
          .
        </h6>
        <br />
        <br />
        <br />
        <h2>
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
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20el%20Curso%20Integral%20de%20las%2027%20constancias%20SSPA."
                        )
                      }
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
        <h6 id="rentayventa" className="paraid">
          .
        </h6>
        <br />
        <br />
        <br />
        <h2>
          <p className="tnosotros">Renta y venta de equipos:</p>
        </h2>
        <div className="row mt-5">
        <div className="col-lg-3 col-md-6">
            <div className="text-center">
              <img
                src="https://i.postimg.cc/j20BmnBh/det2-removebg-preview.png"
                style={{ maxWidth: "235px", height: "auto" }}
                className="img-fluid rounded shadow imagen-cursos"
                alt="imagen detectores de gases"
              />
              <br />
              <p>
                <strong className="titulorenta">Detectores de gases</strong>
              </p>
              <button
                className="more-info-btn botonrentas"
                onClick={toggleCourseDetails6}
              >
                Más Información
              </button>
              <br />
              <br />
            </div>
            {showCourseDetails6 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                  <h3>Detectores de gases </h3>
                  <p>
                    <strong>Nuestros detectores ofrecen:</strong>
                  </p>
                  <ul>
                    <li>Fiabilidad sin igual.</li>
                    <li>Robustez extrema.</li>
                    <li>Facilidad de uso.</li>
                    <li>Conectividad avanzada.</li>
                  </ul>

                  <p>
                    <strong>Contamos con:</strong>
                  </p>
                  <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
                    <li>Altair 4XR.</li>
                    <li> Altair 5X.</li>
                    <li>Drager X-am 2500.</li>
                    <li>Drager X-am 8000.</li>
                  </ul>
                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20los%20detectores%20de%20gases."
                        )
                      }
                    >
                      Estoy Interasado
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails6}
                    >
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
                src="https://i.postimg.cc/dtGHsBb4/PSI-67-27701-500-1-removebg-preview.png"
                style={{ maxWidth: "163px", height: "auto" }}
                className="img-fluid rounded shadow imagen-cursos"
                alt="Alcoholimetro"
              />
              <br />
              <p>
                <strong className="titulorenta">Alcoholimetros</strong>
              </p>
              <button
                className="more-info-btn botonrentas"
                onClick={toggleCourseDetails7}
              >
                Más Información
              </button>
              <br />
              <br />
            
            </div>
            {showCourseDetails7 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                  <h3>Alcoholimetros</h3>
                  <p>
                    <strong>Nuestros alcoholímetros ofrecen:</strong>
                  </p>
                  <ul>
                    <li>
                      Precisión en las mediciones de alcohol en la sangre.
                    </li>
                    <li>Rapidez en la obtención de resultados.</li>
                    <li>
                      Facilidad de uso, con interfaces intuitivas y simples.
                    </li>
                    <li>Portabilidad para llevarlo a cualquier lugar.</li>
                    <li>Durabilidad para un uso prolongado y confiable.</li>
                  </ul>

                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20los%20alcoholimetros."
                        )
                      }
                    >
                      Estoy Interesado
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails7}
                    >
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
                src="https://i.postimg.cc/g2BFb4Fr/prod-extintor-pqs12kg-ok.png"
                style={{ maxWidth: "150px", height: "auto" }}
                className="img-fluid rounded shadow imagen-cursos"
                alt="imagen de extintor"
              />
              <br />
              <p>
                <strong className="titulorenta">Extintores</strong>
              </p>
              <button
                className="more-info-btn botonrentas"
                onClick={toggleCourseDetails8}
              >
                Más Información
              </button>
              <br />
              <br />
            
            </div>
            {showCourseDetails8 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                  <h3>Extintores</h3>
                  <p>
                    <strong>Nuestros extintores ofrecen:</strong>
                  </p>
                  <ul>
                    <li>Precisión en la clasificación del tipo de fuego.</li>
                    <li>
                      Agente extintor específico para cada clase de fuego.
                    </li>
                    <li>
                      Capacidad para controlar y extinguir incendios de manera
                      efectiva.
                    </li>
                    <li>
                      Facilidad de uso, con instrucciones claras y simples.
                    </li>
                    <li>
                      Portabilidad para un acceso rápido en caso de emergencia.
                    </li>
                    <li>
                      Durabilidad y resistencia para mantener su funcionalidad
                      en condiciones adversas.
                    </li>
                  </ul>

                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20los%20alcoholimetros."
                        )
                      }
                    >
                      Estoy Interesado
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails8}
                    >
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
                src="https://i.postimg.cc/QdwBB5KC/contenedores-1-removebg-preview.png"
                style={{ maxWidth: "220px", height: "auto" }}
                className="img-fluid rounded shadow imagen-cursos"
                alt="Imagen contenedores"
              />
              <br />
              <p>
                <strong className="titulorenta">Contenedores</strong>
              </p>
              <button
                className="more-info-btn botonrentas"
                onClick={toggleCourseDetails9}
              >
                Más Información
              </button>
              <br />
              <br />
             
            </div>
            {showCourseDetails9 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                  <h3>Contenedores</h3>
                  <p>
                    <strong>Nuestros contenedores industriales ofrecen:</strong>
                  </p>
                  <ul>
                    <li>
                      Robustez y resistencia para el transporte seguro de
                      materiales.
                    </li>
                    <li>
                      Capacidad de almacenamiento adecuada para grandes
                      volúmenes de carga.
                    </li>
                    <li>
                      Variedad de tamaños y diseños para adaptarse a diferentes
                      necesidades.
                    </li>
                    <li>
                      Material de construcción de alta calidad para garantizar
                      la durabilidad.
                    </li>
                    <li>
                      Facilidad de manipulación y apilamiento para una gestión
                      eficiente del espacio.
                    </li>
                  </ul>

                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20los%20contenedores."
                        )
                      }
                    >
                      Estoy Interesado
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails9}
                    >
                      Cerrar
                    </button>    
                  </div>
                </div><br/><br/>
              </div>
            )}
          </div>
        </div>











        <div className="row mt-5">
          <div className="col-lg-3 col-md-6">
            <div className="text-center">
              <img
                src="https://i.postimg.cc/br0wNyZw/03-removebg-preview.png"
                style={{ maxWidth: "220px", height: "auto" }}
                className="img-fluid rounded shadow imagen-cursos"
                alt="imagen detectores de lonas ignifugas"
              />
              <br />
              <p>
                <strong className="titulorenta">Lonas Ignifugas</strong>
              </p>
              <button
                className="more-info-btn botonrentas"
                onClick={toggleCourseDetails10}
              >
                Más Información
              </button>
              <br />
              <br />
            </div>
            {showCourseDetails10 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                  <h3>Lonas ignifugas </h3>
                  <p>
  <strong>Nuestras lonas ignífugas ofrecen:</strong>
</p>
<ul>
  <li>Resistencia al fuego para proteger contra la propagación de incendios.</li>
  <li>Materiales ignífugos que cumplen con los estándares de seguridad.</li>
  <li>Durabilidad y resistencia a la intemperie para su uso en diversas condiciones ambientales.</li>
  <li>Versatilidad en su aplicación, como cubiertas protectoras, cortinas y barreras contra incendios.</li>
  <li>Facilidad de instalación y manejo para una implementación rápida y efectiva.</li>
</ul>

                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20las%20lonas%20ignifugas."
                        )
                      }
                    >
                      Estoy Interasado
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails10}
                    >
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
                src="https://i.postimg.cc/DZpwSjgt/5elem-MANGUERA.avif"
                style={{ maxWidth: "265px", height: "auto" }}
                className="img-fluid rounded shadow imagen-cursos"
                alt="Imagen mangueras c.i"
              />
              <br />
              <p>
                <strong className="titulorenta">Manguera C.I</strong>
              </p>
              <button
                className="more-info-btn botonrentas"
                onClick={toggleCourseDetails11}
              >
                Más Información
              </button>
              <br />
              <br />
             
            </div>
            {showCourseDetails11 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                  <h3>Manguera C.I</h3>
                  <p>
  <strong>Nuestras mangueras contra incendios ofrecen:</strong>
</p>
<ul>
  <li>Construcción resistente al calor y a la abrasión para soportar condiciones extremas.</li>
  <li>Material de alta calidad que cumple con las normas de seguridad contra incendios.</li>
  <li>Flexibilidad para facilitar su manipulación y almacenamiento.</li>
  <li>Capacidad de flujo de agua optimizada para una rápida y eficaz extinción de incendios.</li>
  <li>Compatibilidad con diversos sistemas de extinción de incendios, como bombas y carretes.</li>
</ul>


                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20las%20mangueras%20C.I."
                        )
                      }
                    >
                      Estoy Interesado
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails11}
                    >
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
                src="https://i.postimg.cc/hP98KNsW/images-1-removebg-preview-2.png"
                style={{ maxWidth: "173px", height: "162px" }}
                className="img-fluid rounded shadow imagen-cursos"
                alt="imagen de balsas"
              />
              <br />
              <p>
                <strong className="titulorenta">Balsas salvavidas</strong>
              </p>
              <button
                className="more-info-btn botonrentas"
                onClick={toggleCourseDetails12}
              >
                Más Información
              </button>
              <br />
              <br />
             
            </div>
            {showCourseDetails12 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                  <h3>Balsas salvavidas</h3>
                  <p>
  <strong>Nuestras balsas salvavidas ofrecen:</strong>
</p>
<ul>
  <li>Construcción robusta y resistente para soportar condiciones marinas adversas.</li>
  <li>Capacidad para alojar y proteger a un número específico de personas durante emergencias en el agua.</li>
  <li>Diseño compacto y portátil para un almacenamiento y despliegue eficientes.</li>
  <li>Equipamiento de seguridad completo, que incluye equipos de señalización, agua potable y suministros de emergencia.</li>
  <li>Conformidad con las normativas y estándares internacionales de seguridad marítima.</li>
</ul>


                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20las%20balsas%20salvavidas."
                        )
                      }
                    >
                      Estoy Interesado
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails12}
                    >
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
                src="https://i.postimg.cc/G3ks7rX2/PSI-0701-S3-500-1-removebg-preview.png"
                style={{ maxWidth: "163px", height: "auto" }}
                className="img-fluid rounded shadow imagen-cursos"
                alt="Imagen chalecos"
              />
              <br />
              <p>
                <strong className="titulorenta">Chalecos salvavidas</strong>
              </p>
              <button
                className="more-info-btn botonrentas"
                onClick={toggleCourseDetails13}
              >
                Más Información
              </button>
              <br />
              <br />
           
            </div>
            {showCourseDetails13 && (
              <div className="course-details-modal">
                <div className="course-details-content">
                <p>
  <strong>Nuestros chalecos salvavidas ofrecen:</strong>
</p>
<ul>
  <li>Flotabilidad adecuada para mantener a una persona en posición segura en el agua.</li>
  <li>Construcción duradera y resistente para resistir condiciones marinas y uso prolongado.</li>
  <li>Diseño ergonómico para proporcionar comodidad y libertad de movimiento.</li>
  <li>Visibilidad mejorada mediante colores llamativos y elementos reflectantes para facilitar su localización.</li>
  <li>Ajustes y cierres seguros para garantizar un ajuste adecuado a diferentes tallas y formas del cuerpo.</li>
</ul>


                  <div className="buttons-container">
                    <button
                      className="whatsapp-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20las%20balsas%20salva%20vidas."
                        )
                      }
                    >
                      Estoy Interesado
                    </button>
                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails13}
                    >
                      Cerrar
                    </button>
                  
                  </div>
                </div><br/><br/>
              </div>
            )}
          </div>
        </div>











 
        <div className="row mt-5">
  <div className="col-lg-3 col-md-6">
    <div className="text-center">
      <img
        src="https://i.postimg.cc/xTk1CNCq/Captura-de-pantalla-20230419165453-440x457-1-removebg-preview.png"
        style={{ maxWidth: "157px", height: "auto" }}
        className="img-fluid rounded shadow imagen-cursos"
        alt="imagen detectores de overoles"
      />
      <br />
      <p>
        <strong className="titulorenta">Overoles Industriales</strong>
      </p>
      <button
        className="more-info-btn botonrentas"
        onClick={toggleCourseDetails14}
      >
        Más Información
      </button>
      <br />
      <br />
    </div>
    {showCourseDetails14 && (
      <div className="course-details-modal">
        <div className="course-details-content">
          <h3>Overoles industriales</h3>
          <p>
            <strong>Nuestros overoles industriales ofrecen:</strong>
          </p>
          <ul>
            <li>Protección contra riesgos laborales como salpicaduras químicas, suciedad y abrasiones.</li>
            <li>Materiales resistentes y duraderos para soportar entornos industriales exigentes.</li>
            <li>Diseños ergonómicos que permiten movilidad y comodidad durante largas jornadas de trabajo.</li>
            <li>Variedad de estilos y tallas para adaptarse a diferentes tipos de cuerpo y necesidades laborales.</li>
            <li>Funcionalidades adicionales, como bolsillos y cinturones ajustables, para mayor practicidad.</li>
          </ul>
          <div className="buttons-container">
            <button
              className="whatsapp-btn"
              onClick={() =>
                window.open(
                  "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20los%20overoles%20industriales."
                )
              }
            >
              Estoy Interesado
            </button>
            <button
              className="close-btn"
              onClick={toggleCourseDetails14}
            >
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
        src="https://i.postimg.cc/nhP0n3Pv/aro-salvavidas-solas-dos-medidas-2-5-y-4-3-2-removebg-preview.png"
        style={{ maxWidth: "255px", height: "162px" }}
        className="img-fluid rounded shadow imagen-cursos"
        alt="Imagen aros"
      />
      <br />
      <p>
        <strong className="titulorenta">Aros salvavidas</strong>
      </p>
      <button
        className="more-info-btn botonrentas"
        onClick={toggleCourseDetails15}
      >
        Más Información
      </button>
      <br />
      <br />
    </div>
    {showCourseDetails15 && (
      <div className="course-details-modal">
        <div className="course-details-content">
          <h3>Aros salvavidas</h3>
          <p>
  <strong>Nuestros aros salvavidas ofrecen:</strong>
</p>
<ul>
  <li>Flotabilidad confiable para proporcionar apoyo a personas en situaciones de emergencia en el agua.</li>
  <li>Construcción resistente y duradera para soportar condiciones marinas adversas y el paso del tiempo.</li>
  <li>Visibilidad mejorada mediante colores brillantes y elementos reflectantes para facilitar su localización.</li>
  <li>Asas resistentes y cordones para un lanzamiento seguro y un agarre firme.</li>
  <li>Conformidad con las regulaciones y estándares de seguridad marítima para garantizar su efectividad.</li>
</ul>

          <div className="buttons-container">
            <button
              className="whatsapp-btn"
              onClick={() =>
                window.open(
                  "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20los%20aros%20salvavidas."
                )
              }
            >
              Estoy Interesado
            </button>
            <button
              className="close-btn"
              onClick={toggleCourseDetails15}
            >
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
        src="https://i.postimg.cc/QCBmv1XX/equipo-de-Respiracion-ERA-3-MScott-Air-Pak75i-removebg-preview.png"
        style={{ maxWidth: "250px", height: "162px" }}
        className="img-fluid rounded shadow imagen-cursos"
        alt="imagen de respiracion autonoma"
      />
      <br />
      <p>
        <strong className="titulorenta">Respiracion autonoma</strong>
      </p>
      <button
        className="more-info-btn botonrentas"
        onClick={toggleCourseDetails16}
      >
        Más Información
      </button>
      <br />
      <br />
    </div>
    {showCourseDetails16 && (
      <div className="course-details-modal">
        <div className="course-details-content">
          <h3>Respiracion autonoma</h3>
          <p>
  <strong>Nuestro equipo de respiración autónomo ofrece:</strong>
</p>
<ul>
  <li>Suministro de aire independiente para entornos donde no hay oxígeno disponible o la concentración de oxígeno es insuficiente.</li>
  <li>Construcción robusta y resistente al calor para proteger al usuario en condiciones extremas.</li>
  <li>Diseño ergonómico y cómodo que permite una movilidad sin restricciones durante su uso prolongado.</li>
  <li>Facilidad de ajuste y uso, con correas y cierres seguros para garantizar un ajuste adecuado y seguro.</li>
  <li>Indicadores visuales y sonoros de alarma para alertar al usuario en caso de agotamiento del suministro de aire.</li>
</ul>

          <div className="buttons-container">
            <button
              className="whatsapp-btn"
              onClick={() =>
                window.open(
                  "https://wa.me/9381233920?text=Hola,%20estoy%20interesado%20en%20los%20equipos%20de%20respiracion%20autonoma."
                )
              }
            >
              Estoy Interesado
            </button>


                    <button
                      className="close-btn"
                      onClick={toggleCourseDetails16}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
              <br />
              <br />
        </div>


        <br />
        <h6 id="servicios" className="paraid">
          .
        </h6>
        <br />
        <br />
        <br />
        <h2>
          <p className="tnosotros">Servicios:</p>
        </h2>





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
                  Flexibilidad en horariosy modalidades de capacitación,
                  adaptándonos a tus necesidades y circunstancias individuales.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
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
