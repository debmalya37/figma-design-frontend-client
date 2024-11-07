import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 
import '../../src/Benefits.css'; 
import specialshapde from "../assets/special-shape.png"; 

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="relative flex items-center justify-center py-20 bg-white pt-24" 
    >
      {/* Special Shape Image */}
      <div
        className="relative left-[70%] top-0 w-[40rem] h-[45rem] mt-3 opacity-100 lg:w-[500px] lg:h-[500px] lg:left-[8%] lg:-top-2"
        style={{
          backgroundImage: `url(${specialshapde})`,
          backgroundSize: '150%', // Zoom in the image
          backgroundPosition: 'center',
          borderRadius: '50%', // Optional: adjust shape
        }}
      ></div>

      {/* Content Container */}
      <div className="benefits-content mx-auto px-6 text-center lg:text-left lg:max-w-3xl relative z-10 lg:ml-auto lg:mr-20 lg:-top-2">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#003049] mb-4 text-center">
          Who Benefits from <span className="text-[#FB8500]">ReadON?</span>
        </h2>

        {/* Benefits List */}
        <ul className="space-y-6 text-left text-gray-700">
          {/* Benefit Item 1 */}
          <li className="flex items-start space-x-4">
            <FaCheckCircle className="text-blue-900 text-3xl mt-1" /> {/* Set icon size to 3xl */}
            <div>
              <p className="font-semibold text-lg text-[#FB8500]">Children facing reading difficulties:
              <span className='text-black font-normal'>Unlock reading fluency and focus with targeted interventions.</span></p>
            </div>
          </li>

          {/* Benefit Item 2 */}
          <li className="flex items-start space-x-4">
            <FaCheckCircle className="text-blue-900 text-5xl mt-1" /> {/* Set icon size to 3xl */}
            <div>
              <p className="font-semibold text-lg text-[#FB8500]">Learners with ADHD, dyslexia, or other cognitive challenges:
              <span className='text-black font-normal'> We provide specialized strategies that cater to diverse learning needs, helping children succeed.</span></p>
            </div>
          </li>

          {/* Benefit Item 3 */}
          <li className="flex items-start space-x-4">
            <FaCheckCircle className="text-blue-900 text-4xl mt-1" /> {/* Set icon size to 3xl */}
            <div>
              <p className="font-semibold text-lg text-[#FB8500]">Adults looking to improve literacy skills:
              <span className='text-black font-normal'>Achieve personal or professional goals through better reading and comprehension.</span></p>
            </div>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <button className="bg-[#F58220] hover:bg-[#E07B00] text-[#0B254C] font-medium py-3 px-8 rounded-md transition duration-300 ease-in-out shadow-md mt-5">
          Start an Assessment
        </button>
      </div>
    </section>
  );
};

export default Benefits;
