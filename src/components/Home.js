import React from 'react';
import wave from "../assets/wave.png";  
import hero from "../assets/hero.png"; 

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-start justify-start h-screen px-8 md:px-16 pt-24 text-left bg-cover -bottom-7"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: '88%', // Keeps hero image size
        backgroundPosition: 'right', 
        backgroundRepeat: 'space'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-0"></div>

      {/* Left Column: Text Content */}
      <div className="relative z-10 w-full md:w-1/2 max-w-2xl mt-12 top-16 md:mt-0">
        <h1 className="text-[4rem] font-bold text-[#023047] mb-4 leading-tight">
          Read Better with
          <br />
          <span className="text-[#FB8500]">ReadON</span>
        </h1>

        <p className="text-2xl text-[#555555] mb-8 w-full md:w-3/4">
          Transform Your Child's Reading Journey with ReadON Digital Cognitive Assessment & Therapies
        </p>

        <button
          className="bg-[#F58220] hover:bg-[#E07B00] text-[#0B254C] font-medium py-3 px-8 rounded-md transition duration-300 ease-in-out shadow-md"
          onClick={() => alert("Assessment Started")} // Button interactivity as an example
        >
          Start an Assessment
        </button>
      </div>

      {/* Wave Image at the Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[35rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(${wave})`,
          backgroundSize: '100%', 
          backgroundRepeat: 'no-repeat', 
        }}
      ></div>
    </section>
  );
};

export default Home;
