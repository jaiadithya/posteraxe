import React from 'react';
import Button from '../button';
import Image from 'next/image';

const Customer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-20 py-20 px-6 md:px-30 lg:px-[200px] bg-gray-50'>
      <div className='relative w-full h-96 md:h-auto'>
        <Image
          src="/images/IMG2.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className='flex justify-center flex-col gap-4 text-center'>
        <p className='font-normal text-sm'>THOUSANDS OF</p>
        <h1 className='font-black text-4xl'>HAPPY POSTER OWNERS</h1>
        <p className='font-normal text-lg'>
          Since 2020, more than 8,000 PosterLad prints have been shipped all around the globe,
          and all of them have arrived safely at their destinations.
        </p>
        <Button className="tertiary-btn" Label="Shop Now" />
      </div>
    </div>
  );
}

export default Customer;
