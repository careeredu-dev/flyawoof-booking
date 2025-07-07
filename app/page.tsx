"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 15 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md fixed w-full z-10">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Flyawoof Logo"
            width={140}
            height={40}
          />
        </div>
        <div className="hidden md:flex space-x-6 font-semibold text-gray-900">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#book" className="hover:text-blue-600">Book a Flight</a>
          <a href="#reviews" className="hover:text-blue-600">Reviews</a>
          <a href="#continents" className="hover:text-blue-600">Continents</a>
          <a href="#app" className="hover:text-blue-600">Get Our Mobile App</a>
          <a
            href="https://wa.link/vdw17y"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white p-4 space-y-4 mt-16 font-semibold text-gray-900">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#book" className="block hover:text-blue-600">Book a Flight</a>
          <a href="#reviews" className="block hover:text-blue-600">Reviews</a>
          <a href="#continents" className="block hover:text-blue-600">Continents</a>
          <a href="#app" className="block hover:text-blue-600">Get Our Mobile App</a>
          <a
            href="https://wa.link/vdw17y"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-black">
        <Image
          src="/plane-bg.png"
          alt="Where to Fly"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-white z-10">Where to Fly? 🌍✈️</h1>
      </section>

      {/* Book a Flight Section */}
      <section id="book" className="py-20 text-center bg-white">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-3">Book Your Flight Easily</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6 rounded"></div>
        <iframe
          src="https://www.travelstart.com.ng"
          className="w-full h-[600px] border-none"
        ></iframe>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-3">Traveler Reviews</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded"></div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded shadow w-72">
            <p className="italic text-gray-800">"Flyawoof made my trip to Europe seamless and so affordable!"</p>
            <p className="mt-4 font-bold text-gray-900">Jane A.</p>
          </div>
          <div className="bg-white p-6 rounded shadow w-72">
            <p className="italic text-gray-800">"Best booking experience ever. Highly recommend to all travelers!"</p>
            <p className="mt-4 font-bold text-gray-900">Michael B.</p>
          </div>
          <div className="bg-white p-6 rounded shadow w-72">
            <p className="italic text-gray-800">"Amazing deals to Africa, and super easy to use."</p>
            <p className="mt-4 font-bold text-gray-900">Aisha C.</p>
          </div>
        </div>
      </section>

      {/* Continents Section */}
      <section id="continents" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-3">Continents We Cover</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded"></div>
        <div ref={sliderRef} className="keen-slider px-4">
          <div className="keen-slider__slide">
            <Image src="/africa.jpg" alt="Africa" width={300} height={200} className="rounded" />
            <p className="mt-2 font-semibold text-gray-900">Africa</p>
          </div>
          <div className="keen-slider__slide">
            <Image src="/europe.jpg" alt="Europe" width={300} height={200} className="rounded" />
            <p className="mt-2 font-semibold text-gray-900">Europe</p>
          </div>
          <div className="keen-slider__slide">
            <Image src="/asia.jpg" alt="Asia" width={300} height={200} className="rounded" />
            <p className="mt-2 font-semibold text-gray-900">Asia</p>
          </div>
          <div className="keen-slider__slide">
            <Image src="/north-america.jpg" alt="North America" width={300} height={200} className="rounded" />
            <p className="mt-2 font-semibold text-gray-900">North America</p>
          </div>
          <div className="keen-slider__slide">
            <Image src="/south-america.jpg" alt="South America" width={300} height={200} className="rounded" />
            <p className="mt-2 font-semibold text-gray-900">South America</p>
          </div>
          <div className="keen-slider__slide">
            <Image src="/australia.jpg" alt="Australia" width={300} height={200} className="rounded" />
            <p className="mt-2 font-semibold text-gray-900">Australia</p>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="app" className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-3">Download Our Mobile App</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6 rounded"></div>
        <p className="mb-6 text-gray-800">Book flights on the go, get exclusive deals & more!</p>
        <div className="flex justify-center gap-4">
          <Image src="/google-play.png" alt="Google Play" width={150} height={50} />
          <Image src="/app-store.png" alt="App Store" width={150} height={50} />
        </div>
      </section>
    </div>
  );
}
