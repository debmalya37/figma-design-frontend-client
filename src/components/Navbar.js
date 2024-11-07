// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from "../assets/readon-logo.jpg";

const Navbar = () => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const handleLanguageSelect = (url) => {
    window.location.href = url;  // Redirect to the selected domain
  };

  return (
    <nav className="flex justify-between items-center bg-white p-4 text-black fixed w-full z-50 h-16 shadow-md">
      <div className="flex items-center space-x-4">
      <div className="overflow-hidden h-12 w-28">  {/* Adjust height as needed */}
          <img 
            src={logo} 
            alt="ReadON Logo" 
            className="h-full w-full object-cover"
          />
        </div>
        {/* <h1 className="text-xl font-bold">ReadON</h1> */}
      </div>
      <div className="flex space-x-4">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
        <Link to="whychooseus" smooth={true} duration={500} className="cursor-pointer">Why Choose Us?</Link>
        <Link to="benefits" smooth={true} duration={500} className="cursor-pointer">Benefits</Link>
        <Link to="approach" smooth={true} duration={500} className="cursor-pointer">Our Approach</Link>
      </div>
      <div className="flex items-center space-x-4">
        
        {/* Language Selector */}
        <div className="relative">
          <button 
            onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)} 
            className="bg-[#FB8500] text-black px-4 py-2 rounded hover:bg-[#cc883a] transition mr-5"
          >
            Language
          </button>
            {/* Sign In Button */}
            <button className="bg-[#FB8500] text-black px-4 py-2 rounded hover:bg-[#dc933f] transition">
                  Sign In
            </button>
          {/* Language Dropdown */}
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg">
              <ul>
                <li 
                  onClick={() => handleLanguageSelect('https://arabia.example.com')}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Arabia
                </li>
                <li 
                  onClick={() => handleLanguageSelect('https://india.example.com')}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  India
                </li>
                {/* Add more languages here as needed */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
