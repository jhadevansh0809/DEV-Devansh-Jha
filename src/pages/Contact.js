import React from 'react'
import location from '../images/location.png'
import gmail from '../images/gmail.png'
import phone from '../images/phone.png'

const Contact = () => {
  return (
    <div className='w-1/3 text-white m-auto my-20 contact-container lg:w-1/2 sm:w-4/5'>
    <h3 className='text-center mb-10 text-[30px]'>Contact Me</h3>
      <div className='flex flex-col text-center p-10 items-center justify-center bg-neutral-900 rounded-lg hover:scale-110 transition duration-300 ease-in-out'>
        <div>
          <img src={location} alt='location icon'/>
          <h4>Location</h4>
          <p>KIET Group Of Institutions, Ghaziabad</p>
        </div>
        <div className='mt-10'>
          <img src={gmail} alt='gmail icon'/>
          <h4>Email</h4>
          <p>jhadevansh0809@gmail.com</p>
        </div>
        <div className='mt-10'>
          <img src={phone} alt='phone icon'/>
          <h4>Phone</h4>
          <p>+91-9119926737</p>
        </div>
      </div>
  </div>
  )
}

export default Contact
