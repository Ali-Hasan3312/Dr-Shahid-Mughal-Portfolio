import { forwardRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import heroImage from "../assets/images/Shahid-mughal-removebg-preview.png";
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const OurTeam = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  

  return (
    <div ref={ref} className="mt-8">
      <div className="md:w-[95%] w-[85%] mx-auto flex flex-col gap-2">
        <h3 className="text-lg uppercase text-gray-500 font-normal">Who am I</h3>
        <h1 className="text-5xl font-medium uppercase">About Dr. Muhammad Shahid Mughal</h1>
        <p className="text-gray-500 text-base max-sm:text-sm">
          Dr. Muhammad Shahid Mughal is a dedicated cardiologist committed to delivering top-quality cardiovascular care. His expertise and compassionate approach ensure a welcoming and supportive experience for every patient.
        </p>
      </div>
      <div className="w-[95%] mx-auto mt-8 flex flex-col md:flex-row items-center gap-4">
        <div
         
          className="h-[390px] rounded-lg flex flex-col gap-2 w-[340px] mx-auto bg-slate-600 px-8 py-4"
        >
          <div className="flex items-center justify-between text-white">
            <span className="uppercase text-xl text-gray-200 font-light">Meet Me</span>
            <GoArrowUpRight className={`text-xl transition-all duration-300 `} />
          </div>
          <h1 className="text-gray-100 text-3xl">Your Cardiovascular Expert</h1>
          <p className="text-gray-100 text-base">
            Dr. Mughal's clinic stands at the forefront of cardiovascular innovation and patient care, equipped with the latest technology to deliver optimal outcomes for heart health.
          </p>
          {/* <button className={`w-32 rounded-3xl py-2 transition-all duration-300 uppercase ${isHover ? "scale-110" : ""} text-black font-medium bg-white`}>
            Learn More
          </button> */}
        </div>
        <div className="md:w-[600px] w-[95vw] h-[390px] mx-auto bg-gray-200 rounded-lg">
          <img className="w-[460px] h-[390px] mx-auto object-cover rounded-lg" src={heroImage} alt="Dr. Muhammad Shahid Mughal" />
        </div>
        <div className="h-[390px] cursor-pointer rounded-lg flex flex-col gap-4 justify-between w-[340px] bg-gray-200 px-8 py-8">
          <h1 className="text-3xl font-medium text-gray-800">Dr. Muhammad Shahid Mughal</h1>
          <p className="text-gray-800">
          Dr. Muhammad Shahid Mughal is a highly skilled cardiologist, dedicated to providing exceptional cardiovascular care with a focus on precision and optimal patient outcomes.
          </p>
        </div>
      </div>
    </div>
  );
});

export default OurTeam;
