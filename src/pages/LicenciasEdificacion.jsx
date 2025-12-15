import PanelDocumentos from "@/components/PanelDocumentos";
import { dataLicenciasEdificacion } from "@/data/dataLicenciasEdificacion";

const LicenciasEdificacion = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#003566]">
          Licencias de Edificación
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Formatos y normatividad vigente para licencias de edificación
        </p>
      </header>

      <PanelDocumentos categoria={dataLicenciasEdificacion} />
    </main>
  );
};

export default LicenciasEdificacion;
