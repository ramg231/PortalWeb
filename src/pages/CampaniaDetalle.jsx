import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { campaniasDemo } from "@/data/campaniasDemo";

const CampaniaDetalle = () => {
  const { id } = useParams();
  const campaña = campaniasDemo.find((c) => c.id === Number(id));
  const [index, setIndex] = useState(0);

  if (!campaña) return <p>Campaña no encontrada</p>;

  const siguiente = () =>
    setIndex((prev) => (prev + 1) % campaña.galeria.length);

  const anterior = () =>
    setIndex((prev) =>
      prev === 0 ? campaña.galeria.length - 1 : prev - 1
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Campañas", href: "/campanias" },
          { label: campaña.titulo },
        ]}
      />

      {/* Categoría */}
      <span className="px-3 py-1 bg-[#003566] text-white rounded-full text-xs">
        {campaña.categoria}
      </span>

      <h1 className="text-4xl font-extrabold text-[#003566] mt-4 mb-2">
        {campaña.titulo}
      </h1>

      <p className="text-gray-600 mb-8 flex gap-4 text-sm">
        <span>{campaña.fecha}</span>
        <span>•</span>
        <span>{campaña.autor}</span>
      </p>

      {/* Slider */}
      <div className="relative mb-6">
        <img
          src={campaña.galeria[index].url}
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
        {campaña.galeria.map((img, i) => (
          <img
            key={i}
            src={img.url}
            onClick={() => setIndex(i)}
            className={`w-28 h-20 object-cover rounded-lg cursor-pointer border ${
              i === index
                ? "border-[#003566]"
                : "border-transparent opacity-60"
            }`}
          />
        ))}
      </div>

      {/* Contenido */}
      <article
        className="
          prose prose-gray max-w-none
          prose-p:text-justify prose-li:text-justify
          prose-p:leading-relaxed prose-h3:text-[#003566]
        "
        dangerouslySetInnerHTML={{ __html: campaña.contenido }}
      ></article>
    </div>
  );
};

export default CampaniaDetalle;
