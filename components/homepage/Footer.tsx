"use client"

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-teal-500 mb-4">ডিজিটাল কেয়ার সলিউশনস</h3>
            <p className="text-gray-400">
              আমরা বাংলাদেশের ব্যবসা প্রতিষ্ঠানগুলোকে আধুনিক প্রযুক্তির মাধ্যমে ডিজিটাল জগতে সফল হতে সাহায্য করি। আমাদের লক্ষ্য হলো আপনার এবং আপনার কাস্টমারের মধ্যে একটি নির্ভরযোগ্য ডিজিটাল সেতু তৈরি করা।
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-2">
              <li><a href="about.html" className="text-gray-400 hover:text-white">আমাদের সম্পর্কে</a></li>
              <li><a href="services.html" className="text-gray-400 hover:text-white">সার্ভিসসমূহ</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">সলিউশন</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white">আমাদের প্রক্রিয়া</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white">সাধারণ জিজ্ঞাসা</a></li>
            </ul>
          </div>
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start"><i className="fas fa-map-marker-alt mt-1 mr-2"></i>ডিকেপি রোড, বরগুনা</li>
              <li className="flex items-start"><i className="fas fa-phone mt-1 mr-2"></i>01639590392</li>
              <li className="flex items-start"><i className="fas fa-envelope mt-1 mr-2"></i>rahmatullahzisan@gmail.com</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in fa-lg"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube fa-lg"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; <span id="currentYear">{year}</span> ডিজিটাল কেয়ার সলিউশনস। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}