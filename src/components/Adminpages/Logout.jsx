import { Button, Modal } from 'antd';
import React, {  useState } from 'react';
import Layout from './Layout';
import Manager from './Manger';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Models = () => {
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
        <h1 className='text-black text-2xl font-semibold'>Are you sure want to logout?</h1>
      </Modal><>
      <div className="bg-white shadow-md rounded-md p-6 w-[40vw] mx-[50%]">

      <p className="text-gray-600 mb-4 text-[20px] md:text-3xl text-center">Click here to logout</p>
      <div className="flex justify-end">
      <button onClick={()=>{showModal(true)}} class=" mx-3 relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl">
                  Logout here!!
                  </span>
                </button> 
      </div>
    </div>
      </>

</Manager>
    </Layout>
  );
};
export default Models;