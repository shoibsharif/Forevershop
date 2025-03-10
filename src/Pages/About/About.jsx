// eslint-disable-next-line no-unused-vars
import React from 'react'
import Aboutimg from '../../assets/frontend_assets/about_img.png'
import Subscribe from '../../Components/Subscribe/Subscribe'

const About = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-center font-medium text-2xl'>ABOUT US</h1>
            <div className='flex mt-8'>
                <div className='ml-20'><img src={Aboutimg} alt="" width='450px' /></div>
                <div className='ml-20 mt-10'>
                    <p className='mt-3 text-[15px] text-gray-500 font-normal'>Forever was born out of a passion for innovation and a desire to revolutionize<br />  the way people shop online. Our journey began with a simple idea: to provide a <br /> platform where customers can easily discover, explore, and purchase a <br /> wide range of products from the comfort of their homes.</p>
                    <p className='mt-5 text-[15px] text-gray-500 font-normal'>Since our inception, we ve worked tirelessly to curate a diverse selection of <br /> high-quality products that cater to every taste and preference. From fashion<br />  and beauty to electronics and home essentials, we offer an extensive collection <br /> sourced from trusted brands and suppliers.</p>
                    <h1 className='text-xl font-semibold mt-4'>Our Mission</h1>
                    <p className='mt-5 text-[15px] text-gray-500 font-normal'>Our mission at Forever is to empower customers with choice, convenience,<br />  and confidence. We re dedicated to providing a seamless shopping experience that <br />  exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>
            <div className='ml-20 '>
                <h1 className='my-16 text-2xl font-semibold' >WHY CHOOSE US</h1>
                <div className='ml-8 flex'>
                    <div className='border border-gray-500 w-96 h-60  p-15'>
                        <h1 className='text-xl font-semibold font-sans '>Quality Assurance:</h1>
                        <p className='mt-2 text-[12px] text-gray-500 font-normal'>We meticulously select and vet each<br /> product to ensure it meets our<br />  stringent quality standards.</p>
                    </div>
                    <div className='border border-gray-500 w-96 h-60  p-15'>
                        <h1 className='text-xl font-semibold font-sans '>Quality Assurance:</h1>
                        <p className='mt-2 text-[12px] text-gray-500 font-normal'>We meticulously select and vet each<br /> product to ensure it meets our<br />  stringent quality standards.</p>
                    </div>
                    <div className='border border-gray-500 w-96 h-60  p-15'>
                        <h1 className='text-xl font-semibold font-sans '>Quality Assurance:</h1>
                        <p className='mt-2 text-[12px] text-gray-500 font-normal'>We meticulously select and vet each<br /> product to ensure it meets our<br />  stringent quality standards.</p>
                    </div>
                </div>
<Subscribe/>
            </div>

        </div>
    )
}

export default About