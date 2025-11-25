import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'

import Home from '@/pages/Home'
import Institucion from '@/pages/Institucion'
import Servicios from '@/pages/Servicios'
import Turismo from '@/pages/Turismo'
import SeguridadCiudadana from '@/pages/SeguridadCiudadana'
import Transparencia from '@/pages/Transparencia'
import Noticias from '@/pages/Noticias'
import NoticiaDetalle from '@/pages/NoticiaDetalle'
import Contacto from '@/pages/Contacto'

const App = () => {
  return (
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
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}

export default App
