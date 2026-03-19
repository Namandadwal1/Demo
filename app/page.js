"use client";

import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Page() {

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Cleanup (VERY IMPORTANT)
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
}

export default Page;