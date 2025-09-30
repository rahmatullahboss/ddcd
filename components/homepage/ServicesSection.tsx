"use client"

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell services-section py-24" data-parallax-container>
      <div className="section-backdrop" aria-hidden="true">
        <span className="section-grid"></span>
        <span className="section-orb services-orb-1" data-parallax-depth="0.18"></span>
        <span className="section-orb services-orb-2" data-parallax-depth="0.24"></span>
        <span className="section-pill services-pill" data-parallax-depth="0.1"></span>
        <div className="floating-chip hidden md:flex" style={{top: '10%', left: '6%'}} data-parallax-depth="0.22">
          <i className="fa-solid fa-sparkles"></i>
          ৯৭% গ্রাহক সন্তুষ্টি
        </div>
        <div className="floating-chip hidden md:flex" style={{bottom: '12%', right: '8%'}} data-parallax-depth="0.16">
          <i className="fa-solid fa-rocket"></i>
          গড় ROI ৩.৫x
        </div>
      </div>
      <div className="section-content container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <span className="section-kicker"><i className="fa-solid fa-layer-group text-teal-500"></i> আমাদের সেবা</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            আপনার ব্যবসার জন্য আমাদের স্বয়ংক্রিয় সমাধান
          </h2>
          <p className="text-lg text-slate-600">
            আমরা শুধু সার্ভিস দিই না; আমরা এমন সিস্টেম তৈরি করি যা আপনার সময় বাঁচায়, গ্রাহক বাড়ায় এবং ব্যবসাকে স্বয়ংক্রিয়ভাবে এগিয়ে নিয়ে যায়।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div onClick={() => window.location.href='services/web-development.html'} className="glass-card service-card group cursor-pointer" data-animate="fade-up" data-delay="0.05">
            <div className="service-card-body text-left">
              <div className="service-card-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <span className="service-card-badge"><i className="fa-solid fa-sparkles"></i> ওয়েব + ফানেল</span>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teাল-600 transition-colors">স্মার্ট ওয়েবসাইট ও সেলস ফানেল</h3>
                <p className="text-slate-600 leading-relaxed">
                  আমরা শুধু ওয়েবসাইট বানাই না; আমরা এমন একটি স্বয়ংক্রিয় সিস্টেম তৈরি করি যা আপনার জন্য ২৪/৭ গ্রাহক খুঁজে বের করে, তাদের তথ্য সংগ্রহ করে এবং বিক্রয় নিশ্চিত করে।
                </p>
                <ul className="text-sm text-slate-500 space-y-1.5">
                  <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> কনভার্সন-কেন্দ্রিক ল্যান্ডিং পেজ ও ফানেল</li>
                  <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> CRM ও অটোমেটেড ফলো-আপ ইন্টিগ্রেশন</li>
                </ul>
              </div>
              <div className="mt-auto flex items-center text-teal-600 font-semibold group-hover:gap-2 transition-all">
                আরও জানুন <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
              </div>
            </div>
          </div>
          <div onClick={() => window.location.href='services/facebook-automation.html'} className="glass-card service-card group cursor-pointer" data-animate="fade-up" data-delay="0.1">
            <div className="service-card-body text-left">
              <div className="service-card-icon">
                <i className="fa-solid fa-message-bot"></i>
              </div>
              <span className="service-card-badge"><i className="fa-solid fa-arrows-rotate"></i> পেজ ম্যানেজমেন্ট</span>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teাল-600 transition-colors">সম্পূর্ণ ফেসবুক পেজ ম্যানেজমেন্ট</h3>
                <p className="text-slate-600 leading-relaxed">
                  পেজ সেটআপ থেকে কনটেন্ট তৈরি, নিয়মিত পোস্টিং, বিজ্ঞাপন পরিচালনা এবং মেসেজ অটোমেশন পর্যন্ত ফেসবুকের সকল দায়িত্ব আমাদের।
                </p>
                <ul className="text-sm text-slate-500 space-y-1.5">
                  <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> ব্র্যান্ডেড কনটেন্ট ক্যালেন্ডার ও ক্রিয়েটিভ ডিজাইন</li>
                  <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> ইনবক্স, কমেন্ট ও বিজ্ঞাপন ব্যবস্থাপনা</li>
                </ul>
              </div>
              <div className="mt-auto flex items-center text-teal-600 font-semibold group-hover:gap-2 transition-all">
                সার্ভিস দেখুন <i className="fa-solid fa-arrow-trend-up text-sm"></i>
              </div>
            </div>
          </div>
          <div onClick={() => window.location.href='services/ai-chatbot.html'} className="glass-card service-card group cursor-pointer" data-animate="fade-up" data-delay="0.15">
            <div className="service-card-body text-left">
              <div className="service-card-icon">
                <i className="fa-solid fa-robot"></i>
              </div>
              <span className="service-card-badge"><i className="fa-solid fa-headset"></i> এআই সেলস</span>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teাল-600 transition-colors">২৪/৭ AI সেলস এজেন্ট</h3>
                <p className="text-slate-600 leading-relaxed">
                  ছুটির দিনে বা গভীর রাতেও কোনো গ্রাহককে আর অপেক্ষা করতে হবে না। আমাদের AI এজেন্ট তাৎক্ষণিক উত্তর দিয়ে প্রতিটি সুযোগকে বিক্রিতে রূপান্তর করে।
                </p>
                <ul className="text-sm text-slate-500 space-y-1.5">
                  <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> তাৎক্ষণিক কথোপকথন ও ফলো-আপ</li>
                  <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> সেলস টিমের জন্য লিড হস্তান্তর ও রিপোর্টিং</li>
                </ul>
              </div>
              <div className="mt-auto flex items-center text-teal-600 font-semibold group-hover:gap-2 transition-all">
                ডেমো দেখুন <i className="fa-solid fa-circle-play text-sm"></i>
              </div>
            </div>
          </div>
          <div onClick={() => window.location.href='services/digital-marketing.html'} className="glass-card service-card group cursor-pointer" data-animate="fade-up" data-delay="0.2">
            <div className="service-card-body text-left">
              <div className="service-card-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <span className="service-card-badge"><i className="fa-solid fa-chart-simple"></i> ডেটা গ্রোথ</span>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">ডিজিটাল মার্কেটিং ও বিজ্ঞাপন</h3>
                <p className="text-slate-600 leading-relaxed">
                  অনুমানের ওপর ভিত্তি করে আর মার্কেটিং নয়। আমরা ডেটা বিশ্লেষণ করে এমন বিজ্ঞাপন ও SEO কৌশল তৈরি করি যা প্রতিটি টাকায় সর্বোচ্চ লাভ নিশ্চিত করে।
                </p>
                <ul className="text-sm text-slate-500 space-y-1.5">
                  <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> ডেটা-চালিত বিজ্ঞাপন ও SEO কৌশল</li>
                  <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> মাসিক ROI বিশ্লেষণ ও স্ট্র্যাটেজি আপডেট</li>
                </ul>
              </div>
              <div className="mt-auto flex items-center text-teal-600 font-semibold group-hover:gap-2 transition-all">
                স্ট্র্যাটেজি দেখুন <i className="fa-solid fa-arrow-right-long text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}