// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <div className='mt-9 2xl:px-[30px]'>
                <Swiper
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        252: { slidesPerView: 1 },
                        417: {
                            slidesPerView: 1.3,
                        },
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },

                        610: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },

                        622: {
                            slidesPerView: 2,
                        },

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1441: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                >
                    <div className="flex rounded-xl flex-row-reverse justify-center sm:gap-7 p-2 2xl:h-[216.719px] 2xl:w-[1536px] 2xl:gap-[31px]">

                        <SwiperSlide><img className=" rounded-xl" src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Finstagramlink-srf.webp&w=640&q=75" alt="img  " /></SwiperSlide>

                        <SwiperSlide><img className=" rounded-xl" src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Fhowtobuysell-srf.webp&w=640&q=75" alt="img  " /></SwiperSlide>


                        <SwiperSlide><img className=" rounded-xl" src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Faccountsecurity-srf.webp&w=640&q=75" alt="img  " /></SwiperSlide>


                        <SwiperSlide><img className=" rounded-xl" src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Fhowtoregister-srf.webp&w=640&q=75" alt="img  " /></SwiperSlide>

                        <SwiperSlide><img className=" rounded-xl" src="https://sarafi.io/_next/image?url=https%3A%2F%2Fcdn.sarafi.io%2Fbanners%2Ftelegramlink-srf.webp&w=640&q=75" alt="img  " /></SwiperSlide>




                    </div>
                </Swiper>
            </div>
        </>
    );
}