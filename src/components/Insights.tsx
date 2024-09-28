import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"
import FirstArticle from "./FirstArticle"
import SecondArticle from "./SecondArticle"
import ThirdArticle from "./ThirdArticle"

const Insights = () => {
  return (
    <div className=" mt-8">
        <div className=" w-[90%] mx-auto flex flex-col gap-2">
           <h3 className=" text-lg uppercase text-gray-500 font-normal">News over news</h3>
           <div className="flex items-center justify-between">
           <h1 className=" text-5xl font-medium">INSIGHTS</h1>
           <Link to={""} className="flex items-center justify-center gap-4 w-52 hover:scale-110 transition-all duration-300 hover:opacity-80 bg-black opacity-85 h-12 text-lg rounded-3xl uppercase font-semibold text-white">
                View Insights
                <span><GoArrowUpRight /></span>
            </Link>
           </div>
           </div>
           <div className="flex flex-col">
           <SecondArticle />
           <FirstArticle />
           <ThirdArticle />
           </div>
    </div>
  )
}

export default Insights