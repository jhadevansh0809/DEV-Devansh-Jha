import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../pdf/resume.pdf'

const Navbar = () => {
     const showNavLinks = (e) => {
       const ele=document.getElementById('navLinks').classList
       ele.toggle('sm:hidden')
       ele.add('sm:flex-col', 'sm:bg-black', 'sm:w-screen', 'sm:my-20')
    
       let ele2=document.getElementById('svgpath')
       let d =ele2.getAttribute('d');
    //    console.log(d); 
       if(d==='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
          ele2.setAttribute('d','M6 18L18 6M6 6l12 12')
       else
          ele2.setAttribute('d','M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
    }

    const hideLinks = (e) => {
      const ele=document.getElementById('navLinks').classList
      ele.toggle('sm:hidden')
      let ele2=document.getElementById('svgpath')
      let d =ele2.getAttribute('d');
      ele2.setAttribute('d','M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
    }

  return (
    <>
    <div className='nav h-20 bg-black text-white flex justify-evenly items-center sm:justify-between sm:px-3 sm:flex-col'>
        <h1 className='text-[30px] w-1/5 font-bold text-orange-700 tracking-wider sm:absolute top-4 left-4 hover:scale-110 transition duration-300 ease-in-out'>Devansh</h1>
        <ul className='text-sm w-2/5 flex justify-between items-center lg:w-3/5 sm:hidden z-10' id='navLinks'>
           <Link to='/'><li onClick={hideLinks} className='sm:my-5'>About</li></Link>
           <Link to='/skills'><li onClick={hideLinks} className='sm:my-5'>Skills</li></Link>
           <Link to='/projects'><li onClick={hideLinks} className='sm:my-5'>Projects</li></Link>
           <a href={resume} target='_blank'><li onClick={hideLinks} className='sm:my-5'>Resume</li></a>
           <Link to='/contact'><li onClick={hideLinks} className='sm:my-5'>Contact</li></Link>
        </ul>
    </div>
    <svg onClick={showNavLinks} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 hidden invert absolute top-5 right-4 sm:block cursor-pointer hover:scale-110 trasition duration-300 ease-in-out">
            <path id='svgpath' strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </>
  )
}

export default Navbar
