import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopoverModal = ({ slides = [], initialIndex = 0, onClose }) => {

  // 🔥 solo slides activos
  const slidesActivos = slides.filter(s => s.activo !== false);

  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  if (!slidesActivos.length) return null;

  const siguiente = () =>
    setIndex((prev) => (prev + 1) % slidesActivos.length);

  const anterior = () =>
    setIndex((prev) =>
      prev === 0 ? slidesActivos.length - 1 : prev - 1
    );

  const slide = slidesActivos[index];

  const Imagen = (
    <img
      src={slide.imagen}
      className="w-full max-h-[80vh] object-contain bg-black cursor-pointer"
      alt=""
    />
  );

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden">

        <div className="relative">

          {/* 🟦 Imagen con o sin link */}
          {slide.link ? (
            <a
              href={slide.link}
              target={slide.nuevaPestana ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              {Imagen}
            </a>
          ) : (
            Imagen
          )}

          {slidesActivos.length > 1 && (
            <>
              <button
                onClick={anterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={siguiente}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#003566] text-white hover:bg-[#001d3d]"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};

export default PopoverModal;
