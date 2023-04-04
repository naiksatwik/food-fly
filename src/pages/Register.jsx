import React from "react";
import logo from '../assets/logo.png'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
const Form = () => {

  const schema=yup.object({
    name:yup.string().min(3).max(30).required("name field required.."),
    email:yup.string().email().required(),
    password:yup.string().min(4).max(20).required(),
    confirm_Password:yup.string().oneOf([yup.ref('password'),null],"confirm password must same as 'password'").required()
  })
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });

  const onSubmit=(data)=>{
    console.log(data)
  }
  
  return (
    <div className="mx-w-[100vh] max-auto">
    <div className="flex justify-between">
        <img src={logo} alt="" className="w-[14rem]"/>
    </div>
    <div className="w-full h-[90vh] flex justify-center items-center  ">
      <form className=" flex flex-col px-16 py-16 rounded-2xl shadow-2xl shadow-purple-400 " onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Your name" className={`border-2  py-2 px-10 rounded-full mt-6`} {...register("name")}/>
      <p className="text-red-500 text-sm text-left px-3 pt-3">{errors.name?.message}</p>
      <input type="text" placeholder="Your Email" className="border-2 py-2 px-10 rounded-full mt-6" {...register("email")}/>
      <p className="text-red-500 text-sm text-left px-3 pt-3">{errors.email?.message}</p>
      <input type="password" placeholder="password" className="border-2 py-2 px-10 rounded-full mt-6" {...register("password")}/>
      <p className="text-red-500 text-sm text-left px-3 pt-3">{errors.password?.message}</p>
      <input type="Password" placeholder="Confirm Password" className="border-2 py-2 px-10 rounded-full mt-6" {...register("confirm_Password")}/>
      <p className="text-red-500 text-sm text-left px-3 pt-3">{errors.confirm_Password?.message}</p>
      <input type="submit" className="bg-purple-400 py-2 rounded-full mt-10" />
    </form>
    </div>
    </div>
  );
};

export default Form;

/*
  "dependencies": {
    "@hookform/resolvers": "^3.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.43.9",
    "yup": "^1.0.2"
  },

*/