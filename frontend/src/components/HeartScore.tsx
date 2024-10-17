import { FaAmbulance, FaBrain, FaHeartbeat } from 'react-icons/fa'; // Importing relevant icons
import Navbar from "./Navbar";

const HeartScore = () => {
  return (
   <div>
    <Navbar />
     <div className="bg-gray-100 p-6">
        <h1 className="md:text-4xl text-2xl font-bold text-center mb-8">Heart Attack and Stroke Warning Signs</h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Article Title */}

        {/* Section 1 - Heart Attack Warning Signs */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4 flex items-center">
            <FaHeartbeat className="mr-2 text-red-500" /> Heart Attack Warning Signs
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Some heart attacks are sudden and intense, but most start slowly, with mild pain or discomfort. Here are the key signs to watch for:
          </p>
          <ul className="list-disc ml-5 mb-4 text-sm md:text-base">
            <li><strong>Chest discomfort:</strong> Most heart attacks involve discomfort in the center of the chest that lasts more than a few minutes or goes away and comes back. It may feel like uncomfortable pressure, squeezing, fullness, or pain.</li>
            <li><strong>Discomfort in other areas:</strong> Pain or discomfort can also occur in the arms, back, neck, jaw, or stomach.</li>
            <li><strong>Shortness of breath:</strong> This can occur with or without chest discomfort.</li>
            <li><strong>Other signs:</strong> These may include breaking out in a cold sweat, nausea, or lightheadedness.</li>
          </ul>
          <p className="mb-4 text-sm md:text-base">
            As with men, women’s most common heart attack symptom is chest pain or discomfort. However, women may also experience other symptoms such as shortness of breath, nausea/vomiting, and back or jaw pain.
          </p>
        </section>

        {/* Section 2 - Stroke Warning Signs */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4 flex items-center">
            <FaBrain className="mr-2 text-blue-500" /> Stroke Warning Signs
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Recognizing the signs of a stroke and acting quickly can save lives. Here are the key warning signs:
          </p>
          <ul className="list-disc ml-5 mb-4 text-sm md:text-base">
            <li><strong>Sudden numbness or weakness:</strong> Especially on one side of the body, affecting the face, arm, or leg.</li>
            <li><strong>Sudden confusion:</strong> Trouble speaking or understanding speech.</li>
            <li><strong>Sudden vision problems:</strong> Trouble seeing in one or both eyes.</li>
            <li><strong>Sudden trouble walking:</strong> Dizziness, loss of balance, or coordination.</li>
            <li><strong>Sudden severe headache:</strong> No known cause for the headache.</li>
          </ul>
          <p className="mb-4 text-sm md:text-base">
            Remember F.A.S.T to recognize a stroke: Face drooping, Arm weakness, Speech difficulty, Time to call 911.
          </p>
        </section>

        {/* Section 3 - Dial 911 Fast */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4 flex items-center">
            <FaAmbulance className="mr-2 text-green-500" /> Dial 911 Fast
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Heart attack and stroke are life-or-death emergencies—every second counts. If you or someone you're with experiences any symptoms of a heart attack or stroke, call 911 or your emergency number immediately to get help. Don’t wait—act quickly!
          </p>
          <p className="mb-4 text-sm md:text-base">
            For a stroke, it's also important to note the time when the first symptom appeared. Treatment given within 3 to 4.5 hours can result in better outcomes.
          </p>
        </section>

        {/* Conclusion */}
      </div>
       
    </div>
   </div>
  );
};

export default HeartScore;
