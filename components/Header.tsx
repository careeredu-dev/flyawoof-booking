"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#003C3C] shadow-sm z-30 transition-all font-[Geist] text-white">
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
        <div
          className="md:hidden text-white text-3xl font-bold cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </div>
      </div>

      {/* 📱 Mobile Nav Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#003C3C] border-t border-[#005F5F] shadow-md z-[60] animate-fadeIn">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-white font-medium text-base tracking-wide">
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
