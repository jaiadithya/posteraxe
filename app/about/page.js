"use client";

import React from "react";
import Primarybtn from "../components/button";

const page = () => {
  const handleSubmit = () => {
    console.log("value");
  };

  return (
    <div>
      <div className="px-[200px] ">
        <div className="space-y-6">
          <div className="justify-center flex">
            <h1 className="text-5xl font-black pb-10"> ABOUT </h1>
          </div>

            <h2 className="text-2xl font-bold">WHAT IS POSTERAXE?</h2>
            <h3 className="text-lg font-normal">
              PosterAxe is an art project by Indian designer and artist Jai
              Adithya. He believes that a poster does not always have to promote
              an event or product. Instead, Adithya uses the poster medium as a
              space for expressing his artistic ideas. The main common features of
              Adithya's work are basic shapes and vivid colors. His work was
              influenced by the Bauhaus school and a certain nostalgia for and
              memories of the 90s. Most of the time, Posteraxe's art does not aim
              to express specific thoughts or deliver a message. The primary goal
              of the artworks is to visually captivate and please the observer's
              eye.
            </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
