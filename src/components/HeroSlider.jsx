import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HeroSlider() {
  const images = [
    "https://lumprodblobcdn.azureedge.net/Banners/e16afcfb-fde6-4e35-9b03-dfaac91263f4_21st.jpg?w=1688&h=520&q=60&format=webp",
    "https://lumprodblobcdn.azureedge.net/Banners/14978cc1-62d0-4c16-b39b-805afb8e3ace_1fc14800-42c1-4ecc-9385-ed5bf76bb233_P1200DesktopBanner_11zon.jpg?w=1688&h=520&q=60&format=webp",
    "https://livguard.b-cdn.net/livguard/home/1/solar-homepage-banner-desktp.jpg?quality=85&width=1366",
    "/solar1.jpg",
    "/solar2.jpg",
    "https://amaze-india.com/data/banner/amaze-banner/home-banner-2.webp",
    "/solar3.jpg",
    "/a.jpeg",
    "/b.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIQDHzfZxWMLSOoAuKiNSuaPKEoDeM9E1NA&s",
    "/c.jpeg",
    "/d.jpeg",
    "https://5.imimg.com/data5/GLADMIN/VideoImage/2023/9/345723478/VD/AB/XZ/119389252/eastman-tall-tubular-inverter-batteries-500x500.jpg",
    "/e.jpeg",
    "/f.jpeg",
    "/g.jpeg",
    '/h.jpeg',
    "/i.jpeg",
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9e407ea0-cda6-4401-8cd4-86087cbb79ad.__CR0,0,970,600_PT0_SX970_V1___.png",
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