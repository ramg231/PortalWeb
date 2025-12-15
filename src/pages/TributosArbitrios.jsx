import PanelDocumentos from "@/components/PanelDocumentos";
// luego será fetch desde Strapi
import { dataTributosYArbitrios } from "@/data/dataTributosYArbitrios";

const TributosArbitrios = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Título página */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#003566]">
          Tributos y Arbitrios Municipales
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Información normativa, formularios y documentos oficiales
        </p>
      </header>

      {/* Paneles */}
      {dataTributosYArbitrios.map((categoria, index) => (
        <PanelDocumentos key={index} categoria={categoria} />
      ))}
    </main>
  );
};

export default TributosArbitrios;
