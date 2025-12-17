import PanelDocumentos from "@/components/PanelDocumentos";
import Breadcrumbs from "@/components/Breadcrumbs";
import { dataLicenciasFuncionamiento } from "@/data/dataLicenciasFuncionamiento";

const LicenciasFuncionamiento = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Licencias de Funcionamiento" }
        ]}
      />

      <header className="mb-8 mt-4">
        <h1 className="text-2xl font-bold text-[#003566]">
          Licencias de Funcionamiento
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Formularios, requisitos y normativa vigente
        </p>
      </header>

      <PanelDocumentos categoria={dataLicenciasFuncionamiento} />
    </main>
  );
};

export default LicenciasFuncionamiento;
