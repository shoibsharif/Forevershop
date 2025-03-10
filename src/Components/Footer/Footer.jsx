// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "../../assets/frontend_assets/logo.png";

const Footer = () => {
  return (
    <footer className='bg-white text-black py-8  px-6 md:px-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>

        {/* Brand Info */}
        <div className='flex flex-col items-start'>
          <img src={logo} alt='Brand Logo' className='h-12' />
          <p className='text-[14px] mt-4 leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quibusdam ullam earum, 
            soluta quos sint id esse dolores ea, nisi expedita beatae veniam corporis alias doloribus dolor dolorem fuga voluptas.
          </p>
        </div>
<div className=' flex'>
        {/* Company Navigation */}
        <nav className='md:ml-40'>
          <h1 className='text-xl font-semibold'>Company</h1>
          <ul className='mt-3 space-y-2 flex-none'>
            <li className='hover:text-gray-500 transition cursor-pointer text-[15px] font-medium'>Home</li>
            <li className='hover:text-gray-500 transition cursor-pointer text-[15px] font-medium'>About Us</li>
            <li className='hover:text-gray-500 transition cursor-pointer text-[15px] font-medium'>Delivery</li>
            <li className='hover:text-gray-500 transition cursor-pointer text-[15px] font-medium'>Terms & Condition</li>
          </ul>
        </nav>

        {/* Contact Info */}
        <nav className='md:ml-40 ml-24'>
          <h1 className='text-xl font-semibold'>Get In Touch</h1>
          <ul className='mt-3 space-y-2 flex-none'>
            <li className='hover:text-gray-500 transition cursor-pointer text-[16px] font-medium'>+1-000-000-0000</li>
            <li className='hover:text-gray-500 transition cursor-pointer text-[16px] font-medium'>mymail@gmail.com</li>
            <li className='hover:text-gray-500 transition cursor-pointer text-[16px] font-medium'>Instagram</li>
          </ul>
        </nav>
        </div>
      </div>

   
      
    </footer>
  );
}

export default Footer;
