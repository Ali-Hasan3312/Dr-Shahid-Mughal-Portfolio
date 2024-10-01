import { forwardRef, useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const OurTeam = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
    const [isHover, setIsHover] = useState(false)
  return (
    <div ref={ref} className=" mt-8">
         <div className=" w-[90%] mx-auto flex flex-col gap-2">
           <h3 className=" text-lg uppercase text-gray-500 font-normal">who are we</h3>
            <h1 className=" text-5xl font-medium uppercase">our Team</h1>
            <p className="text-gray-500">Meet our team of cardiology experts, committed to delivering top-quality cardiovascular care. Highly <br /> trained and compassionate, our staff ensures a welcoming and supportive experience for every patient.</p>
           </div>
           <div className="w-[90%] mx-auto mt-8 flex items-center gap-4">
            <div
             onMouseEnter={()=>setIsHover(true)}
             onMouseLeave={()=>setIsHover(false)}
             className="h-[390px] cursor-pointer rounded-lg flex flex-col gap-4 w-[340px] bg-slate-600 px-8 py-4">
                <div className="flex items-center justify-between text-white">
                    <span className="uppercase text-xl text-gray-200 font-light">Meet Us</span>
                    <GoArrowUpRight  className={`text-xl transition-all duration-300 ${isHover? "scale-150" : ""}`} />
                </div>
                <h1 className=" text-gray-100 text-3xl">We are a team of experts</h1>
                <p className=" text-gray-100 text-base">Our clinic stands at the forefront of cardiovascular innovation and patient care. We are equipped with the latest technology to deliver optimal outcomes for heart health.</p>
                <button className={` w-32 rounded-3xl py-2 transition-all duration-300 uppercase ${isHover? " scale-110" : ""} text-black font-medium bg-white `}>About Us</button>
            </div>
            <img className="w-[600px] h-[390px] object-cover rounded-lg" src="https://cdn.prod.website-files.com/662e5390115777703fa6e8da/663b6ffbbdc285e30c4784b0_DrMarc.webp" alt="" />
            <div className="h-[390px] cursor-pointer rounded-lg flex flex-col gap-4 justify-between w-[340px] bg-gray-200 px-8 py-8">
               <h1 className=" text-3xl font-medium text-gray-800">Dr. Marc Catherine</h1>
               <p className=" text-gray-800">Dr. Marc Catherine is an accomplished orthodontist. Her expertise and attention to detail ensure optimal outcomes for patients seeking a aesthetic smile</p>
            </div>
           </div>
    </div>
  )
})

export default OurTeam