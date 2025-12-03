import React, { useState } from "react";
import "../adopta.css";

import { canesAdopcion } from "@/data/canesAdopcion";
import { casosExito } from "@/data/casosExito";
import { perritosPerdidos } from "@/data/perritosPerdidos";
import { cuidado } from "@/data/cuidado";

const Adopta = () => {
  const [showSections, setShowSections] = useState(false);
  const [modalImages, setModalImages] = useState(null);

  const [openPanel, setOpenPanel] = useState({
    canes: true,
    exito: false,
    perdidos: false,
    cuidado: false,
    normas: false,
  });

  const [indexExito, setIndexExito] = useState(0);
  const [indexPerdidos, setIndexPerdidos] = useState(0);
  const [indexCuidado, setIndexCuidado] = useState(0);

  const [normaSeleccionada, setNormaSeleccionada] = useState("ley30407");

  const handleClickAqui = () => {
    setShowSections(true);
    setOpenPanel((prev) => ({ ...prev, canes: true }));
    // scroll suave a canes
    setTimeout(() => {
      scrollToId("canesAdopcion");
    }, 50);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const togglePanel = (key) => {
    setOpenPanel((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const prevSlide = (type) => {
    if (type === "exito") {
      setIndexExito((prev) => (prev - 1 + casosExito.length) % casosExito.length);
    } else if (type === "perdidos") {
      setIndexPerdidos(
        (prev) => (prev - 1 + perritosPerdidos.length) % perritosPerdidos.length
      );
    } else if (type === "cuidado") {
      setIndexCuidado(
        (prev) => (prev - 1 + cuidado.length) % cuidado.length
      );
    }
  };

  const nextSlide = (type) => {
    if (type === "exito") {
      setIndexExito((prev) => (prev + 1) % casosExito.length);
    } else if (type === "perdidos") {
      setIndexPerdidos(
        (prev) => (prev + 1) % perritosPerdidos.length
      );
    } else if (type === "cuidado") {
      setIndexCuidado(
        (prev) => (prev + 1) % cuidado.length
      );
    }
  };

  const renderNormaEmbed = () => {
    if (normaSeleccionada === "ley30407") {
      return (
        <iframe
          className="pdf-frame"
          src="https://www.leyes.congreso.gob.pe/documentos/leyes/30407.pdf"
          title="Ley 30407"
        />
      );
    }
    if (normaSeleccionada === "ordenanza008") {
      return (
        <iframe
          className="pdf-frame"
          src="https://cdn.www.gob.pe/uploads/document/file/5182462/Ordenanza_008_2021_MDLP_AL.pdf?v=1695674296"
          title="Ordenanza 008-2021"
        />
      );
    }
    if (normaSeleccionada === "ley27596") {
      return (
        <iframe
          className="pdf-frame"
          src="https://cdn.www.gob.pe/uploads/document/file/2833445/27596.pdf.pdf?v=1645050596"
          title="Ley 27596"
        />
      );
    }
    return null;
  };

  return (
    <div id="adopta-page">
      {/* NAV PEGADO ARRIBA (solo cuando se abren secciones) */}


      {/* CONTENIDO PRINCIPAL */}
      <div
        className="main-section"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* HEADER CON PERRO + TITULO */}
        <div className="adopta-header">
          <img
            src="https://www.munilapunta.gob.pe/img/mascotas/perrosf.png"
            alt="Perro en adopción"
            className="dog-image"
          />
          <div className="adopta-titulos">
            <h1>¡ADOPTA UN AMIGO!</h1>
            <h3 className="text-success">Adopción Responsable</h3>
          </div>
        </div>

        {/* TEXTOS INICIALES */}
        <p>
          En <strong>La Punta</strong> creemos que cada perro rescatado merece una segunda oportunidad. Nuestros amigos de cuatro patas han superado el abandono y hoy están listos para encontrar un hogar donde puedan recibir y dar amor sin medida.
        </p>
        <p>
          Cada uno de nuestros rescatados tiene una historia de lucha, pero también una inmensa capacidad de dar amor. Ellos están a la espera de un espacio seguro, una caricia diaria y una familia que los quiera de verdad.
        </p>
        <p className="adopta-callout">
          <strong>
            ¡Si quieres adoptar, esta es tu señal! <em>“Adopta tu Pata”</em> y descubre lo que es el amor verdadero.
          </strong>
        </p>

        {/* BOTÓN CLICK AQUÍ */}
        <button
          id="abrirSecciones"
          className="btn btn-primary btn-lg center-block"
          onClick={handleClickAqui}
        >
          CLICK AQUÍ
        </button>

        {/* SECCIONES EXPANDIBLES */}
        {showSections && (
          <div id="seccionesExpandibles" style={{ marginTop: "30px" }}>
            {/* 1. CANES EN ADOPCIÓN */}
            <div
              id="canesAdopcion"
              className="panel panel-default section-title"
            >
              <div
                className="panel-heading"
                onClick={() => togglePanel("canes")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  1. CANES EN ADOPCIÓN
                </h4>
              </div>
              {openPanel.canes && (
                <div className="panel-body">
                  <div className="canes-grid">
                    {canesAdopcion.map((can, i) => (
                      <div key={i} className="can-card">
                        <div className="card-inner">
                          <div className="card-front">
                            <img src={can.images[0]} alt={can.nombre} />
                          </div>
                          <div
                            className="card-back"
                            style={{ cursor: "pointer" }}
                            onClick={() => setModalImages(can.images)}
                          >
                            <p>Edad: {can.edad}</p>
                            <p>Tamaño: {can.tamano}</p>
                            <p>Sexo: {can.sexo}</p>
                          </div>
                        </div>
                        <div className="can-name">
                          <a
                            href={can.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {can.nombre}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. CASOS DE ÉXITO */}
            <div
              id="casosExito"
              className="panel panel-default section-title"
            >
              <div
                className="panel-heading"
                onClick={() => togglePanel("exito")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  2. CASOS DE ÉXITO
                </h4>
              </div>
              {openPanel.exito && (
                <div className="panel-body">
                  <p>
                    Cada una de estas adopciones es una muestra de que cuando hay compromiso, amor y responsabilidad, todo cambia para bien.
                  </p>
                  <p>
                    Nos alegra saber que siguen creciendo sanos, felices y acompañados… ¡por eso seguimos adelante, buscando más familias que se animen a cambiar una vida!
                  </p>
                  <p>
                    Ellos lo lograron. ¿Y tú, te animas a escribir el próximo final feliz?
                  </p>

                  <div className="carousel-container">
                    <div className="carousel-slide">
                      {casosExito[indexExito].map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          className="carousel-img"
                          onClick={() => setModalImages(casosExito[indexExito])}
                          alt="Caso de éxito"
                        />
                      ))}
                    </div>

                    <button className="carousel-btn left" onClick={() => prevSlide("exito")}>‹</button>
                    <button className="carousel-btn right" onClick={() => nextSlide("exito")}>›</button>

                    <ol className="custom-indicators">
                      {casosExito.map((_, idx) => (
                        <li
                          key={idx}
                          className={idx === indexExito ? "active" : ""}
                          onClick={() => setIndexExito(idx)}
                        />
                      ))}
                    </ol>
                  </div>



                  <ol
                    className="custom-indicators"
                    data-carousel-id="carouselCasosExitos"
                  >
                    {casosExito.map((_, idx) => (
                      <li
                        key={idx}
                        className={idx === indexExito ? "active" : ""}
                        onClick={() => setIndexExito(idx)}
                      />
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* 3. PERRITOS PERDIDOS */}
            <div
              id="perdidos"
              className="panel panel-default section-title"
            >
              <div
                className="panel-heading"
                onClick={() => togglePanel("perdidos")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  3. PERRITOS PERDIDOS
                </h4>
              </div>
              {openPanel.perdidos && (
                <div className="carousel-container">
                  <div className="carousel-slide">
                    <img
                      src={perritosPerdidos[indexPerdidos][0]}
                      className="carousel-img"
                      onClick={() => setModalImages(perritosPerdidos[indexPerdidos])}
                      alt="Perrito perdido"
                    />
                  </div>

                  <button className="carousel-btn left" onClick={() => prevSlide("perdidos")}>‹</button>
                  <button className="carousel-btn right" onClick={() => nextSlide("perdidos")}>›</button>

                  <ol className="custom-indicators">
                    {perritosPerdidos.map((_, idx) => (
                      <li
                        key={idx}
                        className={idx === indexPerdidos ? "active" : ""}
                        onClick={() => setIndexPerdidos(idx)}
                      />
                    ))}
                  </ol>
                </div>

              )}
            </div>

            {/* 4. CUIDADO Y ACOMPAÑAMIENTO */}
            <div
              id="cuidado"
              className="panel panel-default section-title"
            >
              <div
                className="panel-heading"
                onClick={() => togglePanel("cuidado")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  4. CUIDADO Y ACOMPAÑAMIENTO DE LOS RESCATADOS
                </h4>
              </div>
              {openPanel.cuidado && (
                <div className="panel-body">
                  <p>
                    En La Punta, nuestros perritos rescatados no solo reciben atención médica, paseos y cariño mientras esperan… también reciben esperanza.
                  </p>
                  <p>
                    Aunque están protegidos y bien cuidados, nada reemplaza el calor de un hogar verdadero. Por eso, buscamos familias responsables que les den el amor que merecen.
                  </p>
                  <p>
                    Nos comprometemos con ellos incluso después de la adopción: los entregamos vacunados, esterilizados y solo a adoptantes que pasen una evaluación, porque su bienestar es nuestra prioridad.
                  </p>
                  <p>Adoptar es cambiar una vida.</p>

                  <div className="carousel-container">
                    <div className="carousel-slide">
                      <img
                        src={cuidado[indexCuidado][0]}
                        className="carousel-img"
                        onClick={() => setModalImages(cuidado[indexCuidado])}
                        alt="Cuidado"
                      />
                    </div>

                    <button className="carousel-btn left" onClick={() => prevSlide("cuidado")}>‹</button>
                    <button className="carousel-btn right" onClick={() => nextSlide("cuidado")}>›</button>

                    <ol className="custom-indicators">
                      {cuidado.map((_, idx) => (
                        <li
                          key={idx}
                          className={idx === indexCuidado ? "active" : ""}
                          onClick={() => setIndexCuidado(idx)}
                        />
                      ))}
                    </ol>
                  </div>


                  <ol
                    className="custom-indicators"
                    data-carousel-id="carouselCuidado"
                  >
                    {cuidado.map((_, idx) => (
                      <li
                        key={idx}
                        className={
                          idx === indexCuidado ? "active" : ""
                        }
                        onClick={() => setIndexCuidado(idx)}
                      />
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* 5. NORMAS, SANCIONES Y VIGILANCIA */}
            <div
              id="normas"
              className="panel panel-default section-title"
            >
              <div
                className="panel-heading"
                onClick={() => togglePanel("normas")}
                style={{ cursor: "pointer" }}
              >
                <h4 className="panel-title">
                  5. NORMAS, SANCIONES Y VIGILANCIA DEL DISTRITO
                </h4>
              </div>
              {openPanel.normas && (
                <div className="panel-body">
                  <p>
                    En La Punta contamos con un sistema de videovigilancia compuesto por 38 cámaras distribuidas estratégicamente en todo el distrito, complementado con el patrullaje a pie de nuestra Policía Municipal.
                  </p>
                  <p>
                    Gracias a este trabajo articulado, se supervisa activamente el cumplimiento de la Ley N.° 30407 – Ley de Protección y Bienestar Animal y la Ordenanza Municipal N.° 008-2021-MDLP/AL, que regula la tenencia responsable, el bienestar y el control poblacional de animales domésticos.
                  </p>
                  <p>
                    Abandonar o maltratar a un animal es un delito, y en La Punta no es una falta que pase desapercibida. Nuestro compromiso con los animales es firme, y estamos vigilantes.
                  </p>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <div
                      style={{
                        width: "250px",
                        marginRight: "10px",
                      }}
                    >
                      <b>NORMAS</b>
                      <br />
                      <br />
                      <ul className="a" style={{ marginLeft: "35px" }}>
                        <li>
                          <button
                            className="link-button"
                            onClick={() => setNormaSeleccionada("ley30407")}
                          >
                            LEY Nº 30407 - LEY DE PROTECCIÓN Y BIENESTAR
                            ANIMAL
                          </button>
                        </li>
                        <li>
                          <button
                            className="link-button"
                            onClick={() => setNormaSeleccionada("ordenanza008")}
                          >
                            ORDENANZA MUNICIPAL Nº 008-2021-MDLP/AL
                          </button>
                        </li>
                        <li>
                          <button
                            className="link-button"
                            onClick={() => setNormaSeleccionada("ley27596")}
                          >
                            LEY Nº 27596 - LEY QUE REGULA EL RÉGIMEN
                            JURÍDICO DE CANES
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div id="divContenido2" style={{ flex: 1 }}>
                      {renderNormaEmbed()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* MODAL IMÁGENES */}
      {modalImages && (
        <div
          className="modal-overlay"
          onClick={() => setModalImages(null)}
        >
          <div className="modal-content" id="contenedorImagenes">
            {modalImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Detalle ${i + 1}`}
                className="modal-img"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Adopta;
