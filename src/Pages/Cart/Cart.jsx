/* eslint-disable react/prop-types */
import { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  const [buttonText, setButtonText] = useState("PROCEED TO CHECKOUT");
  const [showInfo, setShowInfo] = useState(false);
  const [counts, setCounts] = useState(
    cartAllProduct.reduce((acc, product) => ({ ...acc, [product._id]: 1 }), {})
  );

  const handleClick = () => {
    setButtonText("Place Order!");
    setShowInfo(true);
  };

  const increment = (product) => {
    setCounts((prev) => ({
      ...prev,
      [product._id]: prev[product._id] + 1,
    }));
  };

  const decrement = (product) => {
    setCounts((prev) => ({
      ...prev,
      [product._id]: prev[product._id] > 1 ? prev[product._id] - 1 : 1,
    }));
  };

  const handleDeleteCart = (_id) => {
    const filteredItems = cartAllProduct.filter((item) => item._id !== _id);
    setCartAllProduct(filteredItems);
  };

  const getTotalPrice = () => {
    return cartAllProduct.reduce((total, product) => {
      return total + (product.price * counts[product._id]);
    }, 0);
  };

  return (
    <div className='my-20'>
      <h1 className='text-3xl ml-20 font-semibold'>YOUR CART</h1>
      <div className='mt-20 mx-20'>
        <div className="w-full">
          {cartAllProduct?.map((product) => (
            <div className="items-center flex justify-between border-b pb-4 m-10" key={product._id}>
              <div className="flex items-center">
                <img src={product.image} alt="Product" className="w-40 h-36 rounded-lg object-cover" />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrement(product)}
                  className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-16 h-10 text-center border border-gray-300 rounded-md"
                  value={counts[product._id]}
                  readOnly
                />
                <button
                  onClick={() => increment(product)}
                  className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <div>
                <p className="text-lg font-semibold">${(counts[product._id] * product.price).toFixed(2)}</p>
              </div>
              <button className="text-red-500 text-2xl hover:text-red-700"
                onClick={() => handleDeleteCart(product._id)}
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Section */}
      <div className='mt-20'>
        <div className="flex justify-end">
          {/* Delivery Info */}
          {showInfo && (
            <div className="p-4 ml-20 rounded-lg">
              <RxCross2 className='ml-[500px] text-2xl cursor-pointer' onClick={()=>{setShowInfo(false)}} />

              <h2 className="text-3xl mb-10 font-semibold">DELIVERY INFORMATION</h2>
              <div className='flex'>
                <input type="text" placeholder='First Name' className='w-60 h-8 border rounded text-xl p-5 font-normal font-sans border-gray-200 ' />
                <input type="text" placeholder='Last Name' className='w-60 h-8 border rounded text-xl p-5 font-normal ml-4 font-sans border-gray-200 ' />
              </div>
              <input type="text" placeholder='Email Address' className='w-[500px] h-11 rounded border text-gray-950 mt-4 text-xl p-3 border-gray-300' />
              <input type="text" placeholder='Street' className='w-[500px] h-11 rounded border text-gray-950 mt-4 text-xl p-3 border-gray-300' />
              <div className='flex'>
                <input type="text" placeholder='City' className='w-60 h-8 border rounded text-xl p-5 font-normal mt-4 font-sans border-gray-200 ' />
                <input type="text" placeholder='State' className='w-60 h-8 border rounded text-xl p-5 font-normal mt-4 ml-4 font-sans border-gray-200 ' />
              </div>
              <div className='flex'>
                <input type="text" placeholder='Zipcode' className='w-60 h-8 border mt-4 rounded text-xl p-5 font-normal font-sans border-gray-200 ' />
                <input type="text" placeholder='Country' className='w-60 h-8 border mt-4 rounded text-xl p-5 font-normal ml-4 font-sans border-gray-200 ' />
              </div>
              <input type="text" placeholder='Phone' className='w-[500px] h-11 rounded border text-gray-950 mt-4 text-xl p-3 border-gray-300' />
            </div>
          )}

          {/* Cart Totals */}
          <div className="w-96 mt-20 mr-36 p-6 rounded-md border shadow-lg">
            <h1 className="text-2xl font-semibold font-serif text-center">CART TOTALS</h1>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <h1 className="text-lg font-medium">Subtotal</h1>
                <h1 className="text-lg font-medium">${getTotalPrice().toFixed(2)}</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="text-lg font-medium">Shipping Fee</h1>
                <h1 className="text-lg font-medium">$10.00</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="text-lg font-semibold">Total</h1>
                <h1 className="text-lg font-semibold">${(getTotalPrice() + 10).toFixed(2)}</h1>
              </div>
            </div>

            {/* Checkout Button */}
            <button onClick={handleClick} className="w-56 mt-6 py-3 ml-28 text-white bg-black">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
