import React from 'react';
import Header from '@/components/Header';

const Project = () => {
  return (
    <div className='bg-fixed bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 min-h-screen'>
      <div className='flex flex-col items-center'>
        <Header />
            <div className='container flex flex-col mt-20 justify-start'>
                <h1 className='text-white text-5xl font-medium'>Projects</h1>

                <div className='container flex flex-row bg-transparent border border-gray-300 shadow-xl h-64 mt-20 rounded-xl p-6'>
                    <div className='flex flex-col w-3/5'>
                        <a href="https://github.com/azfaradhi/mini-project-fe-information" target="_blank" rel="noopener noreferrer" className='text-white font-semibold text-3xl hover:underline transition duration-200 ease-in-out'> mini-project-fe-information </a>
                        <div className='mt-4 text-gray-200 text-sm leading-relaxed'>
                            In this project, I was assigned to make a simple to do list. Its pretty simple and actually this project was designed as a step to join Frontend Developer at OSKM ITB 2024                        </div>
                        <div className='mt-4 text-gray-300 text-sm'>
                        Skill: Typescript, HTML, CSS, React.js
                        </div>
                    </div>

                    <div className='ml-8 flex flex-1 items-center justify-center'>
                        <img
                        className='border-2 w-48 scale-125 h-auto object-cover rounded-lg shadow-md transition-transform transform hover:scale-150'
                        src="/images/mini-project.png"
                        alt="Project Image"
                        />
                    </div>
                </div>

                <div className='container flex flex-row bg-transparent border border-gray-300 shadow-xl h-auto mt-20 rounded-xl p-6'>
                    <div className='flex flex-col w-3/5'>
                        <a href="https://github.com/azfaradhi/Tubes-Daspro" target="_blank" rel="noopener noreferrer" className='text-white font-semibold text-3xl hover:underline transition duration-200 ease-in-out'> Tubes-Daspro </a>
                        <div className='mt-4 text-gray-200 text-sm leading-relaxed text-justify '>
                            In this project, me and my team was assigned to make a mini turn-based game. This program help Purry the Platypus, aka Agent P, to defeat the evil monsters created by Dr. Asep Spakbor, which threaten the security of the city of Danville. There is functionality to coordinate help from other agents at the secret O.W.C.A. headquarters, including strategic planning to fight the powerful monsters. Purry needed help because Dr. Asep Spakbor's latest monster was too powerful to face alone. Additional agents had to collaborate with Purry to develop a well-thought-out plan. The program also required functionality to search for and train its own monsters to be used in battle. The search takes place in a remote forest, which is known to be home to many types of monsters. This jungle adventure will test the courage and agility of the agents. The program emphasizes the validation of every action performed to ensure all steps are correct. 
                        </div>
                        <div className='mt-4 text-gray-300 text-sm'>
                        Skill: Python
                        </div>
                    </div>

                    <div className='ml-8 flex flex-1 items-center justify-center'>
                        <img 
                        className='border-2 w-48 scale-125 h-auto object-cover rounded-lg shadow-md transition-transform transform hover:scale-150'
                        src="/images/daspro.png"
                        alt="Project Image"
                        />
                    </div>
                </div>

                <div className='container flex flex-row bg-transparent border border-gray-300 shadow-xl h-64 mt-20 rounded-xl p-6 mb-10'>
                    <div className='flex flex-col w-3/5'>
                        <a href="https://github.com/azfaradhi/TPB/tree/main/TUBES%201" target="_blank" rel="noopener noreferrer" className='text-white font-semibold text-3xl hover:underline transition duration-200 ease-in-out'> Cashier-Machine </a>
                        <div className='mt-4 text-gray-200 text-sm leading-relaxed'>
                            In this program, me and my Team are designed to make a mini project based on problem around us. After a hack of reasearch, we take Bukhari Mart (Jatinangor) as main concept and later decided to make a cashier machine. This program work the same as how cashier machine works. We also make GUI using Tkinter to make the UI looks better. For reference, this is my first project at ITB.                         </div>
                        <div className='mt-4 text-gray-300 text-sm'>
                        Skill: Python
                        </div>
                    </div>

                    <div className='ml-8 flex flex-1 items-center justify-center'>
                        <img 
                        className='border-2 w-48 scale-125 h-auto object-cover rounded-lg shadow-md transition-transform transform hover:scale-150'
                        src="/images/mesin-kasir.png"
                        alt="Project Image"
                        />
                    </div>
                </div>




            </div>
        </div>
    </div>
  );
};

export default Project;
