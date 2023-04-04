import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logo from "../assets/FoodFly_logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-4  ">
      <div className=" flex justify-between items-center relative">
        
        <div>
          <img
            src={logo}
            alt=""
            className="w-[10rem] absolute top-[-4rem] left-[-1rem] "
          />
        </div>
        

        <div className="hidden md:block">
          <div className="flex text-sm space-x-6  pr-4">
            <button className=" text-black font-medium px-5 py-2 shadow-md rounded-full  ">
              Login
            </button>
            <button className="blackBtn">Products</button>
            <button className="flex blackBtn justify-between">
              <AiOutlineShoppingCart size={20} />
              Cart
            </button>
          </div>
        </div>
       <div className={`duration-1000 absolute top-[3rem]  backdrop-blur-md h-screen w-full flex flex-col items-center space-y-14 ${toggle?"left-0":"left-[-100%]"} md:left-[-100%] md:hidden z-50`}>
       <button className=" text-white font-medium px-5 py-2 w-[6rem] shadow rounded-full mt-14">
          Login
        </button>
        <button className="blackBtn w-[6rem]">Products</button>
        <button className="flex blackBtn justify-between w-[6rem]">
          <AiOutlineShoppingCart size={20} />
          Cart
        </button>
       </div>
       {
         (toggle)?<AiOutlineClose onClick={()=>{
            setToggle(!toggle)
         }} size={30} className="md:hidden"/>:<AiOutlineMenu onClick={()=>{
            setToggle(!toggle)
         }} size={30} className="md:hidden"/>
       }
      </div>
    </div>
  );
};

export default Navbar;
