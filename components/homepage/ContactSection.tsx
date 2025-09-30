"use client"

import { useState } from 'react';

export default function ContactSection() {
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwYe6g5vR8bkpk-I9TZ2_ny18LK943kKjBTd0RiSuL-roumoF4U-pj2_x2fGazBxxhB/exec';

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      const data = await response.json();
      if (data.result === 'success') {
        setFormMessage('আপনার বার্তা সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!');
        form.reset();
      } else {
        throw new Error('Something went wrong. Server response: ' + data.message);
      }
    } catch (error: any) {
      console.error('Error!', error.message);
      setFormMessage('একটি সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell contact-section py-24" data-parallax-container>
      <div className="section-backdrop" aria-hidden="true">
        <span className="section-grid"></span>
        <span className="section-orb contact-orb-1" data-parallax-depth="0.22"></span>
        <span className="section-orb contact-orb-2" data-parallax-depth="0.3"></span>
        <span className="section-ring contact-ring" data-parallax-depth="0.12"></span>
      </div>
      <div className="section-content container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6" data-animate="fade-right">
            <span className="contact-highlight"><i className="fa-solid fa-headset"></i> ২৪/৭ গ্রোথ সাপোর্ট</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              আপনার ব্যবসা প্রতিষ্ঠানের ডিজিটাল রূপান্তরে আমরা আছি পাশে
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed">
              কৌশল নির্ধারণ, অটোমেশন সেটআপ অথবা নতুন ক্যাম্পেইনের পরামর্শ—সবকিছু নিয়ে আমাদের টিমের সাথে কথা বলুন। বিনামূল্যে কৌশল সেশন বুক করলে ৩০ মিনিটের ডায়াগনস্টিক পাবেন।
            </p>
            <div className="contact-links text-teal-100">
              <a href="tel:01639590392" className="contact-link" aria-label="কল করুন ০১৬৩৯৫৯০৩৯২">
                <i className="fa-solid fa-phone-volume"></i>
                <span>০১৬৩৯৫৯০৩৯২</span>
              </a>
              <a href="mailto:rahmatullahzisan@gmail.com" className="contact-link" aria-label="ইমেইল করুন rahmatullahzisan@gmail.com">
                <i className="fa-solid fa-envelope-open-text"></i>
                <span>rahmatullahzisan@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="glass-card p-8 text-slate-900" data-animate="fade-left">
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">যোগাযোগ করুন</h3>
            <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-600">আপনার নাম</label>
                <input type="text" id="name" name="name" placeholder="আপনার সম্পূর্ণ নাম লিখুন" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
              </div>
              <div>
                <label htmlFor="hospital" className="block text-sm font-semibold mb-2 text-slate-600">আপনার ব্যবসা/প্রতিষ্ঠানের নাম</label>
                <input type="text" id="hospital" name="hospital" placeholder="আপনার প্রতিষ্ঠানের নাম" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-slate-600">ফোন নম্বর</label>
                <input type="tel" id="phone" name="phone" placeholder="আপনার ফোন নম্বর" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-600">আপনার বার্তা</label>
                <textarea id="message" name="message" rows={4} placeholder="আপনার কী জানতে চান তা লিখুন..." className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-6 py-3 font-semibold text-white transition duration-300 hover:from-teal-600 hover:to-sky-600" disabled={isSubmitting}>
                {isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
              </button>
              <p className={`text-center text-sm ${formMessage.includes('ধন্যবাদ') ? 'text-green-600' : 'text-red-600'}`}>{formMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}