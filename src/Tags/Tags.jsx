import React from 'react';
    

const items = [
    { href: "/#", label: "#خرید تتر بدون کارمزد" },
    { href: "/#", label: "#فروش داگز" },
    { href: "/#", label: "#خرید بیت کوین" },
    { href: "/#", label: "#جوایز صرافی" },
    { href: "/#", label: "#خرید تون فوری" },
];

export default function Tags() {
    return (
        <div dir="rtl" className="w-full px-4">
            <section className="w-full mb-10 2xl:px-[200px]">
                <div className=" mx-auto flex items-center gap-4  ">
                    <h2 className=" font-bold text-center ">
                        پرطرفدارها:
                    </h2>

                    <div
                        style={{
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                        }}
                        className="flex overflow-x-auto gap-4 scrollbar-hide">
                        {items.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex-shrink-0 py-2 px-4 text-xs md:text-sm rounded-lg bg-gray-100 hover:bg-green-600 hover:text-white transition duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
