import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HeroSlider() {
  const images = [
    "/solar1.jpg",
    "/solar2.jpg",
    "/solar3.jpg"
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="h-[300px] md:h-[450px]"
    >
      {images.map((img,i) => (
        <SwiperSlide key={i}>
          <img src={img} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}