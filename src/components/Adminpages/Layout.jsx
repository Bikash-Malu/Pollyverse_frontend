import React, { useEffect, useState } from 'react'
import InAppLoader from '../loader/InAppLoader';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8 } from './Icon';
// import Headder from './Headder';
export default function Layout({children}) {

  document.title = "Admin Panel";
  const [isLoading,setisLoading]=useState(false);
  const savedData=localStorage.getItem('user')
  const menus = [
    { name: "Home", link: "/home", icon: icon1 },
    { name: "Profile", link: "/profile", icon: icon2 },
    // { name: "Messages", link: "/message", icon: icon3 },
    { name: "Add user", link: "/adduser", icon: icon8 },
    
    { name: "Add Assets", link: "/drag", icon: icon4 },
    // { name: "Saved", link: "/save", icon: icon5 },
    // { name: "Setting", link: "/setting", icon: icon6 },
    { name: "Logout", link: "/model", icon: icon7 },
  ];
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setisLoading(true);
    setTimeout(()=>{
    setisLoading(false)
    },300)
}, [])
const naviagte=useNavigate();

  return (
    <>
    

    <section className="flex h-[100vh] w-[100%]" id='scroll'>
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
        <div className='font-bold md:text-[25px]  mr-2'>
          {open?'ADMIN PANEL':''}
        </div>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col  relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-2 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      
      {
      isLoading?
      <InAppLoader/>
      :
      <>
      {savedData?
      <div className='w-full h-[100%] overflow-y-auto'>
      <div className=" text-xl text-gray-900 bg-white w-full font-semibold">
       {children}
      </div>
      </div>:naviagte('/login')
}
      </>
     }    
    </section>

   
    </>
  )
}