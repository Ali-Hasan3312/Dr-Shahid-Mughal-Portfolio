import { GoArrowUpRight } from "react-icons/go"
import firstArticle from "../assets/images/Insights Articles/secondArticle.png"
const SecondArticle = () => {
  return (
    <div className=" w-[95%] h-[400px] mt-8 rounded-xl mx-auto  flex gap-2">
        <img className="w-[50%] h-full rounded-xl object-cover" src={firstArticle} alt="" />
        <div className=" px-8 w-1/2 bg-gray-200 rounded-xl cursor-pointer flex flex-col justify-between py-8">
        <div className="flex items-center justify-between">
          <span className=" text-xl uppercase text-gray-600">Innovation</span>
        <GoArrowUpRight className=" text-xl" />
        </div>
           <div className="flex flex-col gap-4 pb-8">
           <h1 className="text-3xl font-medium text-gray-700">Engage in Regular Physical Activity</h1>
            <p className=""> Exercise helps the body use insulin more
            effectively, regulates blood sugar levels, and supports healthy weight maintenance.</p>
           </div>
        </div>
    </div>
  )
}

export default SecondArticle