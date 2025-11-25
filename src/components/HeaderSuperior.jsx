import logoPunta from '@/assets/logo_mdlp2.png'
import transparenciaLogo from '@/assets/transparencia.png'
import gobLogo from '@/assets/logo_gobpe.png'
import fraseLogo from '@/assets/wefrase.png'

const HeaderSuperior = () => {
  return (
    <div className="w-full  bg-gradient-to-r from-[#005c98] via-[#18a4a9] to-[#e3ab26]  ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO MUNICIPALIDAD DE LA PUNTA */}
        <div className="flex items-center gap-3">
          <img
            src={logoPunta}
            alt="Municipalidad La Punta"
            className="h-20 object-contain filter brightness-110 contrast-125"
          />
          <img
            src={fraseLogo}
            alt="Frase Municipalidad La Punta"
            className="h-11 object-contain filter brightness-120 contrast-125"

          />


          {/* 
          <div className="leading-tight hidden md:block">
            <p className="text-[13px] text-white font-semibold uppercase">
              Municipalidad Distrital de
            </p>
            <p className="text-xl font-bold text-white -mt-1 uppercase">
              La Punta
            </p>
          </div>
       */}

        </div>


        <div className="flex items-center gap-7">
          <a
            href="https://www.gob.pe/munilapunta"
            target="_blank"
         
          >
            <img
              src={gobLogo}
              className="h-9 object-contain mt-[5px]"
              alt="Gob.pe Municipalidad La Punta"
            />
          </a>

          {/* PORTAL DE TRANSPARENCIA */}
          <a
            href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=10941"
            target="_blank"
         
          >
            <img
              src={transparenciaLogo}
              className="h-9 object-contain"
              alt="Portal de Transparencia"
            />
          </a>
        </div>

      </div>
    </div>
  )
}

export default HeaderSuperior
