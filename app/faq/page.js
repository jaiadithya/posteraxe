"use client";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleExpand = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 mb-20 px-6 md:px-30 lg:px-[200px]">
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            onClick={() => handleExpand(1)}
            type="button"
            className="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500 border-gray-200 border-b-2 rounded-t-xl focus:ring-4 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={activeIndex === 1}
            aria-controls="accordion-collapse-body-1"
          >
            <BiPlus className="cursor-pointer text-gray-400" size={24} />
            <span className="text-lg font-normal text-black">
              Are there any framing options available?
            </span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${activeIndex === 1 ? "block" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5  border-gray-200">
            <p className="mb-2 text-gray-500 text-lg font-normal">
              Unfortunately, due to the large size of the posters, I cannot
              offer any framing option as it would be quite likely that the
              frame gets broken during delivery.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            onClick={() => handleExpand(2)}
            type="button"
            className="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500 border-gray-200 border-b-2 rounded-t-xl focus:ring-4 gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded={activeIndex === 2}
            aria-controls="accordion-collapse-body-2"
          >
            <BiPlus className="cursor-pointer text-gray-400" size={24} />
            <span className="text-lg font-normal text-black">
              What if the poster(s) are delivered damaged?
            </span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`${activeIndex === 2 ? "block" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-1 border-gray-200">
            <p className="mb-2 text-gray-500 text-lg font-normal">
              No worries there, you will get a new one(s)!
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            onClick={() => handleExpand(3)}
            type="button"
            className="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500 border-gray-200 border-b-2 rounded-t-xl focus:ring-4 gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded={activeIndex === 3}
            aria-controls="accordion-collapse-body-3"
          >
            <BiPlus className="cursor-pointer text-gray-400" size={24} />
            <span className="text-lg font-normal text-black">
              What kind of paper are the posters being printed on?
            </span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${activeIndex === 3 ? "block" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-b-1 border-gray-200">
            <p className="mb-2 text-gray-500 text-lg font-normal">
              The posters are giclée-printed on a matte, thick, durable, acid
              free, museum-quality paper (192g/m2).
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-4">
          <button
            onClick={() => handleExpand(4)}
            type="button"
            className="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500 border-gray-200 border-b-2 rounded-t-xl focus:ring-4 gap-3"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded={activeIndex === 4}
            aria-controls="accordion-collapse-body-4"
          >
            <BiPlus className="cursor-pointer text-gray-400" size={24} />
            <span className="text-lg font-normal text-black">
              I want a bigger or smaller size of the poster than you are
              offering. Is that possible?
            </span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          className={`${activeIndex === 4 ? "block" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div className="p-5 border border-b-1 border-gray-200">
            <p className="mb-2 text-gray-500 text-lg font-normal">
              All of the posters are designed as 70x100cm and 50x70cm. In case
              you want any other format, please send me an email to
              adithya@uxbyte.in
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-5">
          <button
            onClick={() => handleExpand(5)}
            type="button"
            className="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500 border-gray-200 border-b-2 rounded-t-xl focus:ring-4 gap-3"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded={activeIndex === 5}
            aria-controls="accordion-collapse-body-5"
          >
            <BiPlus className="cursor-pointer text-gray-400" size={24} />
            <span className="text-lg font-normal text-black">
              I would like to have a poster that I found on your Instagram, but
              it is not here. Can I still get it?
            </span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          className={`${activeIndex === 5 ? "block" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div className="p-5 border border-b-1 border-gray-200">
            <p className="mb-2 text-gray-500 text-lg font-normal">
              Framer is an end-to-end tool that lets everyone design and ship
              websites. You don’t need a frontend team or web programming
              course. Just basic canvas skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
