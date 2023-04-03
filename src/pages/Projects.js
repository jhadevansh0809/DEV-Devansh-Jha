import React,{useEffect} from 'react'
import carzone from '../images/carzone.jpg'
import cricblogs from '../images/cricblogs.jpg'
import youtube from '../images/youtube.jpg'
import zigbee from '../images/zigbee.jpg'

const Projects = () => {

  useEffect(() => {
      document.title = 'Devansh Jha | Projects';
  }, []);
  
  return (
    <div className='project-container w-2/5 text-white m-auto my-20 sm:w-4/5 lg:w-3/5'>
       <h3 className='text-center mb-10 text-[30px]'>My Projects</h3>
      <div>
        <img src={carzone} alt='car dealer'/>
        <h3 className='text-[25px]'>Carzone: A Car Selling Website</h3>
        <span className='text-blue-900 block'>Web</span>
        <span>06/2021-07/2021</span>
        <h5 className='mt-4'>Description:</h5>
        <p className='mb-2'>A responsive website providing all the functionalities of a car dealer website from which a user can buy a car, mainly a second hand car.</p>
        <h5>Technology:</h5>
        <p className='mb-2'>HTML, CSS, Javascript, Django</p>
        <h5>Role:</h5>
        <p className='mb-5'>Backend</p>
        <a href='https://github.com/jhadevansh0809/carzoneservices' target='_blank'><button className='btn mb-2'>Code Link</button></a>
        <a href='https://carzoneservices.pythonanywhere.com/' target='_blank'><button className='btn mb-2 ml-3 btn-red'>Live Link</button></a>
      </div>
      <div className='mt-10'>
        <img src={cricblogs} alt='cricket'/>
        <h3 className='text-[25px]'>CricBlogs: A Cricket Blog Website</h3>
        <span className='text-blue-900 block'>Web</span>
        <span>03/2023-03/2023</span>
        <h5 className='mt-4'>Description:</h5>
        <p className='mb-2'>A blog website which allow users to add, edit and remove blogs. Used Django REST Framework to create RESTful API endpoints and fetched data using ReactJS. Implemented user authentication functionality using JWT(JSON Web Token).</p>
        <h5>Technology:</h5>
        <p className='mb-5'>HTML, CSS, ReactJS, Django REST Framework</p>
        <a href='https://github.com/jhadevansh0809/CricBlogs-FE' target='_blank'><button className='btn mb-2'>Code Link</button></a>
        <a href='https://eclectic-cajeta-c28f98.netlify.app/' target='_blank'><button className='btn mb-2 ml-3 btn-red'>Live Link</button></a>
      </div>
      <div className='mt-10'>
        <img src={youtube} alt='youtube logo'/>
        <h3 className='text-[25px]'>YTube: A YouTube Clone</h3>
        <span className='text-blue-900 block'>Web</span>
        <span>02/2023-03/2023</span>
        <h5 className='mt-4'>Description:</h5>
        <p className='mb-2'>A responsive clone that aims to replicate the essential features and functionalities of the popular video-sharing platform, Youtube.</p>
        <h5>Technology:</h5>
        <p className='mb-2'>HTML, CSS, ReactJS</p>
        <a href='https://github.com/jhadevansh0809/YTube' target='_blank'><button className='btn mb-2'>Code Link</button></a>
        <a href='https://beamish-brioche-539613.netlify.app/' target='_blank'><button className='btn mb-2 ml-3 btn-red'>Live Link</button></a>
      </div>
      <div className='mt-10'>
        <img src={zigbee} alt='car dealer'/>
        <h3 className='text-[25px]'>Automation Using Zigbee</h3>
        <span className='text-blue-900 block'>IoT</span>
        <span>02/2022-04/2022</span>
        <h5 className='mt-4'>Description:</h5>
        <p className='mb-2'>A wireless network with star topology using zigbee which works on the principle of low data rate and long range communication.</p>
        <h5>Technology:</h5>
        <p className='mb-2'>Arduino Programming, Zigbee configuration</p>
        <h5>Role:</h5>
        <p>Arduino Programming</p>
      </div>
    </div>
  )
}

export default Projects
