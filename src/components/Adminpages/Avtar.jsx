import React from 'react'
import Layout from './Layout'
import { banner1, banner2 } from '../../assets'
import Manager from './Manger'

const Avtar = () => {
 let user= localStorage.getItem('user');
  return (
    <Layout>
      <Manager>
 <div className="bg-gray-100 md:w-[100%] h-[50%]">
  <div className=" mx-auto h-[50%]">
    <div className=" bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:h-[400px]">
          <img className="h-48 w-full object-cover md:h-full md:w-[400px]" src={banner2} alt="User Avatar"/>
        </div>
        <div className="p-8  w-[600px">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
          <h2 className="mt-2  leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">{JSON.parse(user).user.username}</h2>
          <p className="mt-2 text-gray-500">{JSON.parse(user).user.email}</p>
          <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta vero voluptas quis, error repellat quae aspernatur cupiditate ea iusto!</p>
          <div className="mt-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit Profile</a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Manager>
    </Layout>
   
  )
}

export default Avtar