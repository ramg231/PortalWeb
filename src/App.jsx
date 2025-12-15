import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import ScrollToTop from '@/components/ScrollToTop'

import Home from '@/pages/Home'
import Institucion from '@/pages/Institucion'
import Servicios from '@/pages/Servicios'
import Turismo from '@/pages/Turismo'
import SeguridadCiudadana from '@/pages/SeguridadCiudadana'
import Transparencia from '@/pages/Transparencia'
import Noticias from '@/pages/Noticias'
import NoticiaDetalle from '@/pages/NoticiaDetalle'
import Contacto from '@/pages/Contacto'
import Campanias from '@/pages/Campanias'
import CampaniaDetalle from '@/pages/CampaniaDetalle'
import Alcalde from '@/pages/Alcalde'
import Adopta from '@/pages/Adopta'
import CentroMedico from '@/pages/CentroMedico'
import ControlInterno from '@/pages/ControlInterno'
import NormasEmitidas from '@/pages/NormasEmitidas'
import TributosArbitrios from '@/pages/TributosArbitrios'
import LicenciasFuncionamiento from '@/pages/LicenciasFuncionamiento'
import LicenciasEdificacion from '@/pages/LicenciasEdificacion'
const App = () => {
  return (
    <>
      {/* Scroll automático al cambiar de ruta */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="institucion" element={<Institucion />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="turismo" element={<Turismo />} />
          <Route path="seguridad-ciudadana" element={<SeguridadCiudadana />} />
          <Route path="transparencia" element={<Transparencia />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="noticias/:id" element={<NoticiaDetalle />} />
          <Route path="campanias" element={<Campanias />} />
          <Route path="campanias/:id" element={<CampaniaDetalle />} />
          <Route path="alcalde" element={<Alcalde />} />
          <Route path="adopta-amigo" element={<Adopta />} />
          <Route path="centro-medico" element={<CentroMedico />} />
          <Route path="control-interno" element={<ControlInterno />} />
          <Route path="directivas" element={<NormasEmitidas />} />
          <Route path="tributos" element={<TributosArbitrios />} />
          <Route path="licencias-funcionamiento" element={<LicenciasFuncionamiento />} />
          <Route path="licencias-edificacion" element={<LicenciasEdificacion />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
