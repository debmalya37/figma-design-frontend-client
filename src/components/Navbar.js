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
    <nav className="flex justify-between items-center bg-white p-4 text-black fixed w-full z-50 h-16">
      <div className="flex items-center space-x-4">
  {/* Enlarged Logo with increased background-size */}
  <div 
    className="overflow-hidden h-16 w-48 relative" 
 
  >
    {/* Fallback for when image is not loaded */}
    <img 
      src={logo} 
      alt="ReadON Logo" 
      className="h-full w-full object-cover pt-1"  // Using object-contain to keep image proportions
      style={{backgroundSize: '90%' }}
    />
  </div>
</div>

      {/* Navbar Links - Increased Gap Between Links */}
      <div className="flex space-x-8 flex-grow justify-center"> {/* Increased gap between links */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer ">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer ">About</Link>
        <Link to="whychooseus" smooth={true} duration={500} className="cursor-pointer ">Why Choose Us?</Link>
        <Link to="benefits" smooth={true} duration={500} className="cursor-pointer ">Benefits</Link>
        <Link to="approach" smooth={true} duration={500} className="cursor-pointer ">Our Approach</Link>
      </div>

      {/* Language Selector and Sign In Button */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)} 
            className="bg-[#FB8500] text-black px-4 py-2 rounded hover:bg-[#cc883a] transition mr-5"
          >
            Language
          </button>
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
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
