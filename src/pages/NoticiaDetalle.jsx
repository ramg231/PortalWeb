import { useParams } from 'react-router-dom'

const NoticiaDetalle = () => {
  const { id } = useParams()

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold text-[#003566] mb-4">
        Título de la noticia #{id}
      </h1>

      <p className="text-gray-600 mb-6">
        Publicado el 20/11/2024
      </p>

      <div className="bg-gray-200 h-80 rounded-xl mb-6 flex items-center justify-center">
        Imagen de la noticia
      </div>

      <p className="text-gray-700 leading-relaxed">
        Aquí irá el contenido completo de la noticia proveniente desde Strapi.
      </p>
    </div>
  )
}

export default NoticiaDetalle
