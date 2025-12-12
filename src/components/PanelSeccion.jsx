import { useState } from 'react'
import { FaFilePdf, FaChevronDown } from 'react-icons/fa6'

const PanelSeccion = ({ titulo, items }) => {
  const [open, setOpen] = useState(false) // abierto por defecto

  return (
    <section className="bg-white rounded-xl shadow-sm border mb-8 overflow-hidden">
      
      {/* HEADER (clickable) */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          px-6 py-4
          text-left
          bg-white
          hover:bg-slate-50
          transition
        "
      >
        <h3 className="text-lg font-bold text-[#003566]">
          {titulo}
        </h3>

        <FaChevronDown
          className={`
            text-[#005c98]
            transition-transform duration-300
            ${open ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* CONTENIDO */}
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden
        `}
      >
        <ul className="divide-y border-t">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="
                flex items-center justify-between gap-4
                px-6 py-4
                hover:bg-slate-50 transition
              "
            >
              <p className="text-sm text-slate-700 leading-snug">
                {item.titulo}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700"
              >
                <FaFilePdf className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PanelSeccion
