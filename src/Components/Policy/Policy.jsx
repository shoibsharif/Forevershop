// eslint-disable-next-line no-unused-vars
import React from 'react';
import returnPolicy from '../../assets/frontend_assets/exchange_icon.png';
import support from "../../assets/frontend_assets/support_img.png";
import quality from '../../assets/frontend_assets/quality_icon.png';

const Policy = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-12 pt-24 px-6'>
        <div className='flex flex-col items-center text-center'>
            <img src={returnPolicy} alt="Exchange Policy" width='50px' className='mb-3'/>
            <h3 className='text-xl font-bold'>Easy Exchange Policy</h3>
            <h4 className='text-lg text-gray-400 mt-2'>We offer hassle-free exchange policy</h4>
        </div>
        <div className='flex flex-col items-center text-center'>
            <img src={quality} alt="Return Policy" width='50px' className='mb-3'/>
            <h3 className='text-xl font-bold'>7 Days Return Policy</h3>
            <h4 className='text-lg text-gray-400 mt-2'>We provide 7 days free return policy</h4>
        </div>
        <div className='flex flex-col items-center text-center'>
            <img src={support} alt="Customer Support" width='50px' className='mb-3'/>
            <h3 className='text-xl font-bold'>Best Customer Support</h3>
            <h4 className='text-lg text-gray-400 mt-2'>We provide 24/7 customer support</h4>
        </div>
    </div>
  );
};

export default Policy;