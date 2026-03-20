"use client";
import React, { useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const getMessage = () => {
    const Message = `New Website Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    return Message;
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background System mirroring Hero */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_40%,#4F4FF110_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="heading flex flex-col gap-6 mb-16">
          <span className="text-[#4F4FF1] font-[font5] text-sm tracking-[0.2em] uppercase">Contact Us</span>
          <h1 className="font-[font5] text-[10vw] md:text-[6vw] lg:text-[5vw] leading-[1.1] mb-4">
            Get in touch with us. <br className="hidden md:block" /> 
            We're here to assist you.
          </h1>
          <p className="font-[font6] text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you immediately via WhatsApp.
          </p>
        </div>

        <div className="form-container max-w-4xl bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-[font6] text-zinc-500 uppercase tracking-widest">Full Name</label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-b border-zinc-800 outline-none bg-transparent pb-3 focus:border-[#4F4FF1] transition-colors font-[font6] text-lg"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-[font6] text-zinc-500 uppercase tracking-widest">Email Address</label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-zinc-800 outline-none bg-transparent pb-3 focus:border-[#4F4FF1] transition-colors font-[font6] text-lg"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-[font6] text-zinc-500 uppercase tracking-widest">Phone Number</label>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-b border-zinc-800 outline-none bg-transparent pb-3 focus:border-[#4F4FF1] transition-colors font-[font6] text-lg"
                  type="tel"
                  placeholder="+91 00000 00000"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-[font6] text-zinc-500 uppercase tracking-widest">Your Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-b border-zinc-800 outline-none bg-transparent pb-10 focus:border-[#4F4FF1] transition-colors font-[font6] text-lg resize-none"
                placeholder="Tell us about your project..."
                rows="1"
                required
              />
            </div>

            <div className="flex items-center pt-6">
              <a 
                href={`https://wa.me/919625713755?text=${encodeURIComponent(getMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#4F4FF1] text-white px-10 py-5 rounded-full font-[font5] text-xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_-10px_#4F4FF1]"
              >
                Send via WhatsApp
                <MdOutlineArrowRightAlt className="text-3xl group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;