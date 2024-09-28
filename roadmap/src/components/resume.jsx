import React from 'react';
import Education from './education';
import Experties from './experties';
import Risk from './risk';

function Resume() {
    return (
        <div className='w-[90%] md:w-[80%] m-1 md:mt-4 bg-[#242424] rounded-xl flex flex-col h-full p-4' id='Home-section'>

            <header className='w-full sm:justify-between flex items-center md:flex-row md:justify-between'>
                <h1 className='font-bold text-center md:text-left ml-0 md:ml-4 text-yellow-100 underline w-full text-4xl mt-4 md:text-4xl mb-4 md:mb-0'>
                    Roadmap
                </h1>
                <div
    style={{ boxShadow: '-0.4px -0.4px 0.1px rgba(255, 255, 255, 0.5)' }}
    className='flex md:hidden items-center p-2 px-6 pl-4 m-4 rounded-full bg-[#3c3c3c] cursor-pointer hover:bg-[#313131]'
>
    <a
        href="https://wa.me/+923410431372" 
        target="_blank" 
        rel="noopener noreferrer"
        className='font-semibold w-full text-center'
    >
        <span className='flex flex-row'>WhatsApp</span>
    </a>
</div>

            </header>

            <div className='ml-0 md:ml-2'>
                <Education />
                <Experties />
                <Risk/>
            </div>

        </div>
    );
}

export default Resume;
