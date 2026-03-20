"use client"
import Link from 'next/link';
import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

function Hero() {
    return (
        <div id="home" className='min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white relative py-20'>
            {/* Background System */}
            <div className="absolute inset-0 -z-10">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px]"></div>
                {/* Main Radial Glow */}
                <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_40%,#4F4FF120_0%,transparent_60%)]"></div>
                {/* Secondary Glow for depth */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4F4FF110] blur-[120px] rounded-full"></div>
            </div>

            <div className='flex flex-col items-center justify-center w-full max-w-5xl px-6 relative z-10'>
                
                {/* Tagline Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-[font6] text-zinc-400 tracking-widest uppercase">Premium Design Agency 2026</span>
                </div>

                {/* Main Headings */}
                <h1 className='font-[font5] text-[11vw] md:text-[7vw] lg:text-[5.5vw] tracking-tight text-center leading-[1.05] mb-6'>
                    Unlock the full potential <br /> 
                    of your <span className="text-[#4F4FF1]">business.</span>
                </h1>

                <p className='font-[font6] text-center text-zinc-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 px-4'>
                    From strategy to launch, we craft powerful websites that elevate your brand online. 
                    Built with performance, design, and growth in mind.
                </p>

                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full px-4'>
                    <a href="https://wa.me/916230518838" target="_blank" rel="noopener noreferrer"
                       className="w-full sm:w-auto bg-[#4F4FF1] text-white px-10 py-5 rounded-full font-[font5] text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_-5px_#4F4FF1] active:scale-95">
                        Start Your Project
                        <MdOutlineArrowRightAlt className="text-2xl" />
                    </a>
                    <button className="w-full sm:w-auto bg-transparent border border-zinc-800 text-white px-10 py-5 rounded-full font-[font5] text-lg flex items-center justify-center gap-3 hover:bg-zinc-900 transition-all backdrop-blur-sm active:scale-95">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                            <FaPlay className="text-[10px] ml-0.5" />
                        </div>
                        Watch Showreel
                    </button>
                </div>

                {/* Visual Element: Mockup/Card */}
                <div className="relative w-full max-w-4xl mx-auto mt-10 px-2 lg:px-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#4F4FF150] to-transparent rounded-2xl blur opacity-20"></div>
                    <div className="relative bg-zinc-950 border border-zinc-900 rounded-2xl p-4 shadow-2xl overflow-hidden aspect-video md:aspect-[21/9]">
                        {/* Browser-like Header */}
                        <div className="flex items-center gap-1.5 mb-6 border-b border-zinc-900 pb-4 mt-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                            <div className="ml-4 h-4 w-32 bg-zinc-900 rounded"></div>
                        </div>
                        {/* Content Placeholder Grid */}
                        <div className="grid grid-cols-12 gap-4 h-full pb-12">
                            <div className="col-span-12 md:col-span-8 bg-zinc-900/50 rounded-xl border border-zinc-900"></div>
                            <div className="hidden md:flex col-span-4 flex-col gap-4">
                                <div className="h-1/2 bg-zinc-900/50 rounded-xl border border-zinc-900"></div>
                                <div className="h-1/2 bg-[#4F4FF108] rounded-xl border border-[#4F4FF115]"></div>
                            </div>
                        </div>
                        {/* Interactive Glass Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col items-center gap-5 mt-20">
                    <div className="flex -space-x-4">
                        {['shiva', 'ankush', 'anshul'].map((name, i) => (
                            <div key={i} className="w-14 h-14 rounded-full border-4 border-black overflow-hidden bg-zinc-800 ring-2 ring-zinc-900/50">
                                <img className='h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500' src={`/users/${name}.jpeg`} alt="user" />
                            </div>
                        ))}
                    </div>
                    <div className="text-sm font-[font6] text-zinc-500 tracking-wide">
                        Trusted by <span className="text-white font-medium">1,000+</span> businesses worldwide
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
