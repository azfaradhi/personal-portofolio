"use client";

import React from "react";




const Navigation = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 p-4 bg-red-100 shadow-lg rounded-lg justify-center items-center max-w-xs md:max-w-sm lg:max-w-md w-auto h-auto border-black border-2">     
        <div>
            <a className="mx-4 my-4 hover:underline border-2" href="/">Home</a>
        </div>
        <div>
            <a className='mx-4 my-4 hover:underline'href="/Experience">Experience</a>
        </div>
        <div>
            <a className='mx-4 my-4 hover:underline'href="/Project">Project</a>
        </div>
        <div>
            <a className='mx-4 my-4 hover:underline'href="/Contacts">Contacts</a>
        </div>
    </div>
  )
}

export default Navigation
