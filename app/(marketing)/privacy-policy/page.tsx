export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="page-hero relative">
        <div className="hero-gradient" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="hero-kicker inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 shadow-sm shadow-teal-200/60 backdrop-blur">
              গোপনীয়তা নীতি
            </span>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              গোপনীয়তা নীতি
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0">
              ডিজিটাল কেয়ার সলিউশনসে আমরা আপনার তথ্যের গোপনীয়তাকে সর্বোচ্চ অগ্রাধিকার দেই। নিচের নীতিমালায় ব্যাখ্যা করা হয়েছে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার ও সুরক্ষা করি।
            </p>
            <div className="hero-cta flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
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
        <div className="container mx-auto px-6 section-content max-w-4xl space-y-10">
          <div className="frosted-panel animate-on-scroll">
            <div className="richtext space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                ১. আমরা কোন তথ্য সংগ্রহ করি?
              </h2>
              <p>
                আপনি যখন আমাদের ওয়েবসাইটে ফর্ম পূরণ করেন, অ্যাফিলিয়েট প্রোগ্রামে যোগ দেন বা সরাসরি যোগাযোগ করেন তখন আমরা আপনার প্রদত্ত ব্যক্তিগত তথ্য (নাম, ইমেইল, ফোন নম্বর, প্রতিষ্ঠানের নাম ইত্যাদি) সংগ্রহ করি। এছাড়াও, অ্যানালিটিক্স টুলের মাধ্যমে ব্রাউজার, ডিভাইস ও ব্যবহার আচরণের ডেটা সংগ্রহ হতে পারে।
              </p>
            </div>
          </div>

          <div className="frosted-panel animate-on-scroll">
            <div className="richtext space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                ২. তথ্য ব্যবহারের উদ্দেশ্য
              </h2>
              <p>
                সংগৃহীত তথ্য মূলতঃ সেবা প্রদান, গ্রাহক সাপোর্ট, অফার বা আপডেট জানানো এবং আমাদের সেবার মান উন্নত করার উদ্দেশ্যে ব্যবহার করা হয়। আমরা কখনোই আপনার তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা অবৈধভাবে ব্যবহার করি না।
              </p>
            </div>
          </div>

          <div className="frosted-panel animate-on-scroll">
            <div className="richtext space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                ৩. কুকিজ ও ট্র্যাকিং প্রযুক্তি
              </h2>
              <p>
                ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে ও ওয়েবসাইটের কার্যকারিতা বিশ্লেষণ করতে আমরা সীমিত পরিসরে কুকিজ ব্যবহার করি। আপনি চাইলে ব্রাউজার সেটিংস থেকে কুকিজ নিষ্ক্রিয় করতে পারেন, তবে এতে ওয়েবসাইটের কিছু ফিচার সঠিকভাবে কাজ নাও করতে পারে।
              </p>
            </div>
          </div>

          <div className="frosted-panel animate-on-scroll">
            <div className="richtext space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                ৪. তথ্যের সুরক্ষা
              </h2>
              <p>
                আপনার ব্যক্তিগত তথ্য অননুমোদিত অ্যাক্সেস, পরিবর্তন বা প্রকাশ থেকে সুরক্ষিত রাখতে আমরা আধুনিক নিরাপত্তা ব্যবস্থা ব্যবহার করি। তবুও ইন্টারনেটের মাধ্যমে তথ্য আদান-প্রদানের ক্ষেত্রে শতভাগ নিরাপত্তা নিশ্চিত করা সম্ভব নয়—সেক্ষেত্রে আপনি সচেতনভাবে তথ্য শেয়ার করার অনুরোধ করছি।
              </p>
            </div>
          </div>

          <div className="frosted-panel animate-on-scroll">
            <div className="richtext space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                ৫. তৃতীয় পক্ষের সেবা
              </h2>
              <p>
                আমরা পেমেন্ট গেটওয়ে, অ্যানালিটিক্স বা অটোমেশন টুলের মতো তৃতীয় পক্ষের সেবা ব্যবহার করতে পারি। এসব সেবা প্রদানকারীর নিজস্ব গোপনীয়তা নীতি রয়েছে এবং তারা আপনার তথ্য আলাদা করে সংগ্রহ করতে পারে। আমরা তাদের কার্যক্রম নিয়ন্ত্রণ করতে পারি না, তবে আমাদের চুক্তির আওতায় তথ্যের সুরক্ষা নিশ্চিত করার চেষ্টা করি।
              </p>
            </div>
          </div>

          <div className="frosted-panel animate-on-scroll">
            <div className="richtext space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                ৬. ব্যবহারকারীর অধিকার
              </h2>
              <p>
                আপনি চাইলে আমাদের কাছে থাকা আপনার ব্যক্তিগত তথ্য দেখতে, সংশোধন করতে বা মুছে ফেলতে অনুরোধ করতে পারেন। এছাড়া ভবিষ্যতে আমাদের কাছ থেকে মার্কেটিং বার্তা না পেতে চাইলে যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
              </p>
            </div>
          </div>

          <div className="frosted-panel animate-on-scroll">
            <div className="richtext space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                ৭. নীতিমালার পরিবর্তন
              </h2>
              <p>
                প্রযুক্তি বা আইনগত কারণে এই গোপনীয়তা নীতি সময় সময় পরিবর্তিত হতে পারে। উল্লেখযোগ্য পরিবর্তনের ক্ষেত্রে আমরা ওয়েবসাইটে নোটিশ বা ইমেইলের মাধ্যমে আপনাকে জানাবো।
              </p>
            </div>
          </div>

          <div className="frosted-panel animate-on-scroll">
            <div className="richtext space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                ৮. যোগাযোগের উপায়
              </h2>
              <p>
                আমাদের গোপনীয়তা নীতি সম্পর্কে প্রশ্ন থাকলে বা কোনো অনুরোধ জানাতে চাইলে আমাদের সঙ্গে যোগাযোগ করুন: <strong>rahmatullahzisan@gmail.com</strong> অথবা <strong>01639590392</strong>।
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}