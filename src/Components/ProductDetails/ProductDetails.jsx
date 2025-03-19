import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productList from "../../assets/frontend_assets/assets";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ setProductId }) => {
  const { _id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!_id) return;
    const foundProduct = productList.find((p) => p._id.toString() === _id?.toString());
    if (!foundProduct) {
      navigate("/AllProduct"); // Redirect if product not found
    } else {
      setProduct(foundProduct);
    }
  }, [_id, navigate]);

  useEffect(() => {
    const foundProduct = productList.find((p) => p._id.toString() === _id?.toString());
    setProduct(foundProduct);
  }, [_id]);



  const sizes = ["S", "M", "L", "XL", "XXL"]; // Available sizes

  const handleAddToCart = (_id) => {

    setProductId(_id);
    toast.success('product added sucssesfully');



  };




  return (
    <div className="container mx-auto p-4">



      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 md:mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
  <img src={product?.image} alt={product?.name} className="w-24 h-24 md:w-56 md:h-56 object-cover rounded-lg" />
  <img src={product?.image} alt={product?.name} className="w-full md:w-[600px] object-cover rounded-lg" />
</div>


        <div className="md:ml-10 w-full md:w-1/2">
          <h1 className="mt-6 md:mt-16 text-2xl md:text-3xl font-semibold font-serif text-center md:text-left">{product?.name}</h1>
          <div className="flex justify-center md:justify-start mt-4">
            <div className="flex gap-2 text-amber-300">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="ml-3 text-lg md:text-xl text-orange-700 font-semibold">(122)</p>
          </div>
          <h1 className="text-center md:text-left mt-4 text-2xl md:text-3xl font-semibold">${product?.price}</h1>
          <p className="text-center md:text-left mt-4 text-[16px] md:text-[18px]">{product?.description}</p>

          <div className="mt-4 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Select Size:</h3>
            <div className="flex justify-center md:justify-start space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg transition-all ${selectedSize === size
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-400 text-gray-700 hover:bg-gray-200"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {selectedSize && (
            <p className="mt-4 text-lg font-semibold text-black text-center md:text-left">
              Selected Size: {selectedSize}
            </p>
          )}
          <div  >
          <Toaster/>
          <button className="mt-6 w-full md:w-44 p-4 bg-black text-white h-14 cursor-pointer rounded-md" onClick={() =>  handleAddToCart(product._id)} >Add to Cart</button>

          
          </div>
          
          <hr className="mt-7 w-full md:w-96 text-gray-500" />
          <p className="mt-6 text-[14px] md:text-[16px] font-semibold text-gray-600 text-center md:text-left">
            100% Original product.<br />
            Cash on delivery is available on this product.<br />
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>

      <div className="mt-10 mb-20">
        <div className="flex justify-center md:justify-start space-x-2">
          <p className="border border-black p-2 text-[14px] font-bold cursor-pointer">Description</p>
          <p className="border border-black p-2 text-[14px] font-bold cursor-pointer">Reviews (122)</p>
        </div>
        <p className="mt-4 border border-black p-4 md:p-8 text-sm md:text-base">
          An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
          <br />
          E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;