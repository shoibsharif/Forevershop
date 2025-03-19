// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "../../assets/frontend_assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-12 border-t border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-gray-800">
        
        {/* Brand Info */}
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="Brand Logo" className="h-14" />
          <p className="text-[14px] leading-6 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quibusdam ullam earum, 
            soluta quos sint id esse dolores ea, nisi expedita beatae veniam corporis alias doloribus dolor dolorem fuga voluptas.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between w-full md:w-auto md:ml-20">
          {/* Company Section */}
          <nav className='md:mx-36'>
            <h1 className="text-xl font-serif font-semibold">Company</h1>
            <ul className="mt-3 space-y-2">
              <li className="hover:text-gray-500 transition cursor-pointer text-[15px] font-medium">Home</li>
              <li className="hover:text-gray-500 transition cursor-pointer text-[15px] font-medium">About Us</li>
              <li className="hover:text-gray-500 transition cursor-pointer text-[15px] font-medium">Delivery</li>
              <li className="hover:text-gray-500 transition cursor-pointer text-[15px] flex-row font-medium">Terms & Conditions</li>
            </ul>
          </nav>

          {/* Contact Section */}
          <nav className="ml-12">
            <h1 className="text-xl font-serif font-semibold">Get In Touch</h1>
            <ul className="mt-3 space-y-2">
              <li className="hover:text-gray-500 transition cursor-pointer text-[16px] font-medium">+1-000-000-0000</li>
              <li className="hover:text-gray-500 transition cursor-pointer text-[16px] font-medium">mymail@gmail.com</li>
              <li className="hover:text-gray-500 transition cursor-pointer text-[16px] font-medium">Instagram</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
