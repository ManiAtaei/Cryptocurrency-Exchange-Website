import React from 'react'

export default function DataWeb() {
    return (
        <div className='w-full mx-auto mt-5 flex flex-col'>
            <div dir='rtl' className='w-full flex flex-col items-center justify-center pt-8  bg-gradient-to-t from-[#ECFDF5] to-white '>
                <div className='flex  items-center gap-12 flex-row-reverse flex-wrap'>
                    <div className='flex flex-col gap-4 items-center justify-center w-[40%] mx-auto  lg:w-[168px]'>
                        <p className='text-4xl md:text-5xl font-bold '>
                            13.0M
                        </p>
                        <p className='font-semibold text-[#6B7280] md:text-[17px]'>
                            تعداد سفارش‌ها
                        </p>
                    </div>

                    <div className='flex flex-col gap-4 items-center justify-center w-[40%] mx-auto  lg:w-[168px]'>
                        <p className='text-4xl md:text-5xl font-bold '>
                            2.52M
                        </p>
                        <p className='font-semibold text-[#6B7280] md:text-[17px]'>
                            تعداد تراکنش‌ها
                        </p>
                    </div>

                    <div className='flex flex-col gap-4 items-center justify-center  w-[40%] mx-auto lg:w-[168px] '>
                        <p className='text-4xl md:text-5xl font-bold '>
                            142K
                        </p>
                        <p className='font-semibold text-[#6B7280] md:text-[17px]'>
                            تعداد کاربران
                        </p>
                    </div>

                    <div className='flex flex-col gap-4 items-center justify-center  w-[40%] mx-auto lg:w-[168px]'>
                        <p className='text-4xl md:text-5xl font-bold text-green-600'>
                            400
                        </p>
                        <p className='font-semibold text-[#6B7280] md:text-[17px]'>
                            تعداد رمزارزها
                        </p>
                    </div>
                </div>

                <div className='mt-12'>
                    <img src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fgraphics%2Fsarafi-data-illustrator.png&w=256&q=75" alt="" />
                </div>
            </div>
            
        </div>
    )
}
