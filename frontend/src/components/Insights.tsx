import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"
import thirdArticle from "../assets/images/Insights Articles/thirdArticle.jpg"
import SecondArticle from "./SecondArticle"
import firstArticle from "../assets/images/Insights Articles/firstArticle.jpg"
import { forwardRef } from "react"
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const Insights = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div ref={ref} className=" mt-8">
        <div className=" md:w-[95%] w-[85%] mx-auto flex flex-col gap-2">
           <h3 className=" text-lg uppercase text-gray-500 font-normal">News over news</h3>
           <div className="flex items-center flex-col md:flex-row gap-4 md:justify-between">
           <h1 className=" text-5xl font-medium">INSIGHTS</h1>
          
           </div>
           </div>
           <div className="flex flex-col gap-2">
           <SecondArticle />
           <div className=" flex md:w-[95%] max-sm:gap-4 flex-col md:flex-row max-sm:mt-28 mx-auto">
           <div className="h-[300px] w-[95%] md:w-[315px] mx-auto">
            <img className=" h-full w-full object-cover rounded-lg" src={firstArticle} alt="" />

           </div>
           <div className="relative h-[300px] w-[95%] md:w-[315px] rounded-lg mx-auto bg-gray-200 px-4 py-4 flex flex-col justify-between">
           <div className="flex items-center justify-between text-gray-600">
            <span className=" uppercase">News</span>
            <GoArrowUpRight />
           </div>
           <h1 className=" text-3xl font-medium px-2 pb-8 text-gray-800">What’s Your
           Heart Score?</h1>
           <Link onClick={scrollToTop} to={"/third"} className="flex items-center justify-center w-24 gap-2 hover:scale-110 transition-all duration-300 hover:opacity-80 bg-black opacity-85 h-10 text-base rounded-3xl uppercase text-white">
                View
                <span><GoArrowUpRight /></span>
            </Link>
           </div>
           <div className=" h-[300px] w-[95%] md:w-[315px] mx-auto">
            <img className=" h-full w-full object-cover rounded-lg" src={thirdArticle} alt="" />
           </div>
           <div className="relative h-[300px] w-[95%] md:w-[315px] rounded-lg mx-auto bg-gray-200 px-4 py-4 flex flex-col justify-between">
           <div className="flex items-center justify-between text-gray-600">
            <span className=" uppercase">News</span>
            <GoArrowUpRight />
           </div>
           <h1 className=" text-3xl font-medium px-2 pb-8 text-gray-800">Heart Attack Warning Signs</h1>
           <Link onClick={scrollToTop} to={"/second"} className="flex items-center justify-center w-24 gap-2 hover:scale-110 transition-all duration-300 hover:opacity-80 bg-black opacity-85 h-10 text-base rounded-3xl uppercase text-white">
                View
                <span><GoArrowUpRight /></span>
            </Link>
           </div>

           </div>
           </div>
    </div>
  )
})

export default Insights