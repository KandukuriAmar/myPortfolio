import React, { useState, useEffect } from 'react';
import Header from './Header';
// export default function Contactme({mode, togglemode}) {
//   // const [data, setData] = useState({
//   //   name: "",
//   //   email: "",
//   //   message: ""
//   // });

//   // const handleStore = (e) =>{
//   //   setData({...data, [e.target.name]: e.target.value});
//   // }
//   const [text, setText] = useState("");

//   const handleSubmit = async(e) =>{
//     // e.preventDefault();
//     // setData({name: '', email: '', message: ''});
//     setText("Thanks for contacting me");
//     setTimeout(()=>{
//       setText("");
//     },3000);
//   }

//   return (
//     <>
//      <>
//       <Header mode={mode} togglemode={togglemode}/>
//       <div className= "flex justify-center items-center min-h-screen flex-row">
//         <form 
//           onSubmit={handleSubmit}
//           method="POST" 
//           className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
//         >
//           <div className="mb-9 text-2xl text-black flex items-center justify-center">Contact Me</div>
//           <div className="mb-4">
//             <label className="block text-slate-900 font-semibold">Name:</label>
//             <input 
//               name="name" 
//               type="text" 
//               // value={data.name}
//               // onChange={handleStore} 
//               required
//               className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" 
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-slate-900 font-semibold">Email:</label>
//             <input 
//               name="email" 
//               type="email" 
//               // value={data.email}
//               // onChange={handleStore}
//               required
//               className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700" 
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-slate-900 font-semibold">Message:</label>
//             <textarea 
//               name="message" 
//               // value={data.message}
//               // onChange={handleStore} 
//               required
//               className="w-full mt-1 p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-slate-700" 
//             />
//           </div>

//           <div>
//             <input 
//               type="submit" 
//               value="Submit" 
//               className="w-full bg-zinc-700 text-white font-semibold py-2 rounded-md hover:bg-card cursor-pointer" 
//             />
//           </div>

//           <p className='text-xl text-slate-900 flex items-center justify-center py-2'>{text}</p>
//         </form>
//       </div>
//      </> 
//     </>
//   )
// }



export default function Contactme({mode, togglemode}) {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleStore = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
        setSuccessMessage('');
        return;
      }

      setSuccessMessage('Thanks for contacting me!');
      setErrorMessage('');
      setData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <Header mode={mode} togglemode={togglemode} />
      <div className="flex justify-center items-center min-h-screen flex-row">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="mb-9 text-2xl text-black flex items-center justify-center">
            Contact Me
          </div>

          {errorMessage && (
            <p className="text-red-600 text-center mb-4">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="text-green-600 text-center mb-4">
              {successMessage}
            </p>
          )}

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Name:</label>
            <input
              name="name"
              type="text"
              value={data.name}
              onChange={handleStore}
              required
              className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Email:</label>
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={handleStore}
              required
              className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Message:</label>
            <textarea
              name="message"
              value={data.message}
              onChange={handleStore}
              required
              className="w-full mt-1 p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="w-full bg-zinc-700 text-white font-semibold py-2 rounded-md hover:bg-slate-800 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
}
