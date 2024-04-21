import React from "react";
import { cn } from "../utils/cn";
import Spotlight from "../utils/Spotlight";

import Grid from "./Grid";

export function SpotlightPreview() {
  return (
    <div>
      
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
    <Grid>
    
    <div className="text-white h-[100%] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
    
      
      <div className="container md:p-4 px-10 max-w-7xl  mx-auto relative  w-full pt-20 md:pt-0 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hello there!! <br /> All Models Present Below
        </h1>
        <div>
          <h2 className="text-3xl font-semibold italic mt-8 text-blue-500 mb-4">Mechanical Watch :-</h2>
          <p className="text-[20px] font-normal leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto nulla veritatis fugiat, aliquam commodi quidem magni, debitis fugit nam corporis ratione rem autem voluptatibus odit consequatur a excepturi vitae error explicabo voluptates aperiam fuga sequi? Quasi, cum nostrum dolor totam eligendi earum debitis! Rem omnis maxime nobis assumenda animi.</p> 
          <p className="text-[20px] font-normal leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi, libero quod sed quo modi excepturi qui obcaecati esse architecto.</p>
          <div className="bg-gray-300 h-52 w-96 mx-auto mt-4">

          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold italic mt-8 text-blue-500 mb-4">Mechanical Robot:-</h2>
          <p className="text-[20px] font-normal leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto nulla veritatis fugiat, aliquam commodi quidem magni, debitis fugit nam corporis ratione rem autem voluptatibus odit consequatur a excepturi vitae error explicabo voluptates aperiam fuga sequi? Quasi, cum nostrum dolor totam eligendi earum debitis! Rem omnis maxime nobis assumenda animi.</p> 
          <p className="text-[20px] font-normal leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi, libero quod sed quo modi excepturi qui obcaecati esse architecto.</p>
          <div className="bg-gray-300 h-52 w-96 mx-auto mt-4">

          </div>
        </div>
        
      </div>
    </div>
    </Grid>
    </div>

  );
}
