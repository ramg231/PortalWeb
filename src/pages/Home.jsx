import { useState, useEffect } from "react";
import PopoverModal from "@/components/PopoverModal";
import HeroBanner from '@/components/HeroBanner'
import ServiciosDestacados from '@/components/ServiciosDestacados'
import AlcaldeSection from '@/components/AlcaldeSection'
import NoticiasHome from '@/components/NoticiasHome'
import CampaniasHome from '@/components/CampaniasHome'
import Footer from '@/components/Footer'
import SocialBar from '@/components/SocialBar'
import HeaderSup from '@/components/HeaderSuperior'
import Navbar from '@/components/Navbar'
import { popoverData } from "@/data/popoverData";
 
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  /*
    useEffect(() => {
      // Evita que vuelva a aparecer si el usuario ya lo cerró
      const alreadyClosed = localStorage.getItem("modalHomeClosed");
      if (!alreadyClosed) {
        setShowModal(true);
      }
    }, []);
  
    const closeModal = () => {
      setShowModal(false);
      localStorage.setItem("modalHomeClosed", "true");
    };
    */


  /*
  sin localStorage
useEffect(() => {
  setShowModal(true); // siempre aparece
}, []);

const closeModal = () => {
  setShowModal(false); // solo cerrar
};
*/
  useEffect(() => {
    if (!popoverData.activo) return;

    const now = Date.now();
    const lastClose = localStorage.getItem("lastCloseTime");

    const twoMinutes = popoverData.delayMinutos * 60 * 1000;

    if (!lastClose) {
      setShowModal(true);
    } else {
      const diff = now - Number(lastClose);
      if (diff >= twoMinutes) {
        setShowModal(true);
      }
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("lastCloseTime", Date.now().toString());
  };


  return (
    <>
      {/* POPUP */}
      {showModal && (
        <PopoverModal
          imagenes={popoverData.imagenes}  // ✔ desde data
          onClose={closeModal}
        />
      )}
      <HeroBanner />
      <ServiciosDestacados />
      <AlcaldeSection />
      <NoticiasHome />
      <CampaniasHome />

      <SocialBar />
    </>
  )
}

export default Home
