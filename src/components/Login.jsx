import React, { useState } from "react";
import Navbar from "./Navbar";
import { banner, loginpage } from "../assets";
import { layout } from "../style";

import { Link, redirect, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { BASE_URL } from "./Adminpages/url";
const Login = () => {
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('')
  const navigate=useNavigate();
const hanleSubmit=async(e)=>{
e.preventDefault();

if(email===''||password===''){
  toast(' fill all the field', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  return;
}
  event.preventDefault();
  try {
    await axios.post(`${BASE_URL}/user/login`, {
      email: email,
      password: password,
      }).then((res) => 
      {
       console.log(res.data);
       if (res.data.message === "email not match") 
       {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'email not exist',
          
        })
       } 
       else if(res.data.message === "login successfully")
       { 
        toast.success("login succesfully")
        localStorage.setItem("user",JSON.stringify(res.data))
        if(res.data.user.email=="admin@gmail.com"){
          navigate('/home')
        }
        else{
          navigate('/userbar');
        }
       } 
        else 
       { 
        
        toast.error(' password  incorrect', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
         
       }
    }, fail => {
     if(fail.message){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Network error',
        
      })
     } // Error!
});
  }
   catch (err) {
    alert(err);
  }
}
 
  return (
    <div>
      <div className="px-10">
        <Navbar />
      </div>

      <div
        className="md:flex sm:bg-none  md:justify-center items-center md:flex-row flex-col p-28 w-[100%] "
        id="main"
      >
        <div className={`${layout.section} lg:bg-white rounded-2xl `}>
          <div className={"relative top-8 left-10"} style={{ height: 240 }}>
            <img
              src={loginpage}
              alt="billing"
              className="w-[150px] h-[90%] rounded-2xl"
            />
          </div>

          <div
            className="w-[500px] rounded-2xl m-4 py-5 -ml-[135px] md:ml-[100px]"
            id="loginform"
          >
            <form onSubmit={hanleSubmit}>
              <div class=" px-8 mt-3">
                <label
                  for="email"
                  class="block text-white text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  onChange={(e)=>{setemail(e.target.value)}}
                  id="email"
                  name="email"
                  class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div class="px-8 mb-3">
                <label
                  for="password"
                  class="block text-white text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e)=>{setpassword(e.target.value)}}
                  class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-0 flex justify-start mx-4 ml-[30px]">
               <button type="submit" class="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-150">
                  <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl">
                  Login Here!! 
                  </span>
                </button> 
              
           
               
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
