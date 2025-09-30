"use client"

import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteNameColor, setSiteNameColor] = useState('text-teal-600');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (!header) return;

      const whyUsSection = document.getElementById('why-us');
      const contactSection = document.getElementById('contact');
      const footer = document.querySelector('footer');

      const headerHeight = header.offsetHeight;
      const isOverDarkSection = [whyUsSection, contactSection, footer].some(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= headerHeight && rect.bottom >= headerHeight;
      });

      if (isOverDarkSection) {
        setSiteNameColor('text-white');
      } else {
        setSiteNameColor('text-teal-600');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className="bg-white/30 backdrop-blur-md border border-white/20 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" id="site-name" className={`text-2xl font-bold ${siteNameColor}`}>
          ডিজিটাল কেয়ার
        </a>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="about.html" className="text-gray-600 hover:text-teal-600">আমাদের সম্পর্কে</a>
          <a href="services.html" className="text-gray-600 hover:text-teal-600">সার্ভিসসমূহ</a>
          <a href="blog.html" className="text-gray-600 hover:text-teal-600">ব্লগ</a>
          <a href="clinic-demo.html" className="text-gray-600 hover:text-teal-600">ক্লিনিক ডেমো</a>
          <a href="affiliate.html" className="text-gray-600 hover:text-teal-600">অ্যাফিলিয়েট</a>
          <a href="privacy-policy.html" className="text-gray-600 hover:text-teal-600">গোপনীয়তা নীতি</a>
          <a href="#contact" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">যোগাযোগ করুন</a>
        </div>
        <div className="md:hidden">
          <button id="menu-btn" className="text-gray-600 focus:outline-none" aria-label="মেনু খুলুন বা বন্ধ করুন" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden ${menuOpen ? '' : 'hidden'} px-6 pb-4 space-y-2`}>
        <a href="about.html" className="block text-gray-600 hover:text-teal-600">আমাদের সম্পর্কে</a>
        <a href="services.html" className="block text-gray-600 hover:text-teal-600">সার্ভিসসমূহ</a>
        <a href="blog.html" className="block text-gray-600 hover:text-teal-600">ব্লগ</a>
        <a href="clinic-demo.html" className="block text-gray-600 hover:text-teal-600">ক্লিনিক ডেমো</a>
        <a href="affiliate.html" className="block text-gray-600 hover:text-teal-600">অ্যাফিলিয়েট</a>
        <a href="privacy-policy.html" className="block text-gray-600 hover:text-teal-600">গোপনীয়তা নীতি</a>
        <a href="#contact" className="block bg-teal-500 text-white text-center px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">যোগাযোগ করুন</a>
      </div>
    </header>
  );
}