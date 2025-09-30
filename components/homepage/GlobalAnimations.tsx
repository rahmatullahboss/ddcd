"use client"

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // General scroll-triggered animations
      const animationPresets = {
        'fade-up': { y: 60, opacity: 0 },
        'fade-down': { y: -60, opacity: 0 },
        'fade-left': { x: -60, opacity: 0 },
        'fade-right': { x: 60, opacity: 0 },
        'scale-in': { scale: 0.9, opacity: 0 },
        'rotate-in': { rotationX: -15, opacity: 0 }
      };

      gsap.utils.toArray<HTMLElement>('[data-animate]').forEach((element) => {
        const type = element.getAttribute('data-animate') || 'fade-up';
        const preset = animationPresets[type as keyof typeof animationPresets] || animationPresets['fade-up'];
        const delay = parseFloat(element.getAttribute('data-delay') || '0');
        const duration = parseFloat(element.getAttribute('data-duration') || '1');
        const once = element.getAttribute('data-once');

        gsap.from(element, {
          ...preset,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: once === 'false' ? 'play none none reverse' : 'play none none none'
          }
        });
      });

      // Parallax effects for sections
      const parallaxSections = document.querySelectorAll<HTMLElement>('[data-parallax-container]');
      parallaxSections.forEach((section) => {
        const targets = section.querySelectorAll<HTMLElement>('[data-parallax-depth]');
        if (!targets.length) return;

        const handlePointerMove = (event: PointerEvent) => {
          const rect = section.getBoundingClientRect();
          const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
          const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 24;

          targets.forEach((target) => {
            const depth = parseFloat(target.getAttribute('data-parallax-depth') || '0.12');
            gsap.to(target, {
              x: offsetX * depth,
              y: offsetY * depth,
              duration: 0.8,
              ease: 'power2.out'
            });
          });
        };

        const handleMouseLeave = () => {
          targets.forEach((target) => {
            gsap.to(target, { x: 0, y: 0, duration: 1, ease: 'power3.out' });
          });
        };

        section.addEventListener('pointermove', handlePointerMove);
        section.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function for the event listeners
        return () => {
          section.removeEventListener('pointermove', handlePointerMove);
          section.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    }
  }, []);

  return null; // This component does not render any JSX
}