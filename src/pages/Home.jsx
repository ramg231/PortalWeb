import HeroBanner from '@/components/HeroBanner'
import ServiciosDestacados from '@/components/ServiciosDestacados'
import AlcaldeSection from '@/components/AlcaldeSection'
import NoticiasHome from '@/components/NoticiasHome'
import Footer from '@/components/Footer'
import SocialBar from '@/components/SocialBar'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <ServiciosDestacados />
      <AlcaldeSection />
      <NoticiasHome />
      <Footer />
      <SocialBar />
    </>
  )
}

export default Home
