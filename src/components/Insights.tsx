import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"
import thirdArticle from "../assets/images/Insights Articles/thirdArticle.png"
import SecondArticle from "./SecondArticle"
import firstArticle from "../assets/images/Insights Articles/firstArticle.png"
import { forwardRef } from "react"
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const Insights = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  return (
    <div ref={ref} className=" mt-8">
        <div className=" md:w-[95%] w-[85%] mx-auto flex flex-col gap-2">
           <h3 className=" text-lg uppercase text-gray-500 font-normal">News over news</h3>
           <div className="flex items-center flex-col md:flex-row gap-4 md:justify-between">
           <h1 className=" text-5xl font-medium">INSIGHTS</h1>
           <Link to={""} className="flex items-center justify-center gap-4 w-52 hover:scale-110 transition-all duration-300 hover:opacity-80 bg-black opacity-85 h-12 text-lg rounded-3xl uppercase font-semibold text-white">
                View Insights
                <span><GoArrowUpRight /></span>
            </Link>
           </div>
           </div>
           <div className="flex flex-col gap-2">
           <SecondArticle />
           <div className="flex w-[95%] mx-auto">
           <div className=" h-[300px] w-[315px] mx-auto">
            <img className=" h-full w-full object-cover rounded-lg" src={firstArticle} alt="" />
           </div>
           <div className=" h-[300px] w-[315px] rounded-lg cursor-pointer mx-auto bg-gray-200 px-4 py-4 flex flex-col justify-between">
           <div className="flex items-center justify-between text-gray-600">
            <span className=" uppercase">News</span>
            <GoArrowUpRight />
           </div>
           <h1 className=" text-3xl font-medium px-2 pb-8 text-gray-800">Eat a Heart Healthy Diet</h1>
           </div>
           <div className=" h-[300px] w-[315px] mx-auto">
            <img className=" h-full w-full object-cover rounded-lg" src={thirdArticle} alt="" />
           </div>
           <div className=" h-[300px] w-[315px] rounded-lg mx-auto cursor-pointer bg-gray-200 px-4 py-4 flex flex-col justify-between">
           <div className="flex items-center justify-between text-gray-600">
            <span className=" uppercase">News</span>
            <GoArrowUpRight />
           </div>
           <h1 className=" text-3xl font-medium px-2 pb-8 text-gray-800">Manage Stress Levels</h1>
           </div>
           </div>
           </div>
    </div>
  )
})

export default Insights