import Image from "next/image";
import React from "react";
import Button from "../button";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center">
      <Image
        src="/images/bgwall1.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      <div className="absolute bottom-20 text-center">
        <h1 className="text-5xl text-white font-bold ">
          BRIGHTEN UP YOUR WALLS
        </h1>

        <div className="flex gap-8 justify-center items-center">
          <p className="text-white text-lg font-normal ">
            with colorful minimalism
          </p>
          <Button className="primary-btn" Label="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
