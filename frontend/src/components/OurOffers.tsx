import { forwardRef } from "react"
import offerImage from "../assets/images/services1.jpg"
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const OurOffers = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  
  return (
    <div ref={ref} className=" h-auto w-[95%] mx-auto mt-2 md:mt-8">
        <div className="flex gap-4 flex-col md:flex-row">
        <div className=" h-[200px] mt-4 md:h-[290px] md:w-[800px] flex items-center">
           <div className=" w-[90%] mx-auto flex flex-col gap-2">
           <h3 className=" text-lg uppercase text-gray-500 font-normal">Our Services</h3>
            <h1 className=" text-5xl font-medium">WHAT I DO</h1>
            <p className="text-gray-500 text-base max-sm:text-sm">Offering expert cardiovascular care, from routine exams to advanced heart treatments. Reach out to us today!</p>
           </div>
        </div>
        <div className=" h-[290px] relative bg-gray-200 rounded-lg w-[90vw] mx-auto md:w-[25vw] flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">1</span></p>
           <div>
           <h1 className=" text-3xl font-medium">Angiography</h1>
           <p className="text-gray-500">This advanced diagnostic method helps in identifying blockages or abnormalities in the coronary arteries.</p>
           </div>
           </div>
        </div>
        <div className=" h-[290px] rounded-lg bg-slate-600 relative w-[90vw] mx-auto md:w-[25vw] text-white flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">2</span></p>

           <div>
           <h1 className=" text-3xl font-medium">Angioplasty</h1>
           <p className="">Angioplasty restores normal blood flow to the heart, improving overall cardiovascular function.</p>
           </div>
           </div>
        </div>
        </div>
        <div className="flex gap-4 mt-4 flex-col md:flex-row">
        <div className=" h-[320px] rounded-lg relative bg-gray-200 w-[90vw] mx-auto md:w-[25vw] flex items-center">
           <div className=" w-[90%]  h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">3</span></p>
          <div>
          <h1 className=" text-3xl font-medium">Artificial Pacemaker </h1>
          <p className="text-gray-500">This life-saving procedure ensures your heart maintains a healthy, consistent beat.</p>
          </div>
           </div>
        </div>
        <div className=" h-[320px] rounded-lg bg-slate-600 relative w-[90vw] mx-auto md:w-[25vw] text-white flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">4</span></p>
           <div>

            <h1 className=" text-3xl font-medium">Regular Check-ups</h1>
            <p className="">Routine evaluation, appointments advice help maintain optimal cardiovascular well-being.</p>
           </div>
           </div>
        </div>
        <div
      
        className=" h-[320px] relative rounded-lg w-[90vw] mx-auto md:w-[800px] flex items-center">
           <img className=" h-full w-full object-cover rounded-lg" src={offerImage} alt="" />
        </div>
        </div>
       <div className="flex mt-4 gap-4 flex-col md:flex-row">
       <div className=" h-[350px] rounded-lg bg-slate-600 relative  w-[90vw] md:w-[21vw] max-sm:mx-auto text-white flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">5</span></p>
            <div>
            <h1 className=" text-3xl font-medium">Heart Disease Management</h1>
            <p className="">Our personalized approach ensures long-term heart health through medication, lifestyle adjustments, and regular monitoring.</p>
            </div>
           </div>
        </div>
        <div className=" h-[350px] rounded-lg relative bg-gray-200 w-[90vw] md:w-[21vw] max-sm:mx-auto flex items-center">
           <div className=" w-[90%]  h-full mx-auto flex flex-col gap-14 py-8">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">6</span></p>
            <div>
            <h1 className=" text-3xl font-medium">Monitoring Services</h1>
            <p className="text-gray-500">Our monitoring services enable accurate diagnosis and management of irregular heartbeats.</p>
            </div>
           </div>
        </div>
       </div>
       
    </div>
  )
})

export default OurOffers