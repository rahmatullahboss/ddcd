import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    slug: 'digital-marketing-trends-2025',
    title: 'ডিজিটাল মার্কেটিং এর ভবিষ্যৎ: ২০২৫ সালের সেরা ৫টি ট্রেন্ড',
    description: 'ডিজিটাল মার্কেটিং এর জগত প্রতিনিয়ত পরিবর্তনশীল। যা আজ কার্যকর, কাল তা পুরনো হয়ে যেতে পারে। সফলভাবে ব্যবসায় টিকে থাকতে হলে আপনাকে সময়ের চেয়ে এক ধাপ এগিয়ে থাকতে হবে...',
    date: '২৩ আগস্ট, ২০২৫',
    readTime: '৫ মিনিট পঠন',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1470&auto=format&fit=crop',
    featured: true,
  },
  {
    slug: 'post1',
    title: 'ছোট ব্যবসা অনলাইনে সফল করার ১০টি অব্যর্থ কৌশল',
    description: 'আজকের ডিজিটাল যুগে, একটি ছোট ব্যবসার সফলতা অনেকাংশে নির্ভর করে তার অনলাইন উপস্থিতির ওপর...',
    date: '১৬ আগস্ট, ২০২৫',
    readTime: '৭ মিনিট পঠন',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e2775d2?q=80&w=1470&auto=format&fit=crop',
  },
  {
    slug: 'ai-chatbot-business-growth',
    title: 'AI চ্যাটবট: আপনার ব্যবসার গ্রোথ ইঞ্জিন',
    description: 'আপনার ব্যবসার খরচ কমাতে চান? বিক্রি বাড়াতে চান? এবং গ্রাহকদের ২৪/৭ সাপোর্ট দিতে চান? উত্তরটি হলো AI চ্যাটবট...',
    date: '১৪ আগস্ট, ২০২৫',
    readTime: '৬ মিনিট পঠন',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    slug: 'social-media-for-business',
    title: 'ব্যবসা অনুযায়ী সোশ্যাল মিডিয়া: ফেসবুক, ইনস্টাগ্রাম নাকি লিংকডইন?',
    description: 'প্রতিটি ব্যবসাই চায় সোশ্যাল মিডিয়ার মাধ্যমে গ্রাহকদের কাছে পৌঁছাতে। কিন্তু সব প্ল্যাটফর্ম সব ব্যবসার জন্য সমানভাবে কার্যকর নয়...',
    date: '১০ আগস্ট, ২০২৫',
    readTime: '৪ মিনিট পঠন',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop',
  },
];

const featuredPost = posts.find(p => p.featured);
const otherPosts = posts.filter(p => !p.featured);

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero relative">
        <div className="hero-gradient" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="hero-kicker inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 shadow-sm shadow-teal-200/60 backdrop-blur">
              আমাদের ব্লগ থেকে জানুন
            </span>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              আমাদের ব্লগ থেকে জানুন
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0">
              ডিজিটাল মার্কেটিং এবং ব্যবসার সর্বাধুনিক কৌশল সম্পর্কে আপডেট থাকুন।
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="container mx-auto px-6 section-content">
          {featuredPost && (
            <div className="glass-card relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-10 py-12 shadow-xl mb-16 animate-on-scroll">
              <div className="order-2 lg:order-1">
                <p className="text-teal-600 font-semibold mb-2">সর্বশেষ পোস্ট</p>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{featuredPost.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{featuredPost.description}</p>
                <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-2">
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">&bull;</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-teal-500/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  পুরোটা পড়ুন &rarr;
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-35px_rgba(15,23,42,0.45)]">
                  <Image src={featuredPost.image} alt={featuredPost.title} width={600} height={400} className="w-full h-80 object-cover" />
                </div>
              </div>
            </div>
          )}

          <div className="card-grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {otherPosts.map(post => (
              <article key={post.slug} className="glass-card overflow-hidden transition duration-300 hover:-translate-y-2 animate-on-scroll">
                <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-900">{post.title}</h3>
                  <p className="text-slate-600 leading-relaxed line-clamp-3">{post.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 pt-4 border-t border-white/60">
                    <span>{post.date}</span>
                    <span className="mx-2">&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-teal-700 rounded-full border border-teal-200/70 bg-white/70 shadow-sm shadow-teal-200/60 transition duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-600">
                    পড়ুন
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}