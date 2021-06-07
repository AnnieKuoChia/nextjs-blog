import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Navigation } from "swiper";

SwiperCore.use([Keyboard, Navigation]);

const Creations = ({ creations }) => {
  console.log("child", creations);

  const params = {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 24,
    navigation: true,
    loop: true,
    loopAdditionalSlides: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  };

  return (
    <div className="creationsSection">
        <div className="container">
            <div className="titleContainer">
                <h2 className="titleText">為你推薦的作品</h2>
                <h3 className="titleSub">Works for you</h3>
            </div>
            <Swiper {...params} className="creationSlider">
                {creations.map((creation, idx) => (
                <SwiperSlide key={idx} className="creationSlide">
                    <a href="#">
                    <img
                        className="creationImg"
                        style={{ with:"170px", height:"170px"}}
                        src={creation.media_thumb}
                    />
                    <div className="creationInfo">
                        <p className="creationName_zh">{creation.exhibition_name_zh}</p>
                        <p className="creationTitle">{creation.title}</p>
                        <p className="creationCreator">{creation.creator}</p>
                    </div>
                    </a>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  );
};

export default Creations;
