import Image from 'next/image';

export default function AboutPage() {
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
              আমাদের সম্পর্কে
            </span>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              আমাদের সম্পর্কে
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0">
              ডিজিটাল কেয়ার সলিউশনস বাংলাদেশের স্বাস্থ্যসেবা প্রতিষ্ঠানগুলোর জন্য আধুনিক প্রযুক্তিনির্ভর সলিউশন প্রদান করে। আমাদের লক্ষ্য হলো হাসপাতাল ও ক্লিনিকের ডিজিটাল রূপান্তরকে সহজ করা এবং রোগীর সাথে সংযোগ স্থাপন আরও সহজ ও নিরাপদ করা।
            </p>
            <div className="hero-cta flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <a href="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-teal-500/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                <i className="fa-solid fa-wand-magic-sparkles"></i>সার্ভিসসমূহ
              </a>
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-7 py-3 text-base font-semibold text-teal-700 shadow-sm shadow-teal-200/60 transition duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-600">
                <i className="fa-solid fa-message"></i>যোগাযোগ করুন
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="container mx-auto px-6 section-content">
          <div className="page-section-intro text-center">
            <h2 className="text-3xl md:text-4xl font-bold">আমাদের টিম</h2>
            <p className="mt-4 text-slate-600">
              আমাদের দক্ষ ও অভিজ্ঞ টিম আপনার সেবায় সর্বদা প্রস্তুত
            </p>
          </div>
          <div className="card-grid lg:grid-cols-3 mt-12">
            <article className="glass-card relative overflow-hidden text-center px-10 py-12 shadow-lg transition duration-300 hover:-translate-y-2 animate-on-scroll">
              <Image
                src="https://raw.githubusercontent.com/rahmatullahboss/digital-care/main/Rahmatullah.webp"
                alt="রহমতুল্লাহ জিসান"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-3xl mx-auto mb-6 ring-4 ring-white/70 shadow-xl shadow-teal-500/20"
              />
              <h3 className="text-xl font-bold">রহমতুল্লাহ জিসান</h3>
              <p className="text-teal-600">
                প্রতিষ্ঠাতা ও বিজনেস অটোমেশন স্ট্র্যাটেজিস্ট
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                আমি রহমতুল্লাহ জিসান, ছোট এবং মাঝারি ব্যবসাগুলোকে AI এবং অটোমেশনের মাধ্যমে তাদের বড় প্রতিযোগীদের সাথে পাল্লা দেওয়ার জন্য সিস্টেম তৈরি করি। আমি দেখেছি অনেক ব্যবসাই দারুণ প্রোডাক্ট থাকা সত্ত্বেও ম্যানুয়াল প্রসেসের কারণে পিছিয়ে পড়ে। আমার লক্ষ্য হলো, প্রযুক্তির জটিলতাগুলোকে সহজ করে এমন একটি সিস্টেম তৈরি করা, যা আমার ক্লায়েন্টদের স্বাধীনতা দেয় তাদের ব্যবসার প্রসারের দিকে মনোযোগ দেওয়ার।
              </p>
            </article>
            <article className="glass-card relative overflow-hidden text-center px-10 py-12 shadow-lg transition duration-300 hover:-translate-y-2 animate-on-scroll">
              <Image
                src="https://via.placeholder.com/300"
                alt="শারমিন আক্তার"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-3xl mx-auto mb-6 ring-4 ring-white/70 shadow-xl shadow-teal-500/20"
              />
              <h3 className="text-xl font-bold">শারমিন আক্তার</h3>
              <p className="text-teal-600">মার্কেটিং বিশেষজ্ঞ</p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                ডিজিটাল মার্কেটিংয়ের ক্ষেত্রে ৫ বছরের অভিজ্ঞতা নিয়ে তিনি আমাদের ক্লায়েন্টদের অনলাইন উপস্থিতি বৃদ্ধি করেন।
              </p>
            </article>
            <article className="glass-card relative overflow-hidden text-center px-10 py-12 shadow-lg transition duration-300 hover:-translate-y-2 animate-on-scroll">
              <Image
                src="https://via.placeholder.com/300"
                alt="সাজিদ হাসান"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-3xl mx-auto mb-6 ring-4 ring-white/70 shadow-xl shadow-teal-500/20"
              />
              <h3 className="text-xl font-bold">সাজিদ হাসান</h3>
              <p className="text-teal-600">টেকনিক্যাল লিড</p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                ওয়েব ডেভেলপমেন্ট ও অটোমেশনে দক্ষ সাজিদ আমাদের প্রযুক্তিগত কাজগুলো তদারকি করেন।
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}