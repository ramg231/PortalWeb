const CardNoticia = ({ titulo, resumen, fecha, categoria, imagen }) => {
  return (
    <div className="
        bg-white rounded-xl overflow-hidden border 
        flex flex-col min-h-[440px]
        shadow-sm hover:shadow-lg 
        hover:border-[#003566]/40
        transition-all duration-300
      "
    >
      {/* IMAGEN */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={imagen}
          alt={titulo}
          className="
            object-cover w-full h-full 
            transform transition-transform duration-500 
            hover:scale-105
          "
        />

        <span className="absolute top-3 left-3 bg-[#003566] text-white text-xs px-3 py-1 rounded-full shadow">
          {categoria}
        </span>
      </div>

      {/* CONTENIDO */}
      <div className="p-5 flex flex-col flex-1">
        
        <span className="text-sm text-gray-500">{fecha}</span>

        {/* título */}
        <h3 className="text-lg font-semibold text-[#003566] mt-1 line-clamp-2">
          {titulo}
        </h3>

        {/* resumen */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3 flex-1">
          {resumen}
        </p>

        {/* botón */}
        <div className="pt-4 mt-2">
          <span className="text-[#003566] font-semibold text-sm hover:underline">
            Leer más →
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardNoticia;
