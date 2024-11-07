// WhyChoose.js
import React, { useState } from 'react';

const WhyChoose = () => {
  const [selected, setSelected] = useState('ReadON understands the needs');

  // Content for each option in "Why Choose ReadON?" section
  const content = {
    'ReadON understands the needs': 'The standardized neurocognitive assessment in a convenient game-based format can be completed in 35-40 minutes on a computer or mobile device, eliminating the need for traditional pen-and-paper methods. The assessment explains why someone is good in mathematics or literacy.',
    'Personalized Intervention': "The platform uses advanced technologies to tailor game-based therapy sessions to fit the learner's unique needs, providing targeted interventions that lead to improvement.",
    'Proven Results': 'Experience noticeable improvements in just 3-4 months, with measurable progress in reading skills that you can track at home.'
  };

  return (
    <section id='whychooseus' className='pt-16'>
      {/* Discover How ReadON Works Section */}
      <div className="bg-white py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="text-left">
            <h2 className="text-5xl w-3/4 font-bold text-blue-900 mb-4">Discover How <span className="text-orange-500">ReadON</span> Works</h2>
            {/* <p className="text-gray-600 mb-6">Transform Your Child's Reading Journey with ReadON Digital Cognitive Assessment & Therapies</p> */}
            <button className="bg-orange-500 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Start an Assessment
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://growinghealthyseasons.com/wp-content/uploads/2024/06/GHS-blog-feature-image-intensive-therapy.jpg" alt="Child with therapist" className="rounded-full shadow-lg" />
          </div>
        </div>
      </div>

      {/* Why Choose ReadON Section */}
      <div className="bg-orange-500 text-white py-16 px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose ReadON?</h2>
          
          {/* Tab Buttons in Horizontal Layout */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            {Object.keys(content).map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`flex-1 px-4 py-10 rounded-3xl transition-colors text-l font-bold ${
                  selected === item ? 'bg-white text-[#FB8500]' : 'bg-[#a2551a82] hover:bg-[#7b3a0873]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Selected Content */}
          <div className=" flex flex-col md:w-1/2 text-[#f4f3f1] p-6 pl-0 text-left rounded-md ml-0 md:ml-8 relative -right-[50%]">
            <h3 className="text-2xl font-semibold mb-4">{selected}</h3>
            <p className=" text-xl">{content[selected]}</p>
          </div>
          <div className=" flex w-full md:w-1/2 relative bottom-40 mt-0 gap-2">
            <img src="https://growinghealthyseasons.com/wp-content/uploads/2024/06/GHS-blog-feature-image-intensive-therapy.jpg" alt="Child with therapist" className="rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
