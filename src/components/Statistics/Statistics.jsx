import React, { useState, useEffect, useRef } from 'react';
import './Statistics.css';

function AnimatedCounter({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          
          const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
          const isPercentRange = target.includes('-');
          
          if (isPercentRange) {
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentVal = Math.floor(progress * 70);
              setCount(currentVal);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount('70-80');
              }
            };
            window.requestAnimationFrame(step);
          } else {
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentVal = Math.floor(progress * numericTarget);
              setCount(currentVal);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(target);
              }
            };
            window.requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {hasAnimated.current && count === target ? '' : suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="bg-burg py-16 text-white text-start relative overflow-hidden" id="statistics">
  
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_20%,rgba(255,255,255,0.03)_0%,transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6-pct relative z-10">
        <div className="text-center mb-10">
          <p className="text-[0.87rem] font-bold tracking-[0.12em] uppercase mb-[0.5rem] text-white/50">
            Proven Scale
          </p>
          <h2 className="font-display font-extrabold tracking-tight text-white text-3xl sm:text-4xl">
            Enterprise Impact at Speed
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-content-center">
          
       
          <div className="text-center px-3 border-end border-white/10 last-border-none">
            <div className="font-display font-bold text-white leading-none mb-2 text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-keppel">
                <AnimatedCounter target="75" suffix="%" />
              </span>
            </div>
            <p className="text-white/80 text-[0.78rem] leading-snug mb-0 uppercase font-semibold tracking-wider">
              Average reduction in review cycle time
            </p>
          </div>

          <div className="text-center px-3 border-end border-white/10 last-border-none">
            <div className="font-display font-bold text-white leading-none mb-2 text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-keppel">
                <AnimatedCounter target="10" suffix="×" />
              </span>
            </div>
            <p className="text-white/80 text-[0.78rem] leading-snug mb-0 uppercase font-semibold tracking-wider">
              Per-reviewer throughput gain
            </p>
          </div>

          <div className="text-center px-3 border-end border-white/10 last-border-none">
            <div className="font-display font-bold text-white leading-none mb-2 text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-keppel">100%</span>
            </div>
            <p className="text-white/80 text-[0.78rem] leading-snug mb-0 uppercase font-semibold tracking-wider">
              Obligations cited at clause-level
            </p>
          </div>

          <div className="text-center px-3 last-border-none">
            <div className="font-display font-bold text-white leading-none mb-2 text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-keppel">
                <AnimatedCounter target="60" suffix="K+" />
              </span>
            </div>
            <p className="text-white/80 text-[0.78rem] leading-snug mb-0 uppercase font-semibold tracking-wider">
              Documents analyzed per engagement
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
