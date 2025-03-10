// eslint-disable-next-line no-unused-vars
import React from "react";
import Subscribe from "../Subscribe/Subscribe";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mt-28 items-center justify-center min-h-screen px-4 w-full overflow-x-hidden">
      {/* Sign Up Heading */}
      <h1 className="text-center text-3xl font-semibold font-serif mb-6">
        SIGN UP
      </h1>

      {/* Input Fields */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <input
          type="text"
          className="w-full h-12 border p-4 border-gray-400 rounded-md focus:outline-none focus:border-black"
          placeholder="Enter your Name"
        />
        <input
          type="email"
          className="w-full h-12 border p-4 border-gray-400 rounded-md focus:outline-none focus:border-black mt-4"
          placeholder="Enter Email"
        />
        <input
          type="password"
          className="w-full h-12 border p-4 border-gray-400 rounded-md focus:outline-none focus:border-black mt-4"
          placeholder="Enter Password"
        />

        {/* Forgot Password & Sign In Link */}
        <div className="flex justify-between mt-3 text-sm font-medium">
          <p className="text-gray-600 cursor-pointer hover:text-black">
            Forgot Password?
          </p>
          <p
            className="text-black cursor-pointer hover:underline"
            onClick={() => navigate("/SinIn")}
          >
            Sign In here
          </p>
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-black text-white py-3 mt-6 rounded-md hover:bg-gray-800 transition">
          Sign Up
        </button>
      </div>

      {/* Subscribe Section */}
      <Subscribe />
    </div>
  );
};

export default SignUp;
