import React from 'react'
import { FaInstagram,FaFacebook , FaTwitter , FaGoogle, FaFacebookF } from 'react-icons/fa';  // Mailbox and WhatsApp from FontAwesome
import { FaEnvelope } from 'react-icons/fa'; // Email icon
import { FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
function Personalinfo() {
    return (
        <div className='border-t mb-6  -ml-2 border-[#3c3c3c] flex flex-col  w-[90%]'>

<div  className='flex -ml-1 w-auto mt-4 mb-4 h-auto items-center' id='mailbox'>
 <FaEnvelope  style={{ boxShadow: '-0.4px -0.4px 0.1px rgba(255, 255, 255, 0.2)' }}  className='text-yellow-100  text-5xl rounded-xl p-2' />
  <div className='flex m-2 flex-col w-auto h-[50%]'>
  <span className='text-gray-300 '>Email</span>
  <span className='text-sm '>tradearcher@gmail.com</span>
  </div>
</div>


<div  className=' flex w-auto mb-4 h-auto items-center' id='whatsapp'>
  <FaWhatsapp style={{ boxShadow: '-0.4px -0.4px 0.1px rgba(255, 255, 255, 0.2)' }}   className='text-yellow-100  rounded-xl  text-5xl  p-2'/>
  <div className='flex m-2 flex-col w-full h-[50%]'>
  <span className='text-gray-300'>WhatsApp</span>
  <span>03410431372</span>
  </div>
</div>

<div  className=' flex mb-4 w-auto items-center' id='location'>
  <FaMapMarkerAlt style={{ boxShadow: '-0.4px -0.4px 0.1px rgba(255, 255, 255, 0.2)' }}   className='text-yellow-100  rounded-xl  text-5xl p-2'/>
  <div className='flex flex-col m-2 w-full h-full'>
  <span className='text-gray-300'>Location</span>
  <span>Ali Town,Lahore,Pakistan</span>
  </div>
</div>
<div className='flex border-t border-[#3c3c3c] pt-6 justify-center text-3xl flex-row gap-4'>
  <FaFacebookF/>
  <FaInstagram/>
  <FaTwitter/>
</div>
<div
    style={{ boxShadow: '-0.4px -0.4px 0.1px rgba(255, 255, 255, 0.5)' }}
    className='flex mt-4 p-2 px-8 m-4 rounded-full bg-[#3c3c3c] cursor-pointer hover:bg-[#313131] justify-center' // Added justify-center
>
    <a
        href="https://wa.me/+923410431372" 
        target="_blank" 
        rel="noopener noreferrer"
        className='font-semibold text-center w-full' // Removed w-full to avoid stretching the text
    >
        <span className='flex justify-center items-center'>Contact Us via whatsapp</span> {/* Centered text */}
    </a>
</div>
</div>

    )
}

export default Personalinfo
