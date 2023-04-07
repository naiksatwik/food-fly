import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import {data} from '../data/data'
import { FoodContext } from '../context/FoodContext';
import CartItem from '../components/CartItem'
const Cart = () => {
  const {cartItem} =useContext(FoodContext);
  return (
   <>
   <Navbar/>
    <div>
      {
        data.map(product=>{
          if(cartItem[product.id] > 0){
            return <CartItem data={product}/>
          }
        })
      }
    </div>
   </>
  )
}

export default Cart