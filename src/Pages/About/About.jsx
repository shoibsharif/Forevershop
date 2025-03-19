// eslint-disable-next-line no-unused-vars
import React from 'react';
import Aboutimg from '../../assets/frontend_assets/about_img.png';
import Subscribe from '../../Components/Subscribe/Subscribe';

const About = () => {
    return (
        <div className='mt-20 px-4 md:px-8'>
            <h1 className='text-center font-medium text-2xl'>ABOUT US</h1>
            
            <div className='flex flex-col md:flex-row mt-8 items-center md:items-start'>
                <div className='md:ml-20 w-full flex justify-center md:justify-start'>
                    <img src={Aboutimg} alt='' className='w-full max-w-xs md:max-w-md' />
                </div>
                <div className='md:ml-20 mt-6 md:mt-10 text-center md:text-left'>
                    <p className='mt-3 text-[15px] text-gray-500 font-normal'>
                        Forever was born out of a passion for innovation and a desire to revolutionize
                        the way people shop online. Our journey began with a simple idea: to provide a 
                        platform where customers can easily discover, explore, and purchase a 
                        wide range of products from the comfort of their homes.
                    </p>
                    <p className='mt-5 text-[15px] text-gray-500 font-normal'>
                        Since our inception, we’ve worked tirelessly to curate a diverse selection of 
                        high-quality products that cater to every taste and preference. From fashion
                        and beauty to electronics and home essentials, we offer an extensive collection 
                        sourced from trusted brands and suppliers.
                    </p>
                    <h1 className='text-xl font-semibold mt-4'>Our Mission</h1>
                    <p className='mt-5 text-[15px] text-gray-500 font-normal'>
                        Our mission at Forever is to empower customers with choice, convenience,
                        and confidence. We’re dedicated to providing a seamless shopping experience that 
                        exceeds expectations, from browsing and ordering to delivery and beyond.
                    </p>
                </div>
            </div>
            
            <div className='mt-16'>
                <h1 className='text-center text-2xl font-semibold'>WHY CHOOSE US</h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8 px-4'>
                    <div className='border border-gray-500 w-full md:w-80 p-6 text-center'>
                        <h1 className='text-xl font-semibold font-sans'>Quality Assurance</h1>
                        <p className='mt-2 text-[12px] text-gray-500 font-normal'>
                            We meticulously select and vet each product to ensure it meets our
                            stringent quality standards.
                        </p>
                    </div>
                    <div className='border border-gray-500 w-full md:w-80 p-6 text-center'>
                        <h1 className='text-xl font-semibold font-sans'>Customer Satisfaction</h1>
                        <p className='mt-2 text-[12px] text-gray-500 font-normal'>
                            Our top priority is customer satisfaction, ensuring a seamless shopping experience.
                        </p>
                    </div>
                    <div className='border border-gray-500 w-full md:w-80 p-6 text-center'>
                        <h1 className='text-xl font-semibold font-sans'>Fast & Secure Shipping</h1>
                        <p className='mt-2 text-[12px] text-gray-500 font-normal'>
                            We offer reliable and secure shipping to get your products to you quickly.
                        </p>
                    </div>
                </div>
            </div>
            
            <Subscribe />
        </div>
    );
};

export default About;