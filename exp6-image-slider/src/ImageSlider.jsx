import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = ({
  images = [],
  autoplay = false,
  interval = 3000,
  showNavigation = true,
  transitionSpeed = 500,
}) => {
  if (!images || images.length === 0) return <p>No images to display</p>;

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={showNavigation}
        autoplay={autoplay ? { delay: interval } : false}
        speed={transitionSpeed}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
