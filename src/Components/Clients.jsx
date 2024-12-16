import React from 'react';
import Header from './Header';

export default function Clients({mode, togglemode}) {
    const users = [
        "govindha@gmail.com",
        "ba@gmail.com",
        "james@gmail.com",
        "sandeep@gmail.com",
        "sukuna@gmail.com",
        "sundhar@gmail.com",
        "mike@gmail.com",
        "gojo@gmail.com",
        "mikey@gmail.com",
        "loki@gmail.com",
        "nani@gmail.com",
    ]
  return (
    <div>
        <Header mode={mode} togglemode={togglemode} />
        <center><h1 className='text-3xl py-4 text-purple-300'>Thanks for contacting me all</h1></center>
        <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 max-w-12xl gap-y-4 sm:gap-y-6 lg:gap-y-8 pt-8 sm:pt-10 lg:pt-11">
          {users.map((user, index) => (
            <button
              className={`flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-9 py-2 sm:py-3 rounded-full font-semibold sm:font-bold text-sm sm:text-base lg:text-sm ${mode === 'dark' ? 'bg-white/10 text-orange-400' : 'bg-black text-gray-300'} shadow-inner hover:bg-slate-300 hover:text-black transition-transform transform hover:-translate-y-1 backdrop-blur`}
              key={index}
            >
              <span>{user}</span>
            </button>
          ))}
        </div>
    </div>
  )
}
