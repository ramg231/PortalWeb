import CardServicio from '@/components/CardServicio'

const listaServicios = [
  { titulo: 'Tributos', descripcion: 'Consulta y pago de tributos municipales.' },
  { titulo: 'Arbitrios', descripcion: 'Información y pagos de arbitrios.' },
  { titulo: 'Licencias', descripcion: 'Licencias de funcionamiento y edificaciones.' },
  { titulo: 'Mesa de Partes Digital', descripcion: 'Presenta documentos virtualmente.' },
  { titulo: 'Libro de Reclamaciones', descripcion: 'Registra un reclamo virtual.' },
]

const Servicios = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-bold text-[#003566] mb-10">Servicios Municipales</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {listaServicios.map((s, idx) => (
          <CardServicio 
            key={idx}
            titulo={s.titulo}
            descripcion={s.descripcion}
          />
        ))}
      </div>
    </div>
  )
}

export default Servicios
