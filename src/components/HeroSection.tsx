import { GoArrowUpRight } from "react-icons/go";
import heroImage from "../assets/images/usman-yousaf-removebg-preview.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="relative overflow-x-hidden w-[95%] bg-gradient-to-r from-gray-400 via-gray-200 to-gray-300 rounded-lg mx-auto mt-8 md:py-8 pt-6">
        <div className="flex flex-col gap-4 px-8 w-[90%] md:w-[40%]">
        <h1 className=" md:text-[90px] text-[40px] uppercase leading-[1]">I care about your smile</h1>
        <span>I offers a range of services in a friendly atmosphere, ensuring your heart health is our top priority.</span>
          
            <Link to={""} className="flex items-center justify-center gap-4 h-14 w-[200px] md:w-[58%] hover:scale-110 transition-all duration-300 hover:opacity-80 bg-black opacity-85 md:h-12 text-sm md:text-lg rounded-xl uppercase font-semibold text-white">
                Book Appointment
                <span><GoArrowUpRight /></span>
            </Link>
        <img src={heroImage} alt="doctor" className="absolute opacity-0 md:opacity-100 right-0 z-50 md:-right-56 bottom-0 h-full w-[40%] md:w-[80%] object-cover mix-blend-color-bur" />
        </div>
        <img src={heroImage} className="w-[100%] h-[50vh] object-cover md:hidden" alt="" />
    </div>
  )
}

export default HeroSection