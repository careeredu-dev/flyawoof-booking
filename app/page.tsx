"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

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
      {/* 💵 Currency Selector Modal */}
      {showCurrencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 shadow-lg w-[90%] max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-4 text-[#003C3C]">
              Choose Your Preferred Currency
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleCurrencySelect("NGN")}
                className="bg-[#00AEEF] text-white px-4 py-2 rounded hover:bg-[#008CC2]"
              >
                NGN
              </button>
              <button
                onClick={() => handleCurrencySelect("USD")}
                className="bg-[#00AEEF] text-white px-4 py-2 rounded hover:bg-[#008CC2]"
              >
                USD
              </button>
            </div>
          </div>
        </div>
      )}

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

      {/* 🌍 Page Content */}
      <main className="min-h-screen bg-white font-sans scroll-smooth text-[#003C3C]">
        <Header />

        {/* 🍃 Hero Section (Text Left, Image Right) */}
        <section className="w-full relative bg-[#E6FFF8] overflow-hidden">
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
          <div className="relative z-10 px-4 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
              {/* 🌍 Text Left */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 animate-fadeUp">
                  Explore the World with Flyawoof
                </h1>
                <p className="text-lg sm:text-xl text-[#005f5f] mb-8 animate-fadeUp">
                  Book smarter. Travel lighter. Discover easier.
                </p>
                <button
                  onClick={handleBookClick}
                  className="group relative bg-white border border-[#00AEEF] text-[#00AEEF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00AEEF] hover:text-white transition-all animate-glow"
                >
                  <span className="inline-flex items-center gap-2">
                    Book a Flight
                    <span className="animate-swing">✈️</span>
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
                  className="w-full h-auto max-w-sm sm:max-w-md md:max-w-full animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
