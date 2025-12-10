import Breadcrumbs from "@/components/Breadcrumbs";
import { centroMedicoData } from "@/data/centroMedicoData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CentroMedico = () => {
  const [index, setIndex] = useState(0);

  const siguiente = () =>
    setIndex((prev) => (prev + 1) % centroMedicoData.imagenes.length);

  const anterior = () =>
    setIndex((prev) =>
      prev === 0 ? centroMedicoData.imagenes.length - 1 : prev - 1
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Centro Médico" }
        ]}
      />

      {/* Título */}
      <h1 className="text-4xl font-extrabold text-[#003566] mb-8">
        {centroMedicoData.titulo}
      </h1>

      {/* Slider de imágenes */}
      <div className="relative mb-10">
        <img
          src={centroMedicoData.imagenes[index]}
          className="w-full h-[360px] md:h-[460px] object-cover rounded-xl shadow-lg"
        />

        {/* Flechas */}
        {centroMedicoData.imagenes.length > 1 && (
          <>
            <button
              onClick={anterior}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={siguiente}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Descripción */}
      <div className="text-gray-700 leading-relaxed space-y-4 mb-14 text-justify">
        {centroMedicoData.descripcion.map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </div>

      {/* Servicios Médicos */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#003566] mb-4">Especialidades Médicas</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {centroMedicoData.serviciosMedicos.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

     

      {/* Horarios */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#003566] mb-4">Horarios de Atención</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {centroMedicoData.horarios.map((h, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl shadow-sm bg-white"
            >
              <h3 className="font-semibold text-[#003566]">
                {h.titulo}
              </h3>
              <p className="text-gray-700 mt-1">{h.horario}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documentos descargables */}
      <section>
        <h2 className="text-2xl font-bold text-[#003566] mb-4">
         Información adicional
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {centroMedicoData.documentos.map((d, i) => (
            <a
              key={i}
              href={d.archivo}
              target="_blank"
              className="block p-5 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#003566] mb-1">
                {d.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{d.descripcion}</p>

              <span className="text-[#005c98] font-semibold mt-3 inline-block">
                Descargar PDF →
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CentroMedico;
