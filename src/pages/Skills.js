import React,{useEffect} from 'react'
import c from '../images/c.png'
import cpp from '../images/cpp.png'
import python from '../images/python.png'
import js from '../images/js.png'
import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/react.png'
import django from '../images/django.png'
import vscode from '../images/vscode.png'
import pycharm from '../images/pycharm.png'
import arduino from '../images/arduino.png'
import iot from '../images/iot.png'

const Skills = () => {
   
   useEffect(() => {
        document.title = 'Devansh Jha | Skills';
   }, []);

  return (
      <div className='skills-container w-4/5 m-auto my-20'>
       <h3 className='text-center mb-10 text-[30px]'>My Skills</h3>
        <div className='my-10'>
        <p className='font-bold text-orange-600 text-center mb-1 uppercase text-md'>Programming Languages</p>
         <div className='py-10 flex items-center justify-center md:flex-wrap'>
            <img src={c} alt='c-programming logo'/>
            <img src={cpp} alt='c++ programming logo'/>
            <img src={python} alt='python programming logo'/>
            <img src={js} alt='javascript-programming logo'/>
         </div>
        </div>
        <div className='my-10'>
        <p className='font-bold text-orange-700 text-center mb-1 uppercase text-md'>Web Development</p>
         <div className='py-10 flex items-center justify-center md:flex-wrap'>
            <img src={html} alt='html logo'/>
            <img src={css} alt='css logo'/>
            <img src={react} alt='react logo'/>
            <img src={django} alt='django logo'/>
         </div>
        </div>
        <div className='my-10'>
        <p className='font-bold text-orange-700 text-center mb-1 uppercase text-md'>Tools</p>
         <div className='py-10 flex items-center justify-center md:flex-wrap'>
            <img src={vscode} alt='vscode logo'/>
            <img src={pycharm} alt='pycharm logo'/>
         </div>
        </div>
        <div className='my-10'>
        <p className='font-bold text-orange-700 text-center mb-1 uppercase text-md'>Internet of Things</p>
         <div className='py-10 flex items-center justify-center md:flex-wrap'>
            <img src={arduino} alt='arduino logo'/>
            <img src={iot} alt='iot logo'/>
         </div>
        </div>
      </div>
  )
}

export default Skills
