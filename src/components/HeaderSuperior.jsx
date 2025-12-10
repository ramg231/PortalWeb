import logoPunta from '@/assets/logo_mdlp2.png'
import transparenciaLogo from '@/assets/transparencia.png'
import gobLogo from '@/assets/logo_gobpe.png'
import fraseLogo from '@/assets/wefrase.png'
import { Link } from "react-router-dom";

const HeaderSuperior = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#005c98] via-[#18a4a9] to-[#e3ab26]">
      <div className="
        max-w-7xl mx-auto px-4 py-3 
        flex flex-col md:flex-row
        items-center md:items-center 
        justify-between 
        gap-4 md:gap-0
      ">
        
        {/* LOGOS IZQUIERDA */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logoPunta}
              alt="Municipalidad La Punta"
              className="h-16 md:h-20 object-contain brightness-110 contrast-125 cursor-pointer"
            />
          </Link>

          <Link to="/">
            <img
              src={fraseLogo}
              alt="Frase Municipalidad La Punta"
              className="h-10 md:h-11 object-contain brightness-120 contrast-125 cursor-pointer"
            />
          </Link>
        </div>

        {/* LOGOS DERECHA */}
        <div className="flex items-center gap-5 md:gap-7">
          <a
            href="https://www.gob.pe/munilapunta"
            target="_blank"
          >
            <img
              src={gobLogo}
              className="h-7 md:h-9 object-contain mt-[2px]"
              alt="Gob.pe Municipalidad La Punta"
            />
          </a>

          <a
            href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=10941"
            target="_blank"
          >
            <img
              src={transparenciaLogo}
              className="h-7 md:h-9 object-contain"
              alt="Portal de Transparencia"
            />
          </a>
        </div>

      </div>
    </div>
  )
}

export default HeaderSuperior
