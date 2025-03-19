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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FFDAD6]" : "bg-transparent"
      } md:p-4`}
    >
      <div className="flex justify-between items-center max-w-full mx-auto px-4 py-2">
        {/* Left - Logo */}
        <img src={logo} className="ml-4 mt-1" alt="Logo" width="130px" />

        {/* Center - Nav Links */}
        <div className="hidden md:flex space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/AllProduct", label: "All Collection" },
            { to: "/About", label: "About" },
            { to: "/Contact", label: "Contact Us" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 transition duration-300 ${
                  isActive ? "text-black border border-black" : "text-black hover:text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-6">
          <FiSearch className="text-xl cursor-pointer hover:text-gray-400" />
          <BsPerson className="text-2xl cursor-pointer hover:text-gray-400" onClick={() => navigate("/SinIn")} />
          <button className="relative">
            <NavLink to="/Cart">
              <BsHandbag className="w-6 h-7" />
            </NavLink>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-white bg-black rounded-full">
              {cartAllProduct.length}
            </span>
          </button>
          {/* Mobile Menu Toggle */}
          <FiMenu
            className="text-xl cursor-pointer md:hidden hover:text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center bg-[#FFDAD6] text-black p-4 space-y-2">
          {[
            { to: "/", label: "Home" },
            { to: "/AllProduct", label: "Collection" },
            { to: "/About", label: "About Us" },
            { to: "/Contact", label: "Contact Us" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md cursor-pointer hover:text-gray-400 ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
