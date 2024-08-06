import React from 'react'
import Navigation from '@/components/Navigation'


const Contacts = () => {
  return (
    <div className='bg-gradient-to-r from-[#291C2E] to-[#3B1A22] min-h-screen'>
      <div className='flex flex-col items-center'>
        <Navigation />
        <div className='container flex flex-col mt-20 justify-start'>
          <h1 className='text-white text-5xl font-medium'>Contact</h1>
        </div>
      </div>
    </div>
  )
}

export default Contacts