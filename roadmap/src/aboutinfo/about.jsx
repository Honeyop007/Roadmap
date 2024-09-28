import React from 'react';
import Personalinfo from './personalinfo';

function About() {
  return (
    <>
      <div
        className='w-[30%] hidden flex-col md:mt-4 rounded-xl md:w-[35%] h-full md:flex m-4 bg-[#242424] justify-center items-center sticky top-10' // Added sticky class and top-10
        id='About-section'
      >
        <div
          style={{ boxShadow: '-0.4px -0.4px 0.1px rgba(255, 255, 255, 0.3)' }}
          className='w-auto flex justify-center items-center p-2 m-3 mt-10 rounded-xl bg-[#3c3c3c] md:w-[40%] object-contain'
        >
          <img
            src='https://img.icons8.com/?size=160&id=z11cyWEUSiKt&format=png'
            alt='A boy'
          />
        </div>
        <span
          id='DP'
          className='font-bold jelly text-center text-4xl'
        >
          Trade <span className='text-yellow-200'>Archer</span>
        </span>
        <div
          style={{ boxShadow: '-0.4px -0.4px 0.1px rgba(255, 255, 255, 0.5)' }}
          className='p-3 px-4 m-4 rounded-full bg-[#3c3c3c] cursor-pointer'
        >
          <span className='font-semibold'>Pro Traders</span>
        </div>
        <Personalinfo />
      </div>
    </>
  );
}

export default About;
