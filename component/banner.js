// import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Navigation, Pagination } from 'swiper';
// import styles from './SwiperBanner.module.scss';

SwiperCore.use([Keyboard, Navigation, Pagination]);

const Banner = ({banners}) => {
    console.log("child", banners);
    // const [isMounted, setIsMounted] = useState(false);
    // useEffect(() => setIsMounted(true), []);
    // const params = {
    //     slidesPerView: 'auto',
    //     centeredSlides: true,
    //     spaceBetween: 30,
    //     navigation: true,
    //     loop: true,
    //     loopAdditionalSlides: 1,
    //     pagination: {
    //       clickable: true,
    //     },
    //     keyboard: {
    //       enabled: true,
    //       onlyInViewport: true,
    //     },
    //   };
    return (
        <div className="bannerSection">
            <Swiper>
                {banners.map((banner, idx) => (
                    <SwiperSlide key={idx}>
                        <a key={idx} href="#">
                            <img key={idx} className="bannerImg" src={banner.banner}/>
                            <div key={idx} className="bannerInfo">
                                <p key={idx} className="bannerName_zh">{banner.name_zh}</p>
                                <p key={idx} className="bannerName_en">{banner.name_en}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Banner;