import React from "react";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";


const Form = () => {
  const Navigate = useNavigate();
  let mess = "enter";
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => {
        res.json().then((info) => {
          console.log(info.error);
          if (info.error === "User Exists") {
            document.getElementById("track").innerHTML =
              "This Email is already registered";
          } else {
          window.localStorage.setItem('userName',data.name)
            Navigate("/home");
          }
        });
      })
      .then((ans) => {
        console.log(ans);
      });
  };

  const schema = yup.object({
    name: yup.string().min(3).max(30).required("name field required.."),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirm_Password: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "confirm password must same as 'password'"
      )
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
            placeholder="Your name"
            className={`border-2  py-2 px-10 rounded-full mt-6`}
            {...register("name")}
          />
          <p className="text-red-500 text-sm text-left px-3 pt-3">
            {errors.name?.message}
          </p>
          <input
            type="text"
            placeholder="Your Email"
            className="border-2 py-2 px-10 rounded-full mt-6"
            {...register("email")}
          />
          <p className="text-red-500 text-sm text-left px-3 pt-3" id="track">
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
            {}
          </p>
          <input
            type="Password"
            placeholder="Confirm Password"
            className="border-2 py-2 px-10 rounded-full mt-6"
            {...register("confirm_Password")}
          />
          <p className="text-red-500 text-sm text-left px-3 pt-3">
            {errors.confirm_Password?.message}
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
