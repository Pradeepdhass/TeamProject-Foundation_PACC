import React from 'react';
import Hero from '../components/Hero/Hero';
import Platform from '../components/Platform/Platform';
import Features from '../components/Features/Features';
import Industries from '../components/Industries/Industries';
import Comparison from '../components/Comparison/Comparison';
import Statistics from '../components/Statistics/Statistics';
import Services from '../components/Services/Services';
import CTA from '../components/CTA/CTA';

export default function Home() {
  return (
    <main className="flex-1 pt-16">
      <Hero />
      <Platform />
      <Features />
      <Industries />
      <Comparison />
      <Statistics />
      <Services />
      <CTA />
    </main>
  );
}
