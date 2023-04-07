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

    // const totalAmount=()=>{
    //     for(const item in cartItem){
    //         console.log(cartItem[item])
    //         if(cartItem[item] > 0)
    //         {
                
    //         }
    //     }
    // }
    
    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };


    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    };


    console.log(cartItem)
    const ContextValue = { cartItem, addToCart, removeFromCart };
  return (
    <FoodContext.Provider value={ContextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
