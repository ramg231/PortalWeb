import TablaNormas from "@/components/TablaNormas";
import { normasEmitidas } from "@/data/normasEmitidas";
import Breadcrumbs from "@/components/Breadcrumbs";

const NormasEmitidas = () => {
  return (
    <section className="py-14 bg-gray-50">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Directivas" },
          ]}
        />
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-[#003566] mb-8">
          Directivas
        </h1>

        <TablaNormas data={normasEmitidas} />
      </div>
    </section>
  );
};

export default NormasEmitidas;
