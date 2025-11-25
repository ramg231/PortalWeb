import CardNoticia from '@/components/CardNoticia'

const NoticiasHome = () => {
  const noticiasHome = [
    {
      titulo: 'Operativo de limpieza en la Costanera',
      fecha: '21/11/2024',
      categoria: 'Municipal',
      resumen:
        'Personal de limpieza pública realizó un operativo integral en la zona de la Costanera.',
      imagen: '/demo/noticia1.jpg',
    },
    {
      titulo: 'Campaña de vacunación para adultos mayores',
      fecha: '19/11/2024',
      categoria: 'Salud',
      resumen:
        'Se realizó una campaña gratuita de vacunación en el frontis municipal.',
      imagen: '/demo/noticia2.jpg',
    },
    {
      titulo: 'Recreación familiar por aniversario distrital',
      fecha: '17/11/2024',
      categoria: 'Eventos',
      resumen:
        'Vecinos participaron de actividades deportivas, culturales y recreativas.',
      imagen: '/demo/noticia3.jpg',
    },
  ]

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-[#003566]">
            Noticias recientes
          </h2>

          <a
            href="/noticias"
            className="text-sm text-[#003566] font-semibold hover:underline"
          >
            Ver todas →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {noticiasHome.map((n, i) => (
            <CardNoticia key={i} {...n} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default NoticiasHome
