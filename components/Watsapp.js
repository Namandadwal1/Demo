import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdArrowForward } from 'react-icons/md'

function Watsapp() {
  return (
    <section id="contact" className="relative w-full py-24 md:py-32 overflow-hidden bg-black text-white">
      {/* Background radial gradient for depth and theme consistency */}
      <div className="absolute inset-0 pointer-events-none opacity-30 [background:radial-gradient(circle_at_center,#4F4FF1_0%,transparent_70%)]"></div>
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px]"></div>

      <div className="container relative z-10 px-6 mx-auto text-center max-w-5xl">
        <div className="opacity-100 transform-none">
          {/* Tagline */}
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border rounded-full border-zinc-800 bg-zinc-900/50 text-zinc-400 font-[font6]">
            Get In Touch
          </span>

          {/* Main Heading */}
          <h2 className="font-[font5] text-[12vw] md:text-[7vw] lg:text-[5vw] leading-[1.1] mb-8 tracking-tight">
            Ready to <span className="text-[#4F4FF1]">elevate</span> your <br className="hidden md:block" /> digital presence?
          </h2>

          {/* Description */}
          <p className="font-[font6] text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We craft high-performance websites that don't just look good—they drive results. Let's discuss your next project today.
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href="https://wa.me/916230518838"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#4F4FF1] text-white px-10 py-6 rounded-full font-[font5] text-xl flex items-center gap-4 transition-all duration-300 shadow-[0_0_30px_-10px_#4F4FF1] hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <FaWhatsapp className="text-3xl" />
              <span>Message on WhatsApp</span>
              <MdArrowForward className="text-2xl group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-zinc-500 font-[font6] text-sm md:text-base">
              Typically replies in under <span className="text-white">15 minutes</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient border at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
    </section>
  )
}

export default Watsapp

