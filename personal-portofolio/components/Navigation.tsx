"use client";

import React from "react";


const links = [
    {
        name:"Home",
        path: "/home"
    },
    {
        name:"About",
        path: "/about"
    },
    {
        name:"Projects",
        path: "/projects"
    },
    {
        name:"Contacts",
        path:"/contacts"
    }
];


const Navigation = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 p-4 bg-red-100 shadow-lg rounded-lg justify-center items-center max-w-xs md:max-w-sm lg:max-w-md w-auto h-auto border-black border-2">     
        <div>
            <a className="mx-4 my-4 hover:underline border-2" href="/home">Home</a>
        </div>
        <div>
            <a className='mx-4 my-4 hover:underline'href="/about">About</a>
        </div>
        <div>
            <a className='mx-4 my-4 hover:underline'href="/projects">Projects</a>
        </div>
        <div>
            <a className='mx-4 my-4 hover:underline'href="/contracts">Contacts</a>
        </div>
    </div>
  )
}

export default Navigation
