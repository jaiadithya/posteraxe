import React from "react";
import { BiPlus } from "react-icons/bi";


const page = () => {
  return (
    <>
      <div className="space-y-6 mb-20  px-6 md:px-30 lg:px-[200px]">

<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
  <button type="button" class="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500  border-gray-200 border-b-2 border-b-gray-200 rounded-t-xl focus:ring-4 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
  <BiPlus className="cursor-pointer text-gray-400" size={24} />
      <span className="text-lg font-normal text-black">Are there any framing options available?</span>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200">
      <p class="mb-2 text-gray-500 text-lg font-normal">Unfortunately, due to large size of the posters I can not offer any framing option as it would be quite likely that the frame gets broken during delivery.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
  <button type="button" class="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500  border-gray-200 border-b-2 border-b-gray-200 rounded-t-xl focus:ring-4 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
  <BiPlus className="cursor-pointer text-gray-400" size={24} />
      <span className="text-lg font-normal text-black">What if the poster (s) are delivered damaged ?</span>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200">
      <p class="mb-2 text-gray-500 text-lg font-normal ">No worries there, you will get a new one(s) !</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
  <button type="button" class="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500  border-gray-200 border-b-2 border-b-gray-200 rounded-t-xl focus:ring-4 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
  <BiPlus className="cursor-pointer text-gray-400" size={24} />
      <span className="text-lg font-normal text-black">What kind of paper are the posters being printed on?</span>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200">
      <p class="mb-2 text-gray-500 text-lg font-normal">The posters are giclée-printed on a matte, thick, durable, acid free, museum-quality paper (192g/m2).</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-4">
  <button type="button" class="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500  border-gray-200 border-b-2 border-b-gray-200 rounded-t-xl focus:ring-4 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
  <BiPlus className="cursor-pointer text-gray-400" size={24} />
      <span className="text-lg font-normal text-black">I want a bigger or smaller size of the poster than you are offering. Is that possible?</span>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200">
      <p class="mb-2 text-gray-500 text-lg font-normal">All of the posters are designed as 70x100cm and 50x70cm. In case you want any other format, please send me an email to adithya@uxbyte.in</p>
    </div>
  </div>

<h2 id="accordion-collapse-heading-5">
<button type="button" class="flex items-center w-full p-5 font-medium rtl:text-right text-gray-500  border-gray-200 border-b-2 border-b-gray-200 rounded-t-xl focus:ring-4 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
<BiPlus className="cursor-pointer text-gray-400" size={24} />
<span className="text-lg font-normal text-black">I would like to have a poster that I found on your instagram, but it is not here. Can I still get it?</span>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200">
      <p class="mb-2 text-gray-500 text-lg font-normal">Framer is an end to end tool that lets everyone design and ship web sites. You don’t need a frontend team or web programming course. Just basic canvas skills.
      </p>
    </div>
  </div>
  </div>

      </div>
    </>
  );
};

export default page;
