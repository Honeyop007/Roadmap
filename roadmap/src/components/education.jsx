import React from 'react';
import Timeline from './timeline';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
    return (
        <div className='text-left flex flex-col w-full' id='Skills'>
            <div className='flex items-center mt-4 sm:flex-row'>
                <FaGraduationCap className='text-yellow-100 md:mr-0 mr-3 text-3xl sm:text-4xl' />
                <h1 className='font-bold mt-2 sm:mt-0 sm:ml-4 text-2xl sm:text-3xl'>
                    Technical Analysis
                </h1>
            </div>
            <Timeline />
        </div>
    );
}

export default Education;
