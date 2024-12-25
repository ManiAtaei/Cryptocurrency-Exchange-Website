import React from 'react'

export default function Qs() {


  

        

    return (
        <div dir='rtl' className='w-full mx-auto flex items-center justify-between gap-20 mt-40 flex-col md:flex-row xl:px-[200px]'>
            <div className='w-full flex flex-col gap-4 px-4 '>
                <h1 className='text-2xl font-bold text-black lg:text-4xl xl:'>
                    سوالات متداول
                </h1>
                <p className='text-base font-bold text-gray-500'>
                    لیستی از پرسش و پاسخ‌های که شاید با آن مواجه شوید
                </p>
                <div>
                    <img className='' src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fgraphics%2Fsarafi-faq-illustrator.png&w=384&q=75" alt="" />
                </div>
            </div>
        
            <div className='w-full px-4'>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-base font-medium">چه معاملاتی در صرافی ارز دیجیتال انجام می‌شود؟</div>
                        <div className="collapse-content">
                            <p className='text-base'>معاملات ارزهای دیجیتال در دو حالت قیمت لحظه‌ای یا مارکت و یا قیمت دلخواه یا لیمیت به صورت همزمان در مارکت‌های بر پایه تومانی و تتر قابل انجام است.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-base font-medium">چگونه در صرافی آی‌او ثبت نام کنیم؟</div>
                        <div className="collapse-content">
                            <p className='text-base'>برای ثبت نام در صرافی به وب‌سایت صرافی آی‌او مراجعه کنید و در قسمت چپ بالای برگه گزینه ثبت نام را انتخاب کنید.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-base font-medium">کارمزدهای صرافی رمزارز صرافی آی‌او چگونه است؟</div>
                        <div className="collapse-content">
                            <p className='text-base'>برای اطلاع دقیق از وضعیت کارمزدهای پلتفرم خرید و فروش ارز دیجیتال صرافی آی‌او، به صفحه </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
