// eslint-disable-next-line no-unused-vars
import React from 'react';
import Contact_img from "../../assets/frontend_assets/contact_img.png";
import Subscribe from '../../Components/Subscribe/Subscribe';

const Contact = () => {
  return (
    <div className='mt-20 px-6 md:px-16 lg:px-36'>
      <h1 className='text-center text-2xl font-semibold font-serif'>CONTACT US</h1>
      <div className='flex flex-col lg:flex-row mt-6 items-center lg:items-start'>
        <div className='lg:ml-20 flex justify-center'>
          <img src={Contact_img} alt="Contact" className='w-full max-w-[450px]' />
        </div>
        <div className='lg:ml-10 mt-10 text-center lg:text-left'>
          <h1 className='text-xl font-semibold font-serif'>Our Store</h1>
          <p className='my-5 text-[18px] text-gray-500 font-normal'>
            54709 Willms Station<br />
            Suite 350, Washington, USA
          </p>
          <p className='text-[18px] text-gray-500 font-normal'>
            Tel: (415) 555-0132<br />
            Email: admin@forever.com
          </p>
          <h1 className='text-xl font-semibold font-serif mt-4'>Careers at Forever</h1>
          <p className='text-[16px] mt-5 text-gray-500 font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quibusdam?
          </p>
          <button className='w-36 p-3 mt-7 text-white bg-black hover:bg-white hover:border hover:border-black hover:text-black transition duration-300'>
            Explore Jobs
          </button>
        </div>
      </div>
      <div className='mt-10'>
        <Subscribe />
      </div>
    </div>
  );
};

export default Contact;