import React from 'react'



export default function Magzin() {


    const mag = [
        { id: 1, img: "https://i.postimg.cc/g007CgZR/Screenshot-2024-11-19-214517.png", title: "اخبار ارزهای دیجیتال/دوشنبه 28 آبان 1403", text: "امروز دوشنبه29آبان 1403 اغلب رمزارزها نه افزایش و نه کاهش خاصی راتجربه نکرده ودر" },

        { id: 2, img: "https://sarafi.io/_next/image?url=https%3A%2F%2Fblog.sarafi.io%2Fwp-content%2Fuploads%2F2024%2F12%2Finvesting-in-paxg.jpg&w=384&q=75", title: "از دلار تا طلا با PAXG؛ سود مرکب در انتظار شماست", text: "پکس گلد (PAXG) یک ارز دیجیتال با ویژگی خاص و منحصر به فرد است که ثبات طلای  ", res: "hidden md:block" },

        { id: 3, img: "https://sarafi.io/_next/image?url=https%3A%2F%2Fblog.sarafi.io%2Fwp-content%2Fuploads%2F2024%2F12%2F23-december-2024-9.jpg&w=384&q=75", title: "اخبار ارزهای دیجیتال / دوشنبه ۳ دی ۱۴۰۳", text: "امروز دوشنبه ۳ دی ۱۴۰۳، با مجله خبری صرافی آی او همراه باشید تا از جدیدترین اخبار و قیمت", res: "hidden lg:block" },

        { id: 4, img: "https://sarafi.io/_next/image?url=https%3A%2F%2Fblog.sarafi.io%2Fwp-content%2Fuploads%2F2024%2F12%2Fbest-portfolio-for-2025.jpg&w=384&q=75", title: "پورتفوی طلایی ارز دیجیتال ۲۰۲۵ (بازدهی ۳۰۰%)", text: "در این مقاله از بخش تحلیلی صرافی آی او، به بررسی یک پورتفوی ارز دیجیتال با حضور شش " , 
            res : "hidden lg:block"
         },

    ]

    return (
        <div className="2xl:w-[1536px] 2xl:h-[736px] mx-auto mt-[100px] ">
            <div className="flex flex-col md:flex md:flex-row-reverse md:justify-between 2xl:w-[1504px] 2xl:h-[84px] 2xl:items-center px-5 m-auto mt-5">
                <div className="flex flex-col text-right">
                    <span className="text-xl lg:text-[36px] font-bold"> مجله خبری تحلیلی <span className="text-xl lg:text-[36px] font-bold text-[#059669]"> صرافی آی‌او </span> </span>
                    <span className="text-[16px] text-[#6B7280] lg:text-[20px] font-semibold mt-5"> پوشش آخرین اخبار دنیای رمزارزها و تحلیل‌های روزانه و هفتگی </span>
                </div>
                <div className=" mt-4 sm:flex sm:justify-end">
                    <button className="w-full text-[#4B5563] flex flex-row-reverse justify-center items-center border-solid border-[1px] border-[E5E7EB] rounded-[8px]   sm:w-[223.641px] sm:h-[46px] py-[10px] px-[20px] text-[16.5px] font-medium hover:bg-[#F3F4F6]"> ورود به مجله صرافی <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" className="w-3.5 h-3.5 mr-2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4">
                        </path>
                    </svg></button>
                </div>
            </div>
            <div className="w-full sm:gap-3 lg:gap-0 flex 2xl:gap-1 overflow-hidden">
                {mag.map((item) => (
                    <div className={`w-full px-6 block lg:pr-0 ${item.res} sm:`}>
                        <div className=" border-solid border-[1px] rounded-[8px] border-[#E5E7EB] py-5 px-5 mt-16">
                            <div>
                                <img className=" brightness-50 rounded-[8px]" src={item.img} alt="img" />
                            </div>
                            <div className="2xl:h-[56px] 2xl:w-[307.5px] text-right mt-5">
                                <span className="text-[20px] font-bold hover:text-[#059669]">{item.title}</span>
                            </div>
                            <div className="text-right mt-3">
                                <span className="text-[#6B7280] font-semibold">{item.text}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

