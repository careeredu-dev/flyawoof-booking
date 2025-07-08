"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-16 sm:h-20">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Flyawoof Logo" width={160} height={40} priority />
        </Link>
        <nav className="hidden md:flex space-x-6 text-base font-medium text-[#003C3C]">
          <a href="/" className="hover:text-[#00AEEF]">Home</a>
          <a href="#offers" className="hover:text-[#00AEEF]">Offers</a>
          <a href="#why" className="hover:text-[#00AEEF]">Why Flyawoof</a>
        </nav>
        <Link
          href="https://wa.link/vdw17y"
          className="hidden md:inline-block border border-[#00AEEF] text-[#00AEEF] px-6 py-2 rounded-full hover:bg-[#00AEEF] hover:text-white transition-all"
        >
          Contact Us
        </Link>
        <div
          className="md:hidden text-[#00AEEF] text-3xl font-bold cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 z-20">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-[#003C3C] font-medium text-base">
            <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#offers" onClick={() => setMobileMenuOpen(false)}>Offers</a>
            <a href="#why" onClick={() => setMobileMenuOpen(false)}>Why Flyawoof</a>
            <a href="https://wa.link/vdw17y" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}
