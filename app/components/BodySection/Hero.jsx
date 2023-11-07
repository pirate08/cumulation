import Image from 'next/image';
import React from 'react';
import ImageSlider from '../common/ImageSlider';
import Comment from '../common/Comment';
import { AiOutlineRight } from 'react-icons/ai';
import Connection from '../common/Connection';

const images = [
  '/work1.avif',
  '/work2.jpg',
  '/work3.avif',
  '/work4.avif',
  '/work5.avif',
  '/work6.avif',
  '/work7.avif',
];

const Cards = [
  {
    id: 1,
    image: '/tunetag.png',
    name: 'TuneTag',
    para1: 'Lorem ipsum',
    para2: 'Sdolor sit amet consectetur.',
  },
  {
    id: 2,
    image: '/babajobjpg.png',
    name: 'Babajob',
    para1: 'Lorem ipsum',
    para2: 'Sdolor sit amet consectetur.',
  },
  {
    id: 3,
    image: '/davek.png',
    name: 'davek',
    para1: 'Lorem ipsum',
    para2: 'Sdolor sit amet consectetur.',
  },
];

const courses = [
  {
    image: '/computer.avif',
    name: 'Web Development',
  },
  {
    image: '/computer.avif',
    name: 'UI/UX Development',
  },
  {
    image: '/computer.avif',
    name: 'IOS Development',
  },
  {
    image: '/computer.avif',
    name: 'Android Development',
  },
  {
    image: '/computer.avif',
    name: 'SEO Optimization',
  },
  {
    image: '/computer.avif',
    name: 'Animation',
  },
  {
    image: '/computer.avif',
    name: 'Cyber Security Analyst',
  },
  {
    image: '/computer.avif',
    name: 'Data Science',
  },
];

const Hero = () => {
  return (
    <div className='px-4 py-5 md:px-16 md:py-20'>
      {/* --Company Part-- */}
      {/* --Title-- */}
      <h1 className='text-center font-bold lg:text-2xl' data-aos='fade-down'>
        YOU ARE IN GOOD COMPANY
      </h1>

      {/* --Images of company's-- */}
      <div
        className='mt-16 flex justify-around gap-10 flex-wrap md:flex-nowrap'
        data-aos='fade-down'>
        {/* --1st image-- */}
        <Image
          src='/intel.png'
          width={80}
          height={50}
          alt='Symbol of Intel...'
        />
        {/* --2nd image-- */}
        <Image
          src='/seimens.png'
          width={80}
          height={50}
          alt='Symbol of Seimens...'
        />
        {/* --3rd image-- */}
        {/* <Image
          src='/decath.png'
          width={80}
          height={50}
          alt='Symbol of Decathlon...'
          className='bg-blue-900'
        /> */}
        {/* --4th image-- */}
        <Image
          src='/hav.png'
          width={80}
          height={50}
          alt='Symbol of Havells...'
        />
        {/* --5th image-- */}
        <Image
          src='/titan.png'
          width={80}
          height={50}
          alt='Symbol of Titan...'
        />
      </div>
      <div className='mt-10 md:mt-36' data-aos='fade-right'>
        {/* --Stories Part-- */}
        <div className='flex items-center flex-wrap md:flex-nowrap gap-10'>
          {/* --title-- */}
          <div>
            <h1 className='text-2xl'>WE'VE STORIES TO INSPIRE YOU :)</h1>
          </div>
          {/* --Cards-- */}
          <div className='flex justify-center flex-wrap md:flex-nowrap gap-10'>
            {Cards.map((card) => (
              <div
                key={card.id}
                className='py-4 px-4 shadow-xl border-black rounded-md hover:scale-110 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 duration-300 hover:text-white cursor-pointer'>
                {/* --Image-- */}
                <div className='flex justify-center mb-10'>
                  <Image
                    src={card.image}
                    width={80}
                    height={100}
                    alt='Image of House'
                    className='rounded-md hover:scale-105 duration-300 cursor-pointer'
                  />
                </div>
                {/* --Text-- */}
                <div>
                  <h4 className='text-lg'>{card.name}</h4>
                  <h4 className='mt-2 text-gray-400 text-md'>{card.para1}</h4>
                  <h4 className='mt-2 text-gray-400 text-md'>{card.para2}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --Image Slider-- */}
      <div className='mt-10 md:mt-36' data-aos='fade-left'>
        {/* --Title-- */}
        <h1 className='text-center font-bold lg:text-2xl'>HOW WE WORK?</h1>
        {/* --Import Image Slider-- */}
        <div className='mt-6'>
          <ImageSlider images={images} />
        </div>
      </div>
      {/* --Comment-- */}
      <div className='mt-10 md:mt-36' data-aos='fade-down'>
        <Comment />
      </div>
      {/* --Choice of weapon-- */}
      <div className='mt-10 md:mt-24' data-aos='fade-right'>
        {/* --Title-- */}
        <div className='flex items-center gap-4'>
          <span className='text-2xl text-sky-600'>
            <AiOutlineRight />
          </span>
          <h1 className='text-2xl'>YOUR WEAPON OF CHOICE</h1>
        </div>
        {/* --Image + text-- */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-5'>
          {courses.map((course, index) => (
            <div key={index} className='flex flex-col items-center'>
              <Image
                src={course.image}
                width={70}
                height={40}
                alt='Computer..'
                className='flex justify-center'
              />
              <h1 className='text-center text-gray-600'>{course.name}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* --Choice of weapon-- */}
      <div className='mt-10 md:mt-24' data-aos='fade-left'>
        {/* --Title-- */}
        <div className='flex items-center gap-4'>
          <span className='text-2xl text-sky-600'>
            <AiOutlineRight />
          </span>
          <h1 className='text-2xl'>ABOUT</h1>
        </div>
        <div>
          <p className='mt-4 ml-4 text-gray-400 text-lg'>
            We pursue to be a team which can co-create with you and turn your
            business ideas into a successful product/solution. We are a reputed
            full-cycle mobile application development company which commenced
            its operations in 2012.
          </p>
        </div>
        <div className='flex justify-center mt-8'>
          <Image src='/about.png' width={900} height={60} alt='About...' />
        </div>
      </div>
      {/* --Connection-- */}
      <div className='mt-16' data-aos='fade-right'>
        <Connection />
      </div>
    </div>
  );
};

export default Hero;
