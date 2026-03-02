import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";
import ModalGaleria from "@/components/ModalGaleria";
import { getNoticiaBySlug } from "@/api/strapi";   // 🔴 cambio aquí
import { renderRichText } from "@/utils/renderRichText";

const NoticiaDetalle = () => {
  const { slug } = useParams();                   // 🔴 cambio aquí

  const [noticia, setNoticia] = useState(null);
  const [index, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNoticiaBySlug(slug)
      .then((res) => {
        setNoticia(res.data.data[0]);             // 🔴 cambio aquí
      })
      .finally(() => setLoading(false));
  }, [slug]);                                     // 🔴 cambio aquí

  if (loading) return <p>Cargando...</p>;
  if (!noticia) return <p>Noticia no encontrada</p>;

  const galeria = noticia.galeria || [];

  const siguiente = () =>
    setIndex((prev) => (prev + 1) % galeria.length);

  const anterior = () =>
    setIndex((prev) =>
      prev === 0 ? galeria.length - 1 : prev - 1
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Noticias", href: "/noticias" },
          { label: noticia.titulo }
        ]}
      />

      <span className="inline-block px-3 py-1 bg-[#003566] text-white rounded-full text-xs mt-4">
        {noticia.categoria}
      </span>

      <h1 className="text-4xl font-extrabold text-[#003566] mt-4 mb-2">
        {noticia.titulo}
      </h1>

      <p className="text-gray-600 mb-8 flex gap-4 text-sm">
        <span>
          {new Date(noticia.fecha).toLocaleDateString("es-PE")}
        </span>
        <span>•</span>
        <span>{noticia.autor}</span>
      </p>

      {galeria.length > 0 && (
        <>
          <div className="relative mb-6">
            <img
              src={galeria[index].url}
              onClick={() => setOpenModal(true)}
              className="w-full h-96 object-cover rounded-xl cursor-pointer"
            />

            {galeria.length > 1 && (
              <>
                <button
                  onClick={anterior}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={siguiente}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          <div className="flex gap-3 mb-10 flex-wrap">
            {galeria.map((img, i) => (
              <img
                key={i}
                src={img.url}
                onClick={() => setIndex(i)}
                className={`w-28 h-20 object-cover rounded-lg cursor-pointer border transition ${
                  i === index
                    ? "border-[#003566]"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <article
        className="
          prose prose-gray max-w-none
          prose-p:text-justify
          prose-li:text-justify
          prose-h3:text-[#003566]
          prose-p:leading-relaxed
        "
      >
        {renderRichText(noticia.contenido)}
      </article>

      {openModal && galeria.length > 0 && (
        <ModalGaleria
          imagenes={galeria.map(img => img.url)}
          initialIndex={index}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default NoticiaDetalle;
