// app/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md sticky top-0 bg-white z-50 h-16 sm:h-20">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Flyawoof Logo" width={120} height={30} />
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-[#00AEEF]">Home</a>
          <a href="#book" className="hover:text-[#00AEEF]">Book a Flight</a>
          <a href="#reviews" className="hover:text-[#00AEEF]">Reviews</a>
          <a href="#continents" className="hover:text-[#00AEEF]">Continents</a>
          <a href="#app" className="hover:text-[#00AEEF]">Get Our Mobile App</a>
        </nav>
        <Link
          href="https://wa.link/vdw17y"
          className="hidden md:inline-block bg-[#00AEEF] text-white px-4 py-2 rounded hover:bg-[#0096c5] transition"
        >
          Contact Us
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-[#00AEEF]"
        >
          ☰
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#book" onClick={() => setMenuOpen(false)}>Book a Flight</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#continents" onClick={() => setMenuOpen(false)}>Continents</a>
            <a href="#app" onClick={() => setMenuOpen(false)}>Get Our Mobile App</a>
            <Link
              href="https://wa.link/vdw17y"
              className="bg-[#00AEEF] text-white px-4 py-2 rounded hover:bg-[#0096c5] transition"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section with Video */}
      <section id="home" className="relative w-full h-[500px]">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold text-center">Where to Fly? 🌍✈️</h1>
        </div>
      </section>

      {/* Book a Flight Section with iframe */}
      <section id="book" className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-6">Book Your Flight Easily</h2>
        <iframe
          src="https://www.travelstart.com.ng"
          className="w-full min-h-[600px] border-none overflow-hidden"
        ></iframe>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-10">Traveler Reviews</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
          <div className="bg-white shadow p-6 rounded-md w-full md:w-1/3">
            <p>"Flyawoof made my trip to Europe seamless and so affordable!"</p>
            <p className="mt-4 font-semibold text-gray-600">- Jane A.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-md w-full md:w-1/3">
            <p>"Best booking experience ever. Highly recommend to all travelers!"</p>
            <p className="mt-4 font-semibold text-gray-600">- Michael B.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-md w-full md:w-1/3">
            <p>"Amazing deals to Africa, and super easy to use."</p>
            <p className="mt-4 font-semibold text-gray-600">- Aisha C.</p>
          </div>
        </div>
      </section>

      {/* Continents */}
      <section id="continents" className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-10">Continents We Cover</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Image src="/africa.png" alt="Africa" width={100} height={100} />
            <p className="mt-2 font-medium">Africa</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/europe.png" alt="Europe" width={100} height={100} />
            <p className="mt-2 font-medium">Europe</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/asia.png" alt="Asia" width={100} height={100} />
            <p className="mt-2 font-medium">Asia</p>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section id="app" className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">Download Our Mobile App</h2>
        <p className="mb-6">Book flights on the go, get exclusive deals & more!</p>
        <div className="flex justify-center items-center gap-4">
          <Image src="/google-play.png" alt="Google Play" width={150} height={50} />
          <Image src="/app-store.png" alt="App Store" width={150} height={50} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} Flyawoof. All rights reserved.
      </footer>
    </main>
  );
}
