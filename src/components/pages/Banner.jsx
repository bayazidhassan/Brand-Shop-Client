import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

import './Banner.css'


const Banner = () => {

    const [currentImage, setCurrentImage] = useState(null);

    const [swiper, setSwiper] = useState(null);


    const images = [
        {
            name: 'Galaxy Z Fold4',
            image: 'https://i.ibb.co/p36xHPS/Samsung-add.png'
        },
        {
            name: 'iPhone 15 Pro Max',
            image: 'https://i.ibb.co/xJv8z78/Iphone-add.jpg',
        },
        {
            name: 'SONY BRAVIA',
            image: 'https://i.ibb.co/CshH904/Sony-add.jpg',
        },
        {
            name: 'Google Home',
            image: 'https://i.ibb.co/GRsHzN8/Google-add.png'
        },
        {
            name: '12th Gen Intel Core',
            image: 'https://i.ibb.co/28sMhH3/intel-add.jpg'
        },
        {
            name: 'Microsoft',
            image: 'https://i.ibb.co/fScy7tK/Microsoft-add.png'
        },

    ];


    useEffect(() => {
        setCurrentImage(images[0].image);
    }, []);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setCurrentImage(images[currentIndex].image);
    };

    const handleSlideClick = (index) => {
        if (swiper) {
            swiper.slideTo(index);
        }
    };


    return (
        <div className='relative mt-6'>
            <img src={currentImage} alt="Background Image" className="w-full h-[450px] md:h-[550px] object-cover" />
            <div className="absolute inset-0 bg-white opacity-60 h-[450px] md:h-[550px]"></div>
            <div className='absolute inset-0 flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className='w-2/5 text-center'>
                    <button className='text-xl font-bold bg-[#5EA3CA] py-2 px-4 rounded-md'>Trending Brands</button>
                </div>
                <div className='w-3/5'>
                    <Swiper
                        onSlideChange={handleSlideChange}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        // loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
                                <img src={image.image} alt={`Slide ${index + 1}`} />
                                <h2 className='text-black text-lg font-medium text-center'>{image.name}</h2>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;