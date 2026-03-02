import PanelDocumentos from "@/components/PanelDocumentos";
import { dataEleccionesJuntasVecinales } from "@/data/dataEleccionesJuntasVecinales";
import Breadcrumbs from "@/components/Breadcrumbs";
const EleccionesJuntasVecinales = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
       <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Juntas Vecinales" }
              ]}
            />
      {dataEleccionesJuntasVecinales.map((categoria, index) => (
        <PanelDocumentos key={index} categoria={categoria} />
      ))}
    </main>
  );
};

export default EleccionesJuntasVecinales;