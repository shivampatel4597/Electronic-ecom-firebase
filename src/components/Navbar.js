import React from "react";
import { Link } from "react-router-dom";
// import '../navbar.css';
const Navbar = () => {
  return (
    <div
      className="w-full px-5 h-20 flex items-center justify-between
     text-red-500 bg-gray-300"
    >
      <h1 className="text-3xl font-bold">elctrify.com</h1>
      <div>
        <div>
        <Link className=" text-xl mx-2 px-4 py-1 border-1 bg-white rounded-2xl text-black hover:text-red-500 font-medium" to="/signup">
          Sign up
        </Link>
        <Link className=" text-xl mx-2 px-4 py-1 border-1 bg-white rounded-2xl text-black hover:text-red-500 font-medium" to="/login">Log in</Link>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
