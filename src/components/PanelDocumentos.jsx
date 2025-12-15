import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const PanelDocumentos = ({ categoria }) => {
  const [openSeccion, setOpenSeccion] = useState(null);

  const toggleSeccion = (index) => {
    setOpenSeccion(openSeccion === index ? null : index);
  };

  return (
    <section className="bg-white rounded-xl shadow-sm border border-[#e6eef7] mb-10">
      {/* Header categoría */}
      <div className="border-b border-[#e6eef7] px-6 py-4">
        <h2 className="text-lg font-bold text-[#003566]">
          {categoria.titulo}
        </h2>
      </div>

      {/* Secciones */}
      <div className="divide-y divide-[#e6eef7]">
        {categoria.secciones.map((seccion, index) => (
          <div key={index}>
            {/* Header sección */}
            <button
              onClick={() => toggleSeccion(index)}
              className="w-full flex justify-between items-center px-6 py-3 text-left hover:bg-[#f6f9fc]"
            >
              <span className="font-semibold text-[#003566]">
                {index + 1}. {seccion.titulo}
              </span>
              <span className="text-[#003566] text-lg">
                {openSeccion === index ? "−" : "+"}
              </span>
            </button>

            {/* Documentos */}
            {openSeccion === index && (
              <div className="px-6 pb-4">
                <ul className="space-y-2">
                  {seccion.documentos.map((doc, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-dashed border-[#e6eef7] py-2"
                    >
                      <span className="text-sm text-gray-800 pr-4">
                        {doc.codigo} {doc.titulo}
                      </span>

                      <a
                        href={doc.archivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 transition"
                        title="Ver PDF"
                      >
                        <FaFilePdf size={22} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PanelDocumentos;
