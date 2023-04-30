import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { data } from "autoprefixer";

const Order = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [orderData, setOrderData] = useState("");
  const fetchOrder = async () => {
    await fetch("http://localhost:5000/api/myOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
      }),
    }).then(async (res) => {
      let resp = await res.json();
      await setOrderData(resp.order_data);
      await console.log(resp.order_data);
    });
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div>
      <Navbar />
     {
      (userEmail === null || orderData===null)?<h1 className="text-5xl font-medium w-full h-[80vh] flex items-center justify-center">Order Page is Empty...</h1>:
      <div className="max-w-[700px] mx-auto px-10 md:px-0 ">
      {orderData.order_data?.map((item, index) => {
        return item.order_date? (
          <div id="insert">
            <p className="text-gray-400 text-xl mt-10">{item.order_date}</p>
            <hr />
            <p className="text-lg">
              Status:
              <span className="text-emerald-400">{orderData.status}</span>
            </p>
            <p className="font-bold ">
              payment Method:
              <span className="text-emerald-400 font-medium pl-2">
                {orderData.paymentType}
              </span>
            </p>
            <p className="font-bold ">
              address:
              <span className="text-emerald-400 font-medium pl-2">
                {orderData.address}
              </span>
            </p>
            <p className="font-bold ">
              Phone:
              <span className="text-gray-400 font-medium pl-2">
                {orderData.phone}
              </span>
            </p>      
          </div>
        ) : (
          item?.map((data,index) => {

            return (
              (index <= item.length-2)?
              <div className="mt-3">
                <div className="shadow-[0px_1px_4px_2px_rgba(0,0,0,0.56)] w-[15rem] md:w-[30rem] p-4 rounded-md  hover:scale-110 duration-200">
                  <p className="font-bold text-xl">
                    {data.pname}
                  </p>
                  <p className="font-medium ">quantity:   {data.noItem}</p>
                  <p className="text-sm font-medium">price: ₹{data.price}</p>
                </div>
              </div>:
              <h1 className="text-2xl font-semibold pt-4 ">Total :₹ {data}/-</h1>
            );
          })
        );
      })}
    </div>
     }
     
    </div>
  );
};

export default Order;
