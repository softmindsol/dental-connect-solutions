"use client";

import Image from "next/image";
import { Quote, Heart, Sparkles } from "lucide-react";
import { founderJean } from "../../public/images";

export function FounderStory() {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Subtle background grids/blurs */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Stylized Image Frame */}
          <div className="w-full lg:w-[420px] shrink-0 relative">
            {/* Background design elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 rounded-[36px] blur-xl opacity-70"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#2EA8E0]/10 rounded-full blur-md"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--color-secondary)]/5 rounded-full blur-lg"></div>

            {/* Main Picture Frame */}
            <div className="relative bg-white p-3 rounded-[32px] shadow-[0_20px_50px_rgba(11,53,80,0.12)] border border-[#E3EDF5]">
              <div className="overflow-hidden rounded-[24px] aspect-[4/5] relative bg-[#F5F9FC]">
                <Image
                  src={founderJean}
                  alt="Jean - Founder of Dental Connect Solutions"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay Quote Tag */}
              <div className="absolute -bottom-10 -right-6 sm:right-4 bg-[var(--color-secondary)] text-white p-5 rounded-2xl shadow-xl border border-white/10 max-w-[280px]">
                <Quote className="w-6 h-6 text-[var(--color-accent)] mb-2" />
                <p className="text-[12px] leading-relaxed text-[#D6EFFF] italic">
                  &quot;We built Dental Connect Solutions to serve the staff
                  first. If the team is supported, the patients get better
                  care.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="flex-1 flex flex-col items-start mt-8 lg:mt-0">
            <div className="flex items-center gap-2 mb-4 bg-[#E8F3FB] px-3.5 py-1.5 rounded-full border border-[#D6E7F2]">
              <Heart className="w-3.5 h-3.5 text-[var(--color-primary)] fill-[var(--color-primary)]/10" />
              <span className="font-bold text-[11px] uppercase tracking-[1.5px] text-[var(--color-primary)]">
                Our Story
              </span>
            </div>

            <h2 className="text-[32px] lg:text-[40px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[var(--color-secondary)] mb-6">
              Why I Built Dental Connect Solutions
            </h2>

            <div className="space-y-5 text-[15px] leading-[26px] text-[var(--color-foreground-muted)]">
              <p>
                For years I’ve worked in healthcare operations and have seen
                firsthand how busy front desks become and how easy it is for
                calls to be missed.
              </p>
              <p>
                Dental Connect Solutions was created to help dental teams answer
                every call, reduce front-desk workload, and improve the patient
                experience without replacing the people who make your practice
                special.
              </p>
              <p>
                If they choose the patient in the office, the caller hangs up.
                Industry studies show that{" "}
                <strong className="text-[var(--color-secondary)]">
                  62% of patients will not leave a voicemail
                </strong>{" "}
                — they simply hang up and call the next dentist on Google. For a
                practice, that represents a lost new patient worth an average of{" "}
                <strong>$1,250+</strong>.
              </p>
              <p>
                I built Dental Connect Solutions to solve this. Not to replace
                the hard-working front desk staff, but to give them a reliable,
                24/7 digital coworker. By answering overflow calls instantly,
                booking appointments, and capturing after-hours inquiries, we
                ensure your practice never misses an opportunity — while your
                team finally gets the space to focus on the human care inside
                the office.
              </p>
            </div>

            {/* Founder Sign-off */}
            <div className="mt-8 pt-6 border-t border-[#E3EDF5] w-full flex items-center gap-4">
              <div>
                <span className="font-serif italic text-[24px] text-[var(--color-secondary)] block">
                  Jean
                </span>
                <span className="text-[12px] font-bold text-[var(--color-primary)] uppercase tracking-[1px] mt-0.5 block">
                  Founder, Dental Connect Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
