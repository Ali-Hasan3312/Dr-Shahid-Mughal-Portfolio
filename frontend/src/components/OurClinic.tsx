import { forwardRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import clinic1 from "../assets/images/clinic/central hopital2.png";
import clinic2 from "../assets/images/clinic/clinic2.jpg";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
interface OurClinicProps extends ContactSectionProps {
  onScrollToBookAppointment?: () => void;
}

const OurClinic = forwardRef<HTMLDivElement, OurClinicProps>(({ onScrollToBookAppointment }, ref) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div ref={ref} className="mt-8">
      <div className="w-[85%] md:w-[95%] mx-auto flex flex-col gap-2">
        <h3 className="text-lg uppercase text-gray-500 font-normal">Where</h3>
        <h1 className="text-5xl font-medium uppercase">Our Clinic</h1>
        <p className="text-gray-500 text-base max-sm:text-sm">
          Established to provide exceptional cardiac care, our clinic embraces advanced technology and compassionate <br /> service. Our skilled cardiologists prioritize patient well-being and precision in every diagnosis and treatment.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 w-[95%] mx-auto mt-8">
        <div className="md:w-1/2 w-[95%] h-[320px] object-cover">
          <img className="w-full h-full rounded-lg" src={clinic1} alt="" />
        </div>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="md:w-1/2 w-[95%] h-[320px] object-cover relative cursor-pointer"
        >
          <img className="h-full w-full rounded-lg object-cover" src={clinic2} alt="" />
          <GoArrowUpRight
            className={`absolute top-4 transition-all text-white duration-300 right-4 ${isHover ? " scale-150" : ""}`}
          />
          <button
            onClick={onScrollToBookAppointment}
            className={`h-10 w-56 rounded-3xl transition-all duration-300 uppercase ${isHover ? " scale-110" : ""} text-white bg-zinc-800 absolute bottom-4 left-4`}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
});

export default OurClinic;
