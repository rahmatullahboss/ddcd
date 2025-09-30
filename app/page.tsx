import { Metadata } from 'next'
import Header from '@/components/homepage/Header'
import HeroSection from '@/components/homepage/HeroSection'
import ServicesSection from '@/components/homepage/ServicesSection'
import WhyChooseUsSection from '@/components/homepage/WhyChooseUsSection'
import CaseStudySection from '@/components/homepage/CaseStudySection'
import PricingSection from '@/components/homepage/PricingSection'
import ProcessSection from '@/components/homepage/ProcessSection'
import FaqSection from '@/components/homepage/FaqSection'
import ContactSection from '@/components/homepage/ContactSection'
import OrderModal from '@/components/homepage/OrderModal'
import Footer from '@/components/homepage/Footer'
import FloatingContactButtons from '@/components/homepage/FloatingContactButtons'
import GlobalAnimations from '@/components/homepage/GlobalAnimations'

export const metadata: Metadata = {
  title: 'ডিজিটাল কেয়ার সলিউশনস | ব্যবসা প্রতিষ্ঠানের জন্য আধুনিক ডিজিটাল মার্কেটিং',
  description: 'ব্যবসা প্রতিষ্ঠানের জন্য AI-নির্ভর ডিজিটাল মার্কেটিং, ২৪/৭ সেলস মেশিন ওয়েবসাইট, স্বয়ংক্রিয় লিড জেনারেশন ও কখনো লিড হারাবেন না AI এজেন্ট',
  keywords: ['ডিজিটাল মার্কেটিং', 'ওয়েবসাইট', 'AI এজেন্ট', 'ব্যবসা', 'হাসপাতাল'],
  openGraph: {
    title: 'ডিজিটাল কেয়ার সলিউশনস',
    description: 'আপনার ব্যবসার ডিজিটাল রূপান্তর এখানেই শুরু।',
    images: ['/og-image.png'],
  },
}

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CaseStudySection />
        <PricingSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <OrderModal />
      <Footer />
      <FloatingContactButtons />
      <GlobalAnimations />
    </div>
  )
}