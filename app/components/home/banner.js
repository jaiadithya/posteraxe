import Image from "next/image";
import React from "react";
import Button from "../button";

const Banner = () => {
  return (
    <div className="relative w-full h-96 flex justify-center items-center">
      <Image
        src="/images/bgwall3.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      <div className="absolute flex flex-col text-center items-center justify-center">
        <h1 className="text-6xl text-white font-bold mb-4">
          WHERE ART MEETS LUXURY
        </h1>
        <p className="text-white text-lg font-normal mb-4">
        Each artwork is printed on high-end matte paper sourced from Japan. </p>
      </div>
    </div>
  );
};

export default Banner;
