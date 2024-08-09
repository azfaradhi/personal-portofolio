"use client";
import React from 'react'

const Header = () => {
  return (
    <div className=' w-full border-white flex flex-row mt-5 justify-between items-center'>
      <div>
        <a href="/" >
          <img src="/images/home.svg" alt="" className='w-8 h-8 ml-20' />
          </a>
      </div>
      <div className='flex flex-row  ml-auto mr-20 '>
        <a className=' my-4 text-white mx-4 hover:underline' href="/Project"> Projects </a>
        <a className=' my-4 text-white mx-4 hover:underline' href="/Achievement"> Achievement </a>
        <a className=' my-4 text-white mx-4 hover:underline' href="/Experience"> Experience </a>
      </div>
    </div>
  );
}

export default Header;
