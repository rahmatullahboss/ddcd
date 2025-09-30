"use client"

import { useState } from 'react';

const faqData = [
  {
    question: "আপনারা আসলে কী করেন? আপনারা কি শুধু একটি মার্কেটিং এজেন্সি?",
    answer: "আমরা শুধু একটি গতানুগতিক মার্কেটিং এজেন্সি নই। আমরা আপনার ব্যবসার জন্য একটি সম্পূর্ণ ‘ডিজিটাল গ্রোথ সিস্টেম’ তৈরি করি যেখানে ওয়েবসাইট, ফেসবুক অটোমেশন এবং AI চ্যাটবট একত্রে কাজ করে আপনার জন্য স্বয়ংক্রিয়ভাবে গ্রাহক খুঁজে বের করে, কথা বলে, লিড সংগ্রহ করে এবং বিক্রয় বাড়াতে সাহায্য করে।"
  },
  {
    question: "আপনাদের সেবাগুলো কাদের জন্য সবচেয়ে বেশি উপযোগী?",
    answer: "আমাদের সেবাগুলো মূলত ছোট ও মাঝারি আকারের ব্যবসার জন্য যারা অনলাইনে বিক্রি এবং গ্রাহক সেবা উন্নত করতে চায়—বিশেষ করে ক্লিনিক, হাসপাতাল, ই-কমার্স, রিয়েল এস্টেট, হোটেল-রিসোর্টসহ বিভিন্ন সার্ভিস ভিত্তিক প্রতিষ্ঠানের জন্য অটোমেশন সিস্টেম খুবই কার্যকর।"
  },
  {
      question: `"অটোমেশন সিস্টেম" বা "গ্রোথ ইঞ্জিন" বলতে কী বোঝেন?`,
      answer: `অটোমেশন সিস্টেম হলো এমন একটি কাঠামো যেখানে লিড সংগ্রহ থেকে বিক্রয় পর্যন্ত প্রতিটি ধাপ স্বয়ংক্রিয়ভাবে সম্পন্ন হয়—ফেসবুক কমেন্ট বা মেসেজ থেকে তথ্য সংগ্রহ, AI দিয়ে তাৎক্ষণিক যোগাযোগ এবং প্রয়োজনীয় লিঙ্ক বা পেমেন্ট অপশন পাঠানোর মতো কাজগুলো একসাথে করে আপনার ব্যবসাকে একটি স্বয়ংক্রিয় ‘গ্রোথ ইঞ্জিনে’ রূপ দেয়।`
  },
  {
      question: `আপনাদের কাজের প্রক্রিয়া কী? আমি কীভাবে শুরু করব?`,
      answer: `আমরা চার ধাপে কাজ করি—প্রথমে ডিসকভারি ও স্ট্র্যাটেজি, এরপর অনবোর্ডিং ও অটোমেশন সেটআপ, তারপর ডেভেলপমেন্ট ও লঞ্চ এবং সবশেষে ইনসাইটস ও স্কেল। শুরু করতে আমাদের নম্বরে কল করুন অথবা “বিনামূল্যে কৌশল সেশন” ফর্ম পূরণ করুন।`
  },
  {
      question: `ফলাফল পরিমাপের কোনো ব্যবস্থা আছে কি? বিনিয়োগের লাভ কীভাবে বুঝব?`,
      answer: `অবশ্যই আছে। আমরা লাইভ ড্যাশবোর্ডের মাধ্যমে দর্শক সংখ্যা, লিড এবং ROI দেখাই এবং প্রতি মাসে বিস্তারিত পারফরম্যান্স রিপোর্ট দিই যাতে আপনি বিনিয়োগের প্রতিটি টাকার ফলাফল বুঝতে পারেন।`
  },
  {
      question: `AI এজেন্ট কি সত্যিই কার্যকর?`,
      answer: `হ্যাঁ, আমাদের AI এজেন্ট সাধারণ প্রশ্নগুলোর (যেমন: ডাক্তার কখন বসেন?, খরচ কত?, অ্যাপয়েন্টমেন্ট কীভাবে নেব?) উত্তর স্বয়ংক্রিয়ভাবে দিতে পারে। এতে আপনার কর্মীদের চাপ কমে এবং গ্রাহকরা দ্রুত সেবা পায়।`
  },
  {
      question: `ওয়েবসাইট তৈরি করতে কতদিন সময় লাগে?`,
      answer: `প্যাকেজ ও প্রয়োজনের ওপর নির্ভর করে সাধারণত ২-৪ সপ্তাহের মধ্যে পুরো ওয়েবসাইট ও অটোমেশন চালু করে দিই।`
  },
  {
      question: `মাসিক ফি কেন দিতে হয়?`,
      answer: `মাসিক ফি-এর মধ্যে হোস্টিং, সিকিউরিটি আপডেট, AI ট্রেনিং, রিপোর্টিং এবং ডেডিকেটেড সাপোর্ট অন্তর্ভুক্ত থাকে যাতে সিস্টেম সবসময় কার্যকর থাকে।`
  },
  {
      question: `প্যাকেজ কাস্টমাইজ করা যাবে?`,
      answer: `অবশ্যই। আপনার ইন্ডাস্ট্রি ও লক্ষ্য অনুযায়ী আমরা কাস্টম ফিচার, কাস্টম ফানেল এবং বিশেষ ইন্টিগ্রেশন যুক্ত করি।`
  },
  {
      question: `বিজ্ঞাপনের বাজেট কি প্যাকেজে অন্তর্ভুক্ত?`,
      answer: `না, বিজ্ঞাপনের মিডিয়া বাজেট আলাদা। আমরা সেই বাজেটকে সর্বোচ্চ ROI দিতে কৌশল ও অটোমেশন সেটআপ করি।`
  }
];

const FaqItem = ({ item, isOpen, onClick }: { item: { question: string; answer: string }, isOpen: boolean, onClick: () => void }) => (
  <div className="faq-item" data-animate="fade-up">
    <button className="faq-toggle" onClick={onClick}>
      <span>{item.question}</span>
      <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
    </button>
    <div className={`faq-answer ${isOpen ? '' : 'hidden'}`}>
      {item.answer}
    </div>
  </div>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-shell faq-section py-24" data-parallax-container>
      <div className="section-backdrop" aria-hidden="true">
        <span className="section-grid"></span>
        <span className="section-orb faq-orb-1" data-parallax-depth="0.16"></span>
        <span className="section-orb faq-orb-2" data-parallax-depth="0.24"></span>
      </div>
      <div className="section-content container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <span className="section-kicker"><i className="fa-solid fa-circle-question text-teal-500"></i> সাধারণ জিজ্ঞাসা</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">সবচেয়ে বেশি করা প্রশ্নের উত্তর</h2>
          <p className="text-lg text-slate-600">
            প্রতিটি ধাপেই আমরা আপনার পাশে—FAQ থেকে যদি উত্তর না পান, সরাসরি আমাদের সাথে কথা বলুন।
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}