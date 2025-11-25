const Footer = () => {
  return (
    <footer className="bg-[#003566] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        <div>
          <img src="/logo-mdlp-blanco.png" className="h-20" />
          <p className="mt-4 text-sm">
            Municipalidad Distrital de La Punta
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contacto</h3>
          <p className="text-sm">Av. Bolognesi 999 – La Punta</p>
          <p className="text-sm">Central: (01) 123 4567</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Emergencias</h3>
          <p className="text-sm">Serenazgo: 999 999 999</p>
          <p className="text-sm">Defensa Civil: 955 555 555</p>
        </div>

      </div>

      <div className="text-center text-xs mt-10 opacity-70">
        © {new Date().getFullYear()} Municipalidad Distrital de La Punta
      </div>
    </footer>
  )
}

export default Footer
