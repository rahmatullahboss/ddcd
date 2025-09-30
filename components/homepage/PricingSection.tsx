"use client"

export default function PricingSection() {
  const handleOrderClick = (packageName: string) => {
    const modal = document.getElementById('order-modal');
    const packageNameInput = document.getElementById('package-name') as HTMLInputElement;
    if (modal && packageNameInput) {
      packageNameInput.value = packageName;
      modal.classList.remove('hidden');
    }
  };

  return (
    <section id="pricing" className="section-shell pricing-section py-24" data-parallax-container>
      <div className="section-backdrop" aria-hidden="true">
        <span className="section-grid"></span>
        <span className="section-orb pricing-orb-1" data-parallax-depth="0.2"></span>
        <span className="section-orb pricing-orb-2" data-parallax-depth="0.26"></span>
      </div>
      <div className="section-content container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="section-kicker"><i className="fa-solid fa-box-open text-teal-500"></i> সলিউশনসমূহ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">প্রয়োজন অনুযায়ী স্কেলযোগ্য প্যাকেজ</h2>
          <p className="text-lg text-slate-600">
            ROI ভিত্তিক মূল্য নির্ধারণ, কাস্টম ফিচার এবং ডেডিকেটেড সাপোর্ট—আপনার ব্যবসার ধরণ অনুযায়ী কাঠামো তৈরি করি।
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          <div className="glass-card pricing-card" data-animate="fade-up" data-delay="0.05">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 text-center">ফাউন্ডেশন প্যাকেজ</h3>
              <p className="text-center text-slate-500">স্টার্টআপ বা লোকাল ব্যবসার জন্য সঠিক শুরু</p>
              <div className="text-center my-6">
                <p className="text-3xl font-bold text-slate-900">ROI ভিত্তিক প্রাইসিং</p>
                <p className="text-sm text-slate-500 mt-2">অন্তর্ভুক্ত সেটআপ ও সাপোর্ট</p>
              </div>
              <ul className="space-y-2.5 text-slate-600">
                <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> ফেসবুক পেজ ও বট সেটআপ</li>
                <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> ২৪/৭ ইনবক্স ম্যানেজমেন্ট</li>
                <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> ১টি ল্যান্ডিং পেজ ও ফর্ম</li>
                <li><i className="fa-solid fa-minus-circle text-slate-400 mr-2"></i> উন্নত AI এজেন্ট (অ্যাড-অন)</li>
              </ul>
              <button onClick={() => handleOrderClick('ফাউন্ডেশন প্যাকেজ')} className="order-btn mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full border border-teal-500 px-6 py-3 font-semibold text-teal-600 transition duration-300 hover:bg-teal-500 hover:text-white">স্ট্র্যাটেজি সেশন বুক করুন</button>
            </div>
          </div>
          <div className="glass-card pricing-card highlight" data-animate="fade-up" data-delay="0.1">
            <div className="flex justify-center">
              <span className="bg-white/90 text-teal-600 text-xs font-bold px-3 py-1 rounded-full uppercase">সর্বাধিক জনপ্রিয়</span>
            </div>
            <div className="space-y-4 mt-4">
              <h3 className="text-2xl font-bold text-white text-center">গ্রোথ ইঞ্জিন প্যাকেজ</h3>
              <p className="text-center text-teal-100">ই-কমার্স, ক্লিনিক বা সার্ভিস ব্যবসার জন্য সর্বাঙ্গীণ সলিউশন</p>
              <div className="text-center my-6">
                <p className="text-3xl font-bold text-white">ROI ভিত্তিক প্রাইসিং</p>
                <p className="text-sm text-teal-100 mt-2">অটোমেশন + মার্কেটিং + রিপোর্টিং</p>
              </div>
              <ul className="space-y-2.5 text-teal-50">
                <li><i className="fa-solid fa-circle-check text-white mr-2"></i> মাল্টিচ্যানেল অটোমেশন</li>
                <li><i className="fa-solid fa-circle-check text-white mr-2"></i> অনলাইন সেলস ও লিড প্ল্যাটফর্ম</li>
                <li><i className="fa-solid fa-circle-check text-white mr-2"></i> ২৪/৭ কাস্টমার সার্ভিস AI</li>
                <li><i className="fa-solid fa-circle-check text-white mr-2"></i> SEO + Performance ক্যাম্পেইন</li>
                <li><i className="fa-solid fa-circle-check text-white mr-2"></i> মাসিক গ্রোথ রিপোর্ট</li>
              </ul>
              <button onClick={() => handleOrderClick('গ্রোথ ইঞ্জিন প্যাকেজ')} className="order-btn mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-teal-600 transition duration-300 hover:bg-teal-100">স্ট্র্যাটেজি সেশন বুক করুন</button>
            </div>
          </div>
          <div className="glass-card pricing-card" data-animate="fade-up" data-delay="0.15">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 text-center">মার্কেট লিডার প্যাকেজ</h3>
              <p className="text-center text-slate-500">কর্পোরেট বা মাল্টি-ব্রাঞ্চ প্রতিষ্ঠানের জন্য</p>
              <div className="text-center my-6">
                <p className="text-3xl font-bold text-slate-900">ROI ভিত্তিক প্রাইসিং</p>
                <p className="text-sm text-slate-500 mt-2">এন্টারপ্রাইজ ইন্টিগ্রেশনসহ</p>
              </div>
              <ul className="space-y-2.5 text-slate-600">
                <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> সম্পূর্ণ গ্রোথ ইঞ্জিন প্যাকেজ</li>
                <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> কাস্টম CRM ও ERP ইন্টিগ্রেশন</li>
                <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> মাল্টি-লোকেশন অ্যানালিটিক্স</li>
                <li><i className="fa-solid fa-circle-check text-teal-500 mr-2"></i> ডেডিকেটেড গ্রোথ ম্যানেজার</li>
              </ul>
              <button onClick={() => handleOrderClick('মার্কেট লিডার প্যাকেজ')} className="order-btn mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full border border-teal-500 px-6 py-3 font-semibold text-teal-600 transition duration-300 hover:bg-teal-500 hover:text-white">স্ট্র্যাটেজি সেশন বুক করুন</button>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-slate-500" data-animate="fade-up" data-delay="0.22">
          <p>বড় বা কাস্টম প্রকল্পের জন্য <a href="#contact" className="font-semibold text-teal-600 underline-offset-4 hover:underline">বিশেষ প্রস্তাব</a> অনুরোধ করুন।</p>
        </div>
      </div>
    </section>
  );
}