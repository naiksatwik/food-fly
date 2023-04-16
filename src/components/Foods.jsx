import React, { useEffect, useState } from "react";

import FoodCards from "./FoodCards";
import axios from "axios";
import { data } from "autoprefixer";
const Foods = (props) => {
    
     const getData=()=>{
       let productData=localStorage.getItem('products');

       if(productData == null){
        return []
       }else{
        return JSON.parse(productData)
       }
     }
    
    const[food,setFoods]=useState(getData());
    

    const  getProduct= async()=>{
      return await axios.get('http://localhost:5000/api/products').then((res)=>{
       console.log("API",res.data.data)
       setFoods(res.data.data)
       localStorage.setItem('products',JSON.stringify(res.data.data))
      })
    }


      let productData=localStorage.getItem('products');

    useEffect(() => {
      getProduct()
      console.log(food)
    }, [])
  

    // filter foods
    const filterType=(category)=>{
      setFoods(
         food.filter((item)=>{
            console.log(item.category)
            return item.category === category;
        })
      )

    }

    const filterPrise=(price)=>{
      setFoods(
           food.filter((item)=>{
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
         setFoods(food)
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
            JSON.parse(productData).map((item)=>{
             return   <FoodCards name={item.name} price={item.price} image={item.image} id={item.id} Add={props.Add} count={props.count} noItem={item.noItem} />
            })
         }
       </div>
    </div>
  );
};

export default Foods;
