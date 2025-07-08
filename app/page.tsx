"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [showIframe, setShowIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (showIframe) setIframeLoaded(false);
  }, [showIframe]);

  return (
    <>
      {/* Booking Modal */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-[95%] max-w-[1080px] max-h-[90vh] relative overflow-hidden">
            <button
              onClick={() => setShowIframe(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold z-10"
              aria-label="Close"
            >
              &times;
            </button>
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10 text-[#00AEEF]">
                <div className="w-12 h-12 border-4 border-[#00AEEF] border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-base sm:text-lg font-medium animate-pulse">
                  Connecting to server...
                </p>
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

      <main className="min-h-screen bg-white text-gray-800 font-sans scroll-smooth">
        {/* Header */}
        <header className="relative bg-white shadow-md z-50">
          <div className="flex items-center justify-between px-6 py-4 h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Flyawoof Logo" width={160} height={40} priority />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-base font-medium">
              <a href="/" className="hover:text-[#00AEEF] transition-all">Home</a>
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

            {/* Mobile Menu Icon */}
            <div
              className="md:hidden text-[#00AEEF] text-3xl font-bold cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white shadow-md">
              <nav className="flex flex-col px-6 py-4 space-y-4 text-[#00AEEF] font-medium text-base">
                {[
                  { label: "Home", href: "/" },
                  { label: "Reviews", href: "#reviews" },
                  { label: "Continents", href: "#continents" },
                  { label: "Get Our App", href: "#app" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Hero with Video Background */}
        <section className="relative w-full h-screen overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-100 bg-black bg-opacity-80 z-10 pointer-events-none" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Explore the World with Flyawoof</h1>
            <p className="text-lg sm:text-xl mb-8">Find flights, discover destinations, and travel smarter.</p>
            <button
              onClick={() => setShowIframe(true)}
              className="bg-white text-[#00AEEF] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Book a Flight
            </button>
          </div>
        </section>

        {/* Traveler Reviews */}
        <section id="reviews" className="py-20 bg-gray-50 px-4">
          <h2 className="text-3xl font-bold text-[#00AEEF] text-center mb-10">Traveler Reviews</h2>
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
            <div className="w-full md:w-1/2">
              <Image
                src="/travel.png"
                alt="Happy traveler"
                width={800}
                height={500}
                className="w-full h-auto md:rounded-lg md:shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              {[
                { text: "Flyawoof made my trip seamless!", author: "Jane A." },
                { text: "Highly recommend to all travelers!", author: "Michael B." },
                { text: "Amazing deals and super easy to use.", author: "Aisha C." },
              ].map((r, i) => (
                <div key={i} className="bg-white shadow-xl p-6 rounded-lg hover:scale-105 transition-transform">
                  <p>{`"${r.text}"`}</p>
                  <p className="mt-4 font-semibold text-gray-600">{`- ${r.author}`}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Continents Section */}
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
          <div className="h-[30vh] sm:h-screen" />
        </section>

        {/* App Download */}
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
      </main>
    </>
  );
}
