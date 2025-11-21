const Contacto = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-bold text-[#003566] mb-6">
        Contacto
      </h1>

      <p className="text-gray-700 mb-4">
        Dirección: Av. Bolognesi ### – La Punta  
        Teléfono: (01) ### ####  
        Correo institucional: contacto@munilapunta.gob.pe
      </p>

      <form className="grid gap-4 max-w-lg mt-8">
        <input className="border p-3 rounded" placeholder="Nombre" />
        <input className="border p-3 rounded" placeholder="Correo" />
        <textarea className="border p-3 rounded" placeholder="Mensaje" rows="4" />

        <button className="bg-[#003566] text-white py-3 rounded font-semibold hover:bg-[#014f86]">
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}

export default Contacto
