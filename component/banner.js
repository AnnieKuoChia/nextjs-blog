import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Navigation, Pagination } from "swiper";

SwiperCore.use([Keyboard, Navigation, Pagination]);

const Banner = ({ banners }) => {
  console.log("child", banners);

  const params = {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    navigation: true,
    loop: true,
    loopAdditionalSlides: 1,
    pagination: {
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  };

  return (
    <div className="bannerSection">
      <Swiper {...params}>
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx} className="bannerSlide">
            <a href="#">
              <img
                className="bannerImg"
                style={{ width: "100%" }}
                src={banner.banner}
              />
              <div className="bannerInfo">
                <p className="bannerName_zh">{banner.name_zh}</p>
                <p className="bannerName_en">{banner.name_en}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
