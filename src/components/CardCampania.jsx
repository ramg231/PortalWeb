import { Link } from "react-router-dom";

const CardCampania = ({ id, titulo, fecha, resumen, imagen }) => {
  return (
    <Link
      to={`/campanias/${id}`}
      className="
        bg-white rounded-xl shadow hover:shadow-lg 
        transition-all duration-300 overflow-hidden cursor-pointer block
      "
    >
      {/* Imagen */}
      <div className="h-40 w-full bg-gray-200 overflow-hidden">
        {imagen ? (
          <img src={imagen} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Sin imagen
          </div>
        )}
      </div>

      {/* Texto */}
      <div className="p-4">
        <p className="text-xs font-semibold text-[#003566]">{fecha}</p>

        <h3 className="text-lg font-bold text-[#001d3d] mt-1 line-clamp-2">
          {titulo}
        </h3>

        <p
          className="text-sm text-gray-600 mt-2 line-clamp-3 text-justify"
          dangerouslySetInnerHTML={{ __html: resumen }}
        ></p>

        <span className="mt-4 text-[#005c98] font-semibold hover:underline inline-block">
          Ver más →
        </span>
      </div>
    </Link>
  );
};

export default CardCampania;
