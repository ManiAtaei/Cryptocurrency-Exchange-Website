import React from 'react'

export default function Footer() {
    return (
        <div dir='rtl' className='w-full mx-auto bg-[#F9FAFB] flex  gap-16 justify-between mt-16 py-12 flex-col px-4
        lg:flex-row 2xl:px-[200px]'>
            <div className=' flex flex-col gap-8'>
                <div>
                    <img className='w-[126px]' src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbrand%2Fsrf-logo.svg&w=128&q=75" alt="logo" />
                </div>

                <div>
                    <p className='text-black font-bold'>
                        صرافی ارز دیجیتال ایرانی صرافی آی‌او با هدف ارائه یک بستر امن برای خرید و فروش انواع ارزهای دیجیتال و نگهداری در کیف پول رمزارز شخصی با کمترین میزان کارمزد بین صرافی‌های رمزارز ایرانی در زمستان سال 1402 آغاز به کار کرد.
                    </p>
                </div>

                <div className='flex  flex-col gap-4'>
                    <button className='text-black font-bold hover:bg-[#F3F4F6] p-4 border-[1px] flex items-center rounded-xl h-[86px] gap-4'>
                        <div>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-8 h-8 text-primary-600">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.079 4.839a3 3 0 0 0-4.255.1M11 18h1.083A3.916 3.916 0 0 0 16 14.083V7A6 6 0 1 0 4 7v7m7 4v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4V8H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1V8Z"></path>
                            </svg>
                        </div>

                        <div>
                            <p> پشتیبانی تلفنی </p>
                            <p>(021) 2842 7573</p>
                        </div>
                    </button>

                    <button className='text-black font-bold hover:bg-[#F3F4F6] p-4 border-[1px] flex items-center rounded-xl h-[86px] gap-4'>
                        <div>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-8 h-8 text-primary-600">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2">
                                </path>
                            </svg>
                        </div>

                        <div>
                            <p>   ایمیل پشتیبانی  </p>
                            <p>support@sarafi.io</p>
                        </div>
                    </button>
                </div>
            </div>

            <div className='flex items-center px-4 gap-4 md:justify-around w-full'>
                <div className='flex items-center flex-col'>
                    <div>
                        <h1 className='lg:text-xl font-bold text-black'>خرید و فروش ارزهای دیجیتال</h1>
                    </div>

                    <ul className='text-base font-bold  mt-4 flex flex-col gap-2'>
                        <li><a href="#">خرید بیت کوین</a></li>
                        <li><a href="#">خرید اتریوم</a></li>
                        <li><a href="#">خرید تتر</a></li>
                        <li><a href="#">خرید ریپل</a></li>
                        <li><a href="#">خرید کاردانو</a></li>
                        <li><a href="#">خرید کاردانو</a></li>
                        <li><a href="#">خرید سولانا</a></li>
                        <li><a href="#">خرید دوج کوین</a></li>
                        <li><a href="#">فروش داگز</a></li>
                    </ul>
                </div>


                <div className='flex items-center flex-col'>
                    <div>
                        <h1 className='lg:text-xl font-bold text-black'>خرید و فروش ارزهای دیجیتال</h1>
                    </div>

                    <ul className='text-base font-bold  mt-4 flex flex-col gap-2'>
                        <li><a href="#">خرید بیت کوین</a></li>
                        <li><a href="#">خرید اتریوم</a></li>
                        <li><a href="#">خرید تتر</a></li>
                        <li><a href="#">خرید ریپل</a></li>
                        <li><a href="#">خرید کاردانو</a></li>
                        <li><a href="#">خرید کاردانو</a></li>
                        <li><a href="#">خرید سولانا</a></li>
                        <li><a href="#">خرید دوج کوین</a></li>
                        <li><a href="#">فروش داگز</a></li>
                    </ul>
                </div>
            </div>

            <div className='flex items-center flex-col lg:pt-5'>
                <div className='text-xl font-bold text-black'>
                    شبکه‌های اجتماعی
                </div>

                <div className='mt-4'>
                    <ul class="flex space-x-2 space-x-reverse"><li class="border p-2 rounded-lg bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 cursor-pointer"><a aria-selected="false" target="_blank" aria-label="تلگرام صرافی آی‌او" rel="nofollow" href="https://t.me/sarafi_io"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path></svg></a></li><li class="border p-2 rounded-lg bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 cursor-pointer"><a aria-selected="false" target="_blank" aria-label="اینستاگرام صرافی آی‌او" rel="nofollow" href="https://www.instagram.com/sarafi_io"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg></a></li><li class="border p-2 rounded-lg bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 cursor-pointer"><a aria-selected="false" target="_blank" aria-label="لینکدین صرافی آی‌او" rel="nofollow" href="https://www.linkedin.com/company/bamatether"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a></li><li class="border p-2 rounded-lg bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 cursor-pointer"><a aria-selected="false" aria-label="اکس (توییتر) صرافی آی‌او" rel="nofollow" href="https://twitter.com/Sarafiio"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg></a></li></ul>
                </div>
            </div>
        </div>
    )
}
