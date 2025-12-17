import { useState, useEffect } from "react"

const bannerData = [
  {
    id: 1,
    titulo: "",
    imagen: "https://www.munilapunta.gob.pe/img/slider/banner9.jpg",
  },
  {
    id: 2,
    titulo: "",
    imagen: "https://www.munilapunta.gob.pe/img/slider/banner3.jpg",
  },
  {
    id: 3,
    titulo: "",
    imagen: "https://www.munilapunta.gob.pe/img/slider/banner7.jpg",
  },
]

const HeroBanner = () => {
  const [index, setIndex] = useState(0)

  // --- SLIDER AUTOMÁTICO ---
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // --- SIGUIENTE ---
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % bannerData.length)
  }

  // --- ANTERIOR ---
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? bannerData.length - 1 : prev - 1
    )
  }

  return (
    <section className="w-full bg-gradient-to-r from-[#005c98] via-[#18a4a9] to-[#e3ab26] py-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* CONTENEDOR CARD */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden relative">

          {/* IMAGEN */}
          <img
            src={bannerData[index].imagen}
            alt="Banner Municipal"
            className="w-full h-[350px] object-cover"  // <--- CAMBIAR ESTA ALTURA
          />

          {/* TEXTO SUPERPUESTO */}
          <div className="absolute bottom-6 left-6 bg-black/40 text-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold">
              {bannerData[index].titulo}
            </h2>
          </div>

          {/* BOTÓN IZQUIERDA */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition cursor-pointer"
          >
            ‹
          </button>

          {/* BOTÓN DERECHA */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition cursor-pointer"
          >
            ›
          </button>

          {/* INDICADORES CIRCULARES */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {bannerData.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroBanner
