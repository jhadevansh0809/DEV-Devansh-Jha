import React from 'react'
import { Link } from 'react-router-dom'
import devansh from '../images/devansh.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import leetcode from '../images/leetcode.png'

const About = () => {
  return (
    <div className='m-auto flex justify-evenly items-center my-20 md:flex-col'>
      <img src={devansh} alt='myphoto' className='w-1/3 rounded-full md:w-2/5 sm:w-3/5 hover:scale-110 transition duration-300 ease-in-out'/> 
      <div className='w-1/3 md:w-3/5 md:my-10 md:text-center hover:scale-110 transition duration-300 ease-in-out'>
        <h3 className='animate-bounce'>I'm Devansh Jha</h3>
        <p className='my-3 text-white'>I'm a <p className='text-orange-600 inline-block'>Web Developer</p> currently seeking internship opportunities to expand skills and gain valuable real-world experience. Hoping to gain work with a company that will benefit from my experience and passion.</p>
        <Link to='/contact'><button className='btn'>Hire Me</button></Link>
        <div className='flex my-5 justify-between items-center w-[200px] md:m-auto md:my-5'>
        <a href='https://www.instagram.com/_devanshjha/' target='_blank'><img src={instagram} alt='instagram logo'/></a>
        <a href='https://www.linkedin.com/in/jhadevansh0809/' target='_blank'><img src={linkedin} alt='linkedin logo'/></a>
        <a href='https://github.com/jhadevansh0809' target='_blank'><img src={github} alt='github logo'/></a>
        <a href='https://leetcode.com/jhadevansh0809/' target='_blank'><img src={leetcode} alt='leetcode logo' className='leetcode'/></a>
        </div>

      </div>
    </div>
  )
}

export default About
