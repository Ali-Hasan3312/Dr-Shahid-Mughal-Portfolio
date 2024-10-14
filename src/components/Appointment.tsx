import { forwardRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const Appointment =forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
    return (
        <div ref={ref} className="h-[800px] md:w-[90%] w-[95%] mx-auto ">
       <h2 className="md:text-5xl text-[30px] font-medium mb-6 mt-6">Book Appointment</h2>        <div className=" h-[600px] grid grid-cols-[70%_30%] w-full mx-auto shadow-lg mt-4">
       <div className="grid grid-cols-[70%_30%] md:w-[90vw] w-[95vw]  max-sm:grid-cols-1">
       <div className=" bg-white max-sm:rounded-t-lg md:rounded-l-lg max-sm:w-full">
            <div className=" md:w-[80%] mx-auto max-sm:px-2 mt-8">
            <div className="grid md:grid-cols-2 grid-cols-1 ">
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Name *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Your name" />
                    
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Email *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Your email" />
                    
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Phone *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Phone #" />
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Date *</label>
                    <input type="date" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" />
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Time *</label>
                    <input type="time" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" />
                </div>
            </div>
           
                <button className=" h-12 w-44 mt-4 hover:opacity-70 transition-all duration-300 text-white bg-blue-900 ">Book Appointment</button>
                <div className=" max-sm:mt-4"></div>
            </div>
        </div>
        <div className=" bg-blue-900 max-sm:px-4 max-sm:pb-4 max-sm:rounded-b-lg">
            <div className=" w-[80%] max-sm:w-full mx-auto text-gray-400 flex flex-col gap-4 mt-8">
            <h1 className=" text-xl text-white">Contact Information</h1>
            <p>We will be happy to help with any questions you might have about the Clinic or Doctor!</p>
            <div className="flex items-start gap-4 mt-8">
                <FaLocationDot className=" text-white text-xl" />
                <p>Central Hospital, Kangni Wala, Main G.T. Road, Gujranwala</p>
            </div>
           <div>
           
            <h1 className=" text-white mt-4">For Appointment:</h1>
           <div className="flex items-start gap-4 mt-2">
                <IoCall className=" text-white text-xl" />
                <p>032-11761122</p>
            </div>
           </div>
            <div className="flex items-start gap-4 mt-8">
                <IoMdMail className=" text-white text-xl" />
                <p>mdrshahidm@gmail.com</p>
            </div>
            </div>
        </div>
       </div>
        </div>
        
    </div>
    )
  })
  
  export default Appointment;
  