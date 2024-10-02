import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeUp } from '../utils/Animation';
interface NavbarProps {
  onScrollToServices: () => void;
  onScrollToOurClinic: () => void;
  onScrollToOurTeam: () => void;
  onScrollToInsights: () => void;
  onScrollToBookAppointment: () => void;
  onScrollToAboutme: () => void;
}
const Navbar = (
  {
    onScrollToServices,
    onScrollToOurClinic,
    onScrollToOurTeam,
    onScrollToInsights,
    onScrollToBookAppointment,
    
  }: NavbarProps
) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-200 rounded-lg text-black w-[95%] mx-auto  mt-4">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
       
        <div className="text-xl font-bold">
          <Link to="/" className=' uppercase'>Dr. Shahid Mughal</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <button className="hover:text-gray-500 transition-all duration-300">
            Home
          </button>
          <button onClick={onScrollToServices}  className="hover:text-gray-500 transition-all duration-300">
            Services
          </button>
          <button onClick={onScrollToOurClinic}  className="hover:text-gray-500 transition-all duration-300">
            Our Clinic
          </button>
         
          <button onClick={onScrollToInsights}  className="hover:text-gray-500 transition-all duration-300">
            Insights
          </button>
          <button onClick={onScrollToOurTeam}  className="hover:text-gray-500 transition-all duration-300">
            About Me
          </button>
        
        
        
        </div>
       <div className='flex items-center gap-4'>
       
        <div onClick={onScrollToBookAppointment} className='flex items-center gap-4 opacity-0 cursor-pointer md:opacity-100'>
            <span>Book Appointment</span>
            <div className='hover:scale-125 transition-all duration-300 h-8 w-8 bg-black rounded-full text-white flex items-center justify-center text-xl cursor-pointer'>
                <div><GoArrowUpRight />
                </div>
            </div>
        </div>
       </div>
        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={FadeUp(0.2)}
        className="md:hidden bg-slate-700 text-white space-y-2 px-4 py-8">
         <div className='flex flex-col gap-2 px-4'>
         <button  className=" text-left hover:text-gray-300">
            Home
          </button>
          <div className=' border-b border-gray-400 mt-2'></div>
         </div>
         <div className='flex flex-col gap-2 px-4'>
         <button onClick={onScrollToServices} className="text-left hover:text-gray-300">
            Services
          </button>
          <div className=' border-b border-gray-400 mt-2'></div>
         </div>
         <div className='flex flex-col gap-2 px-4'>
         <button onClick={onScrollToOurClinic} className="text-left hover:text-gray-300">
            Our Clinic
          </button>
          <div className=' border-b border-gray-400 mt-2'></div>
         </div>
         <div className='flex flex-col gap-2 px-4'>
         <button onClick={onScrollToInsights} className="text-left hover:text-gray-300">
            Insights
          </button>
          <div className=' border-b border-gray-400 mt-2'></div>
         </div>
         <div className='flex flex-col gap-2 px-4'>
         <button onClick={onScrollToOurTeam} className="text-left hover:text-gray-300">
            About Me
          </button>
         </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
