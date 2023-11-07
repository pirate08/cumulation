import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMessage } from 'react-icons/ai';

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

const Header = () => {
  return (
    <div className='relative'>
      <div className='px-10 py-14 flex justify-between items-center'>
        {/* --Navbar-- */}
        <div className='flex items-center gap-1'>
          {/* --Logo Image-- */}
          <div>
            <Image src='/icon.png' width={40} height={100} alt='Icon here...' />
          </div>
          {/* --Name-- */}
          <div>
            <h1 className='text-2xl text-sky-600 font-normal'>Cumulations</h1>
          </div>
        </div>
        {/* --NavItems-- */}
        <div>
          <ul className='flex items-center gap-6 font-normal text-lg'>
            {Nav_Items.map((navitems) => (
              <li
                key={navitems.id}
                className='text-blue-700 hover:text-blue-500 cursor-pointer z-30'>
                <Link href={navitems.link} legacyBehavior>
                  {/* --Checking the id of the nav-item is even or not for conditional rendering */}
                  <a
                    className={
                      navitems.id % 2 === 0
                        ? 'md:text-white  md:hover:text-gray-200'
                        : ''
                    }>
                    {navitems.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* --Hero Section-- */}
      <div>
        <div data-aos='fade-down'>
          {/* --Hero text-- */}
          <div className='flex lg:justify-start px-20 pt-16'>
            <h1 className='text-4xl xl:text-5xl font-bold z-30 lg:w-1/4 tracking-wide'>
              MUNDANE TO MAGICAL
            </h1>
          </div>
          <p className='flex lg:justify-start text-lg md:w-2/4 lg:w-1/3 text-gray-400 px-20 mt-5 lg:mt-10'>
            Over 10M app downloads across our 100+ projects.
          </p>
          <h1 className='flex gap-1 lg:justify-start items-center text-xl text-sky-600 px-20 mt-7'>
            <span className='bg-gradient-to-r from-cyan-200 to-blue-300 rounded-xl pl-1 py-1'>
              Let's{' '}
            </span>{' '}
            Started
          </h1>
        </div>
        {/* --Hero Image-- */}
        {/* --for md version-- */}
        <div className='absolute right-0 top-0 hidden md:block'>
          <Image
            src='/hero-img.png'
            width={700}
            height={200}
            alt='Hero-Image here...'
          />
        </div>
        {/* --for lg version-- */}
        <div className='absolute right-0 top-0 hidden lg:block'>
          <Image
            src='/hero-img.png'
            width={900}
            height={200}
            alt='Hero-Image here...'
          />
        </div>
      </div>
      <div className='absolute right-16 top-[630px]'>
        <div className='text-3xl bg-sky-200 rounded-full p-2 text-white'>
          <AiOutlineMessage />
        </div>
      </div>
    </div>
  );
};

export default Header;
