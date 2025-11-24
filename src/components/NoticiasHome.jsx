import CardNoticia from '@/components/CardNoticia'

const NoticiasHome = () => {
  const noticiasHome = [
    {
      titulo: 'Celebramos a nuestros vecinos cumpleañeros de noviembre',
      fecha: '23/11/2025',
      categoria: 'Nota Informativa',
      resumen:
        'Esta semana compartimos momentos especiales junto a cuatro queridos vecinos que celebraron un año más de vida.',
      imagen: 'https://cdn.www.gob.pe/uploads/document/file/9042118/1296209-22.jpg',
    },
    {
      titulo: '¡La Punta destaca a nivel nacional gracias a la estrategia Ponte en Modo Niñez!',
      fecha: '21/11/2025',
      categoria: 'Nota Informativa',
      resumen:
        '¡En nuestro distrito seguimos poniendo a la niñez en el centro!',
      imagen: 'https://cdn.www.gob.pe/uploads/document/file/9042112/1296182-16.jpg',
    },
    {
      titulo: 'Formando conciencia ambiental',
      fecha: '21/11/2025',
      categoria: 'Nota Informativa',
      resumen:
        'Los alumnos del Colegio Clara Cogorno tuvieron la oportunidad de recibir una charla informativa y didáctica, como parte de las actividades de la campaña Recicla Ya.',
      imagen: 'https://cdn.www.gob.pe/uploads/document/file/9042107/1296175-11.jpg',
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
