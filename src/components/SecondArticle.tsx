import { GoArrowUpRight } from "react-icons/go"
import firstArticle from "../assets/images/Insights Articles/life resolution.png"
import { Link } from "react-router-dom"
const SecondArticle = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className=" w-[95%] h-[400px] mt-8 rounded-xl mx-auto flex flex-col md:flex-row gap-2">
        <img className="md:w-[50%] w-full h-full rounded-xl object-cover" src={firstArticle} alt="" />
        <div className="relative px-8 md:w-1/2 w-full bg-gray-200 rounded-xl flex flex-col justify-between py-8">
        <div className="flex items-center justify-between">
          <span className=" text-xl uppercase text-gray-600">Innovation</span>
        <GoArrowUpRight className=" text-xl" />
        </div>
           <div className="flex flex-col gap-4 pb-8">
           <h1 className="text-3xl font-medium text-gray-700">Make a
           New Life Resolution</h1>
            <p className=""> Exercise helps the body use insulin more
            effectively, regulates blood sugar levels, and supports healthy weight maintenance.</p>
           </div>
           <Link onClick={scrollToTop} to={"/first"} className="flex items-center justify-center w-24 gap-2 hover:scale-110 transition-all duration-300 hover:opacity-80 bg-black opacity-85 h-10 text-base rounded-3xl uppercase text-white">
                View
                <span><GoArrowUpRight /></span>
            </Link>
        </div>
    </div>
  )
}

export default SecondArticle