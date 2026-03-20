// "use client";
// import React, { useEffect, useState } from "react";

// function Page() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");


//   const getMessage = () => {
//     const Message = `new website Inquiry

// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Message: ${message}`;
    
//     console.log("message of the template submittion",name,email,message)
//     return Message;
//   };


//   return (
//     <div className="pt-20">
//       <div className="heading text-white px-6 md:px-10 flex flex-col gap-4 md:gap-7 pt-5">
//         <h1 className="font-[font6] text-xl md:text-2xl">Connect with us</h1>
//         <h2 className="font-[font5] text-[10vw] md:text-[6vw] leading-tight md:leading-[6vw]">
//           Get in touch with us. <br className="hidden md:block" /> We're here to assist you
//         </h2>
//       </div>

//       <div className="form pt-10">
//         <form
//           className="flex flex-col gap-8 text-lg md:text-xl px-6 md:px-10 w-full"
//         >
//           <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-5">
//             <input
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border-b-2 outline-none bg-transparent w-full pb-2"
//               type="text"
//               placeholder="Your Name"
//             />

//             <input
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border-b-2 outline-none bg-transparent w-full pb-2"
//               type="email"
//               placeholder="Email address"
//             />

//             <input
//               name="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="border-b-2 outline-none bg-transparent w-full pb-2"
//               type="text"
//               placeholder="Phone Number"
//             />
//           </div>

//           <div className="flex border-b-2 pt-5">
//             <input
//               name="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="outline-none w-full bg-transparent pb-2"
//               type="text"
//               placeholder="Message"
//             />
//           </div>

//           <div className="flex items-center justify-center md:justify-start">


//             <a href={`https://wa.me/919625713755?text=${encodeURIComponent(getMessage())}`}
//               target="_blank"
//               rel="noopener noreferrer">
//               <div className="bg-[#4F4FF1] flex mt-5 px-8 py-4 rounded-full font-[font5] text-xl cursor-pointer items-center justify-center gap-3 hover:opacity-90 transition-all"
//               >
//                 Send
//                 <span className="h-5 w-5 rounded-full">
//                   <img
//                     src="/images/arrow.svg"
//                     alt="arrow"
//                     className="w-full h-full object-contain"
//                   />
//                 </span>
//               </div>
//             </a>



//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Page;