import React, { useState } from 'react';
import img from '../images/base.jpg';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/awsccp.jpg';
import Header from './Header';
import pic from '../images/pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function About({mode, togglemode}) {
  const [selectedKey, setSelectedKey] = useState(0);

  const Certificates = [
    'Azure ai-900',
    'Oracle Generative AI',
    'Aws Cloud Practitioner',
  ];

  const languages = [
    'C',
    'C++',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'NodeJS',
    'ExpressJS',
    'SpringBoot',
    'MongoDB',
    'MySQL',
  ];

  const fileNames = [
    "c.jpg",
    "cpp.jpg",
    "python.jpg",
    "html.jpg",
    "css.jpg",
    "js.jpg",
    "react.jpg",
    "node.jpg",
    "express.jpg",
    "spring.jpg",
    "mongodb.jpg",
    "sql.jpg"
  ];
  const imageMapping = {
    0: img1,
    1: img2,
    2: img3,
  };

  const clicked = (key) => {
    setSelectedKey(key);
  };


  return (
    <>
      <Header mode={mode} togglemode={togglemode} />
      <div className='flex flex-wrap items-center justify-center pt-5 flex-col sm:gap-8 lg:gap-9 text-sm sm:text-lg lg:text-xl'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl bg-cyan-100 text-black rounded-md p-3'>About Myself</h1>
        <div>
          <img src={pic} alt="myimg" className='w-28 h-28 sm:w-44 sm:h-44 lg:w-72 lg:h-72 rounded-full cursor-pointer' />
        </div>
        <div className='max-w-full sm:w-[40rem] md:w-[50rem] lg:w-[66rem] px-4 sm:px-8'>
          <h2 className={`text-center ${mode === 'light' ? 'text-black' : 'text-slate-400'}  text-sm sm:text-base lg:text-lg`}>
            Hello, I'm Kandukuri Amara Lingeswararao and I'm currently pursuing B-Tech 4th year at KL University of Technology in the CSE-Honors branch. I have good knowledge of web development and programming. I have developed unique projects on ReactJS, NodeJS, SpringBoot, and more. I am also a freelance web developer, and I am always looking for opportunities to improve my skills and share my knowledge with others.
          </h2>
        </div>
      </div>

      <div className="text-white p-6 flex flex-col items-start pt-32 pl-8 sm:pl-16 lg:pl-40">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-violet-400 cursor-pointer">Capabilities</h2>
        <div className="flex flex-wrap gap-x-6 max-w-6xl gap-y-7 pt-8 sm:pt-10 lg:pt-11">
          {fileNames.map((file, index) =>(
            <div key={index} className='capabilities-item cursor-pointer hover: translate-y-1'>
              <img src={`/${file}`} alt={file} className='capabilities-image h-24 w-24 rounded-sm' />
            </div>
          ))}
        </div>
      </div><br />

      

      <div className="text-white p-6 flex flex-col items-start pt-1 sm:pl-[10rem] lg:pl-401">
        <h2 className="text-4xl font-semibold mb-2 text-violet-400 pt-11 cursor-pointer">Tech</h2>
        <div className="pt-9">
          {Certificates.map((certificate, index) => (
            <button 
              key={index} 
              className="relative inline-flex items-center justify-center p-0.5 ml-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              onClick={() => clicked(index)}
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {certificate}
              </span>
            </button>
          ))}
        </div>
        <br />

        <div className='w-auto h-auto max-h-96 max-w-96 cursor-pointer pl-3'>
          {selectedKey !== null && (
            <a href={imageMapping[selectedKey]} target="_blank">
              <img
                src={imageMapping[selectedKey]}
                alt="Certificate Image"
                className='w-full h-full object-cover rounded-md'
              />
            </a>
          )}
        </div>
      </div>
      
      <br/>
      <h2 className='pl-44'>Sources: </h2>
        <div className='pt-3 flex gap-7 pl-44 flex-wrap'>
          <div className="relative flex flex-col items-center group">
            <a href='https://www.linkedin.com/in/kandukuri-amar-nadh-2631a72b3/' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} className='w-9 h-8 cursor-pointer hover:text-linkedin rounded transition-transform transform hover:-translate-y-1 backdrop-blur' />
            </a>
            <span className="absolute top-full flex flex-col items-center hidden mt-2 group-hover:flex">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">LinkedIn</span>
            </span>
          </div>
          <div className="relative flex flex-col items-center group">
            <a href='https://github.com/KandukuriAmar' target='_blank'>
              <FontAwesomeIcon icon={faGithub} className='w-9 h-8 cursor-pointer hover:text-github rounded transition-transform transform hover:-translate-y-1 backdrop-blur' />
            </a>
            <span className="absolute top-full flex flex-col items-center hidden mt-2 group-hover:flex">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">GitHub</span>
            </span>
          </div>
          <div className="relative flex flex-col items-center group">
            <a href='mailto:kandukuriamarnadh27@gmail.com' target='_blank'>
              <FontAwesomeIcon icon={faGoogle} className='w-9 h-8 cursor-pointer hover:text-gmail rounded transition-transform transform hover:-translate-y-1 backdrop-blur' />
            </a>
            <span className="absolute top-full flex flex-col items-center hidden mt-2 group-hover:flex">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Gmail</span>
            </span>
          </div>
          <div className="relative flex flex-col items-center group">
            <a href='https://www.instagram.com/_kandukuri_amar_.27_/' target='_blank'>
              <FontAwesomeIcon icon={faInstagram} className='w-9 h-8 cursor-pointer hover:text-instagram rounded transition-transform transform hover:-translate-y-1 backdrop-blur' />
            </a>
            <span className="absolute top-full flex flex-col items-center hidden mt-2 group-hover:flex">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">Instagram</span>
            </span>
          </div>
        </div>
        <br/><br/><br/>
        <center className='pb-4'>Thank You For Your Time ❤️</center>
    </>
  );
}
