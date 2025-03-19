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
    <div className="container mx-auto p-4 mt-28">
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:mt-14 md:w-1/4 border border-black p-6">
          <h2 className="text-xl font-bold mb-4">Filter</h2>
          <h1 className="text-xl mb-4 font-normal">Category</h1>
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="hidden peer rounded-none"
              />
              <div className="w-4 h-4 rounded p-1 border border-gray-400 flex items-center justify-center peer-checked:border-black peer-checked:bg-black">
                <div className="w-2.5 h-2.5 bg-white rounded peer-checked:block hidden"></div>
              </div>
              <span className="text-gray-700 mx-2">{category}</span>
            </label>
          ))}
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-semibold font-sans mb-6">ALL COLLECTIONS</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  onClick={handleClick}
                  key={product?._id}
                  to={`/ProductDetail/${product?._id}`}
                  className="overflow-hidden block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover hover:scale-110 transition ease-in-out cursor-pointer"
                  />
                  <h3 className="mt-2 text-[18px] font-normal">{product.name}</h3>
                  <p className="text-xl font-medium mt-2">${product.price}</p>
                </Link>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;