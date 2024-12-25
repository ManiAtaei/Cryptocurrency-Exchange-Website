// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";

// // فعال‌سازی اجزای Chart.js
// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

// // داده‌ها و تنظیمات نمودار
// const generateChartData = (prices) => ({
//   labels: prices.map((_, index) => index),
//   datasets: [
//     {
//       data: prices,
//       borderColor: prices[0] < prices[prices.length - 1] ? "#34c759" : "#ff3b30", // سبز یا قرمز
//       backgroundColor: "transparent",
//       borderWidth: 2,
//       tension: 0.3, // منحنی‌تر کردن نمودار
//     },
//   ],
// });

// const TableRow = ({ name, symbol, priceUSD, priceIRR, change, chartData, icon }) => {
//   return (
//     <tr className="border-b hover:bg-gray-50 flex items-center justify-between">
//       {/* ستون نام و نماد */}
//       <td className="w-1/5 py-3 px-4 flex items-center space-x-3 gap-2">
//         <img src={icon} alt={name} className="w-8 h-8" />
//         <div className="flex flex-col">
//           <span className="font-semibold">{name}</span>
//           <span className="text-gray-400 text-sm">{symbol.toUpperCase()}</span>
//         </div>
//       </td>

//       {/* ستون قیمت تومان */}
//       <td className=" w-1/5 py-3 px-4 text-right font-medium">
//         {priceIRR.toLocaleString()} تومان
//       </td>

//       {/* ستون قیمت دلار */}
//       <td className=" w-1/5 py-3 px-4 text-right font-medium">
//         {priceUSD.toLocaleString()} $
//       </td>

//       {/* ستون تغییرات به همراه آیکون */}
//       <td
//         className={` w-1/5 py-3 px-4 text-center font-medium ${change > 0 ? "text-green-600" : "text-red-500"
//           }`}
//       >
//         {change > 0 ? "↑" : "↓"} {Math.abs(change).toFixed(2)}%
//       </td>

//       {/* ستون نمودار */}
//       <td dir="" className=" w-1/5 py-3 px-4 flex items-center justify-center">
//         <Line
//           data={generateChartData(chartData)}
//           options={{
//             responsive: true,
//             plugins: { legend: { display: false }, tooltip: { enabled: false } },
//             scales: { x: { display: false }, y: { display: false } },
//           }}
//         />
//       </td>
//     </tr>
//   );
// };

// const CryptoTable = () => {

//   const options = { method: 'GET', headers: { accept: 'application/json' } };

//   fetch('https://api.coingecko.com/api/v3/coins/list?x_cg_demo_api_key=CG-RnVRsnftayuneBj1xXkJSGLL	', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));


//   const data = [
//     {
//       name: "بیت کوین",
//       symbol: "BTC",
//       priceUSD: 35432,
//       priceIRR: 6578553112,
//       change: -0.4,
//       chartData: [1, 5, 8, 4, 1],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBTC.png&w=32&q=75",
//     },
//     {
//       name: "اتریوم",
//       symbol: "ETH",
//       priceUSD: 2400,
//       priceIRR: 240758272,
//       change: 0.84,
//       chartData: [2200, 2300, 2400, 2450, 2400],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FETH.png&w=32&q=75",
//     },
//     {
//       name: "ریپل",
//       symbol: "XRP",
//       priceUSD: 1.42,
//       priceIRR: 100724,
//       change: 1.6,
//       chartData: [1.3, 1.35, 1.4, 1.42],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FXRP.png&w=32&q=75",
//     },
//     {
//       name: "دوج کوین",
//       symbol: "DOGE",
//       priceUSD: 0.07,
//       priceIRR: 2751,
//       change: 0.99,
//       chartData: [0.06, 0.065, 0.07, 0.072],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FDOGE.png&w=32&q=75",
//     },
//     {
//       name: "کاردانو",
//       symbol: "ADA",
//       priceUSD: 0.42,
//       priceIRR: 68358,
//       change: -0.6,
//       chartData: [0.4, 0.41, 0.42, 0.4],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FADA.png&w=32&q=75",
//     },
//     {
//       name: "بایننس کوین",
//       symbol: "BNB",
//       priceUSD: 320,
//       priceIRR: 12601642,
//       change: -1.18,
//       chartData: [300, 310, 320, 31],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FBNB.png&w=32&q=75",
//     },
//     {
//       name: "سولانا",
//       symbol: "SOL",
//       priceUSD: 30,
//       priceIRR: 1411409,
//       change: -1.75,
//       chartData: [28, 29, 30, 18],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FSOL.png&w=32&q=75",
//     },
//     {
//       name: "تتر",
//       symbol: "USDT",
//       priceUSD: 1,
//       priceIRR: 70564,
//       change: 0,
//       chartData: [1, 1, 1, 1],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FUSDT.png&w=32&q=75",
//     },
//     {
//       name: "آوالانچ",
//       symbol: "AVAX",
//       priceUSD: 13.5,
//       priceIRR: 5048198,
//       change: 5.99,
//       chartData: [12, 12.5, 13, 13.5],
//       icon: "https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Ficons%2Fcoins%2FAVAX.png&w=32&q=75",
//     },

