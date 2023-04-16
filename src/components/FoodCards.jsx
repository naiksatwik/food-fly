import React from "react";
import { useCartContext } from "../context/CartContext";

const FoodCards = (props) => {
  const { addItem } = useCartContext();

  console.log(props.noItem);
  return (
    <div className="shadow-2xl rounded-lg hover:scale-110 duration-200 w-[17rem] sm:w-full">
      <img
        src={props.image}
        alt={props.name}
        className="  w-full  h-[8rem] object-cover  rounded-tl-lg rounded-tr-lg"
      />
      <div className="flex py-2 px-3 justify-between">
        <div className="w-1/2">
          <p className="text-[12px] text-gray-500 font-medium">{props.name}</p>
          <p className="text-sm font-medium pt-2">₹{props.price}</p>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <button
            className="orangeButton px-4 text-sm"
            onClick={() =>
              addItem(
                props.id,
                props.price,
                props.image,
                props.name,
                props.noItem
              )
            }
          >
            Add{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
