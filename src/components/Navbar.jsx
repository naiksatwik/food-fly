import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import {FaUserCheck} from 'react-icons/fa'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = (props) => {
    const [toggle,setToggle]=useState(false);

    //  useEffect(() => {
    //   fetch("http://localhost:5000/userData", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify({
    //      token:window.localStorage.getItem('token')
    //     }),
    //   }).then((res)=>res.json()).then((data)=>{
    //     console.log(data,"user Profile")
    //   })
    //  }, [])
     
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-4 sticky top-0 bg-white z-40">
      <div className="w-full px-4 flex justify-between text items-center relative">
        
        <div className="flex pr-3 items-center">
          <Link to='/home'>
          <img
            src={logo}
            alt=""
            className="w-[10rem]  "
          />
          </Link>
           
        </div>
         <div  className="absolute left-[33rem] flex items-center space-x-2">
         <FaUserCheck size={25}/>
         <h1 className="text-xl font-bold ">Hi,Satwik</h1>
         </div>
        <div className="hidden md:block">
          <div className="flex text-sm space-x-6  pr-4">
            <Link to='/'>
            <button className=" text-black font-medium px-5 py-2 shadow-md rounded-full space-x-4 ">
              Logout
            </button>
            </Link>

           <Link to='/products'><button className="blackBtn">Products</button></Link> 
           <Link to='/cart'>
           <button className="flex blackBtn justify-evenly w-[5rem]">
              Cart
            </button>
           </Link>

          </div>
        </div>
       <div className={`duration-1000 absolute top-[3rem]  backdrop-blur-md h-screen w-full flex flex-col items-center space-y-14 ${toggle?"left-0":"left-[-300%]"} md:left-[-300%] md:hidden z-50`}>
        <Link to='/'>
        <button className=" text-white font-medium px-5 py-2 w-[6rem] shadow rounded-full mt-14">
          Logout
        </button>
        </Link>
        <Link to='/products'>
        <button className="blackBtn w-[6rem]">Products</button>
        </Link>
        <Link to='/cart'>
        <button className="flex blackBtn justify-evenly w-[6rem]">
          Cart
        </button>
        </Link>
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
