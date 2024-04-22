import React, { useState } from 'react'
import Layout from './Layout'
import Manager from './Manger'
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from './url';

const Adduser = () => {
  const[email,setemail]=useState('');
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')
  const hanleSubmit=async(e)=>{
    e.preventDefault();
    axios.post(`${BASE_URL}/user`,{email,username,password}).then((res)=>{
      let name=res.data.username
      toast.success(`${name} create succesfully`)
      setemail('');
      setusername('')
      setpassword('')

    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <Layout>
      <Manager>
      
<div className='container mx-auto'>

<form class=" md:mx-[37%] md:w-[600px] sm:w-[500px] bg-gray-800 bg-transparent lg:w-[500%] w-[300px] border-solid border-2 p-4 rounded-xl  hover:shadow-lg transition duration-300" onSubmit={hanleSubmit}>
    <h1 className='mx-auto text-2xl text-center mb-2'>ADD USER!!</h1>
  <div class="relative z-0 w-full mb-5 group">
      <input value={username}  onChange={(e)=>{setusername(e.target.value)}} type="text" name="username" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" value={email}  onChange={(e)=>{setemail(e.target.value)}} name="email" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" value={password}  onChange={(e)=>{setpassword(e.target.value)}} name="password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <button type="submit" class="  text-white bg-[#8113f0] hover:bg-[#a989c9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

</form>
</div>



      </Manager>
      </Layout>
  )
}

export default Adduser