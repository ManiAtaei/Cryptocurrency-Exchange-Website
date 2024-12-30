import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataCart() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    const categories = [
        { id: 1,  name: "برترین جستجوها", icon: "https://i.postimg.cc/X7hc3GLT/Screenshot-2024-11-18-124243.png" },
        { id: 2,  name: "کوین های جدید", icon: "https://i.postimg.cc/X7hc3GLT/Screenshot-2024-11-18-124243.png" },
        { id: 3,  name: "بیشترین رشد", icon: "https://i.postimg.cc/X7hc3GLT/Screenshot-2024-11-18-124243.png" },
        { id: 4,  name: "بزرگان بازار", icon: "https://i.postimg.cc/X7hc3GLT/Screenshot-2024-11-18-124243.png" },
    ];

    useEffect(() => {
        const fetchCoins = async () => { 
            try {
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets',
                    {
                        params: {
                            vs_currency: 'usd',
                            order: 'market_cap_desc',
                            per_page: 3,
                            page: 1,
                           
                        },
                    }
                );
                setCoins(response.data);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    if (loading) {
        return <div>در حال بارگذاری...</div>;
    }

    return (
        <div className="2xl:max-w-[1540px] 2xl:mx-auto">
            <div className="px-5 sm:gap-7 sm:justify-center sm:flex 2xl:flex 2xl:gap-[22px] 2xl:mr-[-15px] 2xl:items-center py-4 pb-8 justify-between">
                {categories.map((category) => (
                    <div key={category.id} className="block sm:w-[344.5px] md:w-[454.5px] md:h-[237px] 2xl:h-[237px] 2xl:w-[349.5px] border-solid border-[1px] border-[#E5E7EB] rounded-[8px]">
                        <div className="flex justify-between items-center flex-row-reverse border-solid border-b-[1px] border-[#E5E7EB] px-4 py-4 h-[64px]">
                            <span className="text-[17px] font-semibold">{category.name}</span>
                            <img className="h-7 w-7" src={category.icon} alt="category icon" />
                        </div>
                        {coins.map((coin) => (
                            <div key={coin.id} className="flex flex-row-reverse justify-between items-center border-solid border-b-[1px] border-[#F3F4F6] px-4 py-2 h-[58px]">
                                <div className="flex flex-row-reverse items-center">
                                    <img className="h-[24px] w-[24px]" src={coin.image} alt={coin.name} />
                                    <div className="flex flex-col text-right h-[40px] mr-2">
                                        <span className="text-[15px] font-bold">{coin.name}</span>
                                        <span className="text-[#6B7280] text-[12px] font-medium">{coin.symbol.toUpperCase()}</span>
                                    </div>
                                </div>
                                <div className={`flex flex-row-reverse items-center w-[55px] h-[25px] mr-1 ${coin.price_change_percentage_24h > 0 ? 'text-[#0E9F6E]' : 'text-[#F05252]'}`}>
                                    <span className="text-[14px]">{coin.price_change_percentage_24h.toFixed(2)}%</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="black" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-3 h-3 mr-1 text-inherit opacity-50">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={coin.price_change_percentage_24h > 0 ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'} />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
