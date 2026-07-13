import { BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ReserveYourSpot() {
  return (
    <section className="relative w-full py-18 bg-gradient-to-b from-[#0B3550] to-[#1979B6] overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-[7px] h-[7px] bg-[var(--color-accent)] rounded-full"></div>
          <h3 className="font-bold text-[12.5px] uppercase tracking-[1.75px] text-[#72C8FF]">
            Only 10 Florida pilot spots available
          </h3>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.4px] text-white max-w-[650px] mb-6">
          Reserve Your Spot in the Florida Dental Pilot Program
        </h2>

        {/* Subheading */}
        <p className="text-[17px] leading-[27px] text-[#D6EFFF] max-w-[560px] mb-8">
          Leave your office email below and we&apos;ll contact you about joining
          the pilot. Only 10 pilot practices will be selected.
        </p>

        {/* Promo Badge */}
        <div className="flex sm:items-center gap-2 px-5 py-2 bg-[#E8F3FB]/10 border border-[#C9E3F5] rounded-full mb-10">
          <BadgePercent
            className="w-[18px] sm:mt-0.5 h-[18px] text-white"
            strokeWidth={2}
          />
          <span className="text-[14px] font-semibold text-white">
            <span className="text-[#2DD4BF]">Reserve now</span> and unlock in{" "}
            <span className="text-[#2DD4BF]">25% OFF</span> launch pricing.
          </span>
        </div>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[730px] mb-8">
          <Input
            type="email"
            placeholder="Your office email address"
            className="flex-1 min-h-[53px] bg-white text-gray-900 rounded-full px-6 text-[14.5px] border-none focus-visible:ring-2 focus-visible:ring-black shadow-none placeholder:text-[#757575]"
            required
          />
          <Button
            type="submit"
            className="h-[53px] px-8 sm:px-5 bg-white hover:border-gray-400 hover:bg-gray-100 text-[#0B3550] font-semibold text-[15px] rounded-full shrink-0 shadow-none cursor-pointer"
          >
            Schedule a 15-Minute Discovery Call
          </Button>
        </form>

        {/* Bottom Text */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12.5px] text-[#D6EFFF]">
          <span>No Cost During Pilot</span>
          <span className="opacity-50">.</span>
          <span>Cancel Anytime</span>
          <span className="opacity-50">.</span>
          <span>No spam</span>
        </div>
      </div>
    </section>
  );
}

export default ReserveYourSpot;
