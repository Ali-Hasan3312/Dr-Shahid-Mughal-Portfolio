import { GoArrowUpRight } from "react-icons/go"
import firstArticle from "../assets/images/Insights Articles/firstArticle.png"
const FirstArticle = () => {
  return (
    <div className=" w-[90%] cursor-pointer relative h-[400px] mt-8 rounded-xl mx-auto bg-gray-200 flex">
        <GoArrowUpRight className="absolute top-4 right-4 text-xl" />
        <img className="w-[600px] h-full rounded-xl object-cover" src={firstArticle} alt="" />
        <div className=" px-8">
            <h1 className="text-3xl font-medium mt-4">The Benefits of Regular Exercise</h1>
            <p className=" mt-20">Adopting a Healthy Lifestyle to Prevent Blood Pressure Problems
            High blood pressure, or hypertension, is a common health issue affecting millions of people
            worldwide. Left unchecked, it can lead to severe complications such as heart disease, stroke,
            and kidney damage. Fortunately, adopting certain lifestyle habits can significantly help prevent
            the onset of hypertension and improve overall well-being. Here’s a comprehensive guide on how
            to manage and prevent blood pressure problems through daily lifestyle changes.</p>
        </div>
    </div>
  )
}

export default FirstArticle