import { FaFilePdf } from "react-icons/fa6"

const TablaNormas = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
      <table className="min-w-full text-sm">
        
        {/* CABECERA */}
        <thead className="bg-[#003566] text-white">
          <tr>
            <th className="px-3 py-3 w-14 text-center">N°</th>
            <th className="px-3 py-3 text-left">DENOMINACIÓN</th>
            <th className="px-3 py-3 w-56 text-center">RESOLUCIÓN</th>
            <th className="px-3 py-3 w-32 text-center">FECHA</th>
            <th className="px-3 py-3 w-24 text-center">ARCHIVO</th>
          </tr>
        </thead>

        <tbody>
          {data.map((grupo, gIdx) => (
            <>
              {/* TÍTULO DE SECCIÓN */}
              <tr key={`grupo-${gIdx}`}>
                <td
                  colSpan={5}
                  className="
                    bg-[#005c98]
                    text-white
                    font-bold
                    text-center
                    py-2
                  "
                >
                  {grupo.grupo}
                </td>
              </tr>

              {/* FILAS */}
              {grupo.filas.map((fila, idx) => (
                <tr
                  key={idx}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="px-3 py-3 text-center">
                    {fila.nro}
                  </td>

                  <td className="px-3 py-3 text-slate-700 leading-snug">
                    {fila.denominacion}
                  </td>

                  <td className="px-3 py-3 text-center text-slate-600">
                    {fila.resolucion || "-"}
                  </td>

                  <td className="px-3 py-3 text-center text-slate-600">
                    {fila.fecha || "-"}
                  </td>

                  <td className="px-3 py-3 text-center">
                    <a
                      href={fila.archivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        text-red-600 hover:text-red-700
                        transition
                      "
                    >
                      <FaFilePdf className="w-6 h-6" />
                    </a>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaNormas
