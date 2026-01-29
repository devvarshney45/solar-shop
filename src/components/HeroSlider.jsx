import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HeroSlider() {
  const images = [
    "/solar1.jpg",
    "/solar2.jpg",
    "/solar3.jpg",
    "/a.jpeg",
    "/b.jpeg",
    "/c.jpeg",
    "/d.jpeg",
    "/e.jpeg",
    "/f.jpeg",
    "/g.jpeg",
    '/h.jpeg',
    "/i.jpeg",
    "/j.jpeg",
    "/k.jpeg",
    "/l.jpeg",
    "/m.jpeg",
    "/o.jpeg",
    "/p.jpeg",
    "/q.jpeg",
    "/r.jpeg"
  ];

  return (
   <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 800 }}
  loop={true}
  className="w-full overflow-hidden h-[300px] md:h-[450px]"
>
      {images.map((img,i) => (
        <SwiperSlide key={i}>
          <img src={img} className="w-full h-full object-coverblock" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}