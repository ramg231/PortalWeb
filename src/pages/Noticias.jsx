import CardNoticia from '@/components/CardNoticia'

const Noticias = () => {
  const noticiasDemo = [
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
        'Se realizó una campaña gratuita de vacunación para adultos mayores en el frontis municipal.',
      imagen: '/demo/noticia2.jpg',
    },
    {
      titulo: 'Actividades recreativas por aniversario de La Punta',
      fecha: '17/11/2024',
      categoria: 'Eventos',
      resumen:
        'Vecinos participaron de actividades deportivas, culturales y recreativas por el aniversario distrital.',
      imagen: '/demo/noticia3.jpg',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-bold text-[#003566] mb-10">
        Noticias
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {noticiasDemo.map((n, i) => (
          <CardNoticia key={i} {...n} />
        ))}
      </div>
    </div>
  )
}

export default Noticias
