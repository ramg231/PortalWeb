import CardCampania from '@/components/CardCampania'

const Campanias = () => {

  const campaniasDemo = [
    {
      titulo: "Campaña de Vacunación en La Punta",
      fecha: "21/11/2024",
      resumen: "Vacunación gratuita para niños y adultos mayores en el frontis municipal.",
      imagen: "/demo/campania1.jpg",
    },
    {
      titulo: "Campaña de Donación de Sangre",
      fecha: "18/11/2024",
      resumen: "Jornada de donación realizada en coordinación con el Ministerio de Salud.",
      imagen: "/demo/campania2.jpg",
    },
    {
      titulo: "Campaña de Limpieza Costera",
      fecha: "15/11/2024",
      resumen: "Vecinos se unieron para la limpieza del litoral y conservación ambiental.",
      imagen: "/demo/campania3.jpg",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-bold text-[#003566] mb-10">
        Campañas
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {campaniasDemo.map((c, idx) => (
          <CardCampania key={idx} {...c} />
        ))}
      </div>
    </div>
  )
}

export default Campanias
