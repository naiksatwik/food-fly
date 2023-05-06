import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
const ProductCon=createContext()

const ProductContext = ({children}) => {

    const[food,setFoods]=useState([]);


    useEffect(() => {
      const  getProduct= async()=>{
        return await axios.get('http://localhost:5000/api/products').then((res)=>{
         console.log("API",res.data.data)
         setFoods(res.data.data)
         console.log("food",food)
        })
      }

      getProduct();

    }, [])


    
  
    return   <ProductCon.Provider value={{food}} >{children}</ProductCon.Provider>
}



const useProductContext=()=>{
    return useContext(ProductCon)
}
export { ProductContext,useProductContext}