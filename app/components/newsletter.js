import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import Button from "./button";

const Newsletter = () => {
  return (
    < div className="bg-black">
      <div className=" text-white py-20 space-y-6 text-center px-6 md:px-30 lg:px-[200px]">
        <h2 className="text-3xl font-medium"> NEWS LETTER</h2>
        <h3 className="text-xl font-normal">
          Get updates from me once in a while!
        </h3>

        <form class="flex items-center max-w-md mx-auto gap-2 ">
          <div class="relative w-3/5">
            <input
              type="email"
              className="border border-gray-300 text-white text-sm rounded-lg block w-full  p-3 font-medium"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <Button className="primary-btn" Label="Subscribe">
            {" "}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
