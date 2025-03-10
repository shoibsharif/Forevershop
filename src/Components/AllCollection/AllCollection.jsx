import { useState } from "react";
import productList from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from 'react-router-dom'; // Import product data

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Unique categories from productList
  const categories = ["All", ...new Set(productList.map((p) => p.category))];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productList
      : productList.filter((p) => p.category === selectedCategory);


  const navigate = useNavigate();

  const handleClick = (_id) => {
    navigate(`/ProductDetail/${_id}`);
  };

  return (

    <div className="container flex mx-auto p-4 mt-28">
   
      {/* Filter Section */}
      <div className=" gap-4 md:gap-8 items-center ">
        <h2 className="text-xl font-bold -mt-8">Filter</h2>
        <div className=" gap-4 w-60 mr-8 border mt-3 border-black p-6">
          <h1 className=" text-xl mb-4 font-normal ">Catagory</h1>
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="hidden peer rounded-none"
              />
              
              <div className="w-4 h-4 rounded p-1 border  border-gray-400  flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                <div className="w-2.5 h-2.5 bg-white rounded peer-checked:block hidden">
                  
                </div>
                {selectedCategory === "option2" && (
            <span className="text-blue-500 font-bold">✔</span>
          )}
              </div>
              <span className="text-gray-700 mx-10 mt-1 ">{category} </span>
            </label>
          ))}
        </div>
        
      </div>
     
      {/* Product Grid */}
      <div className="">
        <div className="flex">
        <h1 className="text-2xl font-semibold font-sans -mt-8 my-3">ALL COLLECTIONS</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {filteredProducts.length > 0 ? (
          
          filteredProducts.map((product) => (
            
            <Link onClick={handleClick}
              key={product?._id}
              to={`/ProductDetail/${product?._id}`}
              className=" overflow-hidden block"
            >
          
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover hover:scale-110 transition ease-in-out cursor-pointer" />
              <h3 className="mt-2 text-[18px] font-normal">{product.name}</h3>
              {/* <p className="text-gray-500">{product.category}</p> */}
              <p className="text-xl font-medium mt-2">${product.price}</p>
             
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default AllProducts;