"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

  const navLinks = [
    { href: '/about', text: 'আমাদের সম্পর্কে' },
    { href: '/services', text: 'সার্ভিসসমূহ' },
    { href: '/blog', text: 'ব্লগ' },
    { href: '/clinic-demo', text: 'ক্লিনিক ডেমো' },
    { href: '/affiliate', text: 'অ্যাফিলিয়েট' },
    { href: '/privacy-policy', text: 'গোপনীয়তা নীতি' },
  ];

  return (
    <header className="bg-white/30 backdrop-blur-md border border-white/20 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" id="site-name" className={`text-2xl font-bold ${siteNameColor}`}>
          ডিজিটাল কেয়ার
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-teal-600">
              {link.text}
            </Link>
          ))}
          <Link href="/#contact" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300">
            যোগাযোগ করুন
          </Link>
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
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="block text-gray-600 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
            {link.text}
          </Link>
        ))}
        <Link href="/#contact" className="block bg-teal-500 text-white text-center px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300" onClick={() => setMenuOpen(false)}>
          যোগাযোগ করুন
        </Link>
      </div>
    </header>
  );
}