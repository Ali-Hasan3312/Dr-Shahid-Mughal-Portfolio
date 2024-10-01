import { forwardRef, useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
import offerImage from "../assets/images/Offers/offerImage.png"
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const OurOffers = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
   const [isHover, setIsHover] = useState(false)
  return (
    <div ref={ref} className=" h-auto w-[95%] mx-auto mt-8">
        <div className="flex gap-4">
        <div className=" h-[290px] w-[800px] flex items-center">
           <div className=" w-[90%] mx-auto flex flex-col gap-2">
           <h3 className=" text-lg uppercase text-gray-500 font-normal">Our offers</h3>
            <h1 className=" text-5xl font-medium">WHAT WE DO</h1>
            <p className="text-gray-500">We provide personalized cardiovascular care. From routine check-ups to advanced heart treatments, we're here for you. Contact us today!</p>
           </div>
        </div>
        <div className=" h-[290px] relative bg-gray-200 rounded-lg w-[25vw] flex items-center">
           <div className=" w-[90%]  mx-auto flex flex-col gap-2">
           
            <h1 className=" text-3xl font-medium">Angiography</h1>
            <p className="text-gray-500">Angiography is a diagnostic procedure that uses X-rays to visualize the heart's blood vessels. This helps in identifying blockages or abnormalities in the coronary arteries, ensuring precise treatment planning for heart conditions.</p>
           </div>
        </div>
        <div className=" h-[290px] rounded-lg bg-slate-600 relative w-[25vw] text-white flex items-center">
           <div className=" w-[90%] mx-auto flex flex-col gap-2">
          
            <h1 className=" text-3xl font-medium">Angioplasty</h1>
            <p className="">Angioplasty is a minimally invasive procedure to open blocked or narrowed blood vessels in the heart. Using a small balloon, it restores normal blood flow to the heart, improving overall cardiovascular function.</p>
           </div>
        </div>
        </div>
        <div className="flex gap-4 mt-4">
        <div className=" h-[320px] rounded-lg relative bg-gray-200 w-[25vw] flex items-center">
           <div className=" w-[90%]  mx-auto flex flex-col gap-2">
            <h1 className=" text-3xl font-medium">Artificial Pacemaker Insertion (P.P.M)</h1>
            <p className="text-gray-500">Artificial pacemaker insertion involves placing a small device under the skin to help regulate abnormal heart rhythms. This life-saving procedure ensures your heart maintains a healthy, consistent beat.</p>
           </div>
        </div>
        <div className=" h-[320px] rounded-lg bg-slate-600 relative w-[25vw] text-white flex items-center">
           <div className=" w-[90%] mx-auto flex flex-col gap-2">
            <h1 className=" text-3xl font-medium">Regular Check-ups</h1>
            <p className="">Our regular check-ups focus on monitoring your heart health and preventing potential issues. These appointments include routine evaluations and advice on maintaining optimal cardiovascular well-being.</p>
           </div>
        </div>
        <div
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        className=" h-[320px] cursor-pointer relative rounded-lg w-[800px] flex items-center">
           <img className=" h-full w-full object-cover rounded-lg" src={offerImage} alt="" />
           <GoArrowUpRight className={`absolute top-4 transition-all duration-300 right-4 ${isHover? " scale-150" : ""}`} />
           <button className={`h-10 w-40 rounded-3xl transition-all duration-300 uppercase ${isHover? " scale-110" : ""} text-white bg-zinc-800 absolute bottom-4 left-4`}>View Services</button>
        </div>
        
        </div>
       <div className="flex items-center gap-4 mt-4">
       <div className=" h-[350px] rounded-lg bg-slate-600 relative w-[290px] text-white flex items-center">
           <div className=" w-[90%] mx-auto flex flex-col gap-2">
            <h1 className=" text-3xl font-medium">Heart Disease Management</h1>
            <p className="">We offer comprehensive heart disease management, addressing risk factors such as hypertension, diabetes, and high cholesterol. Our personalized approach ensures long-term heart health through medication, lifestyle adjustments, and regular monitoring.</p>
           </div>
        </div>
        <div className=" h-[350px] rounded-lg relative bg-gray-200 w-[290px] flex items-center">
           <div className=" w-[90%]  mx-auto flex flex-col gap-2">
            <h1 className=" text-3xl font-medium">Continuous Monitoring Services</h1>
            <p className="text-gray-500">Our continuous monitoring services, including Holter Monitor and 24-hour ECG, track your heart’s activity over time. This enables accurate diagnosis and management of irregular heartbeats and other heart-related conditions.</p>
           </div>
        </div>
       </div>
       
    </div>
  )
})

export default OurOffers