import React from 'react'

function page() {
    return (
        <div className='pt-20'>
            {/* Heading Section: Adjusted text sizes for mobile scalability */}
            <div className="heading text-white px-6 md:px-10 flex flex-col gap-4 md:gap-7 pt-5">
                <h1 className='font-[font6] text-xl md:text-2xl'>Connect with us</h1>
                <h2 className='font-[font5] text-[10vw] md:text-[6vw] leading-tight md:leading-[6vw]'>
                    Get in touch with us. <br className="hidden md:block" /> We're here to assist you
                </h2>
            </div>

            <div className="form pt-10">
                <form action="" className='flex flex-col gap-8 text-lg md:text-xl px-6 md:px-10 w-full'>
                    
                    {/* Input Group: Stacked on mobile (flex-col), row on medium screens (md:flex-row) */}
                    <div className='flex flex-col md:flex-row justify-between w-full gap-8 md:gap-5'>
                        <input className='border-b-2 outline-none bg-transparent w-full pb-2' type="text" placeholder='Your Name' />
                        <input className='border-b-2 outline-none bg-transparent w-full pb-2' type="email" placeholder='Email address' />
                        <input className='border-b-2 outline-none bg-transparent w-full pb-2' type="text" placeholder='Phone Number' />
                    </div>

                    {/* Message Field: Removed inner px-10 to align with the rest of the form padding */}
                    <div className='flex border-b-2 pt-5'>
                        <input className='outline-none w-full bg-transparent pb-2' type="text" placeholder='Message' />
                    </div>

                    <div className='flex items-center justify-center md:justify-start'>
                        <button className='bg-[#4F4FF1] flex mt-5 px-8 py-4 rounded-full font-[font5] text-xl cursor-pointer items-center justify-center gap-3 hover:opacity-90 transition-all'>
                            Send
                            <span className='h-5 w-5 rounded-full'>
                                <img src="/images/arrow.svg" alt="arrow" className="w-full h-full object-contain" />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page 