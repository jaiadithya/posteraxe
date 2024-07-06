import React from "react";
import Button from "../button";
import Image from "next/image";

const Designer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 px-6 md:px-30 lg:px-[200px] bg-gray-50">
      <div className="flex justify-center flex-col gap-4 text-center">
        <p className="font-normal text-sm">POSTERAXE</p>
        <h1 className="font-black text-4xl">MAKING POSTERS <br/>SINCE 2021</h1>
        <p className="font-normal text-lg">
          In the beginning, PosterAxd was just a side project of a bit too busy
          digital designer desiring to make something that only he is in charge
          of, not the client. Some sort of a vent, if you like.
        </p>
        <Button className="tertiary-btn" Label="Shop Now" />
      </div>

      <div className="relative w-full h-96 md:h-auto">
        <Image
          src="/images/IMG2.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Designer;
