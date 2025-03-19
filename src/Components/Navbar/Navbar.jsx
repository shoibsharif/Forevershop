/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { BsHandbag, BsPerson } from "react-icons/bs";
import logo from "../../assets/frontend_assets/logo.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartAllProduct }) {
  const navigate = useNavigate();

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
      className={`fixed pt-4 top-0 h-16 px-6  bg-[#FFDAD6] w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FFDAD6]" : "bg-transparent"
      } md:p-4`}
    >
      <div className="flex justify-between items-center max-w-full mx-auto">
        {/* Left Side - Logo */}
        <div>
          <img src={logo} className="md:ml-10 mt-1" alt="Logo" width="130px" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 md:mr-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 transition duration-300 ${
                isActive ? "text-black border border-black" : "text-black hover:text-black"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/AllProduct"
            className={({ isActive }) =>
              `px-4 py-2 transition duration-300 ${
                isActive ? "text-black border border-black" : "text-black hover:text-black"
              }`
            }
          >
            All_Collection
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `px-4 py-2 transition duration-300 ${
                isActive ? "text-black border border-black" : "text-black hover:text-black"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `px-4 py-2 transition duration-300 ${
                isActive ? "text-black border border-black" : "text-black hover:text-black"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Icons for both Mobile & Desktop */}
        <div className="flex md:mr-15 items-center space-x-3  text-[var(--primary-color)]">
          {/* Mobile Menu Icon */}
        

          {/* Search, Profile, and Cart Icons */}
          <FiSearch className="text-xl cursor-pointer hover:text-gray-400" />
          <BsPerson
            className="text-2xl cursor-pointer hover:text-gray-400"
            onClick={() => navigate("/SinIn")}
          />
          <button className="relative">
            <NavLink to="/Cart">
              <BsHandbag className="w-6 h-7" />
            </NavLink>
            <span className="absolute top-0 right-0 left-3 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-black rounded-full">
              {cartAllProduct?.length || 0}
            </span>
          </button>
          <FiMenu
            className="text-xl cursor-pointer hover:text-gray-400 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center bg-[#FFDAD6] text-black p-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md cursor-pointer hover:text-gray-400 ${isActive ? "font-bold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/AllProduct"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md cursor-pointer hover:text-gray-400 ${isActive ? "font-bold" : ""}`
            }
          >
            All_Collection
          </NavLink>
          <NavLink
            to="/About"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md cursor-pointer hover:text-gray-400 ${isActive ? "font-bold" : ""}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/Contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md cursor-pointer hover:text-gray-400 ${isActive ? "font-bold" : ""}`
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}
