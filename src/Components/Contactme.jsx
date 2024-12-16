import React, { useState, useEffect } from 'react';
import Header from './Header';
export default function Contactme({mode, togglemode}) {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   message: ""
  // });

  // const handleStore = (e) =>{
  //   setData({...data, [e.target.name]: e.target.value});
  // }
  const [text, setText] = useState("");

  const handleSubmit = async(e) =>{
    // e.preventDefault();
    // setData({name: '', email: '', message: ''});
    setText("Thanks for contacting me");
    setTimeout(()=>{
      setText("");
    },3000);
  }

  return (
    <>
     <>
      <Header mode={mode} togglemode={togglemode}/>
      <div className= "flex justify-center items-center min-h-screen flex-row">
        <form 
          onSubmit={handleSubmit}
          // method="POST"
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="mb-9 text-2xl text-black flex items-center justify-center">Contact Me</div>
          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Name:</label>
            <input 
              name="name" 
              type="text" 
              // value={data.name}
              // onChange={handleStore} 
              required
              className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Email:</label>
            <input 
              name="email" 
              type="email" 
              // value={data.email}
              // onChange={handleStore}
              required
              className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Message:</label>
            <textarea 
              name="message" 
              // value={data.message}
              // onChange={handleStore} 
              required
              className="w-full mt-1 p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-slate-700" 
            />
          </div>

          <div>
            <input 
              type="submit" 
              value="Submit" 
              className="w-full bg-zinc-700 text-white font-semibold py-2 rounded-md hover:bg-card cursor-pointer" 
            />
          </div>

          <p className='text-xl text-slate-900 flex items-center justify-center py-2'>{text}</p>
        </form>
      </div>
     </> 
    </>
  )
}
