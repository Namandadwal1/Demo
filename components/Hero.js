import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Hero() {
    return (
        <div className='min-h-screen flex items-center justify-center overflow-hidden'>
            {/* Background Layer */}
            <div className="absolute inset-0 -z-10 h-full w-full flex justify-center items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                
                <div className='flex flex-col items-center justify-center w-full max-w-7xl'>
                    
                    {/* Main Headings: Switched to responsive text sizes */}
                    <h1 className='font-[font5] text-[8vw] md:text-[5vw] lg:text-[3.5vw] tracking-wider text-center text-white leading-tight'>
                        Unlock the full potential of your business.
                    </h1>
                    
                    <h2 className='font-[font6] text-center pt-5 text-zinc-400 text-sm md:text-base lg:text-lg px-4 md:px-0'>
                        From strategy to launch, we craft powerful websites that elevate your brand online.<br className="hidden md:block" />
                        Built with performance, design, and growth in mind.
                    </h2>

                    {/* Action & Social Proof Section: Column on mobile, Row on md+ */}
                    <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-5 mt-10 w-full'>
                        
                        {/* Get Started Button */}
                        <button className='bg-[#4F4FF1] flex px-8 py-4 rounded-full font-[font5] text-lg md:text-xl cursor-pointer items-center justify-center gap-3 transition-transform active:scale-95'>
                            Get Started
                            <span className='h-5 w-5 rounded-full text-black text-2xl'>
                                <img src="/images/arrow.svg" alt="arrow" />
                            </span>
                        </button>

                        {/* Social Proof Container */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                            {/* Avatars: Adjusted positioning for smaller screens */}
                            <div className="images flex relative h-15 w-36 md:w-40">
                                <div className="customers absolute left-0 border-4 border-black h-15 w-15 rounded-full overflow-hidden bg-zinc-800">
                                    <img className='h-full w-full object-cover' src="/users/shiva.jpeg" alt="user" />
                                </div>
                                <div className="customers absolute left-8 md:left-10 border-4 border-black h-15 w-15 rounded-full overflow-hidden bg-zinc-800">
                                    <img className='h-full w-full object-cover' src="/users/ankush.jpeg" alt="user" />
                                </div>
                                <div className="customers absolute left-16 md:left-20 border-4 border-black h-15 w-15 rounded-full overflow-hidden bg-zinc-800">
                                    <img className='h-full w-full object-cover' src="/users/anshul.jpeg" alt="user" />
                                </div>
                            </div>

                            {/* Stats Info: Adjusted padding for mobile */}
                            <div className="info px-5 md:px-10 lg:px-20 font-[font5] text-center md:text-left text-white">
                                <h3 className="text-sm md:text-base">1K+ <br className="hidden md:block" /> <span className="text-zinc-400 md:text-white">Trusted Clients</span></h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero