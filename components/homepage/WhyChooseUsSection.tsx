export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section-shell why-section py-24 text-slate-100" data-parallax-container>
      <div className="section-backdrop" aria-hidden="true">
        <span className="section-grid"></span>
        <span className="section-orb why-orb-1" data-parallax-depth="0.18"></span>
        <span className="section-orb why-orb-2" data-parallax-depth="0.24"></span>
        <span className="section-ring why-ring" data-parallax-depth="0.12"></span>
      </div>
      <div className="section-content container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="section-kicker section-kicker-dark"><i className="fa-solid fa-sparkles text-sky-300"></i> কেন আমরা</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">ফলাফল-কেন্দ্রিক পার্টনারশিপ</h2>
          <p className="text-lg text-slate-200/90">
            আপনার স্ট্র্যাটেজি, অপারেশন ও টেকনোলজি একসাথে কাজ করুক—আমরা এমন সমাধান দিই যা গ্রোথকে টেকসই করে তোলে।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="glass-card-dark p-8 space-y-4" data-animate="fade-up" data-delay="0.05">
            <div className="why-icon">
              <i className="fa-solid fa-brain"></i>
            </div>
            <h3 className="text-xl font-semibold text-white">AI প্রযুক্তিতে বিশেষজ্ঞ</h3>
            <p className="text-slate-200/80 leading-relaxed">
              প্রি-ট্রেইন্ড মডেল ও কাস্টম অটোমেশন দিয়ে গ্রাহক অভিজ্ঞতা স্কেল করি এবং ম্যানুয়াল কাজের সময় কমিয়ে দিই।
            </p>
            <ul className="text-sm text-slate-200/70 space-y-1.5">
              <li><i className="fa-solid fa-check text-teal-300 mr-2"></i> শিল্পভিত্তিক ভাষা ও ফানেল টেমপ্লেট</li>
              <li><i className="fa-solid fa-check text-teal-300 mr-2"></i> ডেটা সিকিউরিটি ও ভল্ট সেটআপ</li>
            </ul>
          </div>
          <div className="glass-card-dark p-8 space-y-4" data-animate="fade-up" data-delay="0.1">
            <div className="why-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3 className="text-xl font-semibold text-white">ডেডিকেটেড গ্রোথ টিম</h3>
            <p className="text-slate-200/80 leading-relaxed">
              কৌশলবিদ, ডিজাইনার ও টেক বিশেষজ্ঞ একই টিমে কাজ করে যাতে আপনার প্রতিটি ক্যাম্পেইনে স্টোরি ও কনভার্সন থাকে।
            </p>
            <ul className="text-sm text-slate-200/70 space-y-1.5">
              <li><i className="fa-solid fa-check text-teal-300 mr-2"></i> মাসিক স্ট্র্যাটেজি ওয়ার্কশপ</li>
              <li><i className="fa-solid fa-check text-teal-300 mr-2"></i> SLA-ভিত্তিক সাপোর্ট ডেক্স</li>
            </ul>
          </div>
          <div className="glass-card-dark p-8 space-y-4" data-animate="fade-up" data-delay="0.15">
            <div className="why-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-semibold text-white">ফলাফল-চালিত পদ্ধতি</h3>
            <p className="text-slate-200/80 leading-relaxed">
              ডেটা মডেলিং, হাইপোথিসিস টেস্টিং ও অ্যানালিটিক্স দিয়ে প্রতিটি ক্যাম্পেইনকে মাপি—যাতে ROI সবসময় দৃশ্যমান থাকে।
            </p>
            <ul className="text-sm text-slate-200/70 space-y-1.5">
              <li><i className="fa-solid fa-check text-teal-300 mr-2"></i> ৪টি গ্রোথ স্প্রিন্ট প্রতি মাসে</li>
              <li><i className="fa-solid fa-check text-teal-300 mr-2"></i> কাস্টম লাইভ ড্যাশবোর্ড</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md" data-animate="fade-up" data-delay="0.25">
            <p className="text-3xl font-bold text-white">১.৮x</p>
            <p className="mt-2 text-sm text-slate-200/80">গড় কনভার্সন বৃদ্ধি</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md" data-animate="fade-up" data-delay="0.3">
            <p className="text-3xl font-bold text-white">২৪/৭</p>
            <p className="mt-2 text-sm text-slate-200/80">লাইভ সাপোর্ট ও মনিটরিং</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md" data-animate="fade-up" data-delay="0.35">
            <p className="text-3xl font-bold text-white">৯৬%</p>
            <p className="mt-2 text-sm text-slate-200/80">রিটেনশন রেট (১২ মাস)</p>
          </div>
        </div>
      </div>
    </section>
  );
}