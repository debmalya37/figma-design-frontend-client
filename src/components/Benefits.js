// Benefits.js
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // For check icons
import '../../src/Benefits.css'; // Assuming CSS file for custom styles if needed

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="relative flex items-center justify-center py-20 bg-white pt-24" // Updated pt-16 to pt-24 for additional spacing
    >
      {/* Abstract Orange Shape */}
      <div
        className="absolute left-0 top-0 w-72 h-72 mt-3 bg-[#FB8500] rounded-full transform -rotate-45 opacity-75 lg:w-96 lg:h-96 lg:-left-10 lg:-top-10"
        style={{
          clipPath: 'polygon(50% 0%, 100% 20%, 80% 100%, 0% 80%, 20% 20%)',
        }}
      ></div>

      {/* Content Container */}
      <div className="benefits-content mx-auto px-6 text-center lg:text-left lg:max-w-3xl relative z-10 lg:ml-auto lg:mr-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#003049] mb-4">
          Who Benefits from <span className="text-[#FB8500]">ReadON?</span>
        </h2>

        {/* Benefits List */}
        <ul className="space-y-6 text-left text-gray-700">
          {/* Benefit Item 1 */}
          <li className="flex items-start space-x-4">
            <FaCheckCircle className="text-blue-900 text-lg mt-1" />
            <div>
              <p className="font-semibold text-lg text-[#FB8500]">Children facing reading difficulties:</p>
              <p>Unlock reading fluency and focus with targeted interventions.</p>
            </div>
          </li>

          {/* Benefit Item 2 */}
          <li className="flex items-start space-x-4">
            <FaCheckCircle className="text-blue-900 text-lg mt-1" />
            <div>
              <p className="font-semibold text-lg text-[#FB8500]">Learners with ADHD, dyslexia, or other cognitive challenges:</p>
              <p>We provide specialized strategies that cater to diverse learning needs, helping children succeed.</p>
            </div>
          </li>

          {/* Benefit Item 3 */}
          <li className="flex items-start space-x-4">
            <FaCheckCircle className="text-blue-900 text-lg mt-1" />
            <div>
              <p className="font-semibold text-lg text-[#FB8500]">Adults looking to improve literacy skills:</p>
              <p>Achieve personal or professional goals through better reading and comprehension.</p>
            </div>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <button className="mt-8 px-6 py-3 bg-[#FB8500] text-white font-semibold rounded-full hover:bg-[#e07b00] transition duration-200">
          Start an Assessment
        </button>
      </div>
    </section>
  );
};

export default Benefits;
