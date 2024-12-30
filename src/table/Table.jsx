import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import axios from "axios";

export default function Table() {
    const [coins, setCoins] = useState([]);
    const [coinss, setCoinss] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const socket = new WebSocket("wss://api.gateio.ws/ws/v4/");

        socket.onopen = () => {
            console.log("WebSocket connection established");
            const subscribeMessage = JSON.stringify({
                time: Math.floor(Date.now() / 1000),
                channel: "spot.tickers",
                event: "subscribe",
                payload: [
                    "BTC_USDT",
                    "ETH_USDT",
                    "ADA_USDT",
                    "BNB_USDT",
                    "XRP_USDT",
                    "SOL_USDT",
                    "DOT_USDT",
                    "DOGE_USDT",
                    "SHIB_USDT",
                    "LTC_USDT",
                ],
            });
            socket.send(subscribeMessage);
        };

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                if (data.event === "update" && typeof data.result === "object") {
                    const coin = {
                        id: data.result.currency_pair,
                        name: data.result.currency_pair.split("_")[0],
                        symbol: data.result.currency_pair.split("_")[0].toLowerCase(),
                        current_price: parseFloat(data.result.last),
                        price_change_percentage_24h: parseFloat(data.result.change_percentage),
                        image: `https://cryptoicons.org/api/icon/${data.result.currency_pair
                            .split("_")[0]
                            .toLowerCase()}/32`,
                    };

                    setCoins((prevCoins) => {
                        const updatedCoins = [...prevCoins];
                        const existingIndex = updatedCoins.findIndex((c) => c.id === coin.id);

                        if (existingIndex >= 0) {
                            updatedCoins[existingIndex] = coin;
                        } else {
                            updatedCoins.push(coin);
                        }

                        return updatedCoins.sort((a, b) => b.current_price - a.current_price);
                    });

                    setLoading(false);
                } else {
                    console.warn("Unexpected data structure:", data);
                }
            } catch (error) {
                console.error("Error parsing WebSocket message:", error);
            }
        };

        socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        socket.onclose = () => {
            console.log("WebSocket connection closed");
        };

        return () => {
            socket.close();
        };
    }, []);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get(
                    "https://api.coingecko.com/api/v3/coins/markets",
                    {
                        params: {
                            vs_currency: "usd",
                            order: "market_cap_desc",
                            per_page: 100,
                            page: 1,
                            sparkline: true,
                        },
                    }
                );
                console.log("API Response:", response.data);
                setCoinss(response.data);
            } catch (error) {
                console.error("Error fetching coin data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    if (loading) {
        return <div className="text-center">در حال بارگذاری...</div>;
    }

    const coinssMap = Object.fromEntries(coinss.map((c) => [c.symbol, c]));

    return (
        <div className="w-full" dir="rtl">
            <div className="w-full py-8 px-4 sm:px-8 lg:px-16 xl:px-[200px]">
                <div className="block space-y-4 sm:space-y-0 sm:flex gap-4 justify-between items-center mb-8 lg:mb-16">
                    <div>
                        <h2 className="mb-1 text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
                            لیست ارزهای دیجیتال
                        </h2>
                        <p className="font-normal text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-xl">
                            تابلو قیمت رهبران بازار ارزهای دیجیتال (رمزارز‌ها)
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                    }}
                    className="w-full relative overflow-x-auto overflow-y-auto"
                >
                    <table className="w-full table-auto text-gray-500 text-xs sm:text-sm md:text-base">
                        <thead className="text-sm uppercase border-b border-gray-200 dark:bg-white dark:border-gray-700 dark:text-black font-bold bg-red-200/30 shadow-md">
                            <tr>
                                <th className="p-2 sm:p-3 font-normal whitespace-nowrap text-start">
                                    نام ارز
                                </th>
                                <th className="p-2 sm:p-3 font-normal whitespace-nowrap text-start">
                                    قیمت (دلار)
                                </th>
                                <th className="p-2 sm:p-3 font-normal whitespace-nowrap text-start">
                                    قیمت (تومان)
                                </th>
                                <th className="p-2 sm:p-3 font-normal whitespace-nowrap text-start">
                                    تغییرات
                                </th>
                                <th className="p-2 sm:p-3 font-normal whitespace-nowrap text-start flex justify-center">
                                    نمودار تغییرات
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => {
                                const apiCoin = coinssMap[coin.symbol];

                                return (
                                    <tr
                                        key={coin.id}
                                        className="border-gray-100 dark:border-gray-700"
                                    >
                                        <td className="p-2 sm:p-3">
                                            <div className="flex gap-4 items-center">
                                                <img
                                                    alt={coin.name}
                                                    loading="eager"
                                                    width={32}
                                                    height={32}
                                                    src={coin.image}
                                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                                />
                                                <div className="ml-2">
                                                    <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
                                                        {coin.name}
                                                    </span>
                                                    <p className="text-xs text-gray-500">
                                                        {coin.symbol.toUpperCase()}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 sm:p-3 font-bold text-gray-900">
                                            ${coin.current_price.toLocaleString()}
                                        </td>
                                        <td className="px-8 sm:p-3 font-bold text-gray-900">
                                            {(coin.current_price * 80000).toLocaleString()}
                                        </td>
                                        <td className="px-8 sm:p-3">
                                            <span
                                                className={`text-xs sm:text-sm ${
                                                    coin.price_change_percentage_24h > 0
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                }`}
                                            >
                                                {coin.price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        </td>
                                        <td className="px-8 sm:p-3 mr flex items-center justify-center">
                                            {apiCoin && (
                                                <div className="w-[200px] h-[80px] sm:h-[100px]">
                                                    <Line
                                                        data={{
                                                            labels: apiCoin.sparkline_in_7d.price.map(
                                                                (_, index) => index
                                                            ),
                                                            datasets: [
                                                                {
                                                                    label: "تغییرات قیمت",
                                                                    data: apiCoin.sparkline_in_7d.price,
                                                                    borderColor: `${
                                                                        coin.price_change_percentage_24h > 0
                                                                            ? "rgb(70,180,88)"
                                                                            : "rgb(240,82,82)"
                                                                    }`,
                                                                    backgroundColor:
                                                                        "rgba(75, 192, 192, 0.2)",
                                                                    pointRadius: 0,
                                                                    borderWidth: 1.5,
                                                                },
                                                            ],
                                                        }}
                                                        options={{
                                                            plugins: { legend: { display: false } },
                                                            scales: {
                                                                x: { display: false },
                                                                y: { display: false },
                                                            },
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
