import React from 'react'

export default function Crypto() {
    return (
        <div dir='rtl' className='w-full flex flex-col items-center justify-between px-8 2xl:mt-[-50px] mt-20 mx-auto'>
            <div className='flex flex-col items-center justify-between lg:flex-row '>
                <div className=' flex flex-col gap-8 lg:w-2/3 2xl:px-[200px]'>
                    <div className='text-4xl font-bold text-green-700'>
                        تجارت ارزهای دیجیتال
                    </div>

                    <div className='text-base font-bold '>
                        ارز دیجیتال یا cryptocurrency نوعی پول دیجیتال است. با داشتن یک صرافی معتبر رمزارز برای فروش و خرید ارز دیجیتال مانند صرافی ‌آی‌او می‌توان شروع به تجارت ارزهای رمزنگاری شده کرد.

                        مهمترین مرحله برای شروع تجارت با دارایی‌های دیجیتال، داشتند کیف پول ارز دیجیتال اختصاصی است. با داشتن یک کیف پول رمزارز یا cryptocurrency wallet که حتی به آن کیف پول وب 3 نیز گفته می‌شود، می‌توانید ارزهای دیجیتال خریداری شده را نگهداری کنید و در صورت نیاز در زمان معین اقدام به فروش ارز دیجیتال موردنظر کنید. سایر مراحل تجارت در دنیای کریپتو به شرح زیر می‌باشد:
                    </div>

                    <div className='flex flex-col gap-4'>

                        <div className='flex  gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            نگهداری و مدیریت ارزهای دیجیتال
                        </div>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            نگهداری و مدیریت ارزهای دیجیتال
                        </div>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            نگهداری و مدیریت ارزهای دیجیتال
                        </div>
                    </div>

                </div>

                <div className='lg:pl-[200px]'>
                    <img src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Ftrade-crypto-srf.webp&w=640&q=75" alt=""  className=''/>
                </div>
            </div>

           <div className="flex items-center  mt-7">
                    <div className="h-[1px] border-solid border-t-[1px] lg:w-[450px] border-[#E5E7EB] "></div>
                    <div className="px-6 ">
                        <button className="text-[#4B5563] flex flex-row-reverse justify-center items-center border-solid border-[1px] border-[E5E7EB] rounded-[8px] w-[158.141px] h-[46px] py-[10px] px-[20px] text-[18px] font-medium hover:bg-[#F3F4F6]"> مشاهده بیشتر </button>
                    </div>
                    <div className="h-[1px] border-solid border-t-[1px] lg:w-[450px] border-[#E5E7EB] "></div>
                </div>
        </div>
    )
}
