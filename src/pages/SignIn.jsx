import React from "react";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link,useNavigate } from "react-router-dom";
const SignIn = () => {
  const Navigator=useNavigate();
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
   Navigator('/home')
  };

  return (
    <div className="mx-w-[100vh] max-auto">
      <div className="flex justify-between">
        <img src={logo} alt="" className="w-[12rem] p-7" />
      </div>
      <div className="w-full h-[90vh] flex justify-center items-center  ">
        <form
          className=" flex flex-col px-16 py-16 rounded-2xl shadow-2xl shadow-purple-400 "
          onSubmit={handleSubmit(onSubmit)}
        >
         
          <input
            type="text"
            placeholder="Your Email"
            className="border-2 py-2 px-10 rounded-full mt-6"
            {...register("email")}
          />
          <p className="text-red-500 text-sm text-left px-3 pt-3">
            {errors.email?.message}
          </p>
          <input
            type="password"
            placeholder="password"
            className="border-2 py-2 px-10 rounded-full mt-6"
            {...register("password")}
          />
          <p className="text-red-500 text-sm text-left px-3 pt-3">
            {errors.password?.message}
          </p>
         
          <div className="w-full flex justify-between">
          
              <input
                type="submit"
                className="bg-purple-400 px-5 py-2 rounded-full mt-10"
              />

            <Link to="/">
              <button className="bg-purple-400 px-7 py-2 rounded-full mt-10">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
