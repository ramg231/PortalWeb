import { Link } from "react-router-dom";

const CardCampaniaHome = ({ id, titulo, fecha, imagen }) => {
  return (
    <Link
      to={`/campanias/${id}`}
      className="
        bg-white rounded-2xl overflow-hidden shadow-md
        transition-all duration-300 hover:shadow-xl cursor-pointer block
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

        <h3 className="mt-1 text-lg font-bold text-[#003566] line-clamp-3">
          {titulo}
        </h3>

        <span className="mt-3 text-sm text-[#005c98] font-semibold hover:underline inline-block">
          Ver más →
        </span>
      </div>
    </Link>
  );
};

export default CardCampaniaHome;
