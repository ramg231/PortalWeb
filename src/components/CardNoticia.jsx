const CardNoticia = ({ titulo, fecha, categoria, resumen, imagen }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imagen || '/placeholder.jpg'}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />

        <span className="absolute top-3 left-3 bg-[#003566] text-white text-xs px-3 py-1 rounded-full shadow">
          {categoria}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs text-gray-500">{fecha}</p>

        <h3 className="font-bold text-lg text-[#003566] mt-1 group-hover:text-[#001d3d] transition">
          {titulo}
        </h3>

        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {resumen}
        </p>

        <button className="mt-4 text-sm font-semibold text-[#003566] hover:underline">
          Leer más →
        </button>
      </div>
    </div>
  )
}

export default CardNoticia
