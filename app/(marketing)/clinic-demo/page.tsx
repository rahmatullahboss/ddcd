'use client';

import { useState } from 'react';

export default function ClinicDemoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const openModal = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      question: 'প্র: ২৪/৭ রিপ্লাই কি সত্যি?',
      answer: 'উ: হ্যাঁ—অফ-আওয়ারসহ সবসময়। জটিল কেস হলে স্টাফে হ্যান্ড-অফ।',
    },
    {
      question: 'প্র: কনফার্মেশন কে করে—বট নাকি স্টাফ?',
      answer: 'উ: আপনার প্রক্রিয়া অনুযায়ী—অটো কনফার্ম/স্টাফ ভেরিফাই, দুইভাবেই সেটআপ করা যায়।',
    },
    {
      question: 'প্র: রিমাইন্ডার কি WhatsApp–এ যাবে?',
      answer: 'উ: WhatsApp/SMS—যেটা আপনার জন্য সুবিধাজনক।',
    },
    {
      question: 'প্র: প্রাইভেসি?',
      answer: 'উ: আমরা কমতম তথ্য নেই, ট্রায়াল/লাইভ—দুটিতেই আপনার ডেটা আপনার নিয়ন্ত্রণে।',
    },
  ];

  return (
    <main>
      <section className="page-hero relative">
        <div className="hero-gradient" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
        <div className="container mx-auto px-6 section-content py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="hero-kicker inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 shadow-sm shadow-teal-200/60 backdrop-blur">
              আপনার ভার্চুয়াল রিসেপশনিস্ট
            </span>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              আপনার ক্লিনিকের জন্য একজন ২৪/৭ AI সহকারী
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
              রোগীদের প্রতিটি প্রশ্নের তাত্ক্ষণিক উত্তর দিন, স্বয়ংক্রিয়ভাবে অ্যাপয়েন্টমেন্ট বুক করুন এবং স্মার্ট রিমাইন্ডারের মাধ্যমে নো-শো এর হার কমিয়ে আনুন।
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-teal-500/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                ফ্রি ট্রায়াল শুরু করুন
              </a>
              <a href="#process" className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-7 py-3 font-semibold text-teal-700 shadow-sm shadow-teal-200/60 transition duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-600">
                এটি কীভাবে কাজ করে?
              </a>
            </div>
          </div>

          <div className="glass-card px-8 py-10 shadow-xl animate-on-scroll">
            <div className="flex justify-start mb-4">
              <div className="bg-teal-500 text-white p-3 rounded-lg max-w-xs shadow">
                <p>হ্যালো! আমি কি আপনার অ্যাপয়েন্টমেন্টটি বুক করতে পারি?</p>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div className="bg-white text-gray-800 p-3 rounded-lg max-w-xs shadow">
                <p>হ্যাঁ, আগামীকাল সকাল ১০টায় কি কোনো স্লট খালি আছে?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-teal-500 text-white p-3 rounded-lg max-w-xs shadow">
                <p>অবশ্যই! আপনার অ্যাপয়েন্টমেন্টটি কনফার্ম করা হয়েছে।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="container mx-auto px-6 section-content">
          <div className="page-section-intro text-center">
            <h2 className="text-3xl md:text-4xl font-bold">আপনি কী পাবেন</h2>
            <p className="mt-4 text-slate-600">আমাদের AI রিসেপশনিস্ট আপনার ক্লিনিকের জন্য যা যা করবে</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4"><i className="fas fa-bolt text-4xl text-teal-500"></i></div>
              <h3 className="text-xl font-bold mb-2">তাত্ক্ষণিক রিপ্লাই (≤৫ মিনিট)</h3>
              <p className="text-slate-600">OPD সময়, ডাক্তার অ্যাভেইলেবিলিটি, টেস্ট/ফি, লোকেশন—সব প্রশ্নের উত্তর ২৪/৭।</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4"><i className="fas fa-calendar-check text-4xl text-teal-500"></i></div>
              <h3 className="text-xl font-bold mb-2">অ্যাপয়েন্টমেন্ট বুকিং</h3>
              <p className="text-slate-600">রোগীর নাম, মোবাইল নম্বর, ডাক্তার এবং সময় নিয়ে স্বয়ংক্রিয়ভাবে অ্যাপয়েন্টমেন্ট কনফার্ম করে।</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4"><i className="fas fa-bell text-4xl text-teal-500"></i></div>
              <h3 className="text-xl font-bold mb-2">স্মার্ট রিমাইন্ডার</h3>
              <p className="text-slate-600">WhatsApp/SMS এর মাধ্যমে ২৪ ঘন্টা এবং ২ ঘন্টা আগে অটো রিমাইন্ডার পাঠিয়ে নো-শো কমায়।</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20">
        <div className="container mx-auto px-6 section-content max-w-3xl">
          <div className="page-section-intro text-center">
            <h2 className="text-3xl md:text-4xl font-bold">সাধারণ জিজ্ঞাসাসমূহ</h2>
            <p className="mt-4 text-slate-600">আপনার মনে থাকা কিছু সাধারণ প্রশ্নের উত্তর</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 font-semibold text-left"
                >
                  {faq.question}
                  <i className={`fas fa-chevron-down transition-transform ${faqOpen === index ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`p-4 text-slate-600 ${faqOpen === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}