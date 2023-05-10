import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
const ProductCon=createContext()

const ProductContext = ({children}) => {

    const[food,setFoods]=useState([]);
    const[orders,setOrders]=useState([]);
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

useEffect(() => {
  const  getOrders= async()=>{
    return await axios.get('http://localhost:5000/api/ProductToAdmin').then((res)=>{
     console.log("Order API",res.data.data)
     setOrders(res.data.data)
     console.log(orders)
    })
  }
  getOrders();

}, [])

    return   <ProductCon.Provider value={{food,orders}} >{children}</ProductCon.Provider>
}



const useProductContext=()=>{
    return useContext(ProductCon)
}
export { ProductContext,useProductContext}