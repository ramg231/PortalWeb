import CardServicio from './CardServicio'

import iconMesaPartes from '@/assets/servicios/mesapartes.png'
import iconLibro from '@/assets/servicios/reclamos.png'
import iconPagos from '@/assets/servicios/pglinea.png'
import iconMedico from '@/assets/servicios/cmp.png'
import  iconPublic from '@/assets/servicios/info_public.png'
import  iconAdogta from '@/assets/servicios/adogta.png'
import  iconAtencion from '@/assets/servicios/atencion.png'
import  iconDenciu from '@/assets/servicios/dciudadanas.png'

const servicios = [
  {
    title: 'MESA DE PARTES VIRTUAL',
    iconPng: iconMesaPartes,
    link: "https://facilita.gob.pe/t/4638",
      iconSize: 16,
  },
  {
    title: 'LIBRO DE RECLAMACIONES',
    iconPng: iconLibro,
    link: "https://facilita.gob.pe/t/10336",
      iconSize: 16,
  },
  {
    title: 'ACCESO A LA INFORMACIÓN PÚBLICA',
    iconPng: iconPublic,
    link: "https://www.gob.pe/20399-solicitar-acceso-a-la-informacion-publica?child=67288",
      iconSize: 16,
  },
    {
    title: 'ATENCIÓN DE CONSULTAS Y SUGERENCIAS',
    iconPng: iconAtencion,
    link: "https://facilita.gob.pe/t/7892",
      iconSize: 16,
  },
   {
    title: 'ATENCIÓN DE DENUNCIAS CIUDADANAS',
    iconPng: iconDenciu,
    link: "https://denuncias.servicios.gob.pe/?gobpe_id=1679",
      iconSize: 16,
  },
  {
    title: 'PAGOS EN LÍNEA',
    iconPng: iconPagos,
    link: "https://pagosenlinea.munilapunta.gob.pe/Cuenta/Login",
      iconSize: 16,
  },
   {
    title: 'CENTRO MEDICO MUNICIPAL',
    iconPng: iconMedico,
    link: "/centro-medico",
      iconSize: 16,
  },
 
   {
    title: 'ADOGTA UN AMIGO',
    iconPng: iconAdogta,
    link: "/adopta-amigo",
      iconSize: 16,
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
