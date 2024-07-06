import Image from "next/image";
import React from "react";
import Button from "../button";

const Browse = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <Image
        src="/images/bgwall.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      <div className="absolute flex flex-col text-center items-center justify-center">
        <h1 className="text-6xl text-white font-bold mb-4">
          SIMPLICITY & VIVID COLORS
        </h1>
        <p className="text-white text-lg font-normal mb-4">
          These are the common features of all posters by PosterAxe.
        </p>
        <Button className="primary-btn" Label="Browse All Posters" />
      </div>
    </div>
  );
};

export default Browse;
