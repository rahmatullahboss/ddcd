export default function CaseStudySection() {
  return (
    <section id="case-study" className="section-shell case-section py-24" data-parallax-container>
      <div className="section-backdrop" aria-hidden="true">
        <span className="section-grid"></span>
        <span className="section-orb case-orb-1" data-parallax-depth="0.18"></span>
        <span className="section-orb case-orb-2" data-parallax-depth="0.28"></span>
        <span className="section-pill case-pill" data-parallax-depth="0.12"></span>
      </div>
      <div className="section-content container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-animate="fade-right">
            <span className="badge-soft"><i className="fa-solid fa-video"></i> লাইভ কেইস স্টাডি</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              ই-কমার্স ব্র্যান্ডের জন্য সম্পূর্ণ অটোমেটেড গ্রোথ ইঞ্জিন
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              ফেসবুক মেসেঞ্জার, ওয়েবসাইট, কল সেন্টার এবং পেমেন্ট গেটওয়ে—সব কিছু এক সিস্টেমে যুক্ত করে ৭২% পর্যন্ত লিড-টু-সেল রেট বাড়ানো হয়েছে।
            </p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="rounded-2xl border border-teal-100 bg-white/70 p-5 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">৭২%</p>
                <p className="text-sm text-slate-500">লিড-টু-অর্ডার রেট</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white/70 p-5 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">৩x</p>
                <p className="text-sm text-slate-500">পুনরায় ক্রয় বৃদ্ধি</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://online-bazar.top/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 font-semibold transition duration-300 hover:bg-slate-800" data-animate="fade-up" data-delay="0.05">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> লাইভ ডেমো দেখুন
              </a>
              <a href="https://www.facebook.com/onlinebazarbarguna" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 font-semibold transition duration-300 hover:bg-blue-700" data-animate="fade-up" data-delay="0.1">
                <i className="fab fa-facebook-f"></i> ফেসবুক পেজ
              </a>
              <a href="clinic-demo.html" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-sky-500 text-white px-6 py-3 font-semibold transition duration-300 hover:from-teal-600 hover:to-sky-600" data-animate="fade-up" data-delay="0.15">
                <i className="fa-solid fa-circle-play"></i> ক্লিনিক ডেমো
              </a>
            </div>
          </div>
          <div className="glass-card case-video" data-animate="fade-left">
            <div className="relative w-full pt-[56.25%]">
              <iframe className="absolute inset-0 w-full h-full" src="https://www.loom.com/embed/d7f841578f3344cda179023e683d2e2e?sid=3d051e6d-96f8-4c9a-80a2-77b99122fbd1" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white/70 border border-white/60 rounded-3xl p-6 shadow-sm" data-animate="fade-up" data-delay="0.25">
          <div className="text-left space-y-1">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-[0.35em]">পরবর্তী সাফল্যের গল্প</p>
            <p className="text-lg md:text-xl text-slate-600">আপনার ব্যবসায় একই রকম অটোমেশন স্ট্যাক চাইলে আমাদের সাথে কথা বলুন।</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            <i className="fa-solid fa-comments"></i> কৌশল সেশন বুক করুন
          </a>
        </div>
      </div>
    </section>
  );
}