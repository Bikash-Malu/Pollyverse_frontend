import React from 'react'
import "./InappLoader.css"
export default function InAppLoader() {
  return (
    <>
    <div className='centered dark:bg-white w-full'>
        <div className="lds-ellipsis ">
            <div className='dark:bg-black'></div>
            <div className='dark:bg-black'></div>
            <div className='dark:bg-black'></div>
            <div className='dark:bg-black'></div>
        </div>
    </div>
    </>
  )
}