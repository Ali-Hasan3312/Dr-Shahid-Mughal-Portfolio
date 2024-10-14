import { FaHeart, FaQuestionCircle } from 'react-icons/fa'; // Importing relevant icons
import Navbar from './Navbar';

const HeartSigns = () => {
  return (
   <div>
    <Navbar />
     <div className="bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center mb-8">What's Your Heart Score?</h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Article Title */}

        {/* Section 1 - Heart Score Introduction */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4 flex items-center">
            <FaHeart className="mr-2 text-red-500" /> Understanding Your Heart Score
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Many factors in your daily life impact your heart health. These can include financial struggles, housing issues,
            access to transportation, food, and child care. If you can't reach medical appointments or afford medications,
            you might not receive the care you need to address all the components of Life’s Essential 8™.
          </p>
          <p className="mb-4 text-sm md:text-base">
            It’s crucial to recognize these barriers and seek help when necessary. Talk with your healthcare team or a
            trusted community leader about available resources that may assist you with these challenges.
          </p>
        </section>

        {/* Section 2 - Get Your Heart Score */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4 flex items-center">
            <FaQuestionCircle className="mr-2 text-blue-500" /> How to Calculate Your Heart Score
          </h2>
          <p className="mb-4 text-sm md:text-base">
            You can learn where you stand with Life’s Essential 8 in just a few minutes. To get your personal heart score 
            and a customized plan based on the eight steps to start living your best life, visit the <a href="https://heart.org/MyLifeCheck" className="text-blue-600 underline">heart.org/MyLifeCheck</a> website.
          </p>
        </section>

        {/* Section 3 - Take Action */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4 flex items-center">
            <FaHeart className="mr-2 text-green-500" /> Start Improving Your Heart Health
          </h2>
          <p className="mb-4 text-sm md:text-base">
            You can prevent heart disease before it even starts. Start small by making one healthy change today, 
            and continue making incremental improvements. Before long, adopting heart-healthy habits will become second nature.
          </p>
          <p className="mb-4 text-sm md:text-base">
            Simple steps such as eating better, staying active, managing stress, and maintaining a healthy weight can
            significantly impact your heart health and overall well-being.
          </p>
        </section>

        {/* Conclusion */}
      
      </div>
    </div>
   </div>
  );
};

export default HeartSigns;
