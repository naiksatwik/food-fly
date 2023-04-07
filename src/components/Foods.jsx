import React, { useState } from "react";
import {data} from '../data/data'
import FoodCards from "./FoodCards";
const Foods = (props) => {
    console.log(data)
    const[food,setFoods]=useState(data);
  

    // filter foods
    const filterType=(category)=>{
      setFoods(
         data.filter((item)=>{
            return item.category === category;
        })
      )

    }

    const filterPrise=(price)=>{
      setFoods(
           data.filter((item)=>{
               return item.price <= price;
           })
      )

    }
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-7">
      <h1 className="text-[#FB8700] text-2xl font-bold text-center">
        Top Rated Menu Items
      </h1>
       <div className="row  px-4 flex flex-col md:flex-row md:justify-between   ">

       <div >
        <p className="font-semibold py-2">Filter Type</p>
        <div className="text-[1rem] space-x-2 flex justify-between">
        <button className="orangeButton  font-normal " onClick={()=>{
         setFoods(data)
        }}>All</button>
        <button className="orangeButton  font-normal "  onClick={()=>{
         filterType('burger')
        }}>Burger</button>
        <button className="orangeButton  font-normal "onClick={()=>{
         filterType('pizza')
        }}>Pizza</button>
        <button className="orangeButton  font-normal "onClick={()=>{
         filterType('salad')
        }}>Salad</button>
        <button className="orangeButton  font-normal "onClick={()=>{
         filterType('chicken')
        }}>Chicken</button>
        </div>
       </div>
       
       <div >
        <p className="font-semibold py-2 md:text-right px-1">Filter Price</p>
        <div className="text-[1rem] space-x-2 flex justify-between" >
        <button className="orangeButton font-normal" onClick={()=>{
         filterPrise(100)
        }}>₹100</button>
        <button className="orangeButton font-normal"onClick={()=>{
         filterPrise(500)
        }}>₹500</button>
        <button className="orangeButton font-normal"onClick={()=>{
         filterPrise(1000)
        }}>₹1000</button>
        <button className="orangeButton font-normal" onClick={()=>{
         filterPrise(2000)
        }}>₹2000</button>
        </div>
       </div>
       </div>

       {/* DIsplay food */}
       
       <div className="px-4 py-10 grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center  ">
         {
            food.map((item)=>{
             return   <FoodCards name={item.name} price={item.price} image={item.image} id={item.id} Add={props.Add} count={props.count}/>
            })
         }
       </div>
    </div>
  );
};

export default Foods;
