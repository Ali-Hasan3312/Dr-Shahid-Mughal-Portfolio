import { forwardRef, useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
import clinic1 from "../assets/images/clinic/clinic1.png"
import clinic2 from "../assets/images/clinic/clinic2.png"
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const OurClinic = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
    const [isHover, setIsHover] = useState(false)

  return (
    <div ref={ref} className=" mt-8">
         <div className=" w-[90%] mx-auto flex flex-col gap-2">
           <h3 className=" text-lg uppercase text-gray-500 font-normal">where</h3>
            <h1 className=" text-5xl font-medium uppercase">our clinic</h1>
            <p className="text-gray-500">Established to provide exceptional cardiac care, our clinic embraces advanced technology and compassionate <br /> service. Our skilled cardiologists prioritize patient well-being and precision in every diagnosis and treatment.</p>
           </div>
           <div className="flex items-center gap-4 w-[90%] mx-auto mt-8">
            <div className="w-[600px] h-[300px] object-cover">
                <img src={clinic1} alt="" />
            </div>
            <div
            onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
            className="w-[600px] h-[300px] object-cover relative cursor-pointer">
                <img className="" src={clinic2} alt="" />
                <GoArrowUpRight className={`absolute top-4 transition-all text-white duration-300 right-4 ${isHover? " scale-150" : ""}`} />
                <button className={`h-10 w-56 rounded-3xl transition-all duration-300 uppercase ${isHover? " scale-110" : ""} text-white bg-zinc-800 absolute bottom-4 left-4`}>Book Appointment</button>
            </div>
           </div>
    </div>
  )
})

export default OurClinic