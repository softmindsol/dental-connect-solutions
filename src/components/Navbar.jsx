"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bot, Menu, X, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Pilot Program", href: "#pilot-program" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-[87px] z-[60] transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(250,252,254,0.95)] backdrop-blur-md shadow-sm shadow-[#D6E7F2]"
            : "bg-[rgba(250,252,254,0.88)] shadow-sm shadow-[#D6E7F2] backdrop-blur-[5px]"
        }`}
      >
        <div className="w-full mx-auto h-full px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-[60]">
            <div className="w-[34px] h-[34px] bg-[var(--color-primary)] rounded-[9px] flex items-center justify-center">
              <Bot className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-[17px] leading-[27px] text-[#0B3550] tracking-tight">
              Dental Connect Solutions
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-[14px] leading-[22px] text-[#4A5C6C] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="flex items-center justify-center px-6 h-[54px] rounded-full border border-[#D6E7F2] font-semibold text-[15px] text-[#0B3550] hover:bg-gray-100 transition-colors hover:border-gray-400"
            >
              Contact
            </Link>
            <Link
              href="#pilot-program"
              className="flex items-center justify-center px-7 h-[54px] rounded-full bg-[var(--color-primary)] shadow-[0_10px_24px_rgba(21,101,168,0.3)] font-semibold text-[15px] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              Join Florida Pilot
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-[60] p-2 -mr-2 text-[#0B3550] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 z-60 lg:hidden bg-white/50 backdrop-blur-xl border border-primary rounded-2xl transition-all duration-300 ease-in-out mt-20 mb-4 mx-4 flex flex-col px-6 py-5 h-fit overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-[20px] pointer-events-none"
        }`}
      >
        <div className="flex flex-col w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between font-semibold text-[18px] text-[#0B3550] hover:text-[var(--color-primary)] transition-colors w-full py-3 border-b border-gray-200"
            >
              {link.name}
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col mt-3 gap-3 w-full">
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full h-[54px] rounded-full border border-[#D6E7F2] font-semibold text-[16px] text-[#0B3550] hover:bg-gray-100 transition-colors hover:border-gray-400"
          >
            Contact
          </Link>
          <Link
            href="#pilot-program"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full h-[54px] rounded-full bg-[var(--color-primary)] shadow-[0_10px_24px_rgba(21,101,168,0.3)] font-semibold text-[16px] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            Join Florida Pilot
          </Link>
        </div>
      </div>
    </>
  );
}
