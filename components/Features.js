import React from 'react'
import { FiLayout, FiZap, FiSmartphone } from "react-icons/fi";

function Features() {
    const features = [
        {
            title: "Modern Design",
            desc: "We design visually stunning websites that capture attention and convert visitors into loyal customers using the latest trends.",
            icon: <FiLayout className="text-4xl text-[#4F4FF1]" />,
            illustration: (
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    {/* CSS Illustration for Modern Design */}
                    <div className="relative w-48 h-32 bg-zinc-900 rounded-lg border border-zinc-800 shadow-2xl flex items-center justify-center overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-800 flex items-center px-2 gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
                        </div>
                        <div className="mt-4 w-32 h-16 bg-[#4F4FF110] border border-[#4F4FF130] rounded-md relative flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F4FF1] to-purple-500 opacity-20 blur-xl animate-pulse"></div>
                            <div className="w-8 h-8 rounded-lg border-2 border-[#4F4FF1] opacity-60 rotate-12"></div>
                        </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-20 h-28 bg-zinc-950 border border-zinc-900 rounded-lg shadow-xl translate-x-4 -translate-y-4"></div>
                </div>
            )
        },
        {
            title: "Lightning Fast",
            desc: "Optimized for speed and performance, providing lightning-fast loading times that keep your users engaged and boost SEO.",
            icon: <FiZap className="text-4xl text-yellow-500" />,
            illustration: (
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    {/* CSS Illustration for Lightning Fast */}
                    <div className="relative w-16 h-40 bg-gradient-to-t from-[#4F4FF1] to-indigo-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <div className="absolute flex flex-col items-center">
                        <div className="w-12 h-20 bg-zinc-900 rounded-t-full border border-zinc-800 relative z-10 flex items-center justify-center overflow-hidden">
                            <div className="w-6 h-6 rounded-full bg-[#4F4FF1] blur-md opacity-50"></div>
                        </div>
                        <div className="w-16 h-8 bg-zinc-800 rounded-b-xl -mt-1 border border-zinc-700 shadow-lg"></div>
                        <div className="mt-2 flex flex-col gap-1 items-center">
                            <div className="w-2 h-8 bg-gradient-to-b from-[#4F4FF1] to-transparent rounded-full opacity-60"></div>
                            <div className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-transparent rounded-full opacity-40 -mt-4"></div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Fully Responsive",
            desc: "Your website will look perfect on every device — mobile, tablet, and desktop — ensures a smooth experience for every visitor.",
            icon: <FiSmartphone className="text-4xl text-emerald-500" />,
            illustration: (
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    {/* CSS Illustration for Responsive */}
                    <div className="relative w-40 h-28 bg-zinc-900 rounded-lg border border-zinc-800 shadow-lg flex flex-col">
                        <div className="h-4 w-full border-b border-zinc-800 px-2 flex items-center gap-1">
                             <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                        </div>
                        <div className="flex-1 p-2 gap-2 flex flex-col">
                            <div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
                            <div className="h-2 w-full bg-zinc-800 rounded"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 right-12 w-16 h-32 bg-zinc-950 border border-zinc-900 rounded-2xl shadow-2xl p-2 flex flex-col gap-2 translate-x-12 translate-y-4">
                        <div className="w-4 h-1 bg-zinc-800 rounded-full mx-auto mb-2"></div>
                        <div className="h-2 w-full bg-zinc-800 rounded"></div>
                        <div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
                        <div className="mt-auto w-3 h-3 rounded-full border border-zinc-800 mx-auto"></div>
                    </div>
                </div>
            )
        }
    ]
    
    return (
        <div id="about" className='p-6 md:p-10 bg-black text-white'>
            {/* Header Section */}
            <div className="px-4 md:px-10 max-w-7xl mx-auto">
                <span className="text-[#4F4FF1] font-[font5] text-sm tracking-[0.2em] uppercase mb-4 block">Core Features</span>
                <h1 className='font-[font5] text-[7vw] md:text-[3vw] lg:text-[2.5vw] leading-[1.1] w-full md:w-3/4 pt-4'>
                    High-performance websites tailored <br className="hidden md:block"/> for the modern digital era.
                </h1>
                <p className='font-[font6] text-sm md:text-base text-zinc-500 pt-6 w-full md:w-2/3 lg:w-1/2 leading-relaxed'>
                    We combine technical excellence with artistic vision to create digital platforms that aren't just tools, but growth engines for your business.
                </p>
            </div>

            {/* Cards Container */}
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-8 px-4 md:px-10 max-w-7xl mx-auto">
                {features.map((item, index) => (
                    <div 
                        key={index} 
                        className="group card border border-zinc-900 w-full rounded-2xl bg-[#0a0a0a] text-white flex flex-col overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-[#111] hover:shadow-[0_0_30px_-5px_rgba(79,79,241,0.1)]"
                    >
                        <div className="px-8 pt-10 pb-6">
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-zinc-900/50 flex items-center justify-center border border-zinc-800 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h2 className='text-2xl font-[font5] leading-tight mb-4'>{item.title}</h2>
                            <p className='font-[font6] text-sm text-zinc-500 leading-relaxed'>{item.desc}</p>
                        </div>
                        
                        {/* CSS Illustration Area */}
                        <div className="image h-64 mt-auto rounded-t-2xl w-full mx-auto bg-gradient-to-t from-black to-transparent overflow-hidden">
                            <div className="group-hover:scale-110 transition-transform duration-700 ease-out h-full">
                                {item.illustration}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features