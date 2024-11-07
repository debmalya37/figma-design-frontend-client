import React, { useState } from 'react';
import { FaPuzzlePiece, FaUsers, FaChartLine } from 'react-icons/fa'; // Import icons
import whychoose1 from "../assets/why-choose-ReadON-1.png";
import whychoose2 from "../assets/why-choose-ReadON-2.png";
import whychoose3 from "../assets/why-choose-ReadON-3.gif";
import youtubethumbnail from "../assets/youtube-thumbnail.jpg";

const WhyChoose = () => {
  const [selected, setSelected] = useState('ReadON understands the needs');
  const [showVideo, setShowVideo] = useState(false);

  // Content for each option in "Why Choose ReadON?" section
  const content = {
    'ReadON understands the needs': {
      text: 'The standardized neurocognitive assessment in a convenient game-based format can be completed in 35-40 minutes on a computer or mobile device, eliminating the need for traditional pen-and-paper methods. The assessment explains why someone is good in mathematics or literacy.',
      image: whychoose1
    },
    'Personalized Intervention': {
      text: "The platform uses advanced technologies to tailor game-based therapy sessions to fit the learner's unique needs, providing targeted interventions that lead to improvement.",
      image: whychoose2
    },
    'Proven Results': {
      text: 'Experience noticeable improvements in just 3-4 months, with measurable progress in reading skills that you can track at home.',
      image: whychoose3
    }
  };

  // Icon mapping for each content option
  const icons = {
    'ReadON understands the needs': <FaPuzzlePiece className="text-3xl mr-2" />,
    'Personalized Intervention': <FaUsers className="text-3xl mr-2" />,
    'Proven Results': <FaChartLine className="text-3xl mr-2" />
  };

  return (
    <section id='whychooseus' className='pt-16'>
      {/* Discover How ReadON Works Section */}
      <div className="bg-white py-16 px-4 flex justify-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-center">
          <div className="text-left">
            <h2 className="text-5xl w-full md:w-3/4 font-bold text-blue-900 mb-4 text-center md:text-left">
              Discover How <span className="text-orange-500">ReadON</span> Works
            </h2>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#F58220] hover:bg-[#E07B00] text-[#0B254C] font-medium py-3 px-8 rounded-md transition duration-300 ease-in-out shadow-md">
                Start an Assessment
              </button>
            </div>
          </div>

          {/* Video Placeholder with Thumbnail Background and Play Button */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <div
              className="relative h-96 w-[23rem] rounded-3xl border-8 border-blue-300 flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${youtubethumbnail})` }}
            >
              <button
                onClick={() => setShowVideo(true)}
                className="bg-white text-orange-500 p-4 rounded-full shadow-lg hover:bg-gray-200 transition"
              >
                ▶️
              </button>
            </div>
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
                className={`flex-1 px-4 py-10 rounded-3xl transition-colors text-l font-bold border-2 border-slate-300 ${
                  selected === item ? 'bg-white text-orange-500' : 'bg-orange-500 hover:bg-orange-400'
                }`}
              >
                <div className="flex items-center justify-evenly text-center">
                  {icons[item]} {/* Render the appropriate icon */}
                  <div className="flex flex-col justify-center">
                    <span className='text-center justify-self-center'>{item.split(' ')[0]}</span> {/* First part of text */}
                    <span>{item.split(' ').slice(1).join(' ')}</span> {/* Second part of text */}
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Selected Content with Image */}
          <div className="flex flex-col md:flex-row items-center text-[#f4f3f1] p-6 pl-0 text-left relative -right-20 rounded-md gap-16">
            {/* Background Image Container */}
            <div
              className="w-full md:w-1/3 flex-shrink-0 rounded-lg min-h-[250px] relative right-10 flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${content[selected].image})`,
                backgroundSize: "150%"
              }}
            ></div>

            {/* Text Content */}
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-4">{selected}</h3>
              <p className="text-l">{content[selected].text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖️
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChoose;
