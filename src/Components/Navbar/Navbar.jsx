/* eslint-disable react/prop-types */

import { useState, useEffect,  } from "react";
import { FiSearch,  FiMenu } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import logo from '../../assets/frontend_assets/logo.png'
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import SinIn from "../SinIn/SinIn";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({ cartAllProduct }) {
 // eslint-disable-next-line no-unused-vars
 const navigate =  useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <nav
      className={`fixed top-0 bg-[#FFDAD6] w-full  z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FFDAD6]" : "bg-transparent"
      } p-4`}
    >
      <div className="flex justify-between items-center max-w-full mx-auto">
        {/* Left Side - Logo and Navigation Links */}
        <div>  <img src={logo} className="ml-16 mt-1" alt="" width='130px'/></div>
        <div className="hidden md:flex space-x-6">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `px-4 py-2  transition duration-300 ${
        isActive
          ? "text-black border border-black"
          : "text-black hover:text-black"
      }`
    }
  >
    Home
  </NavLink>
  <NavLink
    to="/AllProduct"
    className={({ isActive }) =>
      `px-4 py-2  transition duration-300 ${
        isActive
          ? "text-black border border-black"
          : "text-black hover:text-black"
      }`
    }
  >
    All_Collection
  </NavLink>
  <NavLink
    to="/About"
    className={({ isActive }) =>
      `px-4 py-2  transition duration-300 ${
        isActive
          ? "text-black border border-black"
          : "text-black hover:text-black"
      }`
    }
  >
    About
  </NavLink>
  <NavLink
    to="/Contact"
    className={({ isActive }) =>
      `px-4 py-2  transition duration-300 ${
        isActive
          ? "text-black border border-black"
          : "text-black hover:text-black"
      }`
    }
  >
    Contact Us
  </NavLink>
</div>


        {/* Right Side - Search, Notifications, Profile */}
        <div className="flex items-center space-x-8 mr-9 text-[var(--primary-color)] md:hidden">
          <FiMenu
            className="text-xl cursor-pointer hover:text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <div className="hidden md:flex items-center space-x-4 mr-15 text-[var(--primary-color)]">
          <FiSearch className="text-xl cursor-pointer hover:text-gray-400" />
          <div className="flex items-center space-x-4">
          <BsPerson className="text-2xl cursor-pointer hover:text-gray-400"  onClick={() => navigate('/SinIn')} />
          <button className="relative">
          <NavLink to="/Cart"><BsHandbag className="w-6 mmx-3 h-7" /></NavLink>
              
            
            <span className="absolute top-6 text-[10px] right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full">
            {cartAllProduct.length}
            

            </span>
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFDAD6] text-black p-4 space-y-2">
          <li className="cursor-pointer  hover:text-gray-400">Home</li>
          <li className="cursor-pointer  hover:text-gray-400">Collection</li>
          <li className="cursor-pointer  hover:text-gray-400">About us</li>
          <li className="cursor-pointer  hover:text-gray-400">Contact Us</li>
        </div>
      )}
    </nav>
  );
}