//   ];

//   return (
//     <div dir="rtl" className="p-6 mx-auto  flex overflow-x-auto lg:px-[200px] mt-12">
//       <table className="table-auto w-full text-right border-collapse bg-white shadow-md rounded-lg overflow-hidden ">
//         <thead className="flex  items-center justify-between w-full ">
//           <tr className="w-full flex items-center justify-center ">
//             <th className="w-1/5 py-3 px-4 text-right text-base font-normal">نام ارز</th>
//             <th className="w-1/5 py-3 px-4 text-right text-base font-normal">قیمت (تومان)</th>
//             <th className="w-1/5 py-3 px-4 text-right text-base font-normal">قیمت جهانی (دلار)</th>
//             <th className="w-1/5 py-3 px-4 text-center text-base font-normal">تغییرات</th>
//             <th className="w-1/5 py-3 px-4 text-center text-base font-normal">نمودار</th>
//           </tr>
//         </thead>
//         <tbody className="w-full">
//           {data.map((item, index) => (
//             <TableRow key={index} {...item} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CryptoTable;


import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";

// فعال‌سازی اجزای Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

// API اطلاعات
const API_URL = "http://api.coinlayer.com/api/live";
const API_KEY = "debfcfe8cf462e95ce9bc1a8f077588b";

// ارزهایی که می‌خواهیم نمایش دهیم
const selectedCurrencies = [
  "BTC", "ETH", "XRP", "DOGE", "ADA", "BNB", "SOL", "USDT", "AVAX"
];

const generateChartData = (prices) => ({
  labels: prices.map((_, index) => index),
  datasets: [
    {
      data: prices,
      borderColor: prices[0] < prices[prices.length - 1] ? "#34c759" : "#ff3b30", // سبز یا قرمز
      backgroundColor: "transparent",
      borderWidth: 2,
      tension: 0.3, // منحنی‌تر کردن نمودار
    },
  ],
});

const TableRow = ({ name, symbol, priceUSD, priceIRR, change, chartData, icon }) => {
  return (
    <tr className="border-b hover:bg-gray-50 flex items-center justify-between">
      {/* ستون نام و نماد */}
      <td className="w-1/5 py-3 px-4 flex items-center space-x-3 gap-2">
        <img src={icon} alt={name} className="w-8 h-8" />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-gray-400 text-sm">{symbol.toUpperCase()}</span>
        </div>
      </td>

      {/* ستون قیمت تومان */}
      <td className=" w-1/5 py-3 px-4 text-right font-medium">
        {priceIRR.toLocaleString()} تومان
      </td>

      {/* ستون قیمت دلار */}
      <td className=" w-1/5 py-3 px-4 text-right font-medium">
        {priceUSD.toLocaleString()} $
      </td>

      {/* ستون تغییرات به همراه آیکون */}
      <td
        className={` w-1/5 py-3 px-4 text-center font-medium ${change > 0 ? "text-green-600" : "text-red-500"}`}
      >
        {change > 0 ? "↑" : "↓"} {Math.abs(change).toFixed(2)}%
      </td>

      {/* ستون نمودار */}
      <td className=" w-1/5 py-3 px-4 flex items-center justify-center">
        <Line
          data={generateChartData(chartData)}
          options={{
            responsive: true,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } },
          }}
        />
      </td>
    </tr>
  );
};

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}?access_key=${API_KEY}&symbols=${selectedCurrencies.join(",")}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedData = selectedCurrencies.map((currency) => ({
          name: currency,
          symbol: currency,
          priceUSD: data.rates[currency],
          priceIRR: data.rates[currency] * 72000, // برای مثال تبدیل به تومان (برای مثال 1 دلار = 40,000 تومان)
          change: Math.random() * 2 - 1, // برای مثال تغییرات به صورت تصادفی
          chartData: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100], // داده‌های تصادفی برای نمودار
          icon: `https://www.coingecko.com/svgs/coins/32x32/${currency.toLowerCase()}.png`, // برای مثال آیکون
        }));
        setCryptoData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div dir="rtl" className="p-6 mx-auto flex overflow-x-auto lg:px-[200px] mt-12">
      <table className="table-auto w-full text-right border-collapse bg-white shadow-md rounded-lg overflow-hidden ">
        <thead className="flex items-center justify-between w-full ">
          <tr className="w-full flex items-center justify-center ">
            <th className="w-1/5 py-3 px-4 text-right text-base font-normal">نام ارز</th>
            <th className="w-1/5 py-3 px-4 text-right text-base font-normal">قیمت (تومان)</th>
            <th className="w-1/5 py-3 px-4 text-right text-base font-normal">قیمت جهانی (دلار)</th>
            <th className="w-1/5 py-3 px-4 text-center text-base font-normal">تغییرات</th>
            <th className="w-1/5 py-3 px-4 text-center text-base font-normal">نمودار</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {cryptoData.map((item, index) => (
            <TableRow key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
