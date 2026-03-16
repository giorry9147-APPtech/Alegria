"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { heroSlides } from "@/data/heroSlides";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[80vh] min-h-[560px] w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[80vh] min-h-[560px] w-full">
              
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
                  <div className="max-w-3xl">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#4CFF00]">
                      Alegria Restaurant
                    </p>

                    <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-200 md:text-lg">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                      {/* Primary button */}
                      <Link
                        href={slide.ctaPrimary.href}
                        className="rounded-full bg-[#C1121F] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
                      >
                        {slide.ctaPrimary.label}
                      </Link>

                      {/* Secondary button */}
                      <Link
                        href={slide.ctaSecondary.href}
                        className="rounded-full border border-[#4CFF00] px-6 py-3 text-center font-semibold text-[#4CFF00] transition hover:bg-[#4CFF00] hover:text-black"
                      >
                        {slide.ctaSecondary.label}
                      </Link>

                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}