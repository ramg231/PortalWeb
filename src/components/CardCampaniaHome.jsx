const CardCampaniaHome = ({ titulo, fecha, imagen }) => {
  return (
    <div
      className="
        bg-white rounded-2xl overflow-hidden shadow-md
        transition-all duration-300 hover:shadow-xl cursor-pointer
      "
    >
      {/* Imagen */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-5">
        <p className="text-sm text-gray-500">{fecha}</p>

        <h3
          className="
            mt-1 text-lg font-bold text-[#003566]
            leading-tight line-clamp-3
          "
        >
          {titulo}
        </h3>

        <button className="mt-3 text-sm text-[#005c98] font-semibold hover:underline">
          Ver más →
        </button>
      </div>
    </div>
  );
};

export default CardCampaniaHome;
