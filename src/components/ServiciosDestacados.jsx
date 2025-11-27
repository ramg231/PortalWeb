import CardServicio from './CardServicio'

import iconMesaPartes from '@/assets/servicios/mesapartes.png'
import iconLibro from '@/assets/servicios/reclamos.png'
import iconPagos from '@/assets/servicios/pglinea.png'

const servicios = [
  {
    title: 'MESA DE PARTES VIRTUAL',
    iconPng: iconMesaPartes,
    link: "https://facilita.gob.pe/t/4638",
  },
  {
    title: 'LIBRO DE RECLAMACIONES',
    iconPng: iconLibro,
    link: "https://facilita.gob.pe/t/10336",
  },
  {
    title: 'PAGOS EN LÍNEA',
    iconPng: iconPagos,
    link: "https://pagosenlinea.munilapunta.gob.pe/Cuenta/Login",
  },
]


const ServiciosDestacados = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-[#003566] mb-8">
          Servicios
        </h2>

        <div className="grid  md:grid-cols-3 gap-6">
          {servicios.map((s, idx) => (
            <CardServicio
              key={idx}
              title={s.title}
              iconPng={s.iconPng}
              link={s.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiciosDestacados
