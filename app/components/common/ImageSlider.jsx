'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageSlider = ({ images }) => {
  const [slider, setSlider] = useState(0);

  const handlePrevious = () => {
    console.log('hello');
    setSlider((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    console.log('hello Ji');
    setSlider((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div>
      {/* --Image Slider-- */}
      <div className='w-full overflow-hidden relative'>
        <div
          className='flex transition-transform duration-300 ease-in-out gap-1 md:gap-4'
          style={{
            transform: `translateX(-${slider * 90}%)`,
            width: `${images.length * 7}%`,
          }}>
          {images.map((image, index) => (
            <div key={index} className='w-full flex-shrink-0'>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                height={200}
                width={700}
                className='w-full h-full object-cover rounded-sm'
              />
            </div>
          ))}
        </div>
      </div>
      {/* --Button-- */}
      <div className='flex justify-between gap-3 mt-5'>
        <button
          className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-sky-800 px-4 py-2 rounded-md text-white text-md md:text-lg duration-200 ease-in-out'
          onClick={handlePrevious}>
          Previous
        </button>
        <button
          className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-sky-800 px-4 py-2 rounded-md text-white text-md md:text-lg duration-200 ease-in-out'
          onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
