"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";


function ScrollRow({ logos = [], speed = 60, reverse = false }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const mountedRef = useRef(true);

  const [repeat, setRepeat] = useState(2);

  const lastScrollRef = useRef(0);
  const lastMovedAtRef = useRef(Date.now());
  const watchdogRef = useRef(null);

  const items = [];
  for (let r = 0; r < repeat; r++) {
    for (let i = 0; i < logos.length; i++) items.push(logos[i]);
  }

  const stopRAF = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el || items.length === 0) return;

    stopRAF();
    let last = performance.now();

    if (el.scrollLeft === 0) el.scrollLeft = 1;

    function step(now) {
      if (!mountedRef.current) return;
      const dt = now - last;
      last = now;

      const move = (speed * dt) / 1000;
      el.scrollLeft += reverse ? -move : move;

      lastMovedAtRef.current = Date.now();
      lastScrollRef.current = el.scrollLeft;

      const half = el.scrollWidth / 2 || 1;
      if (!reverse && el.scrollLeft >= half) el.scrollLeft = 0;
      if (reverse && el.scrollLeft <= 0) el.scrollLeft = half;

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      stopRAF();
    };
  }, [items.length, speed, reverse]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let cancelled = false;
    const maxRepeats = 8;
    let attempts = 0;

    function ensureOverflow() {
      attempts += 1;
      setTimeout(() => {
        if (cancelled) return;
        const scrollW = el.scrollWidth;
        const clientW = el.clientWidth;

        if (scrollW > clientW + 2) {
          if (el.scrollLeft === 0) el.scrollLeft = 1;
          return;
        }
        if (repeat < maxRepeats) {
          setRepeat((r) => Math.min(r + 1, maxRepeats));
          if (attempts < 10) setTimeout(ensureOverflow, 120);
        }
      }, 80);
    }

    ensureOverflow();

    function onResize() {
      if (!el) return;
      if (el.scrollWidth > el.clientWidth + 2) {
        if (el.scrollLeft === 0) el.scrollLeft = 1;
      } else if (repeat < maxRepeats) {
        setRepeat((r) => Math.min(r + 1, maxRepeats));
      }
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
    };  
  }, [logos]);



  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      stopRAF();
      if (watchdogRef.current) clearInterval(watchdogRef.current);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="flex gap-10 md:gap-12 items-center whitespace-nowrap overflow-hidden"
      aria-hidden={false}
    >
      {items.map((logo, idx) => (
        <div
          key={`${logo.src}-${idx}`}
          className="flex items-center justify-center flex-none min-w-[163px] md:min-w-[306px]"
        >
          <Image
            src={logo.src}
            alt={logo.alt || `brand-${idx}`}
            width={306}
            height={120}
            className="object-contain w-[163px] h-[64px] md:w-[306px] md:h-[120px]"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandStrip({ logos = [], speed = 60 }) {
  const row1 = logos;
  const row2 = logos;

  return (
<div className="section pt-6 md:pt-0 pb-0 md:pb-20 w-full">
      <ScrollRow logos={row1} speed={speed} reverse={false} />
      <div className="py-6 md:py-10 " />
      <ScrollRow logos={row2} speed={speed} reverse={true} />


    </div>
  );
}