'use client';
import React from 'react';
import { useEffect, useState } from 'react';
// import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

const Comment = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const data = { key: 'comments' };

  useEffect(() => {
    const items = localStorage.getItem(data);
    if (items) {
      setCommentList(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(data, JSON.stringify(commentList));
  }, [commentList]);

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setComment(value);
    console.log(value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setCommentList([...commentList, comment]);
      setComment('');
    }
  };

  return (
    <div>
      {/* --Comment Section-- */}
      <div className='h-full md:h-[400px] py-7 md:py-0 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex flex-col gap-7 md:gap-14 justify-center px-3'>
        {/* --Praise Text-- */}
        <div className='flex'>
          {/* <span className='text-2xl mr-2 sm:mr-1 text-white'>
            <BiSolidQuoteAltLeft />
          </span> */}
          <h1
            className='text-white text-center font-bold text-xl md:text-3xl'
            style={{ fontFamily: 'Dancing-script , cursive' }}>
            At the heart of our approach is an unwavering focus on our
            customers, valuing their feedback as our guiding light.
          </h1>
          {/* <span className='text-2xl flex items-end sm:items-start sm:ml-1 text-white'>
            <BiSolidQuoteAltRight />
          </span> */}
        </div>
        {/* --Input Part-- */}
        <div className='md:px-44'>
          <textarea
            rows='3'
            value={comment}
            onChange={handleCommentChange}
            placeholder='Leave your comment...'
            className='w-full px-3 mb-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-lg focus:outline-none focus:shadow-outline focus:border-blue-300 resize-none sm:resize-y'
          />
          {/* --Button-- */}
          <button
            className='float-right bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md text-white text-md md:text-lg duration-200 ease-in-out'
            onClick={handleAddComment}>
            Add Comment
          </button>
        </div>
      </div>
      <div className='pt-7'>
        {/* --Title-- */}
        <h1 className='text-xl md:text-2xl font-bold text-blue-900 mb-4'>
          Comments:
        </h1>
        <ul className='h-full py-5 px-4 md:py-10 md:px-10 bg-gray-100 rounded-md list-disc'>
          <li
            className='text-green-700 md:text-lg ml-2 mb-2'
            style={{ fontFamily: 'Dancing-script, cursive' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aut
            quidem recusandae fugit ratione quaerat, amet eligendi a quibusdam
            illo quisquam nam laboriosam quos, blanditiis libero temporibus
            expedita quae? Id adipisci deleniti, enim doloremque incidunt
            aliquid tenetur vitae corrupti odit repudiandae magni itaque vel,
            atque facere ipsum! Rerum, asperiores laudantium.
          </li>
          {commentList.map((comment, index) => (
            <li
              className='text-green-700 md:text-lg ml-2 mb-2'
              style={{ fontFamily: 'Dancing-script, cursive' }}
              key={index}>
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
