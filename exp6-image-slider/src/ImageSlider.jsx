import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ImageSlider = ({ images, autoplay = true, slidesPerView = 1, loop = true }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={autoplay ? { delay: 3000 } : false}
      loop={loop}
      slidesPerView={slidesPerView}
      className="w-full max-w-3xl"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
