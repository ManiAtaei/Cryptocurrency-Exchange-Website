// import React from 'react'

// export default function Table() {



//     return (
//         <div dir='rtl' ><div className="max-w-screen-2xl px-4 py-8 me-auto ms-auto relative">
//             <div className="block space-y-4 sm:space-y-0 sm:flex gap-4 justify-between items-center mb-8 lg:mb-16">
//                 <div>
//                     <h2 className="mb-1 text-xl leading-8 md:mb-2 lg:mb-4 md:text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
//                         لیست ارزهای دیجیتال
//                     </h2>
//                     <p className="font-normal text-gray-500 dark:text-gray-400 text-sm leading-7 md:text-base lg:text-xl">
//                         {" "}
//                         تابلو قیمت رهبران بازار ارزهای دیجیتال (رمزارز‌ها){" "}
//                     </p>
//                 </div>
//                 <div className="block sm:flex items-start justify-start md:items-end md:justify-end">
//                     <a
//                         className="flex justify-center items-center py-2.5 px-5 text-sm lg:text-base text-center text-gray-600 rounded-lg border border-gray-200 bg-white-100 hover:bg-gray-100"
//                         href="/markets"
//                     >
//                         <span className="mx-2">قیمت ارزهای دیجیتال</span>
//                         <svg
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 14 10"
//                             className="w-3.5 h-3.5 mr-1"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M13 5H1m0 0 4 4M1 5l4-4"
//                             ></path>
//                         </svg>
//                     </a>
//                 </div>
//             </div>
//             <div className="relative overflow-x-auto">
//                 <table className="w-full table-auto text-gray-500 text-sm mb-2 nakedtable">
//                     <thead className="text-xs uppercase border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 !bg-transparent !border-0 bg-red-200/3">
//                         <tr>
//                             <th className="p-3 font-normal whitespace-nowrap text-start">
//                                 نام ارز
//                             </th>
//                             <th className="p-3 font-normal whitespace-nowrap text-start">
//                                 قیمت (تومان)
//                             </th>
//                             <th className="p-3 font-normal whitespace-nowrap text-start">
//                                 قیمت جهانی (دلار)
//                             </th>
//                             <th className="p-3 font-normal whitespace-nowrap text-start">
//                                 تغییرات
//                             </th>
//                             <th className="p-3 font-normal whitespace-nowrap text-start">
//                                 نمودار تغییرات
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="بیت کوین (BTC)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBNB.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/btc"
//                                             >
//                                                 بیت کوین
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">BTC</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     6,520,588,060
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     92,695.25
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         2.07%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="بیت کوین (BTC)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         src='"/api/services/shared/rate-chart?pair=BTC_IRT&interval=_24h&ran=6578553111.6879"'
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="اتریوم (ETH)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FETH.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/eth"
//                                             >
//                                                 اتریوم
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">ETH</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     240,430,342
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     3,417.91
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         0.7%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="اتریوم (ETH)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DETH_IRT%26interval%3D_24h%26ran%3D240430342.048096&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DETH_IRT%26interval%3D_24h%26ran%3D240430342.048096&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DETH_IRT%26interval%3D_24h%26ran%3D240430342.048096&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="تتر (USDT)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 decoding="async"
//                                                 data-nimg={1}
//                                                 className="rounded-full"
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDT.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/usdt"
//                                             >
//                                                 تتر
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">USDT</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     70,358
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     -
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         0.24%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="تتر (USDT)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DUSDT_IRT%26interval%3D_24h%26ran%3D70358&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DUSDT_IRT%26interval%3D_24h%26ran%3D70358&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DUSDT_IRT%26interval%3D_24h%26ran%3D70358&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="سولانا (SOL)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 decoding="async"
//                                                 data-nimg={1}
//                                                 className="rounded-full"
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FSOL.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/sol"
//                                             >
//                                                 سولانا
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">SOL</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     16,267,381
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     231.25
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         2.86%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="سولانا (SOL)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DSOL_IRT%26interval%3D_24h%26ran%3D16267381.4649464&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DSOL_IRT%26interval%3D_24h%26ran%3D16267381.4649464&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DSOL_IRT%26interval%3D_24h%26ran%3D16267381.4649464&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="بایننس کوین (BNB)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 decoding="async"
//                                                 data-nimg={1}
//                                                 className="rounded-full"
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBNB.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/bnb"
//                                             >
//                                                 بایننس کوین
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">BNB</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     43,577,312
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     619.49
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         3.85%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="بایننس کوین (BNB)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DBNB_IRT%26interval%3D_24h%26ran%3D43577312.4194785&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DBNB_IRT%26interval%3D_24h%26ran%3D43577312.4194785&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DBNB_IRT%26interval%3D_24h%26ran%3D43577312.4194785&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="ریپل (XRP)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 decoding="async"
//                                                 data-nimg={1}
//                                                 className="rounded-full"
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FXRP.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/xrp"
//                                             >
//                                                 ریپل
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">XRP</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     96,597
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     1.37
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         5.38%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="ریپل (XRP)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DXRP_IRT%26interval%3D_24h%26ran%3D96596.8685716687&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DXRP_IRT%26interval%3D_24h%26ran%3D96596.8685716687&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DXRP_IRT%26interval%3D_24h%26ran%3D96596.8685716687&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="دوج کوین (DOGE)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 decoding="async"
//                                                 data-nimg={1}
//                                                 className="rounded-full"
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FDOGE.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/doge"
//                                             >
//                                                 دوج کوین
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">DOGE</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     27,460
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     0.3906
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         4.3%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="دوج کوین (DOGE)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DDOGE_IRT%26interval%3D_24h%26ran%3D27460.4686259148&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DDOGE_IRT%26interval%3D_24h%26ran%3D27460.4686259148&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DDOGE_IRT%26interval%3D_24h%26ran%3D27460.4686259148&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="یو اس دی کوین (USDC)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 decoding="async"
//                                                 data-nimg={1}
//                                                 className="rounded-full"
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDC.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/usdc"
//                                             >
//                                                 یو اس دی کوین
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">USDC</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     70,376
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     1.00
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         0.16%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="یو اس دی کوین (USDC)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DUSDC_IRT%26interval%3D_24h%26ran%3D70376.037267372&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DUSDC_IRT%26interval%3D_24h%26ran%3D70376.037267372&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DUSDC_IRT%26interval%3D_24h%26ran%3D70376.037267372&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="کاردانو (ADA)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 decoding="async"
//                                                 data-nimg={1}
//                                                 className="rounded-full"
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FADA.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/ada"
//                                             >
//                                                 کاردانو
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">ADA</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     67,631
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     0.9616
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-red-500 inline-flex items-center gap-1">
//                                         1.54%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="کاردانو (ADA)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DADA_IRT%26interval%3D_24h%26ran%3D67631.0594698037&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DADA_IRT%26interval%3D_24h%26ran%3D67631.0594698037&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DADA_IRT%26interval%3D_24h%26ran%3D67631.0594698037&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr className="rounded-lg transition-all border-b border-gray-100 dark:border-gray-700 !border-0">
//                             <td className="p-3">
//                                 <div>
//                                     <div className="flex items-center w-[200px]">
//                                         <div className="flex-shrink-0">
//                                             <img
//                                                 alt="آوالانچ (AVAX)"
//                                                 loading="lazy"
//                                                 width={32}
//                                                 height={32}
//                                                 decoding="async"
//                                                 data-nimg={1}
//                                                 className="rounded-full"
//                                                 src='https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FAVAX.png&w=32&q=75'
//                                                 style={{ color: "transparent" }}
//                                             />
//                                         </div>
//                                         <div className="flex-1 min-w-0 ms-2">
//                                             <a
//                                                 className="text-sm md:text-base font-bold text-gray-900 mb-1 block"
//                                                 href="coins/avax"
//                                             >
//                                                 آوالانچ
//                                             </a>
//                                             <p className="text-xs text-gray-500 truncate">AVAX</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-bold text-sm md:text-base text-gray-900 w-[200px]">
//                                     3,010,635
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="font-normal text-base text-gray-900 block w-[200px]">
//                                     42.80
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px] text-sm font-normal">
//                                     <div className="text-green-500 inline-flex items-center gap-1">
//                                         2.53%
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                             fill="black"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth={2}
//                                             className="w-3 h-3 mr-1 opacity-50"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M5 10l7-7m0 0l7 7m-7-7v18"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="p-3">
//                                 <div className="w-[150px]">
//                                     <img
//                                         alt="آوالانچ (AVAX)"
//                                         loading="lazy"
//                                         width={123}
//                                         height={43}
//                                         decoding="async"
//                                         data-nimg={1}
//                                         className="w-auto h-auto"
//                                         srcSet="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DAVAX_IRT%26interval%3D_24h%26ran%3D3010635.0982065&w=128&q=75 1x, /_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DAVAX_IRT%26interval%3D_24h%26ran%3D3010635.0982065&w=256&q=75 2x"
//                                         src="/_next/image?url=%2Fapi%2Fservices%2Fshared%2Frate-chart%3Fpair%3DAVAX_IRT%26interval%3D_24h%26ran%3D3010635.0982065&w=256&q=75"
//                                         style={{ color: "transparent" }}
//                                     />
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         </div>
//     )
// }
