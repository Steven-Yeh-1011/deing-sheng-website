"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const slides = [
  {
    id: 1,
    image: "/banners/banner1.jpg",
    title: "DS ADM®",
    subtitle: "創新 ・ 環保 ・ 品質",
    descKey: "subtitle" as const,
  },
  {
    id: 2,
    image: "/banners/banner2.jpg",
    title: "ADM 系列",
    subtitle: "高溫離型 ・ 氮化硼",
    descKey: null,
    desc: { "zh-TW": "針對高溫加工製程特別開發的專業產品", en: "Professional products specially developed for high-temperature processes" },
  },
  {
    id: 3,
    image: "/banners/banner3.jpg",
    title: "商用設備",
    subtitle: "效率 ・ 品質 ・ 服務",
    descKey: null,
    desc: { "zh-TW": "霜淇淋機、萬能蒸烤箱、製冰機等專業設備", en: "Soft serve machines, combi ovens, ice makers and more" },
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const locale = useLocale() as "zh-TW" | "en";
  const tHero = useTranslations("hero");

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const description = slide.descKey
    ? tHero(slide.descKey)
    : slide.desc?.[locale] ?? "";

  return (
    <section className="relative w-full h-[440px] md:h-[520px] overflow-hidden bg-[#0a0f2e]">
      {/* Image layers */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2e]/70 via-transparent to-[#0a0f2e]/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f2e]/50" />
        </div>
      ))}

      {/* Starfield overlay (CSS dots on top of image) */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => {
          const x = ((i * 73 + 17) * 13) % 1000 / 10;
          const y = ((i * 47 + 31) * 11) % 1000 / 10;
          const size = i % 7 === 0 ? 2.5 : i % 3 === 0 ? 1.5 : 1;
          const opacity = i % 5 === 0 ? 0.6 : i % 3 === 0 ? 0.4 : 0.2;
          const twinkle = i % 4 === 0;
          return (
            <div
              key={i}
              className={`absolute rounded-full bg-white ${twinkle ? "animate-pulse" : ""}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                opacity,
                animationDelay: twinkle ? `${(i * 0.37) % 4}s` : undefined,
                animationDuration: twinkle ? "3s" : undefined,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="text-5xl md:text-7xl font-black text-white tracking-widest mb-3 drop-shadow-lg transition-all duration-500"
          key={`title-${current}`}
        >
          {slide.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 tracking-wider mb-3 font-light">
          {slide.subtitle}
        </p>
        <p className="text-sm md:text-base text-gray-400 mb-8 max-w-xl">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/${locale}/products`}
            className="inline-block bg-accent-red hover:bg-accent-red-dark text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            {tHero("cta")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="inline-block border border-accent-yellow/60 text-accent-yellow hover:bg-accent-yellow hover:text-gray-900 font-semibold px-8 py-3 rounded transition-colors"
          >
            {tHero("learnMore")}
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors text-2xl"
        aria-label="上一張"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors text-2xl"
        aria-label="下一張"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-accent-red w-6"
                : "bg-white/40 hover:bg-white/70 w-2.5"
            }`}
            aria-label={`第 ${index + 1} 張`}
          />
        ))}
      </div>
    </section>
  );
}
