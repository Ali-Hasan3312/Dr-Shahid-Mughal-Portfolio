import { GoArrowUpRight } from "react-icons/go"
import secondArticle from "../assets/images/Insights Articles/secondArticle.png"
const SecondArticle = () => {
  return (
    <div className=" w-[90%] cursor-pointer relative h-[400px] mt-8 rounded-xl mx-auto bg-gray-200 flex">
        <GoArrowUpRight className="absolute top-4 right-4 text-xl" />
        <img className="w-[600px] h-full rounded-xl object-cover" src={secondArticle} alt="" />
        <div className=" px-8">
            <h1 className="text-3xl font-medium mt-4">How to Prevent Diabetes: <br /> Adopting a Healthy Lifestyle</h1>
            <p className=" mt-20">Diabetes, especially type 2 diabetes, is one of the most prevalent health concerns worldwide.
            It's a condition that develops due to either insulin resistance or the body’s inability to produce
            enough insulin, leading to elevated blood sugar levels. While genetic factors may contribute to
            diabetes, it is largely a preventable disease. The key to preventing diabetes lies in making
            lifestyle changes that promote healthy blood sugar regulation and overall well-being. Here are
            practical lifestyle adjustments you can make to reduce your risk of developing diabete.</p>
        </div>
    </div>
  )
}

export default SecondArticle