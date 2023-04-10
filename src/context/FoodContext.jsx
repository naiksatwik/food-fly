import React, { createContext, useState } from "react";
import { data } from "../data/data";
export const FoodContext = createContext(null);
const FoodContextProvider = (props) => {
   const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < data.length ; i++) {
            cart[i] = 0;
        }
        return cart;
    };

    const [cartItem, setCartItem] = useState(getDefaultCart());
    const [userName,setUserName]=useState('');
    const totalAmount=()=>{
      let totalCost=0;
      let num=0
      for( let item in cartItem){
        if(cartItem[item] > 0){
          console.log(item);
          let currentProduct=data[num]

          totalCost += (cartItem[item] * currentProduct.price);
        }
        num++;
      }
      return totalCost;
    }

    const lengthOfOrder=()=>{
      let total=0;
         for(let item in cartItem){
              total+=cartItem[item];
         }

         return total;
    }
    
    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };


    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    };


    console.log(cartItem)
    const ContextValue = { cartItem, addToCart, removeFromCart,totalAmount,userName,setUserName,lengthOfOrder};
  return (
    <FoodContext.Provider value={ContextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
