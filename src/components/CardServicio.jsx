const CardServicio = ({ titulo, descripcion }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition cursor-pointer">
      <h3 className="font-bold text-lg text-[#003566]">{titulo}</h3>
      <p className="text-gray-600 text-sm mt-2">{descripcion}</p>

      <button className="mt-4 text-sm text-[#003566] font-semibold">
        Ver más →
      </button>
    </div>
  )
}

export default CardServicio
