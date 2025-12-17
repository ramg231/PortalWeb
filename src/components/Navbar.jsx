import { useState } from 'react'

const menuItems = [
  {
    label: 'INSTITUCIÓN',
    link: null,
    items: [
      {
        label: 'HISTORIA',
        link: 'https://www.gob.pe/institucion/munilapunta/informes-publicaciones/5135948-historia-de-la-punta-mdlp',
      },
      {
        label: 'VISIÓN Y MISIÓN',
        link: 'https://www.gob.pe/institucion/munilapunta/institucional',
      },
      {
        label: 'ORGANIGRAMA',
        link: 'https://drive.google.com/file/d/1AQEKJaN_1jTsf8XuLth_TgHdvWD07d3V/view?usp=sharing',
      },
      { label: 'ALCALDE', link: '/alcalde' },
      {
        label: 'DIRECTORIO',
        link: 'https://www.gob.pe/institucion/munilapunta/funcionarios',
      },
      {
        label: 'SEDES',
        link: 'https://www.gob.pe/institucion/munilapunta/sedes',
      },
    ],
  },
  {
    label: 'SERVICIOS',
    link: null,
    items: [
      { label: 'MESA DE PARTES VIRTUAL', link: 'https://facilita.gob.pe/t/4638' },
      {
        label: 'LIBRO DE RECLAMACIONES',
        link: 'https://facilita.gob.pe/t/10336',
      },
      {
        label: 'PAGOS EN LÍNEA',
        link: 'https://pagosenlinea.munilapunta.gob.pe/Cuenta/Login',
      },
      { label: 'CENTRO MEDICO MUNICIPAL', link: '/centro-medico' },
      { label: 'ADOPTA UN AMIGO', link: '/adopta-amigo' },
    ],
  },
  {
    label: 'NORMAS EMITIDAS',
    link: 'https://www.gob.pe/institucion/munilapunta/normas-legales/tipos',
    items: [],
  },
  {
    label: 'DOCUMENTOS DE GESTIÓN',
    link: 'https://www.gob.pe/institucion/munilapunta/informes-publicaciones/tipos',
    items: [],
  },
  {
    label: 'DIFUSION INSTITUCIONAL',
    link: null,
    items: [
       {
        label: 'TRIBUTOS',
        link: '/tributos'
      },
      {
        label: 'LICENCIAS DE FUNCIONAMIENTO',
        link: 'licencias-funcionamiento'
      },
      {
        label: 'GUIA TURÍSTICA',
        link: 'https://www.gob.pe/institucion/munilapunta/informes-publicaciones/7496995'
      },
      {
        label: 'PLAN VERANO',
        link: 'https://www.gob.pe/institucion/munilapunta/colecciones/31464-planes-de-verano-mdlp'
      },
      {
        label: 'PLAN TSUNAMI',
        link: 'https://drive.google.com/file/d/1i3Gfb7IbiMyFOwnO5TNxW3wxA4G4pZMW/view?usp=sharing'
      },
      {
        label: 'SISTEMA DE SEGURIDAD Y SALUD EN EL TRABAJO',
        link: 'https://www.gob.pe/institucion/munilapunta/colecciones/62322-sistema-de-seguridad-y-salud-en-el-trabajo-mdlp'
      },
      {
        label: 'REVISTAS INFORMATIVAS',
        link: 'https://www.gob.pe/institucion/munilapunta/colecciones/30674-revistas-informativas-mdlp',
      },
      {
        label: 'TRANSITO A SERVIR',
        link: 'https://s3.amazonaws.com/documentos.api.gob.pe/ni1tynd2359k83u05d2pkkeoypq2?response-content-disposition=inline%3B%20filename%3D%22estructura_organica_mdlp.pdf%22%3B%20filename%2A%3DUTF-8%27%27estructura_organica_mdlp.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJREKOSPKMJFYJDAQ%2F20251206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251206T202712Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=7a2e1c468d0140ed0cbd932115be1d030f45ab187e285bac371982634825d048',
      },
     
      {
        label: 'TRANSFERENCIA DE GESTION',
        link: 'https://www.gob.pe/institucion/munilapunta/colecciones/78630',
      },
             {
        label: 'JUNTAS VECINALES COMUNALES',
        link: 'https://www.gob.pe/institucion/munilapunta/sedes',
      },
       {
        label: 'SUBASTA PÚBLICA',
        link: 'https://www.gob.pe/institucion/munilapunta/colecciones/26653-subasta-publica',
      },
       {
        label: 'BALANCE SEMESTRALES - FISCALIZACIÓN',
        link: 'https://www.gob.pe/institucion/munilapunta/colecciones/31529-balance-semestral-de-los-regidores-municipales-fiscalizacion',
      },
       {
        label: 'COMITÉ DE SEGURIDAD Y SALUD EN EL TRABAJO',
        link: 'https://www.gob.pe/institucion/munilapunta/sedes',
      },
      {
        label: 'COMITÉ DE PLANIFICACION DE LA CAPACITACIÓN CPC',
        link: 'https://www.gob.pe/institucion/munilapunta/colecciones/52352-elecciones-del-representante-titular-y-suplemente-de-los-as-servidores-as-para-conformacion-del-comite-de-planificacion-de-la-capacitacion-de-la-mdlp-2024-2027',
      },
      {
        label: 'AUDIENCIAS PÚBLICAS',
        link: 'https://www.gob.pe/institucion/munilapunta/colecciones/69713-audiencias-publicas-mdlp',
      },
    ],
  },
  {
    label: 'NOTICIAS',
    link: '/noticias',
    items: null,
  },
  {
    label: 'CONTACTANOS',
    link: 'https://www.gob.pe/institucion/munilapunta/contacto-y-numeros-de-emergencias ',
    items: null,
  },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile = () => setMobileOpen(prev => !prev)

  return (
    <nav className="w-full bg-white text-[#005c98] font-semibold relative z-40 shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* NAV DESKTOP */}
        <ul className="hidden md:flex gap-6 text-sm">
          {menuItems.map((item, idx) => {
            const hasSubmenu = Array.isArray(item.items) && item.items.length > 0

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

                {/* SUBMENÚ DESKTOP */}
                {hasSubmenu && (
                  <div className="absolute left-0 top-full bg-white text-[#003566] rounded-lg shadow-xl w-64 p-3 hidden group-hover:block">
                    {item.items.map((sub, sidx) => (
                      <a
                        key={sidx}
                        href={sub.link}
                        target={sub.link?.startsWith('http') ? '_blank' : '_self'}
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

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="md:hidden py-3 text-sm tracking-wide"
          onClick={toggleMobile}
        >
          {mobileOpen ? 'CERRAR' : 'MENÚ'}
        </button>
      </div>

      {/* PANEL MÓVIL */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="flex flex-col text-sm">
            {menuItems.map((item, idx) => {
              const hasSubmenu =
                Array.isArray(item.items) && item.items.length > 0

              return (
                <li key={idx} className="border-b border-slate-100">
                  {/* PRINCIPAL */}
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      className="block px-4 py-3"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="block px-4 py-3">
                      {item.label}
                    </span>
                  )}

                  {/* SUBMENÚ MÓVIL (todos visibles debajo) */}
                  {hasSubmenu && (
                    <div className="pb-2">
                      {item.items.map((sub, sidx) => (
                        <a
                          key={sidx}
                          href={sub.link}
                          target={
                            sub.link?.startsWith('http') ? '_blank' : '_self'
                          }
                          className="block px-8 py-2 text-[13px] text-slate-700 hover:bg-slate-50"
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
        </div>
      )}
    </nav>
  )
}

export default Navbar
