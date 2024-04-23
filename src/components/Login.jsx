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
  const[loader,setloader]=useState(false)
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
    setloader(true)
    await axios.post(`${BASE_URL}/user/login`, {
      email: email,
      password: password,
      }).then((res) => 
      {
       
       console.log(res.data);
       if (res.data.message === "email not match") 
       {
        setloader(false)
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
        setloader(false)
        
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
{loader?<div role="status">
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>:""}

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
