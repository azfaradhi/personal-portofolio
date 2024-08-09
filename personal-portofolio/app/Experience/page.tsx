import React from 'react'
import Header from '@/components/Header'

const Experience = () => {
  return (
    <div className='bg-fixed bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 min-h-screen flex flex-col items-center'>
      <Header />
        <div className='container flex flex-col mt-20 px-4'>
          <h1 className='text-white text-5xl font-medium mb-20'>Experience</h1>

          <div className='w-full max-w-4xl bg-gray-800 bg-opacity-50 border-2 shadow-lg rounded-lg p-6'>
            <div className='mb-8'>
              <div className='text-white font-semibold text-2xl mb-4'>Current Job:</div>
                <ul className='list-disc pl-6 space-y-2'>
                  <li className='text-white text-lg'>Frontend Developer at IT OSKM ITB 2024</li>
                  <li className='text-white text-lg'>Quality Control at KTOM</li>
                </ul>
            </div>

            <div>
              <div className='text-white font-semibold text-2xl mb-4'>Past Job:</div>
                <ul className='list-disc pl-6 space-y-2'>
                  <li className='text-white text-lg'>Problem Setter at IMPACT STEI ITB 2024</li>
                  <li className='text-white text-lg'>Staff of Academics at BPA STEI-K 2023</li>
                  <li className='text-white text-lg'>Logistic Division at Sandbox by IEEE ITB SB</li>
                </ul>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Experience