import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

import { LayoutGrid, List } from "lucide-react";
import CardNoticia from "@/components/CardNoticia";
import { Link } from "react-router-dom";

import { noticiasDemo } from "@/data/noticiasDemo";  // ✔ ahora sí

const Noticias = () => {
  const [vista, setVista] = useState("grid"); // grid | list

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Noticias" }
        ]}
      />

      {/* Encabezado */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#003566]">
            Últimas Noticias
          </h1>
          <p className="text-gray-600 text-sm">
            Mantente actualizado con las novedades más recientes
          </p>
        </div>

        {/* Botones vista */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setVista("grid")}
            className={`p-2 rounded-xl border ${vista === "grid"
              ? "bg-[#003566] text-white"
              : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <LayoutGrid size={20} />
          </button>

          <button
            onClick={() => setVista("list")}
            className={`p-2 rounded-xl border ${vista === "list"
              ? "bg-[#003566] text-white"
              : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Vista GRID */}
      {vista === "grid" && (
        <div className="grid md:grid-cols-3 gap-6">
          {noticiasDemo.map((n) => (
            <Link to={`/noticias/${n.id}`} key={n.id} className="block">
              <CardNoticia 
                titulo={n.titulo}
                resumen={n.resumen}
                fecha={n.fecha}
                categoria={n.categoria}
                autor={n.autor}
                imagen={n.imagenPrincipal.url} // ✔ AQUÍ LA IMAGEN PRINCIPAL
              />
            </Link>
          ))}
        </div>
      )}

      {/* Vista LISTA */}
      {vista === "list" && (
        <div className="flex flex-col gap-6">
          {noticiasDemo.map((n, i) => (
            <Link
              key={n.id}
              to={`/noticias/${n.id}`}
              className="p-6 rounded-xl border hover:bg-gray-50 transition block"
            >
              <div className="flex items-start justify-between">

                <div>
                  <span className="text-xs font-semibold text-gray-500 tracking-wide">
                    {String(i + 1).padStart(2, "0")} &nbsp; {n.categoria}
                  </span>

                  <h2 className="text-xl font-semibold mt-1">{n.titulo}</h2>

                  <div
                    className="text-gray-600 text-sm mt-2 text-justify line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: n.resumen }}
                  ></div>

                  <div className="flex gap-4 mt-3 text-sm text-gray-500">
                    <span>{n.fecha}</span>
                    <span>{n.autor}</span>
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

export default Noticias;
