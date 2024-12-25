import React, { useState } from 'react';

export default function Navbar() {
    const [togel, setTogel] = useState(false);

    const toggleMenu = () => {
        setTogel((prev) => !prev);
    };

    return (
        <>
            {togel && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                    onClick={() => setTogel(false)}
                ></div>
            )}

            <div
                className={`fixed w-full top-0 right-0 z-50 bg-[#F1FeF8] border-b-[1px] border-[#E5E7E8] transition-opacity `}
            >
                <div className="h-[70px] pl-6 pr-6 flex flex-row-reverse xl:flex xl:justify-between justify-between items-center">
                    <div>
                        <img
                            className="h-[36.0469px] w-[120px]"
                            src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbrand%2Fsrf-logo.svg&w=128&q=75"
                            alt="logo"
                        />
                    </div>

                    <div className="hidden xl:block 2xl:flex 2xl:justify-center xl:w-[860px]">
                        <ul className="flex gap-5 flex-row-reverse text-[17px] font-[500] text-[#111827]">
                            <li className="hover:text-[#059669] cursor-pointer">خرید ارز دیجیتال</li>
                            <li className="hover:text-[#059669] cursor-pointer">قیمت ارزهای دیجیتال</li>
                            <li className="hover:text-[#059669] cursor-pointer">اپلیکیشن صرافی</li>
                            <li className="hover:text-[#059669] cursor-pointer">ماشین حساب ارز دیجیتال</li>
                            <li className="hover:text-[#059669] cursor-pointer">مجله صرافی</li>
                            <li className="hover:text-[#059669] cursor-pointer">تماس با ما</li>
                        </ul>
                    </div>

                    <div className="xl:flex xl:flex-row-reverse hidden">
                        <div className="flex items-center">
                            <button className="text-sm font-medium text-gray-900 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 px-4">
                                ورود
                            </button>
                        </div>
                        <div>
                            <button className="text-white text-sm bg-[#059669] hover:bg-[#047857] rounded-lg px-4">ثبت نام</button>
                        </div>
                    </div>

                    <div className="xl:hidden">
                        <button onClick={toggleMenu} className="block h-[38px] w-[38px] border-[1px] rounded-[8px] bg-white hover:bg-gray-100 border-solid border-[#D1D5D8] p-2">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-screen w-[320px] bg-white z-50 transition-transform ${
                    togel ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col items-start w-full h-full">
                    <div className="flex items-center justify-between w-full p-4 border-b">
                        <button onClick={toggleMenu} className="bg-white border-[1px] border-[#D1D5D8] rounded-[8px] p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="w-[120px] h-[36px]">
                            <img
                                src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbrand%2Fsrf-logo.svg&w=128&q=75"
                                alt="logo"
                            />
                        </div>
                    </div>

                    <div className="w-full px-4 py-1 flex items-center justify-between gap-2 mt-4">
                        <button className="w-full border rounded-xl py-2 bg-green-600 text-white">ثبت نام</button>
                        <button className="w-full border rounded-xl py-2">ورود</button>
                    </div>

                    <div className="w-full mt-8 px-8">
                        <ul className="w-full flex flex-col gap-4 items-end text-black font-bold text-lg">
                            <li><a href="">خرید ارز دیجیتال</a></li>
                            <li><a href="">قیمت ارزهای دیجیتال</a></li>
                            <li><a href="">اپلیکیشن صرافی</a></li>
                            <li><a href="">ماشین حساب ارز دیجیتال</a></li>
                            <li><a href="">مجله صرافی</a></li>
                            <li><a href="">تماس با ما</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
