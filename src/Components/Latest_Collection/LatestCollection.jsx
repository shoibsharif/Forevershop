/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ProductList from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LatestCollection() {
  const [latestCollection, setLatestCollection] = useState([]);

  useEffect(() => {
    setLatestCollection(ProductList.slice(10, 20));
  }, []);

  const navigate = useNavigate();
  
    const handleClick = (_id) => {
      navigate(`/ProductDetail/${_id}`);
    };

  return (
    <div className="max-w-[1230px] mx-auto px-4">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl text-center font-medium font-serif py-8 flex items-center justify-center">
        <span className="mr-3 font-medium text-gray-500">LATEST</span> COLLECTIONS
        <hr className="w-[70px] ml-4 border-black" />
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {latestCollection?.map((product) => (
          <div className="p-4  " key={product?._id}>
              <Link onClick={handleClick}
              key={product?._id}
              to={`/ProductDetail/${product?._id}`}
              className=" overflow-hidden block"
            >
            <div className="overflow-hidden ">
              <img
                className="hover:scale-110 transition-transform ease-in-out duration-300 cursor-pointer w-full"
                src={product?.image}
                alt={product?.name}
              />
            </div>
            <h2 className="text-[14px] font-semibold mt-4">{product?.name}</h2>
              <h2 className="text-lg font-semibold">${product?.price}</h2>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
