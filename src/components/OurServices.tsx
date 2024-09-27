import { GoArrowUpRight } from "react-icons/go"

const OurServices = () => {
  return (
    <div className=" h-screen w-[95%] mx-auto mt-8">
        <div className="flex gap-4">
        <div className=" h-[290px] w-[800px] flex items-center">
           <div className=" w-[90%] mx-auto flex flex-col gap-2">
           <h3 className=" text-lg uppercase text-gray-500 font-normal">Our offers</h3>
            <h1 className=" text-5xl font-medium">WHAT WE DO</h1>
            <p className="text-gray-500">Our team provides personalized care. From cleanings to advanced cosmetic procedures. Contact us!</p>
           </div>
        </div>
        <div className=" h-[290px] relative bg-gray-200 rounded-lg w-[25vw] flex items-center">
           <div className=" w-[90%]  mx-auto flex flex-col gap-2">
           <h3 className=" text-3xl uppercase absolute top-8 text-gray-500 font-normal">/1</h3>
            <h1 className=" text-3xl font-medium mt-24">Dental Veneers</h1>
            <p className="text-gray-500">Custom-made shells designed to create a flawless smile.</p>
           </div>
        </div>
        <div className=" h-[290px] rounded-lg bg-slate-600 relative w-[25vw] text-white flex items-center">
           <div className=" w-[90%] mx-auto flex flex-col gap-2">
           <h3 className=" text-3xl uppercase font-normal absolute top-8 text-gray-300">/2</h3>
            <h1 className=" text-3xl font-medium mt-24">Teeth Whitening</h1>
            <p className="">Brighten your smile with effective whitening treatments.</p>
           </div>
        </div>
        </div>
        <div className="flex gap-4 mt-4">
        <div className=" h-[290px] rounded-lg relative bg-gray-200 w-[25vw] flex items-center">
           <div className=" w-[90%]  mx-auto flex flex-col gap-2">
           <h3 className=" text-3xl uppercase absolute top-8 text-gray-500 font-normal">/3</h3>
            <h1 className=" text-3xl font-medium mt-24">Dental Veneers</h1>
            <p className="text-gray-500">Custom-made shells designed to create a flawless smile.</p>
           </div>
        </div>
        <div className=" h-[290px] rounded-lg bg-slate-600 relative w-[25vw] text-white flex items-center">
           <div className=" w-[90%] mx-auto flex flex-col gap-2">
           <h3 className=" text-3xl uppercase font-normal absolute top-8 text-gray-300">/4</h3>
            <h1 className=" text-3xl font-medium mt-24">Teeth Whitening</h1>
            <p className="">Brighten your smile with effective whitening treatments.</p>
           </div>
        </div>
        <div className=" h-[290px] cursor-pointer relative rounded-lg  w-[800px] flex items-center">
           <img className=" h-full w-full object-cover rounded-lg" src="https://cdn.prod.website-files.com/662e5390115777703fa6e8da/663b523e7384b4e1d70fd5f6_Woman%2009-p-800.webp" alt="" />
           <GoArrowUpRight className="absolute top-4 right-4" />
           <button className="h-10 w-40 rounded-3xl uppercase text-white bg-zinc-800 absolute bottom-4 left-4">View Services</button>
        </div>
        </div>
    </div>
  )
}

export default OurServices