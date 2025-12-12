import PanelSeccion from '@/components/PanelSeccion'
import { controlInternoData } from '@/data/controlInternoData'

const ControlInterno = () => {
  return (
    <main className="py-14 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-3xl font-extrabold text-[#003566] mb-10">
          Sistema de Control Interno
        </h1>

        {controlInternoData.map((seccion, idx) => (
          <PanelSeccion
            key={idx}
            titulo={seccion.titulo}
            items={seccion.items}
          />
        ))}

      </div>
    </main>
  )
}

export default ControlInterno
