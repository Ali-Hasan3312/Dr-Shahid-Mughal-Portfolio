import { GoArrowUpRight } from "react-icons/go";
import heroImage from "../assets/images/usman-yousaf-removebg-preview.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="relative h-[105vh] w-[95%] bg-gray-300 rounded-lg mx-auto mt-12 py-8">
        <div className="flex flex-col gap-4 px-8 w-[40%]">
          <h1 className=" uppercase text-[60px] leading-[1]">We care about your smile</h1>
          <h1 className=" text-2xl text-nowrap font-semibold">Consultant Interventional Cardiologist </h1>
          <div className="">
            <h1 className=" text-lg font-bold">Qualifications:</h1>
            <ul className="list-disc ml-5">
              <li>MBBS, FCPS, MACC (USA), MESC</li>
              <li>CHPE Shifa Tameer-e-Millat University</li>
              <li>ICMT SEDA Liverpool (UK)</li>
            </ul>
          </div>
          <div className="">
            <h1 className=" text-lg font-bold">Affiliations:</h1>
            <ul className="list-disc ml-5">
              <li>Consultant at Chaudhry Pervaiz Elahi Institute of Cardiology</li>
              <li>Consultant Medical Specialist</li>
              <li>Former Professor of Cardiology, GMC</li>
            </ul>
          </div>
            <Link to={""} className="flex items-center justify-center gap-4 w-[58%] hover:scale-110 transition-all duration-300 hover:opacity-80 bg-black opacity-85 h-12 text-lg rounded-xl uppercase font-semibold text-white">
                Book Appointment
                <span><GoArrowUpRight /></span>
            </Link>
        </div>
        <img src={heroImage} alt="doctor" className="absolute right-0 -top-14 h-[650px] w-[60%] object-cover mix-blend-color-bur" />
    </div>
  )
}

export default HeroSection