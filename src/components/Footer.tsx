import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
interface FooterProps {
    onScrollToServices: () => void;
    onScrollToOurClinic: () => void;
    onScrollToOurTeam: () => void;
    onScrollToInsights: () => void;
    onScrollToBookAppointment?: () => void;
  }
const Footer = (
    {
        onScrollToServices,
        onScrollToOurClinic,
        onScrollToOurTeam,
        onScrollToInsights,
    }: FooterProps
) => {
    return (
      <div className="bg-gray-200 relative w-full mx-auto mt-8 py-8 rounded-t-lg">
       <div className="max-w-[90%] mx-auto flex justify-between items-start mb-8">
        
        <div className="text-left flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-4">Dr. Shahid Mughal</h3>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> 055-4277072, 055-4277074
          </p>
          <p className="mb-4">
            <span className="font-semibold">Mobile for Appointments:</span> 0321-1761122
          </p>
          <p>
            <span className="font-semibold">Email:</span> mdrshahidm@gmail.com
          </p>
        </div>

      
        <div className="text-left ">
          <ul className="grid grid-cols-2 gap-8">
            <li className="mb-2 cursor-pointer"><span className="hover:text-gray-700">Home</span></li>
            <li onClick={onScrollToServices} className="mb-2 cursor-pointer"><span  className="hover:text-gray-700">Services</span></li>
            <li onClick={onScrollToOurClinic} className="mb-2 cursor-pointer"><a  className="hover:text-gray-700">Our Clinic</a></li>
            <li onClick={onScrollToOurTeam} className="mb-2 cursor-pointer"><a  className="hover:text-gray-700">Our Team</a></li>
            <li onClick={onScrollToInsights}><a className="hover:text-gray-700 cursor-pointer">Insights</a></li>
          </ul>
        </div>

      
        <div className="text-left">
          <h3 className="text-xl font-bold mb-4">Follow us on social media</h3>
          <ul className="flex flex-col gap-4">
            <li className="mb-2"><a href="www.facebook.com" className="hover:text-gray-700 flex items-center gap-2"><FaFacebook className=" text-blue-700" />Facebook</a></li>
            <li className="mb-2"><a href="www.instagram.com" className="hover:text-gray-700 flex items-center gap-2"><BsInstagram className=" text-pink-700" />Instagram</a></li>
            <li className="mb-2"><a href="www.twitter.com" className="hover:text-gray-700 flex items-center gap-2"><FaXTwitter className="" />Twitter</a></li>
           
          </ul>
        </div>
      </div>

     
      <div className="min-w-[100%] absolute bottom-0 bg-slate-600 py-2 mx-auto flex items-center justify-center text-gray-300">
        <p>© Copyright Dr. Shahid Mughal 2024 Made by CMYK Research</p>
      </div>
      
      </div>
    );
  };
  
  export default Footer;
  