import { createContext, useContext, useEffect, useReducer } from "react";

import CartReducer from  '../Reducer/CartReducer'
const CartContext=createContext()

const getLocalCartData=()=>{
   let cartData=localStorage.getItem('CartItem');
   console.log(cartData)
   if(cartData === null){
     return []
   }else{
    console.log("JSON PARSER",JSON.parse(cartData))
     return JSON.parse(cartData);
   }
}

const CartProvider=({children})=>{
    const initialState={
        cart:getLocalCartData(),
        total_Item:"56666",
        total_amount:""
    }
    const [state, dispatch] = useReducer(CartReducer, initialState);
    
    const removeProduct=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }
    

    const incrementProduct=(id)=>{
        dispatch({type:"INCREMENT_CART",payload:id});
    }

    const decrementProduct=(id)=>{
        dispatch({type:"DECREMENT_CART",payload:id});
    }
    const addItem=(id,price,image,pname,noItem)=>{
        console.log("noItem",noItem)
        dispatch({type:"ADD_TO_CART",payload:{id,price,image,pname,noItem}})
    }
    
    const totalCost=()=>{
        let total=0;
        state.cart.map((item)=>{
           total+=item.price;
        })

        return total;
    }

    const totalItem=()=>{
        let  totalItem=0;
        state.cart.map((item)=>{
            totalItem+=item.noItem;
        })

        return totalItem;
    }

    useEffect(()=>{
        localStorage.setItem('CartItem',JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.Provider value={{...state,addItem,removeProduct,incrementProduct,decrementProduct,totalCost,totalItem}}>{children}</CartContext.Provider>
}


const useCartContext=()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext}