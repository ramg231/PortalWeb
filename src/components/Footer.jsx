import logoPunta from '@/assets/logo_mdlp2.png'
import fraseLogo from '@/assets/wefrase.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#005c98] via-[#18a4a9] to-[#e3ab26] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {/* BLOQUE IZQUIERDO - LOGO + FRASE EN HORIZONTAL */}
        <div className="flex items-center gap-6">
            <Link to="/">
          {/* FRASE */}
          <img
            src={fraseLogo}
            alt="Frase Municipalidad La Punta"
            className="h-14 object-contain filter brightness-120 contrast-125"
          />
          </Link> 
          {/* SEPARADOR VERTICAL */}
          <div className="h-16 w-[2px] bg-white/60" />
             <Link to="/">
          {/* ESCUDO */}
          <img
            src={logoPunta}
            alt="Municipalidad La Punta"
            className="h-20 object-contain filter brightness-110 contrast-125"
          />
          </Link> 
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="font-semibold mb-3">Contacto</h3>
          <p className="text-sm">Jr. Saenz Peña 298 - La Punta</p>
          <p className="text-sm">Central: (01) 712-0067</p>
        </div>

        {/* EMERGENCIAS */}
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
