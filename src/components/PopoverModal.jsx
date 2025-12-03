import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopoverModal = ({ imagenes = [], onClose }) => {
  const [index, setIndex] = useState(0);

  if (!imagenes.length) return null;

  const siguiente = () =>
    setIndex((prev) => (prev + 1) % imagenes.length);

  const anterior = () =>
    setIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));

  return (
    <div className="
      fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50
    ">
      <div className="
        bg-white rounded-2xl shadow-xl p-0 max-w-2xl w-full overflow-hidden
      ">
        
        {/* SLIDER */}
        <div className="relative">
          <img
            src={imagenes[index]}
            className="w-full max-h-[80vh] object-contain bg-black"
          />

          {/* Flechas */}
          {imagenes.length > 1 && (
            <>
              <button
                onClick={anterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={siguiente}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* BOTÓN CERRAR */}
        <div className="flex justify-end p-4 bg-white">
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
