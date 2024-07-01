import React from 'react'

const Footer = () => {
  return (
    <>
    

<footer class="bg-white rounded-lg shadow  m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="framer.svg" class="h-8" alt="Posteraxe Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap ">Posteraxe</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-base font-normal text-black sm:mb-0">
                <li>
                    <a href="/search" class="hover:underline me-4 md:me-6">Search</a>
                </li>
                <li>
                    <a href="/faq" class="hover:underline me-4 md:me-6">FAQ</a>
                </li>
                <li>
                    <a href="/contact" class="hover:underline me-4 md:me-6">Contact</a>
                </li>
                <li>
                    <a href="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/refund-policy" class="hover:underline me-4 md:me-6">Refund Policy</a>
                </li>
                <li>
                    <a href="/terms-of-use" class="hover:underline">Terms of Service</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-xs font-normal text-black sm:text-center">© 2024 <a href="/" class="hover:underline">Posteraxe</a>| Created by <a className='  font-medium'>UXByte</a>.</span>
    </div>
</footer>


    </>
  )
}

export default Footer