const AlcaldeSection = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        <div className="flex justify-center">
          <div className="w-64 h-80 bg-gray-200 rounded-xl shadow-md flex items-center justify-center">
            <span className="text-gray-500">Foto del Alcalde</span>
          </div>
        </div>

        <div>
          <p className="uppercase text-sm font-bold text-[#003566]">
            Alcalde
          </p>
          <h2 className="text-4xl font-extrabold text-[#001d3d] mt-1">
            NOMBRE DEL ALCALDE
          </h2>

          <button className="mt-8 py-3 px-6 bg-[#003566] text-white rounded-full shadow hover:bg-[#014f86] transition">
            Ver perfil →
          </button>
        </div>

      </div>
    </section>
  )
}

export default AlcaldeSection
