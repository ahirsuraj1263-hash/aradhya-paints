"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { TESTIMONIALS } from "@/lib/testimonials";
import { TestimonialCard } from "@/components/home/TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function TestimonialsSlider() {
  return (
    <div className="mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        centeredSlides
        grabCursor
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 1.05 },
          768: { slidesPerView: 1.25 },
          1024: { slidesPerView: 1.7 },
          1280: { slidesPerView: 2.3 },
        }}
        className="py-5"
      >
        {TESTIMONIALS.map((item) => (
          <SwiperSlide key={item.name} className="h-auto">
            <div className="px-1 py-2">
              <TestimonialCard {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
