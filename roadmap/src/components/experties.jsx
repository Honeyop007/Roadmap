import React from 'react';
import { FaBook } from 'react-icons/fa'; // Book icon
import Expertiestimeline from './expertiestimeline';

function Experties() {
    return (
        <div className='text-left border-t border-yellow-50 flex flex-col w-full' id='Skills'>
            <div className='flex items-center mt-4 sm:flex-row'>
                <FaBook className='text-yellow-100 text-3xl md:mr-0 mr-3 sm:text-4xl' />
                <h1 className='font-bold mt-2 sm:mt-0 sm:ml-4 text-2xl sm:text-3xl'>
                    Fundamental Analysis
                </h1>
            </div>
            <Expertiestimeline />
        </div>
    );
}

export default Experties;
