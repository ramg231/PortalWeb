import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ModalGaleria = ({ imagenes = [], initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  if (!imagenes.length) return null;

  const siguiente = () =>
    setIndex((prev) => (prev + 1) % imagenes.length);

  const anterior = () =>
    setIndex((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">

      <div className="relative max-w-4xl w-full px-4">

        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-2 text-white hover:opacity-80"
        >
          <X size={28} />
        </button>

        {/* Imagen */}
        <div className="relative bg-black rounded-xl overflow-hidden">
          <img
            src={imagenes[index]}
            alt=""
            className="w-full max-h-[80vh] object-contain"
          />

          {imagenes.length > 1 && (
            <>
              <button
                onClick={anterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={siguiente}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Indicador */}
        {imagenes.length > 1 && (
          <div className="text-center text-white text-sm mt-3">
            {index + 1} / {imagenes.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalGaleria;
