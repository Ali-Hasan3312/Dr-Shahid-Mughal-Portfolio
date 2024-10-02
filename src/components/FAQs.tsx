import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  // State for tracking the active question
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to handle dropdown toggle
  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What should I expect during my first cardiology visit?",
      answer:
        "During your first visit, the cardiologist will review your medical history, perform a physical examination, and may recommend diagnostic tests such as an ECG, stress test, or blood work to assess your heart health.",
    },
    {
      question: "When should I see a cardiologist?",
      answer:
        "You should consider seeing a cardiologist if you experience chest pain, shortness of breath, palpitations, or if you have risk factors like high blood pressure, diabetes, or a family history of heart disease.",
    },
    {
      question: "What are common symptoms of heart disease?",
      answer:
        "Common symptoms include chest pain, shortness of breath, dizziness, irregular heartbeat, fatigue, and swelling in the legs or ankles. If you experience these, consult a cardiologist for further evaluation.",
    },
    {
      question: "What tests are used to diagnose heart problems?",
      answer:
        "Tests like Electrocardiogram (ECG), Echocardiogram, Stress Test, Holter Monitor, and Cardiac MRI are commonly used to diagnose heart conditions. Your doctor will recommend the most suitable test based on your symptoms.",
    },
    {
      question: "How can I reduce my risk of heart disease?",
      answer:
        "To reduce your risk, maintain a healthy diet, exercise regularly, avoid smoking, manage stress, keep your blood pressure and cholesterol in check, and follow any prescribed medications or lifestyle recommendations.",
    },
    {
      question: "What is hypertension, and why is it dangerous?",
      answer:
        "Hypertension, or high blood pressure, occurs when the force of blood against the artery walls is too high. Over time, it can lead to serious conditions like heart attack, stroke, and kidney disease if left untreated.",
    },
    {
      question: "What are the treatment options for heart disease?",
      answer:
        "Treatment options may include lifestyle changes, medications such as beta-blockers or statins, and, in some cases, surgical interventions like angioplasty or bypass surgery depending on the severity of your condition.",
    },
    {
      question: "How often should I have my heart checked?",
      answer:
        "The frequency of checkups depends on your risk factors and overall health. Generally, it is recommended to have an annual checkup if you're at risk, or as directed by your cardiologist.",
    },
  ];

  return (
    <div className='w-[90%] mx-auto mt-8'>
      <span className=' text-xl text-gray-600'>FAQ</span>
      <h2 className="text-[60px] font-medium mb-6 mt-4">GOT ANY QUESTIONS?</h2>
      <div className=" w-full bg-gray-200 rounded-xl px-12 py-4 mt-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center py-4 text-left text-lg focus:outline-none"
            >
              <span>{faq.question}</span>
              <span>
                {activeIndex === index ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <motion.div
                
                className="py-4 text-gray-600"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
