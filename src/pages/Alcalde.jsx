import Breadcrumbs from "@/components/Breadcrumbs";
import { alcaldeData } from "@/data/alcaldeData";

const Alcalde = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Alcaldía" }
        ]}
      />

      <h1 className="text-4xl font-extrabold text-[#003566] mb-10">
        Alcalde del Distrito de La Punta
      </h1>

      {/* Foto + Datos */}
      <div className="grid md:grid-cols-3 gap-10 mb-14">

        {/* FOTO (DISEÑO HOME) */}
        <div className="flex justify-center md:justify-start">
          <img
            src={alcaldeData.imagenPrincipal}
            alt={alcaldeData.nombre}
            className="
        w-[260px] md:w-[300px] lg:w-[340px]
        object-contain drop-shadow-xl
        -mt-6
      "
          />
        </div>

        <div className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#001d3d]">
            {alcaldeData.nombre}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Periodo de gestión: {alcaldeData.periodo}
          </p>

          <blockquote className="mt-5 border-l-4 border-[#003566] pl-4 text-[#003566] italic text-lg font-medium">
            “{alcaldeData.frase}”
          </blockquote>
        </div>
      </div>

      {/* Biografía */}
      <section className="mb-14">
        <h3 className="text-2xl font-bold text-[#003566] mb-4">
          Biografía y Trayectoria
        </h3>

        <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
          {alcaldeData.biografia.map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}
        </div>
      </section>

      {/* Funciones */}
      <section className="mb-14">
        <h3 className="text-2xl font-bold text-[#003566] mb-4">
          Funciones del Alcalde
        </h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
          {alcaldeData.funciones.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* Enlaces */}
      <section>
        <h3 className="text-2xl font-bold text-[#003566] mb-4">
          Información adicional
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {alcaldeData.enlaces.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="block p-5 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-[#003566] mb-1">
                {link.titulo}
              </h4>
              <p className="text-sm text-gray-600">
                {link.descripcion}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Alcalde;
