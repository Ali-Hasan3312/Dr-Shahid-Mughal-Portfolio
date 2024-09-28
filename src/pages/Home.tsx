import FAQ from "../components/FAQs"
import HeroSection from "../components/HeroSection"
import Insights from "../components/Insights"
import Navbar from "../components/Navbar"
import OurClinic from "../components/OurClinic"
import OurOffers from "../components/OurOffers"
import OurTeam from "../components/OurTeam"

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <OurOffers />
        <OurClinic />
        <OurTeam />
        <Insights />
        <FAQ />
    </div>
  )
}

export default Home