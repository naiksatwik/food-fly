import React, { useState } from "react";


const FoodCards = (props) => {

  return (
    <div className="shadow-2xl rounded-lg hover:-transition-y-1 hover:scale-110 duration-400 w-[17rem] sm:w-full" key={props.key}>
    <img src={props.image} alt={props.name} className="  w-full  h-[8rem] object-cover  rounded-tl-lg rounded-tr-lg" />
    <div className="flex py-2 px-3">
          <div className="w-1/2">
             <p className="text-[12px] text-gray-500 font-medium">{props.name}</p>
             <p  className="text-sm font-medium pt-2">₹{props.price}</p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
          <button className='orangeButton px-4 text-sm' onClick={()=>props.Add(props.count+1)}>Add</button>
          </div>
    </div>
 </div>
  )
}

export default FoodCards