import React from 'react';

const slides = [
    {
        src: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Faccountsecurity-srf.webp&w=640&q=75",
        alt: "Account Security",
    },
    {
        src: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Fhowtobuysell-srf.webp&w=640&q=75",
        alt: "How to Buy and Sell",
    },
    {
        src: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Finstagramlink-srf.webp&w=640&q=75",
        alt: "Instagram Link",
    },
    {
        src: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Faccountsecurity-srf.webp&w=640&q=75",
        alt: "Account Security",
    },
    {
        src: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Fhowtobuysell-srf.webp&w=640&q=75",
        alt: "How to Buy and Sell",
    },
    {
        src: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Finstagramlink-srf.webp&w=640&q=75",
        alt: "Instagram Link",
    },
];

export default function Slid() {
    return (
        <div className='w-full mx-auto mt-8 flex flex-col px-[200px]'>
            {/* اسلایدر با اسکرول افقی */}
            <div className='overflow-x-auto scrollbar-hide w-full'>
                <div className='flex gap-4 px-4 whitespace-nowrap'>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className='min-w-[476px] h-[180px] rounded-[8px] bg-gray-100 flex-shrink-0'
                        >
                            <img
                                className='w-full h-full rounded-[8px] object-cover'
                                src={slide.src}
                                alt={slide.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* نشانگرها */}
            <div className='flex gap-3 cursor-pointer mt-4 mx-auto pb-8'>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`w-[15px] h-[5px] rounded-xl ${
                            index === 0 ? "bg-[#059669]" : "bg-[#CCCCCC]"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
