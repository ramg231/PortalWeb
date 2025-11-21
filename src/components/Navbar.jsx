import { useState } from 'react'

const menuItems = [
  {
    label: 'INSTITUCIÓN',
    items: [
      'Historia',
      'Visión y Misión',
      'Organigrama',
      'Alcaldía',
      'Regidores',
      'Gerencias y Subgerencias',
    ],
  },
  {
    label: 'SERVICIOS',
    items: [
      'Tributos',
      'Arbitrios',
      'Licencias',
      'Mesa de Partes Digital',
      'Libro de Reclamaciones',
    ],
  },
  {
    label: 'SEGURIDAD CIUDADANA',
    items: [
      'Serenazgo',
      'Mapas del delito',
      'Teléfonos de emergencia',
      'Reporte ciudadano',
    ],
  },
  {
    label: 'TURISMO',
    items: [
      'Atractivos',
      'Playas',
      'Historia del distrito',
      'Actividades recreativas',
    ],
  },
  {
    label: 'TRANSPARENCIA',
    items: [
      'Portal de Transparencia',
      'Ordenanzas',
      'Documentos de Gestión',
      'Presupuesto',
    ],
  },
  {
    label: 'NOTICIAS',
    items: ['Municipales', 'Eventos', 'Comunicados'],
  },
]

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <nav className="w-full bg-[#003566] text-white font-semibold relative z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        <ul className="hidden md:flex gap-6 text-sm">
          {menuItems.map((m, idx) => (
            <li
              key={idx}
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
              className="py-4 cursor-pointer relative"
            >
              <span>{m.label}</span>

              {openIndex === idx && (
                <div className="absolute left-0 top-full mt-2 bg-white text-[#003566] rounded-lg shadow-xl w-64 p-3">
                  {m.items.map((sub, sidx) => (
                    <button
                      key={sidx}
                      className="w-full text-left text-sm px-3 py-2 hover:bg-gray-100 rounded-md"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden py-3">MENU</div>
      </div>
    </nav>
  )
}

export default Navbar
