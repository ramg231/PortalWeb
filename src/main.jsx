import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import HeaderSup from '@/components/HeaderSuperior'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import App from './App'
 
import './index.css'

//         
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <HeaderSup />
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
 
  </StrictMode>,
)
