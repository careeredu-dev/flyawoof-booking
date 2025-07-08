"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showSite, setShowSite] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans scroll-smooth">
      {/* 🎬 Launch Screen */}
      {!showSite && (
        <section className="relative w-full h-screen bg-black overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-auto h-full max-w-none object-contain sm:object-cover"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-110 bg-black bg-opacity-40 z-10 pointer-events-none" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Flyawoof</h1>
            <p className="text-lg sm:text-xl mb-8">Your destination is just a click away</p>
            <button
              onClick={() => setShowSite(true)}
              className="bg-gradient-to-r from-[#00AEEF] to-[#0096c5] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Enter Site
            </button>
          </div>
        </section>
      )}

      {/* 🌐 Main Site Content */}
      {showSite && (
        <>
          {/* Header */}
          <header className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-50 h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Flyawoof Logo" width={120} height={30} priority />
            </Link>
            <nav className="hidden md:flex space-x-6 text-base font-medium">
              <a href="#book" className="hover:text-[#00AEEF] transition-all">Book</a>
              <a href="#reviews" className="hover:text-[#00AEEF] transition-all">Reviews</a>
              <a href="#continents" className="hover:text-[#00AEEF] transition-all">Continents</a>
              <a href="#app" className="hover:text-[#00AEEF] transition-all">Get Our App</a>
            </nav>
            <Link
              href="https://wa.link/vdw17y"
              className="hidden md:inline-block bg-gradient-to-r from-[#00AEEF] to-[#0096c5] text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </header>

          {/* ✈️ Booking Section */}
          <section id="book" className="pt-16 pb-0 bg-white text-center px-4">
            <h2 className="text-3xl font-bold text-[#00AEEF] mb-6">Book Your Flight</h2>
            <iframe
              src="https://www.travelstart.com.ng"
              className="w-full min-h-[900px] border-none overflow-hidden mb-0"
            ></iframe>
          </section>

          {/* 💬 Reviews */}
          <section id="reviews" className="py-20 bg-gray-50 text-center px-4">
            <h2 className="text-3xl font-bold text-[#00AEEF] mb-10">Traveler Reviews</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
              {[
                { text: "Flyawoof made my trip seamless!", author: "Jane A." },
                { text: "Highly recommend to all travelers!", author: "Michael B." },
                { text: "Amazing deals and super easy to use.", author: "Aisha C." },
              ].map((r, i) => (
                <div key={i} className="bg-white shadow-xl p-6 rounded-lg w-full md:w-1/3 hover:scale-105 transition-transform">
                  <p>{`"${r.text}"`}</p>
                  <p className="mt-4 font-semibold text-gray-600">{`- ${r.author}`}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 🌍 Continents Section (Responsive Video) */}
          <section id="continents" className="relative w-full bg-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-auto h-full max-w-none object-contain sm:object-cover sm:h-screen"
              >
                <source src="/continent.mp4" type="video/mp4" />
              </video>
            </div>
            {/* This div ensures proper height on mobile */}
            <div className="h-[30vh] sm:h-screen" />
          </section>

          {/* 📱 App Download */}
          <section id="app" className="py-20 bg-gray-50 text-center px-4">
            <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">Download Our App</h2>
            <p className="mb-6 text-gray-600">Book on the go. Get exclusive deals & more!</p>
            <div className="flex justify-center items-center gap-6">
              <Image src="/google-play.png" alt="Google Play" width={160} height={50} />
              <Image src="/app-store.png" alt="App Store" width={160} height={50} />
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-6 text-center">
            &copy; {new Date().getFullYear()} Flyawoof. All rights reserved.
          </footer>
        </>
      )}
    </main>
  );
}
