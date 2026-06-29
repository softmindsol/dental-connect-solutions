"use client";

import Link from "next/link";
import { TbDental } from "react-icons/tb";

export function Footer() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative w-full pt-8 pb-6 bg-white border-t border-gray-100">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-7">
          {/* Logo */}
          <Link
            onClick={handleScroll}
            href="/"
            className="flex flex-col gap-2.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] bg-[var(--color-primary)] rounded-[9px] flex items-center justify-center">
                <TbDental className="text-white size-5" />
              </div>
              <span className="font-bold text-[17px] text-[var(--color-secondary)] tracking-tight">
                Dental Connect Solutions
              </span>
            </div>
            <p className="text-[13.5px] leading-[22px] text-[var(--color-secondary)]">
              The AI receptionist built for dental practices.
            </p>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center lg:gap-x-6 gap-x-4 gap-y-3 text-[13.5px] text-[var(--color-secondary)] font-medium">
            <Link
              href="#how-it-works"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              How it works
            </Link>
            <Link
              href="#features"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#demo"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#pilot-program"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Pilot Program
            </Link>
            <Link
              href="#faq"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t border-gray-200 text-[13.5px] text-[var(--color-secondary)]">
          <p className="text-[#4A5C6C]">
            © {new Date().getFullYear()} Dental Connect Solutions. All rights
            reserved.
          </p>
          <p className="text-[12px] leading-[19px] max-w-[500px] text-left md:text-right text-[#4A5C6C]">
            Dental Connect Solutions is currently an early-stage prototype
            undergoing validation and testing, piloting with dental practices in
            the Florida area.
          </p>
        </div>
      </div>
    </footer>
  );
}
