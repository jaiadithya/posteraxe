"use client";

import React from "react";
import Primarybtn from "../components/button";
import Image from "next/image";

const page = () => {

  return (
    <>
      <div className="space-y-6 mb-20  px-6 md:px-30 lg:px-[200px]">
        <div className="justify-center flex">
          <h1 className="text-5xl font-black pb-10"> ABOUT </h1>
        </div>

        <h2 className="text-2xl font-bold">WHAT IS POSTERAXE?</h2>
        <h3 className="text-lg font-normal">
          PosterAxe is an art project by Indian designer and artist Jai Adithya.
          He believes that a poster does not always have to promote an event or
          product. Instead, Adithya uses the poster medium as a space for
          expressing his artistic ideas. The main common features of Adithya's
          work are basic shapes and vivid colors. His work was influenced by the
          Bauhaus school and a certain nostalgia for and memories of the 90s.
          Most of the time, Posteraxe's art does not aim to express specific
          thoughts or deliver a message. The primary goal of the artworks is to
          visually captivate and please the observer's eye.
        </h3>
        <div className="relative w-full h-96">
          <Image
            src="/images/bgwall.png"
            alt="Background Wall"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <h3 className="text-lg font-normal">
          The PosterLad project started in 2016. Pecka's style is constantly
          evolving, and the artist does not stick with one style for too long.
          Within a few years, PosterLad became popular on social media and was
          awarded a couple of major international design awards. Pecka is
          currently a full-time artist and is open to collaborations with
          clients seeking designs with his personal artistic touch. PosterLad
          has been recognized in the digital art scene as well. His artworks are
          presented on the world's most prestigious NFT platform called
          SuperRare, which hosts only a handful of leading contemporary artists.
          Pecka has had solo and collective exhibitions on most continents
          around the world, in places such as Shanghai, Paris, London, or New
          York. He is represented by Pinzle in the South Korean market.
        </h3>
      </div>
    </>
  );
};

export default page;
