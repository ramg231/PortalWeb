import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { noticiasDemo } from "@/data/noticiasDemo";

const NoticiaDetalle = () => {
  const { id } = useParams();

  const noticia = noticiasDemo.find((n) => n.id === Number(id));
  const [index, setIndex] = useState(0);

  if (!noticia) return <p>Noticia no encontrada</p>;

  const siguiente = () =>
    setIndex((prev) => (prev + 1) % noticia.galeria.length);

  const anterior = () =>
    setIndex((prev) => (prev === 0 ? noticia.galeria.length - 1 : prev - 1));

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Noticias", href: "/noticias" },
          { label: noticia.titulo }
        ]}
      />

      {/* Categoría */}
      <span className="px-3 py-1 bg-[#003566] text-white rounded-full text-xs">
        {noticia.categoria}
      </span>

      {/* Título */}
      <h1 className="text-4xl font-extrabold text-[#003566] mt-4 mb-2">
        {noticia.titulo}
      </h1>

      {/* Fecha - Autor */}
      <p className="text-gray-600 mb-8 flex gap-4 text-sm">
        <span>{noticia.fecha}</span>
        <span>•</span>
        <span>{noticia.autor}</span>
      </p>

      {/* --- SLIDER --- */}
      <div className="relative mb-6">
        <img
          src={noticia.galeria[index].url} // ✔ galería
          className="w-full h-96 object-cover rounded-xl"
        />

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
      </div>

      {/* Miniaturas */}
      <div className="flex gap-3 mb-10">
        {noticia.galeria.map((img, i) => (
          <img
            key={i}
            src={img.url}
            onClick={() => setIndex(i)}
            className={`w-28 h-20 object-cover rounded-lg cursor-pointer border ${
              i === index ? "border-[#003566]" : "border-transparent opacity-60"
            }`}
          />
        ))}
      </div>

      {/* Contenido */}
      <article
        className="
          prose prose-gray max-w-none
          prose-p:text-justify prose-li:text-justify prose-h3:text-[#003566]
          prose-p:leading-relaxed
        "
        dangerouslySetInnerHTML={{ __html: noticia.contenido }}
      ></article>
    </div>
  );
};

export default NoticiaDetalle;
