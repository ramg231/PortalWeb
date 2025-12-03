import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LayoutGrid, List } from "lucide-react";
import { Link } from "react-router-dom";

import CardCampania from "@/components/CardCampania";
import { campaniasDemo } from "@/data/campaniasDemo";

const Campanias = () => {
  const [vista, setVista] = useState("grid");

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Campañas" },
        ]}
      />

      {/* Encabezado */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#003566]">
            Campañas
          </h1>
          <p className="text-gray-600 text-sm">
            Conoce las campañas municipales más recientes
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setVista("grid")}
            className={`p-2 rounded-xl border ${
              vista === "grid"
                ? "bg-[#003566] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <LayoutGrid size={20} />
          </button>

          <button
            onClick={() => setVista("list")}
            className={`p-2 rounded-xl border ${
              vista === "list"
                ? "bg-[#003566] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* GRID */}
      {vista === "grid" && (
        <div className="grid md:grid-cols-3 gap-6">
          {campaniasDemo.map((c) => (
            <Link to={`/campanias/${c.id}`} key={c.id}>
              <CardCampania
                id={c.id}
                titulo={c.titulo}
                resumen={c.resumen}
                fecha={c.fecha}
                categoria={c.categoria}
                imagen={c.imagenPrincipal.url}
              />
            </Link>
          ))}
        </div>
      )}

      {/* LISTA */}
      {vista === "list" && (
        <div className="flex flex-col gap-6">
          {campaniasDemo.map((c, i) => (
            <Link
              key={c.id}
              to={`/campanias/${c.id}`}
              className="p-6 rounded-xl border hover:bg-gray-50 transition block"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-500">
                    {String(i + 1).padStart(2, "0")} • {c.categoria}
                  </span>

                  <h2 className="text-xl font-semibold mt-1">
                    {c.titulo}
                  </h2>

                  <div
                    className="text-gray-600 text-sm mt-2 line-clamp-3 text-justify"
                    dangerouslySetInnerHTML={{ __html: c.resumen }}
                  ></div>

                  <div className="flex gap-4 mt-3 text-sm text-gray-500">
                    <span>{c.fecha}</span>
                    <span>{c.autor}</span>
                  </div>
                </div>

                <span className="text-gray-400">→</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Campanias;
