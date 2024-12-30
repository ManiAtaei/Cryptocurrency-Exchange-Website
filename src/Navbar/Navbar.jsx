import React, { useState } from "react";

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
                className={`fixed w-full top-0 right-0 z-50 bg-[#F1FeF8]/70 border-b-[1px] border-[#E5E7E8] transition-opacity backdrop-blur-md`}
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
                            <li className=" cursor-pointer group relative ">

                                <div className="hover:text-[#059669] flex items-center flex-row-reverse gap-1 ">
                                    خرید ارز دیجیتال
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>


                                <div
                                    className="bg-white hidden z-10 divide-y divide-gray-100 focus:outline-none w-[510.26px] p-0 rounded-lg border shadow-lg group-hover:block py-4"
                                    style={{
                                        position: "absolute",
                                        left: -300,
                                        top: 27,

                                    }}
                                    tabIndex={-1}
                                >
                                    <div className="flex flex-row-reverse">
                                        <div
                                            style={{
                                                msOverflowStyle: 'none',
                                                scrollbarWidth: 'none',
                                            }}
                                            className="p-2 text-gray-900 bg-white lg:rounded-lg lg:col-span-2 overflow-y-scroll max-h-[425px] relative">
                                            <ul className="space-y-2 flex flex-col f ">
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/usdt"
                                                    >
                                                        <img
                                                            alt="خرید تتر"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDT.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDT.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDT.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید تتر
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Tether US
                                                                <span className="text-xs ml-1 text-gray-400">( USDT )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/btc"
                                                    >
                                                        <img
                                                            alt="خرید بیت کوین"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBTC.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBTC.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBTC.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید بیت کوین
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Bitcoin
                                                                <span className="text-xs ml-1 text-gray-400">( BTC )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/eth"
                                                    >
                                                        <img
                                                            alt="خرید اتریوم"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FETH.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FETH.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FETH.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید اتریوم
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Ethereum
                                                                <span className="text-xs ml-1 text-gray-400">( ETH )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/xrp"
                                                    >
                                                        <img
                                                            alt="خرید ریپل"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FXRP.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FXRP.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FXRP.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید ریپل
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Ripple
                                                                <span className="text-xs ml-1 text-gray-400">( XRP )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/bnb"
                                                    >
                                                        <img
                                                            alt="خرید بایننس کوین"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBNB.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBNB.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBNB.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید بایننس کوین
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}BNB
                                                                <span className="text-xs ml-1 text-gray-400">( BNB )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/sol"
                                                    >
                                                        <img
                                                            alt="خرید سولانا"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FSOL.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FSOL.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FSOL.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید سولانا
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Solana
                                                                <span className="text-xs ml-1 text-gray-400">( SOL )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/doge"
                                                    >
                                                        <img
                                                            alt="خرید دوج کوین"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FDOGE.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FDOGE.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FDOGE.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید دوج کوین
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Dogecoin
                                                                <span className="text-xs ml-1 text-gray-400">( DOGE )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/usdc"
                                                    >
                                                        <img
                                                            alt="خرید یو اس دی کوین"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDC.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDC.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDC.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید یو اس دی کوین
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}USDC
                                                                <span className="text-xs ml-1 text-gray-400">( USDC )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/ada"
                                                    >
                                                        <img
                                                            alt="خرید کاردانو"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FADA.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FADA.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FADA.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید کاردانو
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Cardano
                                                                <span className="text-xs ml-1 text-gray-400">( ADA )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/trx"
                                                    >
                                                        <img
                                                            alt="خرید ترون"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FTRX.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FTRX.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FTRX.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید ترون
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}TRON
                                                                <span className="text-xs ml-1 text-gray-400">( TRX )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/avax"
                                                    >
                                                        <img
                                                            alt="خرید آوالانچ"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FAVAX.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FAVAX.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FAVAX.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید آوالانچ
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Avalanche
                                                                <span className="text-xs ml-1 text-gray-400">( AVAX )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/link"
                                                    >
                                                        <img
                                                            alt="خرید چین لینک"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FLINK.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FLINK.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FLINK.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید چین لینک
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Chainlink
                                                                <span className="text-xs ml-1 text-gray-400">( LINK )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-selected="false"
                                                        className="flex flex-row-reverse justify-center w-f items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                                                        href="/coins/ton"
                                                    >
                                                        <img
                                                            alt="خرید تون کوین"
                                                            loading="lazy"
                                                            width={32}
                                                            height={32}
                                                            decoding="async"
                                                            data-nimg={1}
                                                            className="ml-2 rounded-full"
                                                            style={{ color: "transparent" }}
                                                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FTON.png&w=32&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FTON.png&w=64&q=75 2x"
                                                            src="/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FTON.png&w=64&q=75"
                                                        />
                                                        <div className="align-content-center items-center">
                                                            <div className="font-semibold text-base mb-2 block">
                                                                فروش و خرید تون کوین
                                                            </div>
                                                            <div className="text-xs text-gray-500 sansserif font-medium">
                                                                <span>Buy and Sell</span> {/* */}Toncoin
                                                                <span className="text-xs ml-1 text-gray-400">( TON )</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="py-5 px-5 bg-gray-100 rounded-l-lg border-r border-gray-100 lg:col-span-1 flex flex-col">
                                            <span className="block mb-4 text-2xs text-gray-500 whitespace-nowrap">
                                                دسته بندی ارزهای دیجیتال
                                            </span>
                                            <ul className="space-y-4 text-xs text-gray-900 flex flex-col items-end">
                                                <li>
                                                    <button

                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        نمایش همه
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        پلتفرم‌ها <span className="mr-0.5" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        توکن‌ها <span className="mr-0.5" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        استیبل کوین‌ها <span className="mr-0.5">🔥</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        میم کوین‌ها <span className="mr-0.5" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        دی فای <span className="mr-0.5" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        هوش مصنوعی <span className="mr-0.5" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        گیم فای <span className="mr-0.5" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        پرایوسی کوین‌ها <span className="mr-0.5" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="دسته بندی ارزهای دیجیتال"
                                                        data-active="false"
                                                        className=" hover:text-primary-600 data-[active=true]:text-primary-600"
                                                    >
                                                        دیگر <span className="mr-0.5" />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>



                            </li>
                            <li className="hover:text-[#059669] cursor-pointer">قیمت ارزهای دیجیتال </li>
                            <li className="hover:text-[#059669] cursor-pointer">اپلیکیشن صرافی</li>
                            <li className="hover:text-[#059669] cursor-pointer">ماشین حساب ارز دیجیتال</li>
                            <li className=" cursor-pointer flex items-center group">
                                <div className="hover:text-[#059669] flex  flex-row-reverse gap-1 items-center">
                                    مجله صرافی
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className=" hidden group-hover:flex transition ease-in-out delay-150 absolute top-12">
                                    <ul className=" bg-white w-[282px] p-2 flex flex-col  items-center gap-2 
                                    ">

                                        <li className="bg-[#f3f4f6] rounded-md hover:shadow-md">
                                            <div className="flex flex-row-reverse items-center justify-center gap-4 p-2">
                                                <div>
                                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-6 h-6 ml-2 text-gray-300">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <p className="text-base">اخبار ارز دیجیتال</p>
                                                    <p className="text-xs">پوشش لحظه‌ای جدیدترین اخبار رمزارزها</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="bg-[#f3f4f6] rounded-md hover:shadow-md">
                                            <div className="flex flex-row-reverse items-center justify-center gap-4 p-2">
                                                <div>
                                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-6 h-6 ml-2 text-gray-300">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <p className="text-base">اخبار ارز دیجیتال</p>
                                                    <p className="text-xs">پوشش لحظه‌ای جدیدترین اخبار رمزارزها</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="bg-[#f3f4f6] rounded-md hover:shadow-md">
                                            <div className="flex flex-row-reverse items-center justify-center gap-4 p-2">
                                                <div>
                                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-6 h-6 ml-2 text-gray-300">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <p className="text-base">اخبار ارز دیجیتال</p>
                                                    <p className="text-xs">پوشش لحظه‌ای جدیدترین اخبار رمزارزها</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="bg-[#f3f4f6] rounded-md hover:shadow-md">
                                            <div className="flex flex-row-reverse items-center justify-center gap-4 p-2">
                                                <div>
                                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-6 h-6 ml-2 text-gray-300">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <p className="text-base">اخبار ارز دیجیتال</p>
                                                    <p className="text-xs">پوشش لحظه‌ای جدیدترین اخبار رمزارزها</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li className="hover:text-[#059669] cursor-pointer">تماس با ما</li>
                        </ul>
                    </div>

                    <div className="xl:flex xl:flex-row-reverse hidden">
                        <div className="flex items-center">
                            <button className="text-sm sm:text-base font-medium text-gray-900 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 focus:ring-gray-100 px-4 lg:px-5 lg:py-1.5 mr-2 xl:block">
                                ورود
                            </button>
                        </div>
                        <div>
                            <button className="text-white text-sm sm:text-base bg-[#059669] hover:bg-[#047857] focus:ring-primary-300 font-medium rounded-lg px-4 py-1.5 lg:px-5 lg:py-1.5 mr-2 focus:outline-none xl:h-[36px] xl:w-[90.4531px] xl:block">
                                ثبت نام
                            </button>
                        </div>
                    </div>

                    <div className="xl:hidden">
                        <button
                            onClick={toggleMenu}
                            className="block h-[38px] w-[38px] border-[1px] rounded-[8px] bg-white hover:bg-gray-100 border-solid border-[#D1D5D8] p-2 flex items-center justify-center"
                        >
                            {togel ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
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
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-screen w-[320px] bg-white z-50 transition-transform ${togel ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-start w-full h-full">
                    <div className="flex items-center justify-between w-full p-4 border-b">
                        <button
                            onClick={toggleMenu}
                            className="bg-white border-[1px] border-[#D1D5D8] rounded-[8px] p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
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
                        <button className="w-full border rounded-xl py-2 bg-green-600 text-white">
                            ثبت نام
                        </button>
                        <button className="w-full border rounded-xl py-2">ورود</button>
                    </div>

                    <div className="w-full mt-8 px-8">
                        <ul className="w-full flex flex-col gap-4 items-end text-black font-bold text-lg">
                            <li>
                                <a href="#">خرید ارز دیجیتال</a>
                            </li>
                            <li>
                                <a href="#">قیمت ارزهای دیجیتال</a>
                            </li>
                            <li>
                                <a href="#">اپلیکیشن صرافی</a>
                            </li>
                            <li>
                                <a href="#">ماشین حساب ارز دیجیتال</a>
                            </li>
                            <li>
                                <a href="#">مجله صرافی</a>
                            </li>
                            <li>
                                <a href="#">تماس با ما</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
