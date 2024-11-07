// Approach.js
import React, { useState } from 'react';

const Approach = () => {
  // Track which section is expanded
  const [expandedSection, setExpandedSection] = useState(null);

  // Content data
  const content = [
    {
      id: 1,
      title: 'Consultation',
      description:
        'This digital neuropsychological evaluation assesses cognitive abilities and overall wellness, measuring attention span, memory, reasoning, planning, and coordination while comparing results to peers of the same age and gender.',
    },
    {
      id: 2,
      title: 'Research and Strategy',
      description:
        "Our sessions utilize interactive exercises designed to enhance attention, working memory, and executive functions that improve reading/writing fluency and comprehension, tailored to the learner's unique needs.",
    },
    {
      id: 3,
      title: 'Implementation',
      description:
        'Continuous tracking of progress ensures learners stay on course to meet their objectives, with regular feedback to adjust strategies as necessary.',
    },
  ];

  // Function to toggle expanded/collapsed state
  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <section id='approach' className='pt-16'>
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#003049] text-center mb-6" style={{ fontFamily: 'Helvetica, Arial', fontSize: '24pt' }}>
          Our Comprehensive Approach
        </h2>
        <div className="space-y-4">
          {content.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg overflow-hidden shadow-md ${
                expandedSection === item.id ? 'bg-[#FB8500]' : 'bg-white border-black border-2'
              }`}
            >
              {/* Header with title and toggle button */}
              <div
                onClick={() => toggleSection(item.id)}
                className="flex justify-between items-center px-6 py-4 cursor-pointer"
                style={{ fontFamily: 'Helvetica, Arial', fontSize: '18pt' }}
              >
                <h3
                  className={`text-2xl font-semibold ${
                    expandedSection === item.id ? 'text-white' : 'text-[#003049]'
                  }`}
                  style={{ fontWeight: 'bold' }}
                >
                  {String(item.id).padStart(2, '0')} {item.title}
                </h3>
                <span
                  className={`text-2xl font-semibold ${
                    expandedSection === item.id ? 'text-white' : 'text-[#003049]'
                  }`}
                >
                  {expandedSection === item.id ? '-' : '+'}
                </span>
                
              </div>
              {/* Content description */}
              {expandedSection === item.id && (
                <div className="px-6 py-4 text-white" style={{ fontFamily: 'Helvetica, Arial', fontSize: '14pt' }}>
                  <hr className='border-black'/>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Button at the bottom */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#F58220] hover:bg-[#E07B00] text-[#0B254C] font-medium py-3 px-8 rounded-md transition duration-300 ease-in-out shadow-md"
            style={{ fontFamily: 'Helvetica, Arial', fontSize: '18pt' }}
          >
            Start an Assessment
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Approach;
