"use client";

import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import React from 'react';
import Watsapp from '@/components/Watsapp';

function Page() {

  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Watsapp />
    </div>
  );
}

export default Page;