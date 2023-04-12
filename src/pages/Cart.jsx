import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { MdAddShoppingCart } from "react-icons/md";

import CartItem from "../components/CartItem";

import { useCartContext } from "../context/CartContext";
const Cart = () => {
  const { cart,  totalCost ,totalItem} = useCartContext();

  const totalCosts = totalCost();

  return (
    <div>
      <Navbar />
      <div>
        {cart.map((product) => {
          return <CartItem data={product} />;
        })}

        {cart.length > 0 ? (
          <div className="max-w-[600px] mx-auto flex flex-col items-end ">
            <input
              type="text"
              placeholder="Add address"
              className="border-2 border-black p-1 rounded-full mt-10 pl-6"
            />
            <h1 className=" text-2xl font-bold  px-10 pt-4 ">
              Total: ₹{totalCosts}
            </h1>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-full mr-10">
              Buy Now
            </button>
          </div>
        ) : (
          <div className="flex h-[80vh] w-full items-center justify-center space-x-4">
            <h1 className="text-4xl  text-center ">Cart is Empty</h1>
            <MdAddShoppingCart size={50} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
