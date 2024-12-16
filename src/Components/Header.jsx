import { Link } from 'react-router-dom';
import React from 'react';
import logo2 from '../images/logolight.jpg';
import logo from '../images/logoblack.jpg';
import contactmsg from '../images/message.png';
import messagedark from '../images/messagedark.jpg';
import light from '../images/light.png';
import dark from '../images/dark.png';

export default function Header({ mode, togglemode }) {
  return (
    <div className={`flex flex-col justify-between items-center p-6 flex-wrap 
      backdrop-blur-xl bg-gradient-to-r to-white/10 
      shadow-sm`}>
      <nav className='w-full flex flex-row items-center justify-between flex-wrap'>
        
        <Link to='/'><img src={mode === 'dark' ? logo2 : logo} alt='logo' className={`h-9 w-14 rounded-sm cursor-pointer`} /></Link>

        <div className={`flex gap-3 items-center space-x-4 pl-14 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
          <Link to='/' className='border-b-2 border-transparent hover:border-amber-300'>Homee</Link>
          <Link to='/about' className='border-b-2 border-transparent hover:border-amber-300'>About</Link>
          <Link to='/' className='border-b-2 border-transparent hover:border-amber-300'>Portfolio</Link>
          <Link to='/clients' className='border-b-2 border-transparent hover:border-amber-300'>Clients</Link>
        </div>

        <div className='flex gap-5'>
          <button onClick={togglemode}>
            <img src={mode === 'dark' ? light : dark} className='h-9 w-9 bg-white rounded-full p-2' alt="mode" />
          </button>
          
          <a 
            href='/contactme' 
            className={`rounded-full p-4 flex items-center gap-2 ${mode === 'light' ? 'bg-black text-slate-100' : 'bg-white text-slate-800'} hover:rounded-full transition-transform transform hover:-translate-y-1 backdrop-blur-lg`}
          >
            <img src={mode === 'dark' ? contactmsg : messagedark} className='h-5 w-6' alt="contact" />
            Contact Me
          </a>
        </div>
      </nav>
    </div>
  );
}
