import location from "../assets/images/Google Map.png"
const MapLocation = () => {
  return (
    <div className="w-[90%] mx-auto mt-12">
          <h1 className="text-[60px] font-medium mb-6">Learn more about us</h1>
          <div className="h-screen w-full bg-gray-200 rounded-lg flex items-center justify-center">
          <div className=" w-full flex flex-col gap-6">
            <h2 className=" text-3xl text-center uppercase">Where to find us</h2>
          <p className=" text-center font-semibold">Central Hospital, Kangni Wala, Main G.T. Road, Gujranwala</p>
          <img className="w-[86%] rounded-xl mx-auto h-[400px] object-cover" src={location} alt="" />
          </div>
          </div>
    </div>
  )
}

export default MapLocation