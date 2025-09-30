"use client"

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const [industryText, setIndustryText] = useState('ব্যবসার');
  const words = ['ব্যবসার', 'রিসোর্টের', 'হাসপাতালের', 'ই-কমার্সের'];

  useEffect(() => {
    const interval = setInterval(() => {
      const industryTextElement = document.getElementById('industry-text');
      if (industryTextElement) {
        industryTextElement.classList.add('flip');
        setTimeout(() => {
          setIndustryText(prevText => {
            const currentIndex = words.indexOf(prevText);
            const nextIndex = (currentIndex + 1) % words.length;
            return words[nextIndex];
          });
          industryTextElement.classList.remove('flip');
        }, 600);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [words]);

  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection || !gsap) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const heroKicker = heroSection.querySelector('.hero-kicker');
    const heroHeading = heroSection.querySelector('.hero-heading');
    const heroSubtitle = heroSection.querySelector('.hero-subtitle');
    const heroButtons = Array.from(heroSection.querySelectorAll('.hero-cta a'));
    const heroStats = Array.from(heroSection.querySelectorAll('.hero-stat'));
    const heroDevice = heroSection.querySelector('.hero-device');
    const heroCards = Array.from(heroSection.querySelectorAll('.floating-card'));
    const heroIcons = Array.from(heroSection.querySelectorAll('.floating-icon'));
    const heroOrbs = Array.from(heroSection.querySelectorAll('.hero-orb'));

    gsap.set([heroKicker, heroHeading, heroSubtitle, ...heroButtons, ...heroStats], { y: 40, opacity: 0 });
    gsap.set(heroDevice, { y: 60, opacity: 0, scale: 0.95 });

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    timeline
      .to(heroKicker, { y: 0, opacity: 1 }, 0)
      .to(heroHeading, { y: 0, opacity: 1 }, 0.1)
      .to(heroSubtitle, { y: 0, opacity: 1 }, 0.22)
      .to(heroButtons, { y: 0, opacity: 1, stagger: 0.08 }, 0.37)
      .to(heroStats, { y: 0, opacity: 1, stagger: 0.08 }, 0.55)
      .to(heroDevice, { y: 0, opacity: 1, scale: 1, duration: 1.1 }, 0.15);

    if (!prefersReducedMotion) {
      heroCards.forEach((card, index) => {
        const floatDistance = 16 + index * 6;
        gsap.to(card, {
          y: `+=${floatDistance}`,
          x: index % 2 === 0 ? '+=12' : '-=12',
          duration: 3.6 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      });

      heroIcons.forEach((icon, index) => {
        gsap.to(icon, {
          y: index % 2 === 0 ? '+=14' : '-=14',
          x: index % 2 === 0 ? '-=8' : '+=8',
          rotation: index % 2 === 0 ? 6 : -6,
          duration: 4.5 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      });

      const handlePointerMove = (event: PointerEvent) => {
        const rect = heroSection.getBoundingClientRect();
        const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
        const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 24;

        gsap.to(heroDevice, { x: offsetX, y: offsetY, duration: 0.8, ease: 'power2.out' });
        heroCards.forEach((card, index) => {
            gsap.to(card, { x: offsetX * (0.2 + index * 0.05), y: offsetY * (0.2 + index * 0.04), duration: 0.8, ease: 'power2.out' });
        });
        heroIcons.forEach((icon, index) => {
            gsap.to(icon, { x: offsetX * (0.16 + index * 0.05), y: offsetY * (0.16 + index * 0.05), duration: 0.9, ease: 'power2.out' });
        });
        heroOrbs.forEach((orb, index) => {
            gsap.to(orb, { x: offsetX * (-0.3 - index * 0.05), y: offsetY * (-0.3 - index * 0.04), duration: 1.1, ease: 'power2.out' });
        });
      };

      const handleMouseLeave = () => {
        const parallaxTargets = [heroDevice, ...heroCards, ...heroIcons, ...heroOrbs].filter(Boolean);
        parallaxTargets.forEach((target) => {
          gsap.to(target, { x: 0, y: 0, duration: 1, ease: 'power3.out' });
        });
      };

      heroSection.addEventListener('pointermove', handlePointerMove as EventListener);
      heroSection.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        heroSection.removeEventListener('pointermove', handlePointerMove as EventListener);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <section className="hero-section relative py-24 md:py-32">
      <div className="hero-gradient" aria-hidden="true"></div>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-3" aria-hidden="true"></div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="hero-copy max-w-xl mx-auto space-y-8 text-center lg:mx-0 lg:text-left">
            <span className="hero-kicker inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 shadow-sm shadow-teal-200/60 backdrop-blur">
              <i className="fa-solid fa-shapes text-teal-500"></i> ডিজিটাল সলিউশনস এজেন্সি
            </span>
            <h1 className="hero-heading text-3xl md:text-5xl font-bold leading-normal text-slate-900">
              আপনার <span id="industry-text" className="inline-block rounded-full bg-white/70 px-6 py-3 text-teal-600 shadow-inner shadow-white/60">{industryText}</span> <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 bg-clip-text text-transparent">ডিজিটাল রূপান্তর</span> এখানেই শুরু
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              এজেন্সি-গ্রেড ডিজাইন, স্বয়ংক্রিয় গ্রাহক সংযোগ এবং ডেটা-ভিত্তিক মার্কেটিং — সবকিছু এক জায়গায়। আমাদের সাথে যুক্ত হন এবং প্রতিটি ডিজিটাল স্পর্শবিন্দুকে একটি বিক্রয় যাত্রায় পরিণত করুন।
            </p>
            <div className="hero-cta flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-teal-500/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                বিনামূল্যে কৌশল সেশন
              </a>
              <a href="#case-study" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/60 bg-white/70 px-8 py-4 text-lg font-semibold text-teal-700 shadow-sm backdrop-blur transition duration-300 hover:bg-white">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <i className="fa-solid fa-play"></i>
                </span>
                সফলতার ভিডিও দেখুন
              </a>
            </div>
            <div className="hero-stats grid grid-cols-2 gap-6 pt-10 text-left sm:grid-cols-3">
              <div className="hero-stat rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm shadow-teal-100/40 backdrop-blur">
                <p className="text-3xl font-bold text-slate-900">৯৫%</p>
                <p className="text-sm text-slate-500">অটোমেশন দিয়ে লিড সাড়া বৃদ্ধি</p>
              </div>
              <div className="hero-stat rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm shadow-teal-100/40 backdrop-blur">
                <p className="text-3xl font-bold text-slate-900">৫০+</p>
                <p className="text-sm text-slate-500">এজেন্সি স্টাইল ডিজিটাল ক্যাম্পেইন</p>
              </div>
              <div className="hero-stat col-span-2 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm shadow-teal-100/40 backdrop-blur sm:col-span-1">
                <p className="text-3xl font-bold text-slate-900">২৪/৭</p>
                <p className="text-sm text-slate-500">AI এজেন্ট প্রস্তুত আপনার গ্রাহকের জন্য</p>
              </div>
            </div>
          </div>
          <div className="hero-visual relative mx-auto w-full max-w-xl">
            <div className="hero-device">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                  <span className="block h-3 w-3 rounded-full bg-teal-400/80"></span>
                  <span className="block h-3 w-3 rounded-full bg-emerald-400/80"></span>
                  <span className="block h-3 w-3 rounded-full bg-sky-400/80"></span>
                </div>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-600">লাইভ ড্যাশবোর্ড</span>
              </div>
              <div className="relative space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/90 p-4 shadow-inner shadow-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">সক্রিয় প্রচারণা</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">১২</p>
                    <div className="hero-bar mt-4"></div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-teal-500 via-emerald-500 to-sky-500 p-[1px] shadow-lg shadow-teal-500/40">
                    <div className="rounded-[18px] bg-white/95 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">রূপান্তর</p>
                      <p className="mt-2 text-2xl font-bold text-slate-900">৪.৮x</p>
                      <p className="text-xs text-slate-500">গত ৩০ দিনে</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/90 p-5 shadow-lg shadow-slate-200/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">রিয়েল-টাইম লিড ফ্লো</p>
                  <svg viewBox="0 0 420 160" className="hero-chart mt-4" role="img" aria-label="রূপান্তরের প্রবৃদ্ধির রেখাচিত্র">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(14, 165, 233, 0.45)" />
                        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
                      </linearGradient>
                    </defs>
                    <path d="M0 120 C60 80 90 130 150 100 C210 70 230 20 300 60 C360 100 390 90 420 40 L420 160 L0 160 Z" fill="url(#chartGradient)"></path>
                    <path d="M0 120 C60 80 90 130 150 100 C210 70 230 20 300 60 C360 100 390 90 420 40" fill="none" stroke="rgba(13,148,136,0.8)" strokeWidth="6" strokeLinecap="round"></path>
                  </svg>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-500">
                    <div>
                      <span className="block text-base font-semibold text-slate-900">২.১কে</span>
                      মোট ভিজিট
                    </div>
                    <div>
                      <span className="block text-base font-semibold text-slate-900">৭৬%</span>
                      লিড কোয়ালিফাইড
                    </div>
                    <div>
                      <span className="block text-base font-semibold text-slate-900">২.৪মিনিট</span>
                      গড় সাড়া
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card floating-card-1">
              <div className="flex items-center gap-3">
                <span className="floating-card-icon bg-teal-100 text-teal-600">
                  <i className="fa-solid fa-robot"></i>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">AI Assistant</p>
                  <p className="text-sm font-semibold text-slate-700">স্বয়ংক্রিয় ফলো-আপ</p>
                </div>
              </div>
            </div>
            <div className="floating-card floating-card-2">
              <div className="flex items-center gap-3">
                <span className="floating-card-icon bg-sky-100 text-sky-600">
                  <i className="fa-solid fa-chart-line"></i>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Growth Pulse</p>
                  <p className="text-sm font-semibold text-slate-700">ROI ট্র্যাকিং</p>
                </div>
              </div>
            </div>
            <div className="floating-card floating-card-3">
              <div className="flex items-center gap-3">
                <span className="floating-card-icon bg-emerald-100 text-emerald-600">
                  <i className="fa-solid fa-message"></i>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Smart Inbox</p>
                  <p className="text-sm font-semibold text-slate-700">মাল্টিচ্যানেল সাড়া</p>
                </div>
              </div>
            </div>
            <div className="floating-icon floating-icon-bolt">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <div className="floating-icon floating-icon-spark">
              <i className="fa-solid fa-signal"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}