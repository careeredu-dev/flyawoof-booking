"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#003C3C] shadow-sm z-30 font-[Geist] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-16 sm:h-20">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Flyawoof Logo"
            width={240}
            height={40}
            priority
          />
        </Link>

        {/* 🖥️ Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-base font-medium tracking-wide">
          {[
            { label: "Home", href: "/" },
            { label: "Offers", href: "#offers" },
            { label: "Why Flyawoof", href: "#why" },
            { label: "Reviews", href: "#reviews" },
            { label: "Download Our Mobile App", href: "#download" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative hover:text-white/80 transition-colors duration-300"
            >
              {label}
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* 📞 CTA Button */}
        <Link
          href="https://wa.link/vdw17y"
          className="hidden md:inline-block px-6 py-2 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#003C3C] transition-all animate-pulse shadow-[0_0_10px_#00AEEF88]"
        >
          Contact Us
        </Link>

        {/* 📱 Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl font-bold cursor-pointer transition-transform duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <span className="text-3xl">
              <i className="ri-close-line" />
            </span>
          ) : (
            <span className="text-3xl">
              <i className="ri-menu-line" />
            </span>
          )}
        </button>
      </div>

      {/* 🌫️ Mobile Menu Overlay and Panel */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ease-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Glassy dark overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-md z-30"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* 📱 Mobile Nav Panel */}
        <div
          className={`absolute top-0 left-0 w-full bg-[#003C3C] border-t border-[#005F5F] shadow-lg z-40 transform transition-transform duration-500 ease-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 space-y-4 text-white font-medium text-base tracking-wide">
            <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#offers" onClick={() => setMobileMenuOpen(false)}>Offers</a>
            <a href="#why" onClick={() => setMobileMenuOpen(false)}>Why Flyawoof</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)}>Download Our Mobile App</a>
            <a href="https://wa.link/vdw17y" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            {/* 🧘🏽 Soft Bottom Padding */}
            <div className="pt-4 pb-6" />
          </nav>
        </div>
      </div>
    </header>
  );
}
