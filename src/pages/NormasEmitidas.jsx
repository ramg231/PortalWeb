import TablaNormas from "@/components/TablaNormas"
import { normasEmitidas } from "@/data/normasEmitidas"

const NormasEmitidas = () => {
  return (
    <section className="py-14  ">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl font-extrabold text-[#003566] mb-8">
          Directivas
        </h1>

        <TablaNormas data={normasEmitidas} />

      </div>
    </section>
  )
}

export default NormasEmitidas
