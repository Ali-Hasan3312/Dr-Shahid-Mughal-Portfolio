import Navbar from "./Navbar";
import image1 from "../assets/Articles/0.png"
import image2 from "../assets/Articles/2.png"
import image3 from "../assets/Articles/4.png"
import image4 from "../assets/Articles/5.png"
import image5 from "../assets/Articles/6.png"
import image6 from "../assets/Articles/9.png"
import image7 from "../assets/Articles/10.png"
import bloodSugar from "../assets/Articles/pexels-asphotograpy-1001897.jpg"
const FirstArticle = () => {
  return (
    <div>
      <Navbar />
    <div className="bg-gray-100 p-6">
        <h1 className="md:text-4xl text-2xl font-bold text-center mb-8 mt-2">Make a New Life Resolution</h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Article Title */}
        
        {/* Section 1 - Eat Better */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4">Eat Better</h2>
          <img 
            src={image1}
            alt="Healthy Eating" 
            className="mb-4 rounded-lg shadow-lg h-[300px] w-[600px] object-cover"
          />
          <p className="mb-4 text-sm md:text-base">
            A heart-healthy eating plan takes into account proper energy balance. This means balancing
            what you eat with the energy that you burn. If you can meet four to five of the following
            goals and keep your calorie levels in check, you’re building an overall healthy eating plan:
          </p>
          <ul className="list-disc ml-5 mb-4 text-sm md:text-base">
            <li>Eat 2½ cups of vegetables and 2 cups of fruits per day.</li>
            <li>Eat 5½ ounces of protein foods like skinless poultry, seafood, lean meats, and eggs.</li>
            <li>Eat 6 oz. of grains per day (half from whole grains).</li>
            <li>Consume 3 cups of fat-free or low-fat dairy products per day.</li>
          </ul>
        </section>

        {/* Section 2 - Get Active */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4 ">Get Active</h2>
          <img 
            src={image2} 
            alt="Physical Activity" 
            className="mb-4 rounded-lg shadow-lg h-[300px] w-[600px] object-cover"
          />
          <p className="mb-4 text-sm md:text-base">
            Regular physical activity is important. Aim for at least 150 minutes of moderate-intensity
            aerobic exercise or 75 minutes of vigorous activity each week. Spread the activity throughout
            the week and include two days of muscle-strengthening exercises.
          </p>
        </section>

        {/* Section 3 - Stop Smoking */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4">Stop Smoking</h2>
          <img 
            src={image3}
            alt="Stop Smoking" 
            className="mb-4 rounded-lg shadow-lg h-[300px] w-[600px] object-cover"

          />
          <p className="mb-4 text-sm md:text-base">
            Not smoking is one of the best things you can do for your health. This includes avoiding 
            e-cigarettes and vaping. Smoking is a leading cause of preventable death, increasing the risk 
            of heart disease and stroke. If you smoke, seek help to quit.
          </p>
        </section>

        {/* Section 4 - Get Enough Sleep */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4">Get Enough Sleep</h2>
          <img 
            src={image4}
            alt="Get Enough Sleep" 
            className="mb-4 rounded-lg shadow-lg h-[300px] w-[600px] object-cover"

          />
          <p className="mb-4 text-sm md:text-base">
            Getting 7 to 9 hours of sleep per night is crucial for your cardiovascular health. Proper sleep 
            improves mood, memory, and overall well-being. Establishing a consistent sleep routine can 
            enhance your sleep quality.
          </p>
        </section>

        {/* Section 5 - Maintain a Healthy Weight */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4">Maintain a Healthy Weight</h2>
          <img 
            src={image5}
            alt="Healthy Weight" 
            className="mb-4 rounded-lg shadow-lg h-[300px] w-[600px] object-cover"

          />
          <p className="mb-4 text-sm md:text-base">
            It’s important to reach and maintain a healthy weight. Strive for a BMI from 18.5 to 24.9. Larger
            waistlines (35 inches or more for women and 40 inches or more for men) are associated with higher risk.
            If you’re overweight, work to reach and maintain a healthy weight by eating fewer calories and moving more.
          </p>
        </section>

        {/* Section 6 - Control Cholesterol */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4">Control Cholesterol</h2>
          <img 
            src={image6}
            alt="Control Cholesterol" 
            className="mb-4 rounded-lg shadow-lg h-[300px] w-[600px] object-cover"

          />
          <p className="mb-4 text-sm md:text-base">
            Cholesterol is part of a healthy body, but having too much in your blood can cause blocked arteries.
            You should have your cholesterol checked every four to six years. Lower it with diet changes, exercise, 
            and medications if necessary.
          </p>
        </section>

        {/* Section 7 - Control Blood Sugar */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4">Control Blood Sugar</h2>
          <img 
            src={bloodSugar}
            alt="Control Blood Sugar" 
            className="mb-4 rounded-lg shadow-lg h-[300px] w-[600px] object-cover"

          />
          <p className="mb-4 text-sm md:text-base">
            It’s important to know your blood glucose level. If you have diabetes or pre-diabetes, managing your 
            blood sugar can reduce your risk of heart disease and stroke.
          </p>
        </section>

        {/* Section 8 - Manage Blood Pressure */}
        <section className="mb-8">
          <h2 className="md:text-2xl text-lg font-semibold mb-4">Manage Blood Pressure</h2>
          <img 
            src={image7} 
            alt="Manage Blood Pressure" 
            className="mb-4 rounded-lg shadow-lg h-[300px] w-[600px] object-cover"

          />
          <p className="mb-4 text-sm md:text-base">
            High blood pressure makes your heart work harder. Have your blood pressure checked regularly 
            and follow your healthcare professional’s advice to manage it through lifestyle changes or medication.
          </p>
        </section>

        {/* Conclusion */}
      </div>
        <div className="text-center mt-8">
          <h3 className="text-xl font-bold">Start Your Healthy Lifestyle Today!</h3>
        </div>
    </div>
    </div>
  );
};

export default FirstArticle;
