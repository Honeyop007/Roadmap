import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Book icon
import Risktimeline from './risktimeline';

function Risk() {
    return (
        <div className='text-left border-t border-yellow-50 flex flex-col w-full' id='Skills'>
            <div className='flex items-center mt-4  sm:flex-row'>
                <FaGraduationCap className='text-yellow-100 mr-3 md:mr-0 text-3xl sm:text-4xl' />
                <h1 className='font-bold mt-2 sm:mt-0 sm:ml-4 text-2xl sm:text-3xl'>
                   Risk Management
                </h1>
            </div>
            <Risktimeline/>
        </div>
    );
}

export default Risk;
