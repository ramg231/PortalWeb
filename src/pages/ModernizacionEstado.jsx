import { FaFilePdf } from "react-icons/fa";
import Breadcrumbs from "@/components/Breadcrumbs";
const documentos = [
  {
    id: 1,
    titulo: "Resolución de Conformación del Comité",
    archivo: "https://drive.google.com/file/d/1tKWJGRxzCJjAEuOptp5lnNU7XfZkGKSM/view?usp=drive_link",
  },
  {
    id: 2,
    titulo: "Modernización del Estado – Sesión 1",
    archivo: "https://drive.google.com/file/d/1cLVb4iCwOe043W3Jbm0zlMynBiYvDoPk/view?usp=drive_link",
  },
  {
    id: 3,
    titulo: "Modernización del Estado – Sesión 2",
    archivo: "https://drive.google.com/file/d/1CCN4jyYucapP7av0giEiWuLOW5vsgnP7/view?usp=drive_link",
  },
  {
    id: 4,
    titulo: "Modernización del Estado – Sesión 3",
    archivo: "https://drive.google.com/file/d/1Orje-VOAmIv_PSDhcr4yToEx6HLMACYY/view?usp=drive_link",
  },
  {
    id: 5,
    titulo:
      "Proceso de Tránsito al Régimen de la Ley N° 30057",
    archivo: "https://drive.google.com/file/d/1i-Ciu6D-tAdoTlUz29TTmcyBtNBnR3L0/view?usp=drive_link",
  },
  {
    id: 6,
    titulo:
      "Propuesta para el Mapeo de Puestos de la Entidad",
    archivo: "https://drive.google.com/file/d/1EoDK4CHsr5gOvsSr-Jc6WpRzrRzaRbCv/view?usp=drive_link",
  },
  {
    id: 7,
    titulo:
      "Mapeo de Puestos de la Municipalidad Distrital de La Punta",
    archivo: "https://drive.google.com/file/d/1bXk_G7YdCerGFBcbH7I0Mhw_qRUnYVCm/view?usp=drive_link",
  },
];

const ModernizacionEstado = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Transito a servir" }
              ]}
            />
      
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#003566]">
          Transito a Servir
        </h1>
             </header>

      {/* Lista de documentos */}
      <section className="bg-white rounded-xl shadow-sm border border-[#e6eef7]">
        <ul className="divide-y divide-[#e6eef7]">
          {documentos.map((doc) => (
            <li
              key={doc.id}
              className="flex justify-between items-center px-6 py-4 hover:bg-[#f6f9fc]"
            >
              <span className="text-sm text-gray-800">
                {doc.id}. {doc.titulo}
              </span>

              <a
                href={doc.archivo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition"
                title="Ver documento PDF"
              >
                <FaFilePdf size={22} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ModernizacionEstado;
