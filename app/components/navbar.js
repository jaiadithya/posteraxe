import { BiSearchAlt2 } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

export default function Navbar() {
  return (
    <>
      <nav class="bg-white border-gray-200 border-b ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="framer.svg"
              class="h-8"
              alt="Posteraxe Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Posteraxe
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center gap-4">
              <a href="/search"> <BiSearchAlt2 className="text-black" size={24} /> </a>
              <a href="/cart"> <BiCart className=" cursor-pointer text-black" size={24} /> </a>
            </div>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="/shop"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
                  aria-current="page"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
