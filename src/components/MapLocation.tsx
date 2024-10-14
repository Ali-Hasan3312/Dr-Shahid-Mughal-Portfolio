const MapLocation = () => {
  return (
    <div className="md:w-[90%] w-[95%] mx-auto mt-4 max-sm:mt-[500px]">
          {/* <h1 className="text-[60px] font-medium mb-6">Learn more about us</h1> */}
          <div className="h-screen max-sm:h-[80vh] w-full bg-gray-200 rounded-lg flex items-center justify-center">
          <div className=" w-full flex flex-col gap-6">
            <h2 className=" text-3xl text-center uppercase">Where to find us</h2>
          <p className=" text-center font-semibold">Central Hospital, Kangni Wala, Main G.T. Road, Gujranwala</p>
          {/* <img className="w-[90%] max-sm:w-[94%] rounded-xl mx-auto h-[400px] object-cover" src={location} alt="" />
           */}
          <div className=" w-[95%] mx-auto">
          <iframe className=" h-[400px] w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30119.877082397827!2d74.2039888184089!3d32.13609605411731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2a5d4d1b0351%3A0xfaf7a927ff887507!2sCentral%20Hospital!5e0!3m2!1sen!2s!4v1728114502034!5m2!1sen!2s"loading="lazy" ></iframe>
          </div>
          </div>
          </div>
    </div>
  )
}

export default MapLocation