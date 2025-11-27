const CardCampania = ({ titulo, fecha, resumen, imagen }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
      
      {/* Imagen */}
      <div className="h-40 w-full bg-gray-200 overflow-hidden">
        {imagen ? (
          <img src={imagen} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Sin imagen
          </div>
        )}
      </div>

      {/* Texto */}
      <div className="p-4">
        <p className="text-xs font-semibold text-[#003566]">{fecha}</p>

        <h3 className="text-lg font-bold text-[#001d3d] mt-1">
          {titulo}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {resumen}
        </p>

        <button className="mt-4 text-[#005c98] font-semibold hover:underline">
          Ver más →
        </button>
      </div>

    </div>
  )
}

export default CardCampania
