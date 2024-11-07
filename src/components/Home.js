// Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center h-screen bg-white px-8 md:px-16 text-left pt-16">
      {/* Left Column: Text Content */}
      <div className=" w-2/3 md:w-1/2 max-w-2xl">
        {/* Logo */}
        {/* <img src="/path-to-logo.png" alt="ReadON Logo" className="mb-8" /> Replace with actual logo path */}

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#023047] mb-4">
          Read Better with
          <br/>
          <span className="text-[#FB8500]">ReadON</span>
        </h1>

        {/* Subheading */}
        <p className="text-2xl text-[#555555] mb-8 w-full md:w-3/4">
          Transform Your Child's Reading Journey with ReadON Digital Cognitive Assessment & Therapies
        </p>

        {/* Button */}
        <button
          className="bg-[#FB8500] hover:bg-[#E07B00] text-gray-950 font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out shadow-md"
          onClick={() => alert("Assessment Started")} // Button interactivity as an example
        >
          Start an Assessment
        </button>
      </div>

      {/* Right Column: Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="https://growinghealthyseasons.com/wp-content/uploads/2024/06/GHS-blog-feature-image-intensive-therapy.jpg"
          alt="ReadON Therapy"
          className="w-full max-w-md rounded-[35%] shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
