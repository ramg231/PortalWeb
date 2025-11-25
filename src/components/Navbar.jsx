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
    label: 'TURISMO',
    items: [
      'Atractivos',
      'Playas',
      'Historia del distrito',
      'Actividades recreativas',
    ],
  },
  {
    label: 'NOTICIAS',
    items: ['Municipales', 'Eventos', 'Comunicados'],
  },
]

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null)
  //bg-[#003566]
  return (
    <nav className="w-full bg-white text-[#005c98] font-semibold relative z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        <ul className="hidden  md:flex gap-6 text-sm">
          {menuItems.map((m, idx) => (
            <li
              key={idx}
              className="py-4 cursor-pointer relative group"
            >
              <span>{m.label}</span>

              <div className="absolute left-0 top-full mt-0 bg-white text-[#003566] rounded-lg shadow-xl w-64 p-3 hidden group-hover:block">
                {m.items.map((sub, sidx) => (
                  <button
                    key={sidx}
                    className="w-full text-left text-sm px-3 py-2 hover:bg-gray-100 rounded-md"
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </li>

          ))}
        </ul>

        <div className="md:hidden py-3">MENU</div>
      </div>
    </nav>
  )
}

export default Navbar
