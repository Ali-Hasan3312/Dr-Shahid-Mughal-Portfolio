import { forwardRef } from "react";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const About = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
    return (
      <div ref={ref} className="w-[90%] mx-auto mt-12">
          <h1 className="text-[60px] font-medium mb-6">Learn more about us</h1>
          
          {/* Clinic Information */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold mb-4">Central Hospital</h2>
            <p className="text-lg mb-4">Kangni Wala, Main G.T. Road, Gujranwala</p>
            
            {/* Contact Numbers */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Contact Numbers:</h3>
              <ul className="list-disc ml-6 text-lg">
                <li>Clinic: 055-4277072, 055-4277074</li>
                <li>Mobile for appointments: 032-11761122</li>
              </ul>
            </div>
  
            {/* Email Information */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Email:</h3>
              <p className="text-lg">mdrshahidm@gmail.com</p>
            </div>
          </div>
      </div>
    );
  })
  
  export default About;
  