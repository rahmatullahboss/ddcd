import Header from '@/components/homepage/Header';
import Footer from '@/components/homepage/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}