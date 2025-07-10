"use client";
import TypingStatus from "@/components/TypingStatus";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Head from "next/head";
import 'remixicon/fonts/remixicon.css';



export default function Home() {
  const [showIframe, setShowIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");

  useEffect(() => {
    if (showIframe) setIframeLoaded(false);
  }, [showIframe]);

  const handleBookClick = () => {
    setShowCurrencyModal(true);
  };

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setShowCurrencyModal(false);
    setShowIframe(true);
  };

  return (
     <>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
    </Head>
    
      {/* 🌍 Currency Selector Modal - Ultra Premium */}
{showCurrencyModal && (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 sm:px-0">
    <div className="animate-fadeInScale bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-white text-center">

      {/* 🔘 Close button (optional) */}
      <button
        onClick={() => setShowCurrencyModal(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-lg"
        aria-label="Close modal"
      >
        <i className="ri-close-line"></i>
      </button>

      {/* 💎 Modal Content */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <i className="ri-money-dollar-circle-line text-[#00AEEF] text-3xl"></i>
          Choose Currency
        </h2>
        <p className="text-white/70 text-sm">
          Set your preferred currency for flight prices
        </p>
      </div>

      {/* 💸 Currency Options */}
      <div className="flex justify-center gap-4 mb-6">
        {['NGN', 'USD', 'GBP'].map((cur) => (
          <button
            key={cur}
            onClick={() => handleCurrencySelect(cur)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
              selectedCurrency === cur
                ? 'bg-[#00AEEF] border-[#00AEEF] text-white shadow-lg'
                : 'bg-white/10 border-white/30 text-white/80 hover:bg-white/20'
            }`}
          >
            {cur}
          </button>
        ))}
      </div>

      {/* 🚀 Continue Button */}
      <button
  disabled={!selectedCurrency}
  onClick={() => {
    if (selectedCurrency) {
      setShowCurrencyModal(false);
      setShowIframe(true);
    } else {
      alert("Please select a currency before continuing.");
    }
  }}
  className={`w-full py-3 rounded-full font-semibold transition-all ${
    selectedCurrency
      ? 'bg-[#00AEEF] hover:bg-[#0099cc] text-white shadow-md'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`}
>
  Continue
</button>

    </div>
  </div>
)}

 <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
    </Head>
      {/* 🪟 Booking Iframe Modal */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-[95%] max-w-[1080px] max-h-[90vh] relative overflow-hidden">
            <button
              onClick={() => setShowIframe(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold z-10"
            >
              &times;
            </button>
            {!iframeLoaded && (
  <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10 text-[#00AEEF]">
    <div className="w-12 h-12 border-4 border-[#00AEEF] border-t-transparent rounded-full animate-spin mb-4" />
    <TypingStatus />
  </div>
)}

            <iframe
              src="https://www.travelstart.com.ng"
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
              className="w-full h-[90vh] border-none"
            />
          </div>
        </div>
      )}

      {/* 🌍 Page Content */}
      <main className="min-h-screen bg-white font-sans scroll-smooth text-[#003C3C]">
        <Header />

        {/* 🍃 Hero Section */}
        <section className="w-full relative bg-[#E6FFF8] overflow-hidden min-h-[90vh]">
          {/* ☁️ Floating Clouds */}
          <div className="absolute top-10 left-[-100px] w-40 h-24 bg-white opacity-50 rounded-full blur-2xl animate-cloudFloat" />
          <div className="absolute top-20 right-[-80px] w-32 h-20 bg-white opacity-60 rounded-full blur-xl animate-cloudFloat delay-1000" />
          <div className="absolute top-0 left-1/2 w-24 h-14 bg-white opacity-40 rounded-full blur-2xl animate-cloudFloat delay-[3000ms]" />

          {/* Decorative SVG Wave */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#003C3C"
                fillOpacity="0.03"
                d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,122.7C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L0,320Z"
              />
            </svg>
          </div>

         <section className="w-full relative bg-[#E6FFF8] overflow-hidden min-h-[90vh]">
  {/* ☁️ Floating Clouds */}
  <div className="absolute top-10 left-[-100px] w-40 h-24 bg-white opacity-50 rounded-full blur-2xl animate-cloudFloat" />
  <div className="absolute top-20 right-[-80px] w-32 h-20 bg-white opacity-60 rounded-full blur-xl animate-cloudFloat delay-1000" />
  <div className="absolute top-0 left-1/2 w-24 h-14 bg-white opacity-40 rounded-full blur-2xl animate-cloudFloat delay-[3000ms]" />

  {/* Decorative SVG Wave */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg
      className="w-full h-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#003C3C"
        fillOpacity="0.03"
        d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,122.7C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L0,320Z"
      />
    </svg>
  </div>

  {/* Hero Content */}
<section className="hero-section relative z-10 px-4 py-10 sm:py-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* 🌍 Text Left */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4 animate-fadeUp tracking-tight">
        Explore the World<br />
        with <span className="text-[#00AEEF]">Flyawoof</span><br />
        Today
      </h1>
      <p className="text-base sm:text-lg text-[#005f5f] mb-6 animate-fadeUp">
        Book smarter. Travel lighter.<br />
        Discover easier.
      </p>
      <button
        onClick={handleBookClick}
        className="group relative bg-white border border-[#00AEEF] text-[#00AEEF] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#00AEEF] hover:text-white transition-all animate-glow"
      >
        <span className="inline-flex items-center gap-2">
          Book a Flight <span className="animate-swing">✈️</span>
        </span>
      </button>
    </div>

    {/* ✈️ Image Right */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src="/airplane.png"
        alt="Airplane"
        width={500}
        height={400}
        className="w-full h-auto max-w-[90%] sm:max-w-md md:max-w-full animate-float"
        priority
      />
    </div>
    
  </div>
</section>

</section>

        </section>
        {/* 
  {/* 
  ===============================
  💸 Premium Exciting Offers Section Start
  Ultra-polished card design + glowing details
  ===============================
*/}
<section id="offers" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-14">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003C3C]">
  ✨ Exclusive <span className="text-[#00AEEF]">Flight Deals</span> Just for You
</h2>

    <p className="mt-2 text-base sm:text-lg text-[#005f5f]">
      Premium destinations at unbeatable rates — limited time only.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* 🌆 London */}
    <div className="bg-white/70 backdrop-blur-md ring-1 ring-[#00AEEF]/10 rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300">
      <Image src="/london.jpg" alt="London" width={400} height={250} className="rounded-lg mb-5" />
      <h3 className="text-xl font-bold text-[#003C3C] mb-1">Lagos → London</h3>
      <p className="text-sm text-[#007c91] mb-1">British Airways • Economy</p>
      <p className="text-sm font-medium text-[#003C3C] mb-1">From NGN 450,000</p>
      <p className="text-xs text-gray-500 mb-4">Valid till Aug 30</p>
      <button
        onClick={handleBookClick}
        className="bg-[#00AEEF] text-white w-full py-2.5 rounded-lg font-medium text-sm hover:bg-[#008CC2] transition-all"
      >
        <span className="inline-flex items-center justify-center gap-2">
          Book Now <span className="animate-swing">✈️</span>
        </span>
      </button>
    </div>

    {/* 🗽 New York */}
    <div className="bg-white/70 backdrop-blur-md ring-1 ring-[#00AEEF]/10 rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300">
      <Image src="/usa.jpg" alt="New York" width={400} height={250} className="rounded-lg mb-5" />
      <h3 className="text-xl font-bold text-[#003C3C] mb-1">Lagos → New York</h3>
      <p className="text-sm text-[#007c91] mb-1">Delta Airlines • Economy</p>
      <p className="text-sm font-medium text-[#003C3C] mb-1">From NGN 600,000</p>
      <p className="text-xs text-gray-500 mb-4">Valid till Sept 10</p>
      <button
        onClick={handleBookClick}
        className="bg-[#00AEEF] text-white w-full py-2.5 rounded-lg font-medium text-sm hover:bg-[#008CC2] transition-all"
      >
        <span className="inline-flex items-center justify-center gap-2">
          Book Now <span className="animate-swing">✈️</span>
        </span>
      </button>
    </div>

    {/* 🕌 Dubai */}
    <div className="bg-white/70 backdrop-blur-md ring-1 ring-[#00AEEF]/10 rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300">
      <Image src="/dubai.jpg" alt="Dubai" width={400} height={250} className="rounded-lg mb-5" />
      <h3 className="text-xl font-bold text-[#003C3C] mb-1">Lagos → Dubai</h3>
      <p className="text-sm text-[#007c91] mb-1">Emirates • Economy</p>
      <p className="text-sm font-medium text-[#003C3C] mb-1">From NGN 300,000</p>
      <p className="text-xs text-gray-500 mb-4">Valid till Sept 5</p>
      <button
        onClick={handleBookClick}
        className="bg-[#00AEEF] text-white w-full py-2.5 rounded-lg font-medium text-sm hover:bg-[#008CC2] transition-all"
      >
        <span className="inline-flex items-center justify-center gap-2">
          Book Now <span className="animate-swing">✈️</span>
        </span>
      </button>
    </div>

    {/* 🗼 Paris */}
    <div className="bg-white/70 backdrop-blur-md ring-1 ring-[#00AEEF]/10 rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300">
      <Image src="/paris.jpg" alt="Paris" width={400} height={250} className="rounded-lg mb-5" />
      <h3 className="text-xl font-bold text-[#003C3C] mb-1">Lagos → Paris</h3>
      <p className="text-sm text-[#007c91] mb-1">Air France • Economy</p>
      <p className="text-sm font-medium text-[#003C3C] mb-1">From NGN 520,000</p>
      <p className="text-xs text-gray-500 mb-4">Valid till Aug 25</p>
      <button
        onClick={handleBookClick}
        className="bg-[#00AEEF] text-white w-full py-2.5 rounded-lg font-medium text-sm hover:bg-[#008CC2] transition-all"
      >
        <span className="inline-flex items-center justify-center gap-2">
          Book Now <span className="animate-swing">✈️</span>
        </span>
      </button>
    </div>
  </div>
</section>
{/* ===== End of Premium Offers Section ===== */}
{/* 
  ===============================
  💬 Testimonial Section Start
  Premium glass cards + image avatars
  ===============================
*/}
<section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E8FBFF] to-white">
  <div className="max-w-7xl mx-auto text-center mb-14">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003C3C]">
  What Our <span className="text-[#00AEEF]">Travelers Are Saying</span>
</h2>

    <p className="mt-2 text-base sm:text-lg text-[#005f5f]">
      Real reviews from smart explorers who booked with Flyawoof.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* ✨ Testimonial 1 - Angela */}
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 ring-1 ring-[#00AEEF1A] shadow-xl hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300 animate-fadeUp">
      <div className="mb-4">
        <Image
          src="/angela.jpg"
          alt="Angela"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#00AEEF]/30"
        />
      </div>
      <p className="text-sm text-[#003C3C] italic mb-3">
        “Booking my honeymoon flight to London was a breeze. Super affordable and zero stress!”
      </p>
      <p className="text-sm text-[#005f5f] font-semibold">— Angela B., Lagos</p>
    </div>

    {/* ✨ Testimonial 2 - Daniel */}
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 ring-1 ring-[#00AEEF1A] shadow-xl hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300 animate-fadeUp delay-100">
      <div className="mb-4">
        <Image
          src="/daniel.jpg"
          alt="Daniel"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#00AEEF]/30"
        />
      </div>
      <p className="text-sm text-[#003C3C] italic mb-3">
        “This is way better than all those bulky travel sites. It’s clean, fast, and does the job right.”
      </p>
      <p className="text-sm text-[#005f5f] font-semibold">— Daniel T., Abuja</p>
    </div>

    {/* ✨ Testimonial 3 - Chika */}
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 ring-1 ring-[#00AEEF1A] shadow-xl hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300 animate-fadeUp delay-200">
      <div className="mb-4">
        <Image
          src="/chika.jpg"
          alt="Chika"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#00AEEF]/30"
        />
      </div>
      <p className="text-sm text-[#003C3C] italic mb-3">
        “I booked my Dubai getaway on Flyawoof in less than 2 minutes. It’s so smooth, I swear.”
      </p>
      <p className="text-sm text-[#005f5f] font-semibold">— Chika O., Enugu</p>
    </div>
  </div>
</section>
{/* ===== End of Testimonial Section ===== */}
{/* 
  ===============================
  💎 Why Choose Flyawoof Section
  With custom icons and WhatsApp delivery
  ===============================
*/}
<section id="why" className="bg-[#F9FEFF] py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-14">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003C3C]">
  Why Choose <span className="text-[#00AEEF]">Flyawoof</span>?
</h2>

    <p className="mt-2 text-base sm:text-lg text-[#005f5f]">
      Not just booking — this is smarter, faster, friendlier travel.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
    {/* 📩 WhatsApp Ticket Delivery */}
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md ring-1 ring-[#00AEEF1A] hover:shadow-lg transition-all animate-fadeUp">
      <div className="mb-4">
        <svg fill="#25D366" viewBox="0 0 32 32" className="w-10 h-10"><path d="M27.546 4.454c-5.92-5.92-15.529-5.92-21.449 0-4.037 4.036-5.27 9.905-3.646 15.05l-2.346 8.543 8.735-2.29a15.446 15.446 0 0012.132-4.444c5.92-5.92 5.92-15.53 0-21.45zm-1.606 19.843a13.154 13.154 0 01-11.056 3.741l-.392-.083-5.171 1.356 1.416-5.095-.127-.385a13.147 13.147 0 0119.479-15.918 13.155 13.155 0 01-4.149 16.384zm-5.495-6.273c-.236-.117-1.392-.685-1.608-.763-.216-.079-.373-.117-.53.117s-.608.763-.745.923c-.137.157-.274.177-.51.059s-.991-.364-1.889-1.16c-.698-.621-1.17-1.39-1.306-1.624-.137-.235-.015-.362.103-.48.106-.106.236-.275.354-.412.118-.137.157-.236.236-.393.079-.157.04-.294-.02-.412-.06-.118-.53-1.27-.726-1.743-.191-.457-.385-.396-.53-.404l-.451-.007c-.157 0-.412.06-.627.295-.216.236-.824.803-.824 1.955 0 1.151.843 2.263.961 2.421.118.157 1.657 2.53 4.02 3.546.562.242 1 .387 1.34.497.562.178 1.073.153 1.477.093.45-.068 1.392-.566 1.588-1.112.196-.547.196-1.014.137-1.112-.059-.098-.216-.157-.45-.275z"/></svg>
      </div>
      <h3 className="text-xl font-semibold text-[#003C3C] mb-2">Ticket via WhatsApp</h3>
      <p className="text-sm text-[#005f5f]">
        Just enter your WhatsApp number when booking — we’ll send your e-ticket straight to your inbox on WhatsApp, instantly and securely.
      </p>
    </div>

    {/* ⚡ Instant Confirmation */}
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md ring-1 ring-[#00AEEF1A] hover:shadow-lg transition-all animate-fadeUp delay-100">
      <div className="mb-4">
        <svg fill="#00AEEF" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-[#003C3C] mb-2">Fast Booking</h3>
      <p className="text-sm text-[#005f5f]">
        Skip the stress. Your booking confirms instantly, no queue, no callback, no drama.
      </p>
    </div>

    {/* 💰 Smart Fare Deals */}
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md ring-1 ring-[#00AEEF1A] hover:shadow-lg transition-all animate-fadeUp delay-200">
      <div className="mb-4">
        <svg fill="#00AEEF" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM12 13h4v2h-4v3l-4-4 4-4v3z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-[#003C3C] mb-2">Curated Deals</h3>
      <p className="text-sm text-[#005f5f]">
        We filter out the noise — you only see flights that give top value for your budget and time.
      </p>
    </div>
  </div>
</section>
{/* 
  ===============================
  ✈️ How to Book a Flight Section
  Premium styled steps with animation
  ===============================
*/}
<section id="how-to-book" className="bg-gradient-to-b from-[#F9FEFF] to-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-16">
   <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003C3C]">
  How to Book a Flight with <span className="text-[#00AEEF]">Flyawoof</span>
</h2>

    <p className="mt-2 text-base sm:text-lg text-[#005f5f]">
      Just 6 easy steps to secure your next destination — fast, safe, seamless.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        icon: "🌍",
        title: "Enter Travel Details",
        desc: "Choose your departure city, arrival destination, and travel dates."
      },
      {
        icon: "🧭",
        title: "Select a Flight",
        desc: "Pick the option best suited to your schedule and budget."
      },
      {
        icon: "🧍‍♂️",
        title: "Add Passenger Info",
        desc: "Provide accurate passenger details as shown on your passport or ID."
      },
      {
        icon: "🎒",
        title: "Add Extras",
        desc: "Optionally include travel insurance, bags, or rebookable tickets."
      },
      {
        icon: "💳",
        title: "Choose Payment",
        desc: "Select your preferred payment method and complete checkout."
      },
      {
        icon: "📩",
        title: "Receive Confirmation",
        desc: "Get your e-ticket and booking info via email — you're good to go!"
      }
    ].map((step, i) => (
      <div
        key={i}
        className={`bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg ring-1 ring-[#00AEEF]/10 hover:shadow-[0_10px_40px_#00AEEF33] transform transition-all duration-300 animate-fadeUp delay-${i * 100}`}
      >
        <div className="text-3xl mb-4">{step.icon}</div>
        <h3 className="text-lg font-semibold text-[#003C3C] mb-2">{i + 1}. {step.title}</h3>
        <p className="text-sm text-[#005f5f]">{step.desc}</p>
      </div>
    ))}
  </div>
</section>
{/* 
  ===============================
  📱 Download Our App Section Start
  Optimized mobile layout: image placed between text and badges
  ===============================
*/}
<section id="download-app" className="bg-gradient-to-b from-white to-[#F9FEFF] py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
    
    {/* 📝 Right: Text + Image + Badges (shared on mobile) */}
    <div className="w-full lg:w-1/2 text-center lg:text-left animate-fadeUp">

      {/* ✏️ Heading + Description */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003C3C] mb-4">
  <span className="text-[#00AEEF]">Book, Track & Travel</span><br className="hidden sm:block" /> Anytime, Anywhere
</h2>

      <p className="text-base sm:text-lg text-[#005f5f] mb-6">
        Download the Flyawoof mobile app to book flights, manage your travel, get instant updates,
        and even receive your ticket via WhatsApp — all from your pocket.
      </p>

      {/* 📱 Image (visible first on mobile) */}
      <div className="block lg:hidden mb-6">
        <Image
          src="/screenshot.png"
          alt="Flyawoof Mobile App Preview"
          width={500}
          height={600}
          className="w-full max-w-sm mx-auto rounded-xl shadow-xl"
        />
      </div>

      {/* 🛍️ Store Badges */}
      <div className="flex justify-center lg:justify-start gap-4">
        <Image
          src="/google-play.png"
          alt="Download on Google Play"
          width={160}
          height={48}
          className="cursor-pointer hover:scale-105 transition-all duration-200"
        />
        <Image
          src="/app-store.png"
          alt="Download on App Store"
          width={160}
          height={48}
          className="cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </div>
    </div>

    {/* 📱 Left: Screenshot image (desktop only) */}
    <div className="hidden lg:block w-full lg:w-1/2 animate-fadeUp delay-100">
      <Image
        src="/screenshot.png"
        alt="Flyawoof Mobile App Preview"
        width={500}
        height={600}
        className="w-full max-w-sm mx-auto rounded-xl shadow-xl"
      />
    </div>
  </div>
</section>
{/* ===== End of Download App Section ===== */}
{/* ===============================
🕊 Decorative Wave Divider Above Footer
=============================== */}
<div className="w-full -mb-1">
  <svg viewBox="0 0 1440 320" className="w-full h-24" preserveAspectRatio="none">
    <path
      fill="#00AEEF"
      d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,160C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    />
  </svg>
</div>

{/* ===============================
🛬 Flyawoof Footer Start
=============================== */}
<footer className="relative bg-[#F9FEFF] text-[#003C3C] pt-14 px-6 sm:px-10 pb-10 overflow-hidden">
  <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-12 border-b border-[#E6E6E6] pb-8">

    {/* 🔵 Logo + About + Socials */}
    <div className="w-full lg:max-w-md flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
      <Image
        src="/logo.png"
        alt="Flyawoof Logo"
        width={200}
        height={55}
        className="object-contain hover:scale-105 transition-transform duration-300"
      />
      <p className="text-[#555] text-sm leading-snug font-light">
        Flyawoof is your passport to the skies — unlocking global flight deals, elite carriers, and seamless bookings. From Lagos to London, we fly with flair.
      </p>
      <div className="flex justify-center lg:justify-start gap-4 mt-2">
        {["instagram", "twitter", "facebook", "linkedin"].map((icon) => (
          <a
            key={icon}
            href="#"
            className="text-[#666] hover:text-[#00AEEF] text-xl transition hover:scale-110"
            aria-label={`Flyawoof on ${icon}`}
          >
            <i className={`ri-${icon}-fill`}></i>
          </a>
        ))}
      </div>
    </div>

    {/* 📨 Newsletter Signup */}
    <div className="w-full lg:max-w-xl bg-white border border-[#00AEEF] rounded-lg shadow-md p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#003C3C]">
        Join Our Newsletter
      </h3>
      <p className="text-sm text-[#005f5f] mb-4 leading-relaxed">
        Deals, travel inspiration, and Flyawoof insider updates — delivered monthly.
      </p>
      <form
        action="https://careeredu.us21.list-manage.com/subscribe/post?u=c37a6e24f0352efab31c71d1a&amp;id=0ef6369907&amp;f_id=00c941e6f0"
        method="post"
        target="_blank"
        className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 w-full"
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="Your email address"
          className="w-full px-4 py-2 rounded-md bg-white text-black text-sm border border-[#00AEEF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition"
        />
        <button
          type="submit"
          className="bg-[#00AEEF] hover:bg-[#008CC2] px-5 py-2 rounded-md text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
        >
          Subscribe
        </button>
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_c37a6e24f0352efab31c71d1a_0ef6369907" tabIndex={-1} />
        </div>
      </form>
    </div>
  </div>

  {/* 📦 Footer Navigation Links + Office Address */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
    {[
      {
        title: "Continents We Cover",
        items: ["Africa", "Europe", "Asia", "North America", "Middle East"]
      },
      {
        title: "Airline Partners",
        items: ["British Airways", "Delta Airlines", "Emirates", "Qatar Airways", "Air France"]
      },
      {
        title: "About Flyawoof",
        items: ["Who we are", "How we work", "Contact us", "Terms & Conditions"]
      },
      {
        title: "Our Office",
        items: [
          "1st floor",
          "North Westgate House",
          "Harlow Essex",
          "CM20 1YS"
        ]
      }
    ].map(({ title, items }) => (
      <div key={title}>
        <h3 className="text-lg font-semibold mb-4 text-[#00AEEF]">{title}</h3>
        <ul className="text-sm space-y-2 text-[#333]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* 🔒 Footer Copyright */}
  <div className="relative z-10 text-center text-xs text-[#666] border-t border-[#E6E6E6] pt-6 mt-10 tracking-wide">
    © 2025 Flyawoof. All rights reserved.
  </div>
</footer>

{/* ☝️ Back to Top Button */}
<a
  href="#"
  className="fixed bottom-6 left-6 z-50 bg-[#00AEEF] hover:bg-[#008CC2] text-white p-3 rounded-full shadow-lg transition duration-300 hover:scale-105"
  aria-label="Back to top"
>
  <i className="ri-arrow-up-line text-xl"></i>
</a>
      </main>
    </>
  );
}
