import React, { useState, useEffect } from "react";

import "../adopta.css";

import {
  getCanesAdopcion,
  getCanesExitos,
  getCanesPerdidos,
  getCanesRescatados,
} from "@/api/strapi";

const ORDEN_TAMANO = { pequeno: 1, mediano: 2, grande: 3 };
const CAMPOS_CARD_BACK = [
  { key: "edad", label: "Edad" },
  { key: "caracteristicas", label: "Características" },
  { key: "raza", label: "Raza" },
  { key: "tamano", label: "Tamaño" },
  { key: "sexo", label: "Sexo" },
  { key: "contacto", label: "Contacto" },
];
const ITEMS_POR_SLIDE = 3;

const normalizarTamano = (tamano = "") =>
  tamano
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const getCardBackColorClass = (tamano = "") => {
  const clases = {
    pequeno: "bg-pequeno",
    mediano: "bg-mediano",
    grande: "bg-grande",
  };

  return clases[normalizarTamano(tamano)] || "bg-slate-500";
};

const formatearDato = (valor) => {
  if (valor === null || valor === undefined) return "No disponible";
  const texto = String(valor).trim();
  return texto || "No disponible";
};

const Adopta = () => {
  const [showSections, setShowSections] = useState(false);
  const [modalImages, setModalImages] = useState(null);
  const [canesAdopcion, setCanesAdopcion] = useState([]);
  const [loadingCanes, setLoadingCanes] = useState(true);
  const [casosExito, setCasosExito] = useState([]);
  const [loadingExito, setLoadingExito] = useState(true);
  const [canesPerdidos, setCanesPerdidos] = useState([]);
  const [loadingPerdidos, setLoadingPerdidos] = useState(true);
  const [canesRescatados, setCanesRescatados] = useState([]);
  const [loadingRescatados, setLoadingRescatados] = useState(true);
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
  const totalSlidesRescatados = Math.ceil(
    canesRescatados.length / ITEMS_POR_SLIDE
  );

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
      if (!canesPerdidos.length) return;
      setIndexPerdidos(
        (prev) => (prev - 1 + canesPerdidos.length) % canesPerdidos.length
      );
    } else if (type === "cuidado") {
      if (!totalSlidesRescatados) return;
      setIndexCuidado(
        (prev) => (prev - 1 + totalSlidesRescatados) % totalSlidesRescatados
      );
    }
  };

  const nextSlide = (type) => {
    if (type === "exito") {
      setIndexExito((prev) => (prev + 1) % casosExito.length);
    } else if (type === "perdidos") {
      if (!canesPerdidos.length) return;
      setIndexPerdidos(
        (prev) => (prev + 1) % canesPerdidos.length
      );
    } else if (type === "cuidado") {
      if (!totalSlidesRescatados) return;
      setIndexCuidado(
        (prev) => (prev + 1) % totalSlidesRescatados
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
  useEffect(() => {
    getCanesAdopcion()
      .then((res) => {
        // Strapi v4
        const data = res.data.data
          .map((item) => ({
            id: item.id,
            documentId: item.documentId,
            nombre: item.nombre,
            edad: item.edad,
            tamano: item.tamano,
            sexo: item.sexo,
            caracteristicas: item.caracteristicas,
            raza: item.raza,
            contacto: item.contacto,
            url: item.url,
            images: item.images || [],
            principal: item.principal || null,
          }))
          .sort((a, b) => {
            const ordenA = ORDEN_TAMANO[normalizarTamano(a.tamano)] ?? 99;
            const ordenB = ORDEN_TAMANO[normalizarTamano(b.tamano)] ?? 99;
            return ordenA - ordenB;
          });

        setCanesAdopcion(data);
      })
      .catch((err) => {
        console.error("Error cargando canes en adopción", err);
      })
      .finally(() => {
        setLoadingCanes(false);
      });
  }, []);

  useEffect(() => {
    getCanesExitos()
      .then((res) => {
        const data = res.data.data.map((item) => ({
          id: item.id,
          orden: item.orden,
          imagen: item.imagen?.[0]?.url || null,
        }));

        setCasosExito(data);
      })
      .catch((err) => {
        console.error("Error cargando casos de éxito", err);
      })
      .finally(() => {
        setLoadingExito(false);
      });
  }, []);

  useEffect(() => {
    getCanesPerdidos()
      .then((res) => {
        const data = res.data.data
          .map((item) => {
            const media = item.imgper;
            const images = Array.isArray(media)
              ? media.map((img) => img?.url).filter(Boolean)
              : media?.url
                ? [media.url]
                : [];

            return {
              id: item.id,
              images,
            };
          })
          .filter((item) => item.images.length > 0);

        setCanesPerdidos(data);
      })
      .catch((err) => {
        console.error("Error cargando perritos perdidos", err);
      })
      .finally(() => {
        setLoadingPerdidos(false);
      });
  }, []);

  useEffect(() => {
    if (indexPerdidos >= canesPerdidos.length) {
      setIndexPerdidos(0);
    }
  }, [canesPerdidos, indexPerdidos]);

  useEffect(() => {
    getCanesRescatados()
      .then((res) => {
        const data = res.data.data
          .map((item) => ({
            id: item.id,
            images: item.rescatados?.url
              ? [item.rescatados.url]
              : [],
          }))
          .filter((item) => item.images.length > 0);

        setCanesRescatados(data);
      })
      .catch((err) => {
        console.error("Error cargando canes rescatados", err);
      })
      .finally(() => {
        setLoadingRescatados(false);
      });
  }, []);

  useEffect(() => {
    if (indexCuidado >= totalSlidesRescatados) {
      setIndexCuidado(0);
    }
  }, [totalSlidesRescatados, indexCuidado]);

  const totalSlidesExito = Math.ceil(
    casosExito.length / ITEMS_POR_SLIDE
  );

  const getExitoBySlide = (index) => {
    const start = index * ITEMS_POR_SLIDE;
    return casosExito.slice(start, start + ITEMS_POR_SLIDE);
  };

  const getRescatadosBySlide = (index) => {
    const start = index * ITEMS_POR_SLIDE;
    return canesRescatados.slice(start, start + ITEMS_POR_SLIDE);
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
            src="https://web.munilapunta.gob.pe/uploads/perrosf_fb9537e32e.png"
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
          className="btn btn-primary btn-lg center-block cursor-pointer"
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
                    {canesAdopcion.map((can) => (
                      <div key={can.id} className="can-card">
                        <div className="card-inner">

                          {/* FRENTE */}
                          <div className="card-front">
                            <img
                              src={can.principal?.url || can.images?.[0]?.url}
                              alt={can.nombre}
                            />
                          </div>

                          {/* REVERSO */}
                          <div
                            className={`card-back ${getCardBackColorClass(can.tamano)}`}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setModalImages(
                                can.images?.map(img => img.url) || []
                              )
                            }
                          >
                            <div className="card-back-content">
                              {CAMPOS_CARD_BACK.map((campo) => (
                                <div key={campo.key} className="card-back-row">
                                  <span className="card-back-label">{campo.label}</span>
                                  <span className="card-back-value">
                                    {formatearDato(can[campo.key])}
                                  </span>
                                </div>
                              ))}
                            </div>
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
                    Cada una de estas adopciones es una muestra de que cuando hay compromiso,
                    amor y responsabilidad, todo cambia para bien.
                  </p>
                  <p>
                    Nos alegra saber que siguen creciendo sanos, felices y acompañados…
                    ¡por eso seguimos adelante, buscando más familias que se animen a cambiar
                    una vida!
                  </p>
                  <p>
                    Ellos lo lograron. ¿Y tú, te animas a escribir el próximo final feliz?
                  </p>

                  <div className="carousel-container">
                    <div className="carousel-slide">
                      {getExitoBySlide(indexExito).map((item) => (
                        <img
                          key={item.id}
                          src={item.imagen}
                          className="carousel-img"
                          alt="Caso de éxito"
                          onClick={() => setModalImages([item.imagen])}

                        />
                      ))}
                    </div>

                    <button
                      className="carousel-btn left"
                      onClick={() =>
                        setIndexExito(
                          indexExito === 0
                            ? totalSlidesExito - 1
                            : indexExito - 1
                        )
                      }
                    >
                      ‹
                    </button>

                    <button
                      className="carousel-btn right"
                      onClick={() =>
                        setIndexExito(
                          indexExito === totalSlidesExito - 1
                            ? 0
                            : indexExito + 1
                        )
                      }
                    >
                      ›
                    </button>

                    <ol className="custom-indicators">
                      {Array.from({ length: totalSlidesExito }).map((_, idx) => (
                        <li
                          key={idx}
                          className={idx === indexExito ? "active" : ""}
                          onClick={() => setIndexExito(idx)}
                        />
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>


            {/* 3. PERRITOS PERDIDOS */}
            {!loadingPerdidos && canesPerdidos.length > 0 && (
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
                        src={canesPerdidos[indexPerdidos]?.images?.[0]}
                        className="carousel-img"
                        onClick={() =>
                          setModalImages(canesPerdidos[indexPerdidos]?.images || [])
                        }
                        alt="Perrito perdido"
                      />
                    </div>

                    <button className="carousel-btn left" onClick={() => prevSlide("perdidos")}>‹</button>
                    <button className="carousel-btn right" onClick={() => nextSlide("perdidos")}>›</button>

                    <ol className="custom-indicators">
                      {canesPerdidos.map((_, idx) => (
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
            )}

            {/* 4. CUIDADO Y ACOMPAÑAMIENTO */}
            {!loadingRescatados && canesRescatados.length > 0 && (
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
                        {getRescatadosBySlide(indexCuidado).map((item) => (
                          <img
                            key={item.id}
                            src={item.images?.[0]}
                            className="carousel-img"
                            onClick={() => setModalImages(item.images || [])}
                            alt="Cuidado"
                          />
                        ))}
                      </div>

                      <button className="carousel-btn left" onClick={() => prevSlide("cuidado")}>‹</button>
                      <button className="carousel-btn right" onClick={() => nextSlide("cuidado")}>›</button>

                      <ol className="custom-indicators">
                        {Array.from({ length: totalSlidesRescatados }).map((_, idx) => (
                          <li
                            key={idx}
                            className={idx === indexCuidado ? "active" : ""}
                            onClick={() => setIndexCuidado(idx)}
                          />
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            )}

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
                      <ul className="a" style={{ marginLeft: "35px", listStyleType: "circle" }}>
                        <li>
                          <button
                            className="link-button cursor-pointer"
                            onClick={() => setNormaSeleccionada("ley30407")}
                          >
                            LEY Nº 30407 - LEY DE PROTECCIÓN Y BIENESTAR
                            ANIMAL
                          </button>
                        </li>
                        <li>
                          <button
                            className="link-button cursor-pointer"
                            onClick={() => setNormaSeleccionada("ordenanza008")}
                          >
                            ORDENANZA MUNICIPAL Nº 008-2021-MDLP/AL
                          </button>
                        </li>
                        <li>
                          <button
                            className="link-button cursor-pointer"
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
