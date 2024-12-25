import React from 'react'

export default function BigCart() {
    return (
        <div className="bg-[#F6F5F0] 2xl:h-[414px] md:flex md:items-center md:justify-center">
        <div className="flex flex-col-reverse items-end md:flex md:flex-row md:justify-between md:items-center md:w-full md:py-5  2xl:w-[1536px] 2xl:flex 2xl:items-center 2xl:justify-between px-4 py-11">
            <div className="flex justify-center w-full md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] 2xl:pl-0 md:pl-16">
                <div >
                    <img className="w-[300px] h-[300px] lg:w-[350px] mt-5 lg:h-[350px] 2xl:mt-7 lg:mt-[-30px] 2xl:ml-[8px]" src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fgraphics%2Fsarafi-earnmoney-illustrator.png&w=384&q=75" alt="img" />
                </div>
            </div>
            <div className="sm:flex sm:flex-col sm:items-end">
                <div className="flex justify-end">
                    <img className="md:w-[400px] md:h-[110px] lg:mt-[-10px] 2xl:mr-[-10px] lg:w-[570px] lg:h-[130px]" src="https://i.postimg.cc/c1YBZM6w/Screenshot-2024-11-18-144557.png" alt="img" />
                </div>
                <div className="mt-5  flex flex-row-reverse justify-center ">
                    <button className=" bg-[#059669] text-white text-[16.5px] h-[44px] w-full 2xl:font-medium sm:h-[44px] 2xl:h-[48px] sm:w-[188.36px] rounded-[8px] flex items-center justify-center hover:bg-[#047857]"> اطلاعات بیشتر <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18" className="w-5 h-5 ml-2 -mr-1 opacity-50">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z">
                        </path>
                    </svg></button>
                </div>
            </div>
        </div>
    </div>
    )
}
