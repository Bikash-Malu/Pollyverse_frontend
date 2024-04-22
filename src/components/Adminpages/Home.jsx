import React, { useState } from 'react'
import Layout from './Layout'
import Manager from './Manger'
import { Button, Modal } from 'antd';
import { MdOutlineAddCard } from "react-icons/md";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const navigate=useNavigate();
  const handleOk = () => {
    localStorage.clear();
    navigate('/login');
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <Manager>
      <Modal   open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h1 className='text-black text-2xl font-semibold'>edit here </h1>
      </Modal>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 text-center mx-auto">
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    
    <div className="px-6 py-10">
      <h2 className="text-gray-900 font-bold text-2xl">Add assets</h2>
      <p className="mt-2 text-gray-600">Here you can add any type of assets. The way are given below</p>
      <Link to={'/drag'} className=" w-40 h-12   mx-auto mt-4 bg-[#8113f0] hover:bg-[#946dbb] text-white font-bold py-2 px-6 gap-2 rounded flex items-center"><MdOutlineAddCard size={20}/>Add model</Link>
    </div>
  </div>
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    
    <div className="px-6 py-10">
      <h2 className="text-gray-900 font-bold text-2xl">Add User </h2>
      <p className="mt-2 text-gray-600">Here you can add number of users. The way are given below</p>
      <Link to={'/adduser'} className=" w-36 h-12   mx-auto mt-4 bg-[#8113f0] hover:bg-[#946dbb] text-white font-bold py-2 px-6 gap-2 rounded flex items-center"><HiOutlineUserAdd size={20}/>Add user</Link>
    </div>
  </div>
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    
    <div className="px-6 py-10">
      <h2 className="text-gray-900 font-bold text-2xl">View Models </h2>
      <p className="mt-2 text-gray-600">Here you can see all models. The way are given below</p>
      <Link to={'/show'} className=" w-36 h-12   mx-auto mt-4 bg-[#8113f0] hover:bg-[#946dbb] text-white font-bold py-2 px-6 gap-2 rounded flex items-center"><HiMiniViewfinderCircle size={20}/>Models</Link>
    </div>
  </div>
  <div className='w-[79vw] mr-[40%]'>
    

<div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Model image
                </th>
                <th scope="col" className="px-6 py-3">
                    Model name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Creation date
                </th>
                <th scope="col" className="px-6 py-3" colSpan={1} >
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yWZqg0rP5rhCQ_MmRLkrWxMna9kdIZxamrf34jfOpQeovUk8ft9KWW8FEZ-T7eB58Fc&usqp=CAU" alt="" width={70} className='rounded-3xl' />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 ">
                    <a href="#"  onClick={()=>{showModal(true)}} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline mx-2 ">Delete</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yWZqg0rP5rhCQ_MmRLkrWxMna9kdIZxamrf34jfOpQeovUk8ft9KWW8FEZ-T7eB58Fc&usqp=CAU" alt="" width={70} className='rounded-3xl' />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4  mx-2">
                    <a href="#" onClick={()=>{showModal(true)}} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline mx-2 ">Delete</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yWZqg0rP5rhCQ_MmRLkrWxMna9kdIZxamrf34jfOpQeovUk8ft9KWW8FEZ-T7eB58Fc&usqp=CAU" alt="" width={70} className='rounded-3xl' />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 ">
                    <a href="#"onClick={()=>{showModal(true)}} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline mx-2 ">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  </div>
  
  </div>
      </Manager>
      </Layout>
  )
}

export default Home