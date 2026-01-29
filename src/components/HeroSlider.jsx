import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HeroSlider() {
  const images = [
    "https://lumprodblobcdn.azureedge.net/Banners/e16afcfb-fde6-4e35-9b03-dfaac91263f4_21st.jpg?w=1688&h=520&q=60&format=webp",
    "https://lumprodblobcdn.azureedge.net/Banners/14978cc1-62d0-4c16-b39b-805afb8e3ace_1fc14800-42c1-4ecc-9385-ed5bf76bb233_P1200DesktopBanner_11zon.jpg?w=1688&h=520&q=60&format=webp",
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