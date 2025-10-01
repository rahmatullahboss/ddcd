export default function ServicesPage() {
  const services = [
    {
      title: "স্মার্ট ওয়েবসাইট ও সেলস ফানেল",
      description: "আমরা শুধু ওয়েবসাইট বানাই না; আমরা এমন একটি স্বয়ংক্রিয় সিস্টেম তৈরি করি যা আপনার জন্য ২৪/৭ গ্রাহক খুঁজে বের করে, তাদের তথ্য সংগ্রহ করে এবং বিক্রয় নিশ্চিত করে।",
      icon: (
        <svg className="w-8 h-8 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      href: "/services/web-development",
    },
    {
      title: "সম্পূর্ণ ফেসবুক পেজ ম্যানেজমেন্ট",
      description: "পেজ সেটআপ থেকে কনটেন্ট তৈরি, নিয়মিত পোস্টিং, বিজ্ঞাপন পরিচালনা এবং মেসেজ অটোমেশন পর্যন্ত ফেসবুকের সকল দায়িত্ব আমাদের। আমরা আপনার পেজকে একটি জীবন্ত কমিউনিটিতে পরিণত করি যা বিক্রি বাড়াতে সাহায্য করে।",
      icon: (
        <svg className="w-8 h-8 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
        </svg>
      ),
      href: "/services/facebook-automation",
    },
    {
      title: "২৪/৭ AI সেলস এজেন্ট",
      description: "ছুটির দিনে বা গভীর রাতেও কোনো গ্রাহককে আর অপেক্ষা করতে হয় না। আমাদের AI এজেন্ট তাৎক্ষণিক উত্তর দিয়ে তথ্য সংগ্রহ করে এবং প্রতিটি সুযোগকে বিক্রিতে রূপান্তর করার জন্য প্রস্তুত করে।",
      icon: (
        <svg className="w-8 h-8 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
      href: "/services/ai-chatbot",
    },
    {
      title: "ডিজিটাল মার্কেটিং ও বিজ্ঞাপন",
      description: "অনুমানের ওপর ভিত্তি করে আর মার্কেটিং নয়। আমরা ডেটা বিশ্লেষণ করে এমন বিজ্ঞাপন ও SEO কৌশল তৈরি করি যা প্রতিটি টাকায় আপনার জন্য সর্বোচ্চ লাভ নিশ্চিত করে।",
      icon: (
        <svg className="w-8 h-8 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
        </svg>
      ),
      href: "/services/digital-marketing",
    },
  ];

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
              আমাদের সার্ভিসসমূহ
            </span>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              আমাদের সার্ভিসসমূহ
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0">
              হাসপাতাল ও ক্লিনিকের জন্য আমাদের প্রদানকৃত ডিজিটাল সেবাগুলো দেখুন
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
          <div className="card-grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <a key={index} href={service.href} className="group glass-card relative overflow-hidden px-10 py-12 text-left transition duration-300 hover:-translate-y-2 animate-on-scroll">
                <div className="mb-8 flex items-center justify-start">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-50 via-white to-emerald-50 text-teal-600 shadow-[0_18px_45px_-25px_rgba(15,118,110,0.8)]">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-teal-600">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}