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


import React from 'react';
import Header from './Header';

export default function Contactme({ mode, togglemode }) {
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
            <div className="w-full mt-1 p-2 border text-black rounded-md">
              {/* Placeholder for input */}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Email:</label>
            <div className="w-full mt-1 p-2 border text-black rounded-md">
              {/* Placeholder for input */}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-slate-900 font-semibold">Message:</label>
            <div className="w-full mt-1 p-2 border rounded-md text-black">
              {/* Placeholder for textarea */}
            </div>
          </div>
          <div>
            <div className="w-full bg-zinc-700 text-white font-semibold py-2 rounded-md text-center hover:bg-card cursor-pointer">
              Submit
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

