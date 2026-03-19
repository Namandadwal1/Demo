import React from 'react'

function Features() {
    const title = [
        "Modern Design",
        "Lightning Fast",
        "Fully Responsive"
    ]
    const desc = [
        "We design visually stunning websites that capture attention and convert visitors into loyal customers.",
        "Your website will look perfect on every device — mobile, tablet, and desktop — ensuring a smooth experience for every visitor.",
        "We implement modern security standards to keep your website and customer data safe and protected."
    ]
    
    return (
        <div className='p-6 md:p-10'>
            {/* Header Section: Adjusted width and text size for mobile */}
            <div className="px-4 md:px-10">
                <h1 className='font-[font5] text-[7vw] md:text-[2.5vw] leading-tight md:leading-[3vw] w-full md:w-2/3 lg:w-1/2 pt-10'>
                    Our websites are optimized for speed and performance, providing lightning-fast loading.
                </h1>
                <p className='font-[font6] text-sm md:text-base text-zinc-400 pt-5 w-full md:w-2/3 lg:w-1/2'>
                    Your website will look perfect on every device — mobile, tablet, and desktop — ensuring a smooth experience for every visitor. We implement modern security standards to keep your website and customer data safe and protected.
                </p>
            </div>

            {/* Cards Container: Grid layout for better responsiveness */}
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center mt-10 gap-8 px-4 md:px-10">
                {title.map((item, index) => (
                    <div 
                        key={index} 
                        className="card border border-zinc-500 border-b-0 w-full max-w-[400px] h-[450px] md:h-[500px] rounded-2xl bg-white text-black flex flex-col overflow-hidden transition-transform hover:scale-[1.02]"
                    >
                        <div className="px-6 md:px-10 pt-8 md:pt-10">
                            <h2 className='text-2xl md:text-[2vw] font-[font5] leading-tight'>{item}</h2>
                            <p className='font-[font6] text-xs md:text-sm text-zinc-500 pt-2'>{desc[index]}</p>
                        </div>
                        
                        {/* Image Placeholder: Pushed to bottom with mt-auto */}
                        <div className="image h-full mt-8 rounded-t-2xl w-[90%] mx-auto bg-black">
                            {/* You can map your img array here once you have the paths */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features