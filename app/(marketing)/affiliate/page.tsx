'use client';

import { useState } from 'react';

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    promotion_strategy: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Affiliate form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <main>
      <section className="page-hero relative">
        <div className="hero-gradient" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 md:text-left">
            <span className="hero-kicker inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 shadow-sm shadow-teal-200/60 backdrop-blur">
              আমাদের সফলতার অংশীদার হোন
            </span>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              আমাদের সফলতার অংশীদার হোন
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0">
              ডিজিটাল কেয়ার সলিউশনস এর অ্যাফিলিয়েট প্রোগ্রামে যোগ দিন। আমাদের AI-ভিত্তিক ডিজিটাল মার্কেটিং সার্ভিসগুলো আপনার পরিচিত ব্যবসাগুলোর কাছে পৌঁছে দিন এবং প্রতিটি সফল বিক্রিতে আকর্ষণীয় কমিশন আয় করুন।
            </p>
            <div className="hero-cta flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <a href="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-teal-500/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                সার্ভিসসমূহ
              </a>
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-7 py-3 text-base font-semibold text-teal-700 shadow-sm shadow-teal-200/60 transition duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-600">
                যোগাযোগ করুন
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="container mx-auto px-6 section-content">
          <div className="page-section-intro text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              কেন আমাদের অ্যাফিলিয়েট প্রোগ্রামে যোগ দেবেন?
            </h2>
            <p className="mt-4 text-slate-600">
              আমরা আমাদের পার্টনারদের সফলতা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ
            </p>
          </div>
          <div className="card-grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="glass-card relative overflow-hidden px-10 py-12 text-center transition duration-300 hover:-translate-y-2 animate-on-scroll">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-500 via-emerald-500 to-sky-500 text-white shadow-lg shadow-teal-500/40 mb-6">
                <i className="fas fa-hand-holding-dollar text-2xl"></i>
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">
                আকর্ষণীয় কমিশন
              </h3>
              <p className="text-slate-600 leading-relaxed">
                আমরা ইন্ডাস্ট্রির সেরা কমিশন রেট অফার করি। আপনার প্রতিটি রেফারেল থেকে আয় করুন এবং আপনার আয়কে নতুন উচ্চতায় নিয়ে যান।
              </p>
            </div>
            <div className="glass-card relative overflow-hidden px-10 py-12 text-center transition duration-300 hover:-translate-y-2 animate-on-scroll">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-500 via-emerald-500 to-sky-500 text-white shadow-lg shadow-teal-500/40 mb-6">
                <i className="fas fa-bullhorn text-2xl"></i>
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">
                হাই-ডিমান্ড সার্ভিস
              </h3>
              <p className="text-slate-600 leading-relaxed">
                ব্যবসার জন্য ওয়েবসাইট, ফেসবুক অটোমেশন এবং AI চ্যাটবট এখন সময়ের দাবি। এমন একটি সার্ভিস প্রমোট করুন যা প্রতিটি ব্যবসার প্রয়োজন।
              </p>
            </div>
            <div className="glass-card relative overflow-hidden px-10 py-12 text-center transition duration-300 hover:-translate-y-2 animate-on-scroll">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-500 via-emerald-500 to-sky-500 text-white shadow-lg shadow-teal-500/40 mb-6">
                <i className="fas fa-headset text-2xl"></i>
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">
                মার্কেটিং সাপোর্ট
              </h3>
              <p className="text-slate-600 leading-relaxed">
                আপনাকে সফল হতে সাহায্য করার জন্য আমরা ব্যানার, কনটেন্ট এবং প্রয়োজনীয় সকল মার্কেটিং উপকরণ সরবরাহ করব।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="container mx-auto px-6 section-content max-w-2xl">
          <div className="frosted-panel text-gray-800 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-center">
              অ্যাফিলিয়েট হতে আবেদন করুন
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  আপনার ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="আপনার ইমেইল ঠিকানা"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-bold mb-2">
                  ফোন নম্বর
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="আপনার ফোন নম্বর"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="promotion_strategy" className="block text-sm font-bold mb-2">
                  প্রচার কৌশল
                </label>
                <textarea
                  id="promotion_strategy"
                  name="promotion_strategy"
                  rows={4}
                  value={formData.promotion_strategy}
                  onChange={handleChange}
                  placeholder="আপনি কীভাবে আমাদের সার্ভিস প্রচার করার পরিকল্পনা করছেন? (যেমন: ব্লগ, ইউটিউব, ফেসবুক গ্রুপ)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-md hover:bg-teal-600 transition duration-300"
              >
                আবেদন জমা দিন
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}