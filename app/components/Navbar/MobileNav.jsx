'use client';
import React, { useState, useEffect } from 'react';
import { RiMenu5Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

// --Defining nav-items for calling it in map function--
const Nav_Items = [
  {
    id: 1,
    name: 'Services',
    link: '/',
  },
  {
    id: 2,
    name: 'Portfolio',
    link: '/',
  },
  {
    id: 3,
    name: 'Contact Us',
    link: '/',
  },
  {
    id: 4,
    name: 'FAQs',
    link: '/',
  },
];

const MobileNav = () => {
  // --Defining State for toggle--
  const [toggle, setToggle] = useState(false);
  // --Variable to define the animation for the responsive nav-items--

  const visible = toggle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10';

  useEffect(() => {}, [toggle]);

  return (
    <div>
      <div className='relative shadow-md'>
        <div className='flex justify-between items-center py-5'>
          <div className='flex items-center gap-1'>
            {/* --Logo Image-- */}
            <div>
              <Image
                src='/icon.png'
                width={30}
                height={100}
                alt='Icon here...'
              />
            </div>
            {/* --Name-- */}
            <div>
              <h1 className='text-xl text-sky-600 font-normal'>Cumulations</h1>
            </div>
          </div>
          {/* --NavIcon + NavItems-- */}
          <div>
            <div
              className='text-2xl text-blue-700'
              onClick={() => setToggle(!toggle)}>
              {toggle ? <AiOutlineClose /> : <RiMenu5Line />}
            </div>
          </div>
        </div>
        {/* --Nav-Items-- */}
        {toggle ? (
          <div
            className={`absolute z-20 h-50 rounded-md w-full flex flex-col items-end gap-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-9 py-12 transition-transform ease-in-out duration-500 ${visible}`}>
            {Nav_Items.map((nav, index) => (
              <div key={index}>
                <ul>
                  <Link href={nav.link}>
                    <li>{nav.name}</li>
                  </Link>
                </ul>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
      {/* --Hero Section-- */}
      <div className='relative'>
        <div className='py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
          <div className='text-center'>
            <h1 className='text-2xl'>MANDANCE TO MAGICAL</h1>
            <p className='text-gray-200 mt-4'>
              Over 10M app downloads across 100+ projects.
            </p>
            <h1 className='flex gap-1 justify-center items-center text-lg text-white mt-5'>
              <span className='text-blue-700 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-xl pl-1 py-1'>
                Let's{' '}
              </span>{' '}
              Started
            </h1>
          </div>
        </div>
        <div className='w-full absolute top-64 flex justify-center'>
          <Image
            src='/res-herosection.avif'
            width={300}
            height={100}
            alt='Hero-Image here...'
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
