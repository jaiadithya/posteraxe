import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/bgwall.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
  );
};

export default Hero;
