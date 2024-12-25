import React from 'react'

export default function Header() {
    return (
        <div className="w-full">
        <div className="lg:h-[454px] 2xl:flex 2xl:justify-center 2xl:h-[498px] bg-gradient-to-b from-[#ECFDF5] to-white mt-[-2px]" >
            <div className="flex flex-col  items-center lg:flex lg:flex-row-reverse lg:h-[454px] lg:items-center md:pr-[20px] md:pl-6">
                <div className=" lg:w-[992px] lg:h-[406px] flex flex-col items-end ml-auto ">
                    <div className=" pt-4 w-full md:flex md:justify-end 2xl:mt-3">
                        <div className="flex flex-col p-3 rounded-lg items-end gap-2 bg-[#065F460D] md:w-[417.234px] md:h-[36px]  md:flex md:flex-row-reverse md:p-0 md:items-center md:rounded-full">
                            <button className="mr-3 rounded-lg bg-[#059669] w-[115.562px] h-[28px] px-4 py-[6px] md:rounded-full text-[13px] font-semibold text-white flex items-center justify-center md:mr-1 "> اخرین اطلاعیه  </button>
                            <a dir="rtl" className="text-right mr-3 text-[14px] flex items-center md:mr-3 font-medium" href="#"> خرید تتر (USDT) بدون کارمزد درصرافی آی‌او!🔥 </a>
                        </div>
                    </div>
                    <div className=" flex justify-end text-right pl-12 mt-8 md:pt-0 mr-5 md:mr-1 md:text-right md:w-[550px] lg:w-[660px]  md:mt-5">
                        <span className="text-[23px] font-bold md:text-[26px] lg:text-[42px] md:font-[700] tracking-tighter">فروش و خرید ارز دیجیتال از صرافی ارز دیجیتال معتبر ایرانی  <span className="text-[22px] lg:text-[42px] md:text-[26px] font-bold  text-[#059669] 2xl:text-[42px] md:font-bold ">صرافی آی‌او</span></span>
                    </div>
                    <div dir="rtl" className=" mr-5 md:text-right ml-5 md:w-[678.5px] md:mr-1 mt-5 lg:mt-7 ">
                        <p className="text-[17px] font-medium"> <span className="text-[18px] font-bold"> صرافی ارز دیجیتال sarafi.io </span>یک پلتفرم آنلاین برای نگهداری و تجارت بیش از 400 ارز دیجیتال می‌باشد.  <span className="text-[18px] font-bold"> با صرافی رمزارز صرافی آی‌او </span> می‌توانید در کمتر از 3 دقیقه حساب کاربری خود را ایجاد و احراز هویت کرده و اقدام به فروش و خرید تتر (USDT)، بیت‌کوین (BTC)، اتریوم (ETH)، کاردانو (ADA)، شیبا (SHIB)، دوج کوین (DOGE) و صدها رمزارز دیگر بپردازید. </p>
                    </div>
                    <div className="flex px-3 flex-col h-[114px] w-full items-center md:flex md:flex-row-reverse md:items-center md:px-1 mt-5 lg:mt-5 md:mt-0 ">
                        <button className="w-full h-[50px] md:w-[154.094px] md:h-[50px] flex flex-row-reverse justify-center items-center bg-[#059669] py-3 px-5 rounded-[8px] text-white text-[16px] font-medium hover:bg-[#047857]"> <svg className="h-[20px] w-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 ml-2 -mr-1 opacity-50">
                            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                        </svg> 😆 شروع کن  </button>

                        <div className=" w-full h-[50px] mt-4 md:mt-0 lg:mt-0 md:w-[180.562px] md:h-[50px] border-solid border-[1px] border-[#D1D5DB] rounded-[8px] flex items-center justify-center md:mr-4 hover:bg-[#F3F4F6]">
                            <button className="flex items-center text-[16px] font-medium"> خرید ارز دیجیتال<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 21 20" class="w-5 h-5 ml-2 -mr-1 opacity-25"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.308 9a2.257 2.257 0 0 0 2.25-2.264 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 1 0 4.5 0C19.058 5.471 16.956 1 16.956 1H3.045S1.058 5.654 1.058 6.736A2.373 2.373 0 0 0 3.308 9Zm0 0a2.243 2.243 0 0 0 1.866-1h.767a2.242 2.242 0 0 0 3.733 0h.767a2.242 2.242 0 0 0 3.733 0h.767a2.247 2.247 0 0 0 1.867 1A2.22 2.22 0 0 0 18 8.649V19H9v-7H5v7H2V8.524c.37.301.83.469 1.308.476ZM12 12h3v3h-3v-3Z"></path></svg></button>
                        </div>
                    </div>
                </div>
                <div className="  lg:w-[420px] lg:h-[420px] lg:mt-32 lg:mr-6 xl:h-[450px] 2xl:ml-5 2xl:mt-[50px] xl:w-[450px] sm:w-[350px] sm:h-[350px]">
                    <img src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fgraphics%2Fsarafi-topbanner-illustrator.png&w=640&q=75" alt="img" />
                </div>
            </div>
        </div>
    </div>
    )
}
