import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import {data} from '../data/data'
import { FoodContext } from '../context/FoodContext';
import CartItem from '../components/CartItem'
const Cart = () => {
  const {cartItem,totalAmount} =useContext(FoodContext);
  const totalPrice=totalAmount();
  console.log(totalPrice)
  return (
   <div>
   <Navbar/>
    <div>
      {
        data.map(product=>{
          if(cartItem[product.id] > 0){
            return <CartItem data={product}/>
          }
        })
      }
    
    {totalPrice > 0? <div className='max-w-[600px] mx-auto flex flex-col items-end '>
     <h1 className=' text-2xl font-bold  pt-10'>Total: ₹{totalPrice}</h1>
     <button className='mt-4 bg-black text-white px-4 py-2 rounded-full'>Buy Now</button>
     </div> : <h1 className='text-4xl font-semibold text-center'>Cart is Empty</h1>}

    </div>

   </div>
  )
}

export default Cart