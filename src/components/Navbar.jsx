import { useState } from 'react'

const menuItems = 
[
  {
    "label": "INSTITUCIÓN",
    "link": null,
    "items": [
      { "label": "Historia", "link": "/historia" },
      { "label": "Visión y Misión", "link": "/vision-mision" },
      { "label": "Organigrama", "link": "https://s3.amazonaws.com/documentos.api.gob.pe/ni1tynd2359k83u05d2pkkeoypq2?response-content-disposition=inline%3B%20filename%3D%22estructura_organica_mdlp.pdf%22%3B%20filename%2A%3DUTF-8%27%27estructura_organica_mdlp.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJREKOSPKMJFYJDAQ%2F20251126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251126T172043Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a46b849ad42544d4b3f90d554872c340579f2369f7355eb7b0f98c20bb3cf42e" },
      { "label": "Alcalde", "link": "/alcalde" },
      { "label": "Directorio", "link": "https://www.gob.pe/institucion/munilapunta/funcionarios" }
    ]
  },
  {
    "label": "SERVICIOS",
    "link": null,
    "items": [
      { "label": "Tributos", "link": "/tributos" },
      { "label": "Arbitrios", "link": "/arbitrios" }
    ]
  },
  {
    "label": "NORMAS EMITIDAS",
    "link": "https://www.gob.pe/institucion/munilapunta/normas-legales/tipos",
    "items": []
  },
  {
    "label": "DOCUMENTOS DE GESTIÓN ",
    "link": "https://www.gob.pe/institucion/munilapunta/informes-publicaciones/tipos",
    "items": []
  },
  {
    "label": "NOTICIAS",
    "link": "/noticias",
    "items": null
  }
]

const Navbar = () => {
  return (
    <nav className="w-full bg-white text-[#005c98] font-semibold relative z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        <ul className="hidden md:flex gap-6 text-sm">
          {menuItems.map((item, idx) => {

            const hasSubmenu =
              Array.isArray(item.items) && item.items.length > 0

            return (
              <li
                key={idx}
                className="py-4 cursor-pointer relative group"
              >

                {/* LABEL PRINCIPAL */}
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    className="hover:text-[#003566]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}

                {/* SUBMENÚ */}
                {hasSubmenu && (
                  <div className="absolute left-0 top-full bg-white text-[#003566] rounded-lg shadow-xl w-64 p-3 hidden group-hover:block">

                    {item.items.map((sub, sidx) => (
                      <a
                        key={sidx}
                        href={sub.link}
                        target={sub.link.startsWith('http') ? '_blank' : '_self'}
                        className="block text-sm px-3 py-2 hover:bg-gray-100 rounded-md"
                      >
                        {sub.label}
                      </a>
                    ))}

                  </div>
                )}

              </li>
            )
          })}
        </ul>

        <div className="md:hidden py-3">MENU</div>
      </div>
    </nav>
  )
}

export default Navbar
