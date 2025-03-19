// eslint-disable-next-line no-unused-vars
import React from "react";
import hero from "../../assets/frontend_assets/hero_img.png";

const Header = () => {
  return (
    <header className="max-w-[1230px] mt-10 md:ml-20 mx-auto flex flex-col-reverse md:flex-row items-center justify-between  md:mt-12 lg:mt-20 px-4 sm:px-6 md:px-8 border-2 border-black  relative overflow-hidden">
      {/* Left Text Section */}
      <section className="text-center md:text-left md:w-1/2 lg:w-[45%] p-4">
        <h2 className="text-base sm:text-lg md:text-xl flex items-center justify-center md:justify-start">
          <hr className="w-6 sm:w-8 md:w-10 mr-2 sm:mr-4 border-black" /> Our Bestsellers
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mt-2 sm:mt-3 md:mt-4">
          Latest Arrivals
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl flex items-center justify-center md:justify-start mt-1 sm:mt-2 md:mt-3">
          Shop Now <hr className="w-6 sm:w-8 md:w-10 ml-2 sm:ml-4 border-black" />
        </h2>
      </section>

      {/* Right Image Section */}
      <figure className="flex justify-center md:w-1/2 lg:w-[55%] mt-6 md:mt-0 relative">
        <div className="absolute inset-0 border-2 "></div>
        <img
          className="w-full sm:w-[90%] md:w-[90%] lg:w-[75%] md:ml-24 max-w-[400px] sm:max-w-[500px] bg-[#FFDAD6] rounded-lg p-2"
          src={hero}
          alt="Latest Arrivals Hero Image"
          loading="lazy"
        />
      </figure>
    </header>
  );
};

export default Header;
