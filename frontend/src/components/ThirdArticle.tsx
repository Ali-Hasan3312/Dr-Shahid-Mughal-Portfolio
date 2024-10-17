import { GoArrowUpRight } from "react-icons/go"
import thirdArticle from "../assets/images/Insights Articles/thirdArticle.png"
const ThirdArticle = () => {
  return (
    <div className=" w-[90%] cursor-pointer relative h-[400px] mt-8 rounded-xl mx-auto bg-gray-200 flex">
        <GoArrowUpRight className="absolute top-4 right-4 text-xl" />
        <img className="w-[600px] h-full rounded-xl object-cover" src={thirdArticle} alt="" />
        <div className=" px-8">
            <h1 className="text-3xl font-medium mt-4">How to Maintain a Healthy Heartbeat</h1>
            <p className=" mt-20">A healthy heart is crucial for overall well-being, and maintaining a steady, regular heartbeat is an
            important part of heart health. An irregular or rapid heartbeat can lead to serious complications,
            including heart disease, stroke, and other cardiovascular issues. The good news is that making
            specific lifestyle changes can support heart health and promote a healthy heartbeat. Here’s a
            guide to the lifestyle habits you can adopt to keep your heart strong and your heartbeat regular.</p>
        </div>
    </div>
  )
}

export default ThirdArticle