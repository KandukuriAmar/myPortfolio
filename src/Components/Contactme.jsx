import {React, useState} from 'react';
import Header from './Header';
export default function Contactme({mode, togglemode}) {

  const[formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [text, setText] = useState("");

  const setAllEmpty = () => {
    if (!formData.name || !formData.email || !formData.message) {
    setText("Please fill all fields.");
    document.getElementById("btntext").style.color = "red";
    setTimeout(() => setText(""), 2000);
    return;
  }
    setFormData({
      name: "",
      email: "",
      message: ""
    })

    setText("Thanks for Submitting your feedback.")
    document.getElementById("btntext").style.color = "green";
    setTimeout(() => {
      setText("");
    }, 2000)
  }

  const handleOnchange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  }

  return (
    <>
     <>
      <Header mode={mode} togglemode={togglemode}/>
      <div className= "flex justify-center items-center min-h-screen flex-row">
        <div 
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="mb-9 text-2xl text-black flex items-center justify-center">Contact Me</div>
          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Name:</label>
            <input 
              name="name" 
              type="text" 
              value={formData.name}
              onChange = {handleOnchange}
              required
              className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Email:</label>
            <input 
              name="email" 
              type="email" 
              value={formData.email}
              onChange = {handleOnchange}
              required
              className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Message:</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange = {handleOnchange}
              required
              className="w-full mt-1 p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-slate-700" 
            />
          </div>

          <div>
            <input 
              type="submit" 
              value="Submit" 
              className="w-full bg-zinc-700 text-white font-semibold py-2 rounded-md hover:bg-card cursor-pointer" 
              onClick = {setAllEmpty}
            />
          </div>
          <br/>
          <div><p id="btntext" className="pl-9">{text}</p></div>
        </div>
      </div>
     </>
    </>
  )
}
