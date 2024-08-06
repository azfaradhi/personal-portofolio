import React from 'react';
import Navigation from '@/components/Navigation';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Project = () => {
  return (
    <div className='bg-gradient-to-r from-[#291C2E] to-[#3B1A22] min-h-screen'>
        <div className='flex flex-col items-center'>
            <Navigation />
            <div className='container flex flex-col mt-20 justify-start'>
                <h1 className='text-white text-4xl font-medium'>Projects</h1>
                <div className='container flex flex-row border-2 border-white h-64 mt-10 rounded-lg'>
                    <div className='flex flex-col mt-5 w-3/5'>
                        <a href="https://github.com/azfaradhi/mini-project-fe-information" className='text-white font-medium text-3xl hover:underline'>mini-project-fe-information</a>
                        <div className='mt-5 text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis, perspiciatis cupiditate porro qui, eveniet voluptate repudiandae similique ipsam eum possimus hic, alias amet! Molestias facilis vero magnam deserunt repellat.
                        </div>
                        <div className='mt-5 text-white'> Skill: Typescript, HTML, CSS, React.js</div>
                    </div>
                    <div className='ml-10 flex flex-1 items-center justify-center overflow-hidden'>
                        <img 
                            className='w-1/2 h-auto object-contain'
                            src="/images/daspro.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className='container flex flex-row border-2 border-white h-64 mt-10 rounded-lg'>
                    <div className='flex flex-col mt-5 w-3/5'>
                        <a href="https://github.com/azfaradhi/mini-project-fe-information" className='text-white font-medium text-3xl hover:underline'>tubes-daspro</a>
                        <div className='mt-5 text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis, perspiciatis cupiditate porro qui, eveniet voluptate repudiandae similique ipsam eum possimus hic, alias amet! Molestias facilis vero magnam deserunt repellat.
                        </div>
                        <div className='mt-5 text-white'> Skill: Python</div>
                    </div>
                    <div className='ml-10 flex flex-1 items-center justify-center overflow-hidden'>
                        <img 
                            className='w-1/2 h-auto object-contain'
                            src="/images/daspro.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className='container flex flex-row border-2 border-white h-64 mt-10 rounded-lg'>
                    <div className='flex flex-col mt-5 w-3/5'>
                        <a href="https://github.com/azfaradhi/TPB/tree/main/TUBES%201" className='text-white font-medium text-3xl hover:underline'>mesin-kasir</a>
                        <div className='mt-5 text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis, perspiciatis cupiditate porro qui, eveniet voluptate repudiandae similique ipsam eum possimus hic, alias amet! Molestias facilis vero magnam deserunt repellat.
                        </div>
                        <div className='mt-5 text-white'> Skill: Typescript, HTML, CSS, React.js</div>
                    </div>
                    <div className='ml-10 flex flex-1 items-center justify-center overflow-hidden'>
                        <img 
                            className='w-1/2 h-auto object-contain'
                            src="/images/daspro.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className='container flex flex-row border-2 border-white h-64 mt-10 rounded-lg'>
                    <div className='flex flex-col mt-5 w-3/5'>
                        <a href="https://github.com/azfaradhi/Project-Euler" className='text-white font-medium text-3xl hover:underline'>Project-Euler</a>
                        <div className='mt-5 text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis, perspiciatis cupiditate porro qui, eveniet voluptate repudiandae similique ipsam eum possimus hic, alias amet! Molestias facilis vero magnam deserunt repellat.
                        </div>
                        <div className='mt-5 text-white'> Skill: Typescript, HTML, CSS, React.js</div>
                    </div>
                    <div className='ml-10 flex flex-1 items-center justify-center overflow-hidden'>
                        <img 
                            className='w-1/2 h-auto object-contain'
                            src="/images/daspro.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Project;
