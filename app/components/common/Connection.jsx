import React from 'react';
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

const Connection = () => {
  return (
    <div className='h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
      {/* Connection-- */}
      <div className='flex flex-wrap items-center justify-center md:justify-between py-3 px-3 md:px-14 md:py-6'>
        <h1 className='text-lg'>Get connected with us on social networks:</h1>
        {/* --Icons-- */}
        <div className='flex items-center gap-4 mt-2 cursor-pointer text-lg'>
          <BsFacebook />
          <BsTwitter />
          <BsGoogle />
          <BsInstagram />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Connection;
