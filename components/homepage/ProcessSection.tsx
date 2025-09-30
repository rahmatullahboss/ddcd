export default function ProcessSection() {
  return (
    <section id="process" className="section-shell process-section py-24" data-parallax-container>
      <div className="section-backdrop" aria-hidden="true">
        <span className="section-grid"></span>
        <span className="section-orb process-orb-1" data-parallax-depth="0.18"></span>
        <span className="section-orb process-orb-2" data-parallax-depth="0.26"></span>
        <span className="section-pill process-pill" data-parallax-depth="0.14"></span>
      </div>
      <div className="section-content container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <span className="section-kicker"><i className="fa-solid fa-timeline text-teal-500"></i> আমাদের প্রক্রিয়া</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">স্বচ্ছ ও ফলাফল-চালিত কাজের ধাপ</h2>
          <p className="text-lg text-slate-600">
            স্ট্র্যাটেজি থেকে সাপোর্ট—প্রতিটি ধাপে আমরা আপনার টিমের সাথে সমন্বয়ে কাজ করি যাতে অটোমেশন ও মার্কেটিং বাস্তব ফল দেয়।
          </p>
        </div>
        <div className="relative">
          <div className="process-track hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="glass-card process-card" data-animate="fade-up" data-delay="0.05">
              <div className="process-step space-y-4">
                <div className="process-icon">
                  <span className="process-step-number">১</span>
                  <i className="fa-solid fa-magnifying-glass-chart"></i>
                  <span className="process-orbit" aria-hidden="true"></span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">ডিসকভারি ও স্ট্র্যাটেজি</h3>
                <p className="text-slate-600 leading-relaxed">
                  ব্যবসার লক্ষ্য, ক্রেতার যাত্রা এবং বিদ্যমান সিস্টেম বিশ্লেষণ করে একটি ডেটা-চালিত রোডম্যাপ তৈরি করি।
                </p>
              </div>
            </div>
            <div className="glass-card process-card" data-animate="fade-up" data-delay="0.1">
              <div className="process-step space-y-4">
                <div className="process-icon">
                  <span className="process-step-number">২</span>
                  <i className="fa-solid fa-gears"></i>
                  <span className="process-orbit" aria-hidden="true"></span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">অনবোর্ডিং ও অটোমেশন</h3>
                <p className="text-slate-600 leading-relaxed">
                  ডেটা কানেকশন, টুল ইন্টিগ্রেশন এবং কন্টেন্ট লাইব্রেরি সেটআপ করে আপনার টিমকে প্রস্তুত করি।
                </p>
              </div>
            </div>
            <div className="glass-card process-card" data-animate="fade-up" data-delay="0.15">
              <div className="process-step space-y-4">
                <div className="process-icon">
                  <span className="process-step-number">৩</span>
                  <i className="fa-solid fa-rocket"></i>
                  <span className="process-orbit" aria-hidden="true"></span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">ডেভেলপমেন্ট ও লঞ্চ</h3>
                <p className="text-slate-600 leading-relaxed">
                  ওয়েব, চ্যাটবট ও অটোমেশন ওয়ার্কফ্লো তৈরি করে A/B টেস্টসহ লঞ্চ করি যাতে দ্রুত শেখা যায়।
                </p>
              </div>
            </div>
            <div className="glass-card process-card" data-animate="fade-up" data-delay="0.2">
              <div className="process-step space-y-4">
                <div className="process-icon">
                  <span className="process-step-number">৪</span>
                  <i className="fa-solid fa-chart-line"></i>
                  <span className="process-orbit" aria-hidden="true"></span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">ইনসাইটস ও স্কেল</h3>
                <p className="text-slate-600 leading-relaxed">
                  মাসিক গ্রোথ রিপোর্ট, কনভার্সন অপটিমাইজেশন এবং নতুন ক্যাম্পেইন প্ল্যান দিয়ে ধারাবাহিক উন্নয়ন নিশ্চিত করি।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}