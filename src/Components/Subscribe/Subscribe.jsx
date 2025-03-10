// eslint-disable-next-line no-unused-vars
import React from 'react';

const Subscribe = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center p-6 mt-12'>
            <h1 className='text-3xl md:text-4xl font-bold font-serif text-gray-900'>
                Subscribe now & get 20% off
            </h1>
            <p className='mt-3 text-gray-600 max-w-md'>
                Stay updated with our latest offers and news. Enter your email below to subscribe.
            </p>
            <div className='flex flex-col md:flex-row items-center  mt-6 w-full max-w-md'>
                <input 
                    type='email' 
                    placeholder='Enter your email' 
                    className='text-center p-3 w-full border border-gray-400  focus:outline-none focus:ring-2 focus:ring-black'
                />
                <button className='bg-black text-white p-7 h-13 py-3  hover:bg-gray-800 transition duration-300'>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Subscribe;
