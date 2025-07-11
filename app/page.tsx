"use client";
import TypingStatus from "@/components/TypingStatus";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Head from "next/head";
import confetti from "canvas-confetti";

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







<section className="block md:hidden">
{/* 🌍 Flyawoof Hero — Clean, Professional, Global */}
<section className="w-full pt-24 pb-16 bg-[#081C24] text-white font-[Inter] relative overflow-hidden">

  {/* 📸 Background Photo Layer (Replace with your image) */}
  <div
    className="absolute inset-0 z-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"
  />

  {/* 🌍 Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#081C24] via-[#0A2F3D]/70 to-[#081C24]/90 z-0" />

  {/* 🛫 Animated Route Line */}
  <svg
    viewBox="0 0 500 150"
    preserveAspectRatio="none"
    className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 w-[500px] h-[150px] z-10 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="route-path"
      d="M10,120 C150,10 350,200 490,80"
      stroke="#00AEEF"
      strokeWidth={3}
      strokeLinecap="round"
      fill="none"
    />
  </svg>

  {/* 💼 Hero Content */}
  <div className="relative z-20 px-6 sm:px-10 py-16">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

      {/* 📋 Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-white">
          Book Travel<br />
          With <span className="text-[#00AEEF]">Confidence</span>
        </h1>

        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          Trusted by thousands. Powered by smart bookings.<br />
          Flyawoof connects you to the world — securely, seamlessly.
        </p>

        <button
          onClick={handleBookClick}
          className="bg-[#00AEEF] text-white px-6 py-4 rounded-full font-semibold text-lg hover:bg-[#0096c5] transition-all"
        >
          Start Your Journey
        </button>
      </div>

      {/* 🧍🏽‍♂️ Realistic Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">

        {/* 💡 Soft Glow Behind Image */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[300px] h-[300px] bg-[#00AEEF]/15 rounded-full blur-[90px] z-0" />

        <Image
          src="/boarding.jpg"  // Replace with realistic image of traveler or airport
          alt="Traveler Boarding"
          width={480}
          height={240}
          className="w-full h-auto rounded-xl shadow-2xl border border-white/10 z-10"
          priority
        />
      </div>

    </div>
  </div>
</section>
</section>


















<section className="hidden md:block">
{/* 🌍 Flyawoof Hero Section */}
<section className="w-full pt-16 pb-16 bg-[#081C24] text-white font-[Inter] relative overflow-hidden">

  {/* 📸 Background Photo Layer */}
  <div
    className="absolute inset-0 z-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"
  />

  {/* 🌫 Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#081C24] via-[#0A2F3D]/70 to-[#081C24]/90 z-0" />

  {/* ✈️ Animated Route Line */}
  <svg
    viewBox="0 0 500 150"
    preserveAspectRatio="none"
    className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[500px] h-[150px] z-10 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="route-path"
      d="M10,120 C150,10 350,200 490,80"
      stroke="#00AEEF"
      strokeWidth={3}
      strokeLinecap="round"
      fill="none"
    />
  </svg>

  {/* 💼 Hero Content */}
  <div className="relative z-20 px-6 sm:px-10 py-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">

      {/* ✍️ Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left pt-2 sm:pt-4">
        <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight mb-4 text-white">
          Book Travel<br />
          With <span className="text-[#00AEEF]">Confidence</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
          Trusted by thousands. Powered by smart bookings.<br />
          Flyawoof connects you to the world — securely, seamlessly.
        </p>

        <button
          onClick={handleBookClick}
          className="bg-[#00AEEF] text-white px-6 py-4 rounded-full font-semibold text-lg hover:bg-[#0096c5] transition-all"
        >
          Start Your Journey
        </button>
      </div>

      {/* 👤 Hero Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">

        {/* 💡 Glow Behind Image */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[300px] h-[300px] bg-[#00AEEF]/15 rounded-full blur-[90px] z-0" />

        <Image
          src="/desk.png"
          alt="Traveler Boarding"
          width={480}
          height={480}
          className="max-h-[440px] w-full h-auto object-contain rounded-xl shadow-2xl border border-white/10 z-10"
          priority
        />
      </div>

    </div>
  </div>
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
      Curated Flight <span className="text-[#00AEEF]">Offers</span> for You
    </h2>
    <p className="mt-2 text-base sm:text-lg text-[#005f5f] leading-snug">
      Premium destinations at unbeatable rates — limited time only.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* London */}
    <div className="bg-white/70 backdrop-blur-md ring-1 ring-[#00AEEF]/10 rounded-lg p-6 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300">
      <Image src="/london.jpg" alt="London" width={400} height={250} className="rounded-md mb-5" />
      <h3 className="text-xl font-bold text-[#003C3C] mb-1">Lagos → London</h3>
      <p className="text-sm text-[#007c91] mb-1">British Airways • Economy</p>
      <p className="text-sm font-bold text-[#003C3C] mb-1">From NGN 450,000</p>
      <p className="text-xs text-gray-500 mb-2">Valid till Aug 30</p>
      <button
        onClick={handleBookClick}
        className="bg-[#00AEEF] text-white w-full py-2.5 rounded-lg font-semibold text-base hover:bg-[#008CC2] transition-all"
      >
        Book Now
      </button>
    </div>

    {/* New York */}
    <div className="bg-white/70 backdrop-blur-md ring-1 ring-[#00AEEF]/10 rounded-lg p-6 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300">
      <Image src="/usa.jpg" alt="New York" width={400} height={250} className="rounded-md mb-5" />
      <h3 className="text-xl font-bold text-[#003C3C] mb-1">Lagos → New York</h3>
      <p className="text-sm text-[#007c91] mb-1">Delta Airlines • Economy</p>
      <p className="text-sm font-bold text-[#003C3C] mb-1">From NGN 600,000</p>
      <p className="text-xs text-gray-500 mb-2">Valid till Sept 10</p>
      <button
        onClick={handleBookClick}
        className="bg-[#00AEEF] text-white w-full py-2.5 rounded-lg font-semibold text-base hover:bg-[#008CC2] transition-all"
      >
        Book Now
      </button>
    </div>

    {/* Dubai */}
    <div className="bg-white/70 backdrop-blur-md ring-1 ring-[#00AEEF]/10 rounded-lg p-6 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300">
      <Image src="/dubai.jpg" alt="Dubai" width={400} height={250} className="rounded-md mb-5" />
      <h3 className="text-xl font-bold text-[#003C3C] mb-1">Lagos → Dubai</h3>
      <p className="text-sm text-[#007c91] mb-1">Emirates • Economy</p>
      <p className="text-sm font-bold text-[#003C3C] mb-1">From NGN 300,000</p>
      <p className="text-xs text-gray-500 mb-2">Valid till Sept 5</p>
      <button
        onClick={handleBookClick}
        className="bg-[#00AEEF] text-white w-full py-2.5 rounded-lg font-semibold text-base hover:bg-[#008CC2] transition-all"
      >
        Book Now
      </button>
    </div>

    {/* Paris */}
    <div className="bg-white/70 backdrop-blur-md ring-1 ring-[#00AEEF]/10 rounded-lg p-6 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300">
      <Image src="/paris.jpg" alt="Paris" width={400} height={250} className="rounded-md mb-5" />
      <h3 className="text-xl font-bold text-[#003C3C] mb-1">Lagos → Paris</h3>
      <p className="text-sm text-[#007c91] mb-1">Air France • Economy</p>
      <p className="text-sm font-bold text-[#003C3C] mb-1">From NGN 520,000</p>
      <p className="text-xs text-gray-500 mb-2">Valid till Aug 25</p>
      <button
        onClick={handleBookClick}
        className="bg-[#00AEEF] text-white w-full py-2.5 rounded-lg font-semibold text-base hover:bg-[#008CC2] transition-all"
      >
        Book Now
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
<section id="reviews" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E8FBFF] to-white">
  <div className="max-w-7xl mx-auto text-center mb-14">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003C3C]">
      What Our <span className="text-[#00AEEF]">Travelers Are Saying</span>
    </h2>
    <p className="mt-2 text-base sm:text-lg text-[#005f5f] leading-snug max-w-2xl mx-auto">
      Real reviews from smart explorers who booked with Flyawoof.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Testimonial 1 */}
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ring-1 ring-[#00AEEF1A]">
      <div className="mb-2 flex justify-center">
        <Image
          src="/angela.jpg"
          alt="Angela"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#00AEEF]/50"
        />
      </div>
      <p className="text-sm text-[#003C3C] italic mb-2">
        “Booking my honeymoon flight to London was a breeze. Super affordable and zero stress!”
      </p>
      <p className="mt-2 text-sm font-semibold text-[#002828]">— Angela B., Lagos</p>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ring-1 ring-[#00AEEF1A]">
      <div className="mb-2 flex justify-center">
        <Image
          src="/daniel.jpg"
          alt="Daniel"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#00AEEF]/50"
        />
      </div>
      <p className="text-sm text-[#003C3C] italic mb-2">
        “This is way better than all those bulky travel sites. It’s clean, fast, and does the job right.”
      </p>
      <p className="mt-2 text-sm font-semibold text-[#002828]">— Daniel T., Abuja</p>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ring-1 ring-[#00AEEF1A]">
      <div className="mb-2 flex justify-center">
        <Image
          src="/chika.jpg"
          alt="Chika"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#00AEEF]/50"
        />
      </div>
      <p className="text-sm text-[#003C3C] italic mb-2">
        “I booked my Dubai getaway on Flyawoof in less than 2 minutes. It’s so smooth, I swear.”
      </p>
      <p className="mt-2 text-sm font-semibold text-[#002828]">— Chika O., Enugu</p>
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
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003C3C] leading-tight">
      How to Book a Flight with <span className="text-[#00AEEF]">Flyawoof</span>
    </h2>
    <p className="mt-2 text-base sm:text-lg text-[#005f5f] max-w-xl mx-auto">
      Just 6 easy steps to secure your next destination — fast, safe, seamless.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
        className={`bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg ring-1 ring-[#00AEEF1A] hover:shadow-[0_10px_40px_#00AEEF33] transition-all duration-300 animate-fadeUp delay-${i * 100}`}
      >
        <div className="mb-3">
          <span className="inline-block text-2xl align-middle">{step.icon}</span>
        </div>
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
<section id="download" className="bg-gradient-to-b from-white to-[#F9FEFF] py-20 px-4 sm:px-6 lg:px-8">
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

{/* ===============================
🛬 Flyawoof Footer Start
=============================== */}
{/* ===============================
🕊 Decorative Wave Divider Above Footer
=============================== */}

{/* ===============================
🛬 Flyawoof Footer Start
=============================== */}
<footer className="relative bg-[#012E2E] text-white pt-14 px-6 sm:px-10 pb-10 overflow-hidden">
  <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-12 border-b border-white/10 pb-8">

    {/* 🔵 Logo + About + Socials */}
    <div className="w-full lg:max-w-md flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
      <Image
        src="/logo.png"
        alt="Flyawoof Logo"
        width={200}
        height={55}
        className="object-contain hover:scale-105 transition-transform duration-300"
      />
      <p className="text-white/75 text-sm leading-snug font-light">
        Flyawoof is your passport to the skies — unlocking global flight deals, elite carriers, and seamless bookings. From Lagos to London, we fly with flair.
      </p>
      <div className="flex justify-center lg:justify-start gap-4 mt-2">
        {["instagram", "twitter", "facebook", "linkedin"].map((icon) => (
          <a
            key={icon}
            href="#"
            className="text-white/70 hover:text-[#00AEEF] text-xl transition hover:scale-110"
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
        <ul className="text-sm space-y-2 text-white/90">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* 🔒 Footer Copyright */}
  <div className="relative z-10 text-center text-xs text-white/60 border-t border-white/10 pt-6 mt-10 tracking-wide">
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
