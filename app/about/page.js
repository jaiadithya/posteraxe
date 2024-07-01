"use client"

import React from "react";
import Primarybtn from "../components/button";



const page = () => {

  const handleSubmit = () => {
    console.log("value")
  }


  return (
    <div>
            <div className="px-[200px] ">

              <div className="justify-center flex">
              <h1 className="text-5xl font-black"> ABOUT </h1>
              <Primarybtn Label="Submit" className="secondary-btn" handleOnClick={handleSubmit} /> 

              </div>


            </div>

    </div>
  );
};

export default page;
