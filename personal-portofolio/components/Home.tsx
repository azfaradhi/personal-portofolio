"use clients";
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col bg-black min-h-screen'>
      <header/>
      <div className='container mt-10 w-2/3 mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div>
            <h1 className='text-white text-6xl font-courier'>AR</h1>
              <h1 className='text-white text-2xl font-courier mt-10 text-justify'>
                Hi! My name is Azfa Radhiyya Hakim. My friends call me Radhi, but my lecturer call me Azfa. In tech, people often call me AR :D</h1>
            <div className=' mt-5 flex flex-row text-white'>
              <a href="https://www.linkedin.com/in/azfa-radhiyya-hakim/">
                <img 
                  src='/images/linkedin.png'
                  alt='linkedin icon'
                  className='w-7 mr-1'/>
              </a>
              <a href="https://github.com/azfaradhi">
                <img 
                  src='/images/github.png'
                  alt='github icon'
                  className='w-7 border-white border-2'/>
              </a>
            </div>
          </div>
          <div className='flex mt-10 justify-center mx-20'>
            <div className='relative w-56 h-56'>
              <img
                src='/images/foto.jpg'
                alt='My Photo'
                className='rounded-full w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 container mt-10 w-2/3 mx-auto border-white'>
        <h1 className='text-white text-4xl font-courier'>Current Job</h1>
        <p className=' mt-10 font-courier text-white text-2xl'>
          Frontend Developer at KAT OSKM ITB 2024
        </p>
      </div>
      <div className='mt-10 container mt-10 w-2/3 mx-auto border-white'>
        <h1 className='text-white text-4xl font-courier'>Past Project</h1>
        <p className=' mt-10 font-courier text-white text-2xl'>
          Frontend Developer at KAT OSKM ITB 2024
        </p>
      </div>
    </div>
  )
}

export default Home