import CardServicio from './CardServicio'

const servicios = [
  {
    titulo: 'Mesa de Partes Digital',
    descripcion: 'Presenta documentos sin necesidad de ir a la municipalidad.',
  },
  {
    titulo: 'Libro de Reclamaciones',
    descripcion: 'Registra tus quejas o reclamos de manera virtual.',
  },
  {
    titulo: 'Pagos en Línea',
    descripcion: 'Realiza tus pagos desde casa de manera segura.',
  },
]

const ServiciosDestacados = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-[#003566] mb-8">
          Servicios para el vecino
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((s, idx) => (
            <CardServicio
              key={idx}
              titulo={s.titulo}
              descripcion={s.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiciosDestacados
