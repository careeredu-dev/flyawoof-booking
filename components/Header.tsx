"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50 transition-all font-[Geist]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-16 sm:h-20">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Flyawoof Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* 🖥️ Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-base font-medium text-[#003C3C] tracking-wide">
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
              className="relative hover:text-[#00AEEF] transition-colors duration-300"
            >
              {label}
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#00AEEF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* 📞 CTA Button */}
        <Link
          href="https://wa.link/vdw17y"
          className="hidden md:inline-block px-6 py-2 rounded-full border border-[#00AEEF] text-[#00AEEF] font-semibold hover:bg-[#00AEEF] hover:text-white transition-all animate-pulse shadow-[0_0_10px_#00AEEF88]"
        >
          Contact Us
        </Link>

        {/* 📱 Mobile Menu Toggle */}
        <div
          className="md:hidden text-[#00AEEF] text-3xl font-bold cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </div>
      </div>

      {/* 📱 Mobile Nav Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md z-40 animate-fadeIn">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-[#003C3C] font-medium text-base tracking-wide">
            <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#offers" onClick={() => setMobileMenuOpen(false)}>Offers</a>
            <a href="#why" onClick={() => setMobileMenuOpen(false)}>Why Flyawoof</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)}>Download Our Mobile App</a>
            <a href="https://wa.link/vdw17y" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}
