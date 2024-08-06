import React from 'react'
import Navigation from '@/components/Navigation'


const Experience = () => {
  return (
    <div className='bg-gradient-to-r from-[#291C2E] to-[#3B1A22] min-h-screen'>
      <div className='flex flex-col items-center'>
        <Navigation />
        <div className='container flex flex-col mt-20 justify-start'>
          <h1 className='text-white text-4xl font-medium'>Experience</h1>
          <div className='mt-10 container w-2/3 mx-auto border-white'>
          <h1 className='text-white text-4xl font-courier'>Current Job</h1>
          <p className=' mt-10 font-courier text-white text-2xl'>
            Frontend Developer at KAT OSKM ITB 2024
          </p>
        </div>
        <div className='mt-10 container w-2/3 mx-auto border-white'>
          <h1 className='text-white text-4xl font-courier'>Past Project</h1>
          <p className=' mt-10 font-courier text-white text-2xl'>
            Frontend Developer at KAT OSKM ITB 2024
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Experience