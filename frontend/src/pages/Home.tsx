import { Suspense, lazy, useRef } from "react";
import Loader from "../components/Loader";
import About from "../components/About";
import GotoTopButton from "../components/GoToTopButton";

const Appointment = lazy(() => import("../components/Appointment"));
const FAQ = lazy(() => import("../components/FAQs"));
const Footer = lazy(() => import("../components/Footer"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const Insights = lazy(() => import("../components/Insights"));
const MapLocation = lazy(() => import("../components/MapLocation"));
const Navbar = lazy(() => import("../components/Navbar"));
const OurClinic = lazy(() => import("../components/OurClinic"));
const OurOffers = lazy(() => import("../components/OurOffers"));
const OurTeam = lazy(() => import("../components/OurTeam"));
const Home = () => {
  const OurOffersRef = useRef<HTMLDivElement>(null);
  const OurClinicRef = useRef<HTMLDivElement>(null);
  const OurTeamRef = useRef<HTMLDivElement>(null);
  const InsightsRef = useRef<HTMLDivElement>(null);
  const AppointmentRef = useRef<HTMLDivElement>(null);
  const AboutmeRef = useRef<HTMLDivElement>(null);
  const handleScrollToOffersRef = ()=>{
    if (OurOffersRef.current) {
      OurOffersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScrollToClinicRef = ()=>{
    if (OurClinicRef.current) {
      OurClinicRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScrollToTeamRef = ()=>{
    if (OurTeamRef.current) {
      OurTeamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScrollToInsightsRef = ()=>{
    if (InsightsRef.current) {
      InsightsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScrollToAppointmentRef = ()=>{
    if (AppointmentRef.current) {
      AppointmentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleScrollToAboutmeRef = ()=>{
    if (AboutmeRef.current) {
      AboutmeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Suspense fallback={<Loader />}>
      <div className=" overflow-x-hidden">
        <Navbar
         onScrollToServices={handleScrollToOffersRef}
          onScrollToOurClinic={handleScrollToClinicRef}
           onScrollToOurTeam={handleScrollToTeamRef}
            onScrollToInsights={handleScrollToInsightsRef}
             onScrollToBookAppointment={handleScrollToAppointmentRef}
             onScrollToAboutme={handleScrollToAboutmeRef}
        />
        <GotoTopButton />
        <HeroSection onScrollToBookAppointment={handleScrollToAppointmentRef} />
        <About ref={AboutmeRef} />
        <OurOffers ref={OurOffersRef} />
        <OurClinic ref={OurClinicRef} onScrollToBookAppointment={handleScrollToAppointmentRef}  />
        <OurTeam ref={OurTeamRef} />
        <Insights ref={InsightsRef} />
        <FAQ />
        <Appointment ref={AppointmentRef} />
        <MapLocation />
        <Footer onScrollToServices={handleScrollToOffersRef}
          onScrollToOurClinic={handleScrollToClinicRef}
           onScrollToOurTeam={handleScrollToTeamRef}
            onScrollToInsights={handleScrollToInsightsRef}
             onScrollToBookAppointment={handleScrollToAppointmentRef} />
      </div>
    </Suspense>
  );
};

export default Home;
