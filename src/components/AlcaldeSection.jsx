import { Link } from "react-router-dom";
import { alcaldeData } from "@/data/alcaldeData";

const AlcaldeSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#005c98] via-[#18a4a9] to-[#e3ab26] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">

        {/* Imagen del alcalde */}
        <div className="flex justify-center md:justify-start">
          <img
            src={alcaldeData.imagenPrincipal}
            alt={alcaldeData.nombre}
            className="
              w-[260px] md:w-[300px] lg:w-[340px]
              object-contain drop-shadow-xl
              -mt-6
            "
          />
        </div>

        {/* Texto */}
        <div>
          <p className="uppercase text-lg font-bold text-white tracking-wide">
            Alcalde
          </p>

          <h2 className="text-3xl md:text-6xl font-extrabold text-white leading-tight mt-1">
            {alcaldeData.nombre}
          </h2>

          {/* Línea decorativa */}
          <div className="w-20 h-[3px] bg-[#003566] mt-4 mb-8"></div>

          {/* BOTÓN → IR A LA SECCIÓN DEL ALCALDE */}
          <Link
            to="/alcalde"
            className="
              inline-block py-3 px-6 bg-[#003566] text-white font-semibold 
              rounded-md hover:bg-[#014f86] transition
            "
          >
            Ir a sección →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AlcaldeSection;
