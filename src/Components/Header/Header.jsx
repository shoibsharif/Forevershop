// eslint-disable-next-line no-unused-vars
import React from "react";
import hero from "../../assets/frontend_assets/hero_img.png";

const Header = () => {
  return (
    <div className="px-4  sm:px-6 lg:px-20">
      <header className="max-w-full h-[450px]  mx-auto mt-15 flex flex-col-reverse md:flex-row items-center  justify-between md:mt-12 lg:mt-20 relative overflow-hidden">
        {/* Left Text Section */}
        <section className="text-center mt-10 md:mt-0 md:text-left md:w-1/2 h-auto p-4">
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
        <figure className="flex justify-center items-center w-full md:w-1/2 h-auto p-4">
          <img
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] bg-[#FFDAD6] border  p-2"
            src={hero}
            alt="Latest Arrivals Hero Image"
            loading="lazy"
          />
        </figure>
      </header>
    </div>
  );
};

export default Header;
