import { forwardRef } from "react";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const About = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
    return (
      <div ref={ref} className="md:w-[95%] w-[85%] mx-auto mt-12">
          <h1 className="md:text-[60px] text-[30px] font-medium mb-6">Learn more about me</h1>
          <p className="text-gray-500">A highly esteemed cardiologist dedicated to advancing heart health and patient wellness. <br /> With extensive training and years of experience, Dr. Mughal  combines medical expertise <br /> with a compassionate approach to care. </p>
          <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-4">
          <div className=" h-[290px] relative bg-gray-200 rounded-lg md:w-[30vw] w-[85vw] mx-auto flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">1</span></p>
           <div>
           <h1 className=" text-3xl font-medium">Consultant Interventional Cardiologist</h1>
           <p className="text-gray-500">specializes in diagnosing and treating heart conditions through minimally invasive procedures.</p>
           </div>
           </div>
        </div>
        <div className=" h-[290px] rounded-lg bg-slate-600 relative  md:w-[30vw] w-[85vw] mx-auto text-white flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">2</span></p>
           <div className="flex flex-col gap-2">
           <h1 className=" text-3xl font-medium">Qualifications</h1>
           <ul className=" list-disc ml-4">
            <li>MBBS, FCPS, MACC (USA), MESC</li>
            <li>CHPE Shifa Tameer-e-Millat University</li>
            <li>ICMT SEDA Liverpool (UK)</li>
           </ul>
           </div>
           </div>
        </div>
        <div className=" h-[290px] relative bg-gray-200 rounded-lg  md:w-[30vw] w-[85vw] mx-auto flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">3</span></p>
           <div>
           <h1 className=" text-3xl font-medium">Affiliations</h1>
           <ul className=" list-disc ml-4">
            <li>Consultant at Chaudhry Pervaiz Elahi Institute of Cardiology</li>
            <li>Consultant Medical Specialist</li>
            <li>Former Professor of Cardiology, GMC</li>
           </ul>
           </div>
           </div>
        </div>
        <div className=" h-[290px] rounded-lg bg-slate-600 relative  md:w-[30vw] w-[85vw] mx-auto text-white flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">4</span></p>

           <div className="flex flex-col gap-2">
           <h1 className=" text-3xl font-medium">Professional Background</h1>
           <p className=" text-white">Role at
the Chaudhry Pervaiz Elahi Institute of Cardiology, and past teaching
position as a former professor</p>
           </div>
           </div>
        </div>
        <div className=" h-[290px] relative bg-gray-200 rounded-lg  md:w-[30vw] w-[85vw] mx-auto flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">5</span></p>
           <div className=" flex flex-col gap-4">
           <h1 className=" text-3xl font-medium">Specializations</h1>
           <p className="text-gray-500">Expertise in angiography, angioplasty, and artificial pacemaker (P.P.M)
           insertion.</p>
           </div>
           </div>
        </div>
        <div className=" h-[290px] rounded-lg bg-slate-600 relative  md:w-[30vw] w-[85vw] mx-auto text-white flex items-center">
           <div className=" w-[90%] h-full mx-auto flex flex-col justify-between py-8 gap-2">
           <p className=" text-2xl text-gray-400">/<span className=" text-3xl">6</span></p>

           <div className="flex flex-col gap-4">
           <h1 className=" text-3xl font-medium">Languages and Areas of Service</h1>
           <p className=" text-white">Urdu and English-speaking patients, serving the Gujranwala area.</p>
           </div>
           </div>
        </div>
          </div>
      </div>
    );
  })
  
  export default About;
  