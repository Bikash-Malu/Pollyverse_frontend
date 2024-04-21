import React from 'react'

export default function Headder() {
  return (
    <>
      <header className={`sticky top-0 z-40 flex w-full  dark:bg-slate-900 drop-shadow-md drop-shadow-gray-100 border-b border-slate-300 dark:border-green-400  `}>
             <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    <button className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm   lg:hidden">
                        =
                    </button>
                    <img src="" alt="" />
                </div>

                <div className="hidden sm:block">
                   
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-4 2xsm:gap-4">
                      <li>
                     </li>
                     
                       
                    </ul>
                </div>
             </div>
        </header>
    </>
  )
}