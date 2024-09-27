import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-200 rounded-lg text-black w-[95%] mx-auto  mt-4">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
       
        <div className="text-xl font-bold">
          <Link to="/" className=' uppercase'>Dr. Shahid Mughal</Link>
        </div>
 
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
       <div className='flex items-center gap-4'>
        <span>Cart(0)</span>
        <div className='flex items-center gap-4'>
            <span>Book Appointment</span>
            <div className=' h-8 w-8 bg-black rounded-full text-white flex items-center justify-center text-xl cursor-pointer'>
                <div><GoArrowUpRight />
                </div>
            </div>
        </div>
       </div>
        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
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
        <div className="md:hidden bg-black text-white space-y-2 px-4 py-2">
          <Link to="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="block hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="block hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="block hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
