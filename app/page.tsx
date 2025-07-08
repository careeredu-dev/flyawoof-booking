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
      {/* 💱 Currency Selector Modal */}
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

          {/* Hero Content */}
          <div className="relative z-10 px-4 py-10 sm:py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
              {/* 🌍 Text Left */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4 animate-fadeUp tracking-tight">
                  Explore the World with Flyawoof
                </h1>
                <p className="text-base sm:text-lg text-[#005f5f] mb-6 animate-fadeUp">
                  Book smarter. Travel lighter. Discover easier.
                </p>
                <button
                  onClick={handleBookClick}
                  className="group relative bg-white border border-[#00AEEF] text-[#00AEEF] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#00AEEF] hover:text-white transition-all animate-glow"
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
                  className="w-full h-auto max-w-[90%] sm:max-w-md md:max-w-full animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {/* 
  ===============================
  💸 Exciting Offers Section Start
  Now with full details & buttons
  ===============================
*/}
<section id="offers" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#003C3C]">
      Exciting Flight Offers
    </h2>
    <p className="mt-2 text-base sm:text-lg text-[#005f5f]">
      Limited deals to top destinations, just for you.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* 🌆 London */}
    <div className="bg-[#E6FFF8] rounded-xl p-5 shadow-md hover:scale-105 hover:shadow-[0_0_30px_#00AEEF66] transition-all duration-300 flex flex-col justify-between">
      <Image src="/london.jpg" alt="London" width={400} height={250} className="rounded-lg mb-4" />
      <div>
        <h3 className="text-lg font-semibold text-[#003C3C]">Lagos → London</h3>
        <p className="text-sm text-[#005f5f] mb-1">British Airways • Economy</p>
        <p className="text-sm text-[#003C3C] font-medium mb-1">From NGN 450,000</p>
        <p className="text-xs text-gray-500 mb-3">Valid till Aug 30</p>
        <button className="bg-[#00AEEF] text-white w-full py-2 rounded hover:bg-[#008CC2] transition-all">
          Book Now
        </button>
      </div>
    </div>

    {/* 🗽 New York */}
    <div className="bg-[#E6FFF8] rounded-xl p-5 shadow-md hover:scale-105 hover:shadow-[0_0_30px_#00AEEF66] transition-all duration-300 flex flex-col justify-between">
      <Image src="/usa.jpg" alt="New York" width={400} height={250} className="rounded-lg mb-4" />
      <div>
        <h3 className="text-lg font-semibold text-[#003C3C]">Lagos → New York</h3>
        <p className="text-sm text-[#005f5f] mb-1">Delta Airlines • Economy</p>
        <p className="text-sm text-[#003C3C] font-medium mb-1">From NGN 600,000</p>
        <p className="text-xs text-gray-500 mb-3">Valid till Sept 10</p>
        <button className="bg-[#00AEEF] text-white w-full py-2 rounded hover:bg-[#008CC2] transition-all">
          Book Now
        </button>
      </div>
    </div>

    {/* 🕌 Dubai */}
    <div className="bg-[#E6FFF8] rounded-xl p-5 shadow-md hover:scale-105 hover:shadow-[0_0_30px_#00AEEF66] transition-all duration-300 flex flex-col justify-between">
      <Image src="/dubai.jpg" alt="Dubai" width={400} height={250} className="rounded-lg mb-4" />
      <div>
        <h3 className="text-lg font-semibold text-[#003C3C]">Lagos → Dubai</h3>
        <p className="text-sm text-[#005f5f] mb-1">Emirates • Economy</p>
        <p className="text-sm text-[#003C3C] font-medium mb-1">From NGN 300,000</p>
        <p className="text-xs text-gray-500 mb-3">Valid till Sept 5</p>
        <button className="bg-[#00AEEF] text-white w-full py-2 rounded hover:bg-[#008CC2] transition-all">
          Book Now
        </button>
      </div>
    </div>

    {/* 🗼 Paris */}
    <div className="bg-[#E6FFF8] rounded-xl p-5 shadow-md hover:scale-105 hover:shadow-[0_0_30px_#00AEEF66] transition-all duration-300 flex flex-col justify-between">
      <Image src="/paris.jpg" alt="Paris" width={400} height={250} className="rounded-lg mb-4" />
      <div>
        <h3 className="text-lg font-semibold text-[#003C3C]">Lagos → Paris</h3>
        <p className="text-sm text-[#005f5f] mb-1">Air France • Economy</p>
        <p className="text-sm text-[#003C3C] font-medium mb-1">From NGN 520,000</p>
        <p className="text-xs text-gray-500 mb-3">Valid till Aug 25</p>
        <button className="bg-[#00AEEF] text-white w-full py-2 rounded hover:bg-[#008CC2] transition-all">
          Book Now
        </button>
      </div>
    </div>
  </div>
</section>
{/* ===== End of Exciting Offers Section ===== */}

      </main>
    </>
  );
}








{/* 
  ===============================
  💸 Exciting Offers Section Start
  Edit or replace this block anytime
  ===============================
*/}
<section id="offers" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#003C3C]">
      Exciting Flight Offers
    </h2>
    <p className="mt-2 text-base sm:text-lg text-[#005f5f]">
      Limited deals to top destinations, just for you.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* 🌆 London */}
    <div className="bg-[#E6FFF8] rounded-xl p-5 shadow-md hover:scale-105 hover:shadow-[0_0_30px_#00AEEF66] transition-all duration-300">
      <Image src="/london.jpg" alt="London" width={400} height={250} className="rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-[#003C3C]">London</h3>
      <p className="text-[#005f5f] text-sm">From NGN 450,000 • British Airways</p>
    </div>

    {/* 🗽 New York */}
    <div className="bg-[#E6FFF8] rounded-xl p-5 shadow-md hover:scale-105 hover:shadow-[0_0_30px_#00AEEF66] transition-all duration-300">
      <Image src="/usa.jpg" alt="New York" width={400} height={250} className="rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-[#003C3C]">New York</h3>
      <p className="text-[#005f5f] text-sm">From NGN 600,000 • Delta Airlines</p>
    </div>

    {/* 🕌 Dubai */}
    <div className="bg-[#E6FFF8] rounded-xl p-5 shadow-md hover:scale-105 hover:shadow-[0_0_30px_#00AEEF66] transition-all duration-300">
      <Image src="/dubai.jpg" alt="Dubai" width={400} height={250} className="rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-[#003C3C]">Dubai</h3>
      <p className="text-[#005f5f] text-sm">From NGN 300,000 • Emirates</p>
    </div>

    {/* 🗼 Paris */}
    <div className="bg-[#E6FFF8] rounded-xl p-5 shadow-md hover:scale-105 hover:shadow-[0_0_30px_#00AEEF66] transition-all duration-300">
      <Image src="/paris.jpg" alt="Paris" width={400} height={250} className="rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-[#003C3C]">Paris</h3>
      <p className="text-[#005f5f] text-sm">From NGN 520,000 • Air France</p>
    </div>
  </div>
</section>
{/* ===== End of Exciting Offers Section ===== */}
