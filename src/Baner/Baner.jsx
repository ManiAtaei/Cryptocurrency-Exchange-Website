import React from 'react'

export default function Baner() {
    return (
        <div className='bg-white w-full px-2 2xl:px-[200px]'>
            <div dir='rtl' className='w-full mx-auto mt-12  bg-gradient-to-r from-[#10B981] to-[#047857]  rounded-xl flex flex-col  items-center justify-between gap-12 lg:px-12 py-12 lg:flex-row '>
                <div className='flex flex-col md:flex-row' >
                    <div className="h-[90px] w-[90px] rounded-full bg-[#D8D5C0] flex justify-center items-center">
                        <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto text-[#A3986C]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21" >
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" >
                            </path>
                        </svg>
                    </div>

                    <div className='flex flex-col font-bold text-2xl mr-5 md:text-4xl text-white'>
                        <div >
                            همین الان تجارت
                        </div>
                        <div >
                            ارزهای دیجیتال رو شروع کن!
                        </div>
                    </div>
                </div>

                <div className='font-bold text-sm md:text-base  text-white px-6 md:px-20 lg:w-[375px] lg:px-0 '>
                    با عضویت در خانواده بزرگ صرافی ‌آی‌او می‌توانید شما هم شروع به ترید ارزهای دیجیتال پرداخته و همچنین در سود صرافی ‌آی‌او با امکان زیرمجموعه گیری، شریک شوید!
                </div>

                <div className='text-white font-bold'>
                    <button className='flex items-center justify-center py-3 px-5 rounded-xl bg-[#065F46] hover:bg-[#064E3B]'>
                        <svg class="w-5 h-5 ml-2 -mr-1 opacity-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z">
                            </path>
                        </svg>

                        عضویت در صرافی ‌آی‌او
                    </button>
                </div>
            </div>
        </div>
    )
}
