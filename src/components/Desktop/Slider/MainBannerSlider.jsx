import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './MainBannerSlider.module.css';

const images = [
  '/photo/main/main.png',
  '/photo/main/cosmo.png',
  '/photo/main/main.png',
  '/photo/main/cosmo.png',
  '/photo/main/main.png',
];

export default function MainBannerSlider() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.bannerImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
