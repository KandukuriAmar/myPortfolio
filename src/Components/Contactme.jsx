// import React from 'react';
// import Header from './Header';
// export default function Contactme({mode, togglemode}) {

//   return (
//     <>
//      <>
//       <Header mode={mode} togglemode={togglemode}/>
//       <div className= "flex justify-center items-center min-h-screen flex-row">
//         <div 
//           className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
//         >
//           <div className="mb-9 text-2xl text-black flex items-center justify-center">Contact Me</div>
//           <div className="mb-4">
//             <label className="block text-slate-900 font-semibold">Name:</label>
//             <input 
//               name="name" 
//               type="text" 
              
//               required
//               className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" 
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-slate-900 font-semibold">Email:</label>
//             <input 
//               name="email" 
//               type="email" 
              
//               required
//               className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700" 
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-slate-900 font-semibold">Message:</label>
//             <textarea 
//               name="message" 
              
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
//         </div>
//       </div>
//      </> 
//     </>
//   )
// }
import React, { useRef } from 'react';
import Header from './Header';

export default function Contactme({ mode, togglemode }) {
  const messageRef = useRef(null);

  const handleSubmit = () => {
    // Display the thank-you message
    if (messageRef.current) {
      messageRef.current.style.display = 'block';
      setTimeout(() => {
        // Hide the message after 3 seconds
        if (messageRef.current) {
          messageRef.current.style.display = 'none';
        }
      }, 3000);
    }
  };

  return (
    <>
      <Header mode={mode} togglemode={togglemode} />
      <div className="flex justify-center items-center min-h-screen flex-row">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-9 text-2xl text-black flex items-center justify-center">
            Contact Me
          </div>
          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Name:</label>
            <input
              name="name"
              type="text"
              required
              className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Email:</label>
            <input
              name="email"
              type="email"
              required
              className="w-full mt-1 p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Message:</label>
            <textarea
              name="message"
              required
              className="w-full mt-1 p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-zinc-700 text-white font-semibold py-2 rounded-md hover:bg-card cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div
        ref={messageRef}
        style={{ display: 'none' }}
        className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50"
      >
        <div className="bg-white p-4 rounded-md text-black">
          Thanks for contacting me!
        </div>
      </div>
    </>
  );
}