import React from 'react'
import Header from '@/components/Header'

const Page = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 min-h-screen'>
      <div className='flex flex-col items-center'>
        <Header />
        <div className='container mt-20 w-3/4 mx-auto flex flex-col'>
          <div className='flex flex-col xl:flex-row items-center justify-between '>
            <div>
              <h1 className=' text-white text-4xl font-semibold font-sans mt-10'> Azfa Radhiyya Hakim </h1>
              <h2 className=' text-white text-xl font-semibold font-sans mt-3'> Developer and Researcher</h2>
              <h1 className=' text-white text-xl font-sans mt-10 text-justify'>
              Hi everyone! Just call me Radhi. I'm on my second year at Informatics Engineering, Institut Teknologi Bandung. 
              I have a lot of interest in Cyber Security, but for my early projects i will be focusing at software development. 
              I sometimes read books, watch movies, and playing sports. So far, 5 cm by <i>Donny Dhirgantor</i> is my favorite book and Rush Hour 2 is my favorite movie.
              In sports, i like to play football, basketball, badminton, running, and biking.
              </h1>
              <div className='flex flex-row mr-4 mt-4'>
                <a href="https://linkedin.com/in/azfa-radhiyya-hakim/">
                <img src="/images/linkedin.png" alt="logo linkedin" className='w-8' /></a>

                <a href="https://github.com/azfaradhi">
                <img src="/images/github.svg" alt="logo github" className='w-8 ml-4'/></a>

                <a href="https://www.instagram.com/azfaradhi/">
                <img src="/images/instagram.png" alt="logo instagram" className='w-8 ml-4'/></a>

                <a href="mailto:aradhihakim@gmail.com">
                <img src="/images/gmail.png" alt="logo gmail" className='w-8 ml-4'/></a>

                
              </div>
            </div>
            <div className='flex mt-10 justify-center mx-16'>
              <div className='relative w-56 h-56'>
                <img
                  src='/images/foto.jpg'
                  alt='My Photo'
                  className='rounded-full w-full h-full scale-125 object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
