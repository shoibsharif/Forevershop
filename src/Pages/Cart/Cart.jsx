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
      return total + product.price * counts[product._id];
    }, 0);
  };

  return (
    <div className='my-10 px-4 md:px-20 md:mt-20'>
      <h1 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>YOUR CART</h1>
      <div className='mt-10 space-y-6'>
        {cartAllProduct?.map((product) => (
          <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4" key={product._id}>
            <div className="flex items-center space-x-4">
              <img src={product.image} alt="Product" className="w-24 h-24 md:w-40 md:h-36 rounded-lg object-cover" />
              <h2 className="text-lg md:text-xl font-semibold">{product.name}</h2>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <button onClick={() => decrement(product)} className="px-3 py-1 bg-gray-200 rounded-md">-</button>
              <input type="number" className="w-12 text-center border rounded-md" value={counts[product._id]} readOnly />
              <button onClick={() => increment(product)} className="px-3 py-1 bg-gray-200 rounded-md">+</button>
            </div>
            <p className="text-lg font-semibold mt-4 md:mt-0">${(counts[product._id] * product.price).toFixed(2)}</p>
            <button className="text-red-500 text-xl md:text-2xl" onClick={() => handleDeleteCart(product._id)}>
              <RiDeleteBin5Line />
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Section */}
      <div className='mt-10 flex flex-col md:flex-row justify-between items-center md:items-start'>
        {showInfo && (
          <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-md">
            <RxCross2 className='text-xl cursor-pointer ml-auto' onClick={() => setShowInfo(false)} />
            <h2 className="text-xl font-semibold text-center">DELIVERY INFORMATION</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
              <input type="text" placeholder='First Name' className='border p-2 rounded' />
              <input type="text" placeholder='Last Name' className='border p-2 rounded' />
              <input type="text" placeholder='Email Address' className='border p-2 rounded md:col-span-2' />
              <input type="text" placeholder='Street' className='border p-2 rounded md:col-span-2' />
              <input type="text" placeholder='City' className='border p-2 rounded' />
              <input type="text" placeholder='State' className='border p-2 rounded' />
              <input type="text" placeholder='Zipcode' className='border p-2 rounded' />
              <input type="text" placeholder='Country' className='border p-2 rounded' />
              <input type="text" placeholder='Phone' className='border p-2 rounded md:col-span-2' />
            </div>
          </div>
        )}

        {/* Cart Totals */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0 p-6 border rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-center">CART TOTALS</h1>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <h1 className="text-lg">Subtotal</h1>
              <h1 className="text-lg">${getTotalPrice().toFixed(2)}</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1 className="text-lg">Shipping Fee</h1>
              <h1 className="text-lg">$10.00</h1>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <h1 className="text-lg">Total</h1>
              <h1 className="text-lg">${(getTotalPrice() + 10).toFixed(2)}</h1>
            </div>
          </div>
          <button onClick={handleClick} className="w-full mt-6 py-2 bg-black text-white rounded">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;