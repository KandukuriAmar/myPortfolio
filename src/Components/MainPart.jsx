import React from 'react';
import pic from '../images/pic.png';
import darkresume from '../images/darkresume.png';
import lightresume from '../images/lightresume.png';
import ReactTypingEffect from 'react-typing-effect';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function MainPart({mode, togglemode}) {
  return (
    <>
      <Header mode={mode} togglemode={togglemode} />
      <section className={`flex flex-col flex-wrap justify-center p-10 tracking-wide ${mode === 'light'? 'text-black': 'text-white'} relative top-40`}>
        <p className="text-3xl">Hello,</p><br/>
        <h1 className="text-6xl font-bold tracking-wide">
          I'm, <span className="text-amber-300">Amar Nadh</span>
        </h1>
        {/* <h1 className='text-6xl tracking-wide pt-1'>Website Developer</h1><br/> */}
        <h2 className="text-6xl tracking-wide pt-1">
          {' '}
          <ReactTypingEffect
            text={['Website Developer', 'Programmer']}
            speed={100}
            eraseSpeed={50}
            typingDelay={200}
            eraseDelay={2000}
          /><br/>
        </h2>
        <br/><h1>I am a skilled in creating the web application that are user friendly</h1><br/>
        <a className={`flex flex-wrap gap-2 items-center rounded-full ${mode === 'light'? 'bg-black text-slate-100' : 'bg-slate-100 text-slate-900'} w-36 h-14 hover:rounded-full transition-transform transform hover:-translate-y-1 backdrop-blur`} href="https://drive.google.com/file/d/1KXWKOtAoWEhhNreteZs7UBUXLlTa1Sod/view?usp=drive_link" target='_black'>
          <img src={mode === 'light' ? darkresume : lightresume} className='h-11 w-11 p-3'/>Resume
        </a>
        <img src={pic} alt='baseimg' className='h-80 w-80 rounded-full absolute -z-10 object-cover right-11 top-14'/>
        <br/>
        <div className='pt-3 flex gap-7 pl-3'>
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
    </section>
  </>
  );
}