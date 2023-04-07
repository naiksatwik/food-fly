import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext';

const CartItem = (props) => {
    const {id,name,price,image}=props.data;
    const {cartItem,addToCart,removeFromCart} =useContext(FoodContext)
  return (
    <div className='w-[20rem] mt-4  mx-auto shadow-xl flex md:justify-between rounded-lg p-3 flex-col items-center md:flex-row md:w-[40rem] hover:transition hover:scale-110'>
    <img src={image} alt={name}  className='w-[10rem] h-[8rem] object-cover'/>
    <div className='space-y-5 md:pr-10 flex flex-col items-center mt-4 '>
     <p className='text-xl font-bold text-gray-500'>{name}</p> 
     <p className='text-lg font-semibold'>₹{price}</p>
     <div className='flex space-x-4 '>
         <button className='bg-black text-white px-5  text-2xl
         rounded-full pb-2' onClick={()=>addToCart(id)}>+</button>
         <p className='text-2xl'>{cartItem[id]}</p>
         <button className='bg-black text-white px-5  text-2xl rounded-full pb-1' onClick={()=> removeFromCart(id)}>-</button>
     </div>
     </div>
    </div>
  )
}

export default CartItem