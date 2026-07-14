"use client";

import { Users, CheckSquare, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";
import { happyReceptionist } from "../../public/images";

const WhyDentalCare = () => {
  const cards = [
    {
      icon: <Users className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Never miss a new patient call",
      description:
        "Every missed new patient call is potential revenue walking out the door. Dental Connect Solutions makes sure every caller gets an answer.",
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Reduce front-desk workload",
      description:
        "Free your team from repetitive scheduling calls so they can focus on patients in the office.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Capture after-hours opportunities",
      description:
        "Many patients call after work. We answer when your office is closed.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Reduce voicemail abandonment",
      description:
        "Instead of hanging up after reaching voicemail, callers receive immediate assistance and follow-up.",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#F5F4F4] relative overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[7px] h-[7px] bg-[var(--color-accent)] rounded-full"></div>
            <span className="font-bold text-[12.5px] uppercase tracking-[1.75px] text-[var(--color-primary)]">
              Why dental practices care
            </span>
          </div>

          <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0F2233] mb-5">
            What it actually means for your practice
          </h2>

          <p className="text-[17px] leading-[27px] text-[var(--color-foreground-muted)] max-w-[856px]">
            Beyond answering the phone, here&apos;s the business impact dental
            offices tell us they care about most.
          </p>
        </div>

        {/* Content Row: Image + Value Cards */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
          {/* Left Side: Happy Receptionist Photo Frame */}
          <div className="w-full lg:w-[380px] shrink-0 relative flex flex-col justify-center">
            {/* Soft decorative background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-[32px] blur-xl opacity-60"></div>

            <div className="relative bg-white p-3 rounded-[28px] shadow-[0_20px_45px_rgba(11,53,80,0.06)] border border-[#EDEEF0]">
              <div className="overflow-hidden rounded-[20px] aspect-[4/5] relative bg-[#F5F9FC]">
                <Image
                  src={happyReceptionist}
                  alt="Happy dental receptionist answering calls with headset"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 px-2">
                <h4 className="font-bold text-[14.5px] text-[var(--color-secondary)]">
                  Empower Your Front Desk
                </h4>
                <p className="text-[12px] text-[var(--color-foreground-muted)] mt-1 leading-relaxed">
                  Dental Connect Solutions serves as a supportive virtual
                  assistant, ensuring in-office staff can dedicate full focus to
                  face-to-face patient interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: 2x2 Grid of Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EDEEF0] rounded-[20px] p-6 lg:p-7 flex flex-col items-start shadow-[10px_25px_100px_rgba(0,107,32,0.02)] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/30 hover:shadow-lg"
              >
                <div className="w-[42px] h-[42px] bg-[var(--color-secondary)] rounded-[11px] flex items-center justify-center mb-6 shrink-0 text-white">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[15.5px] leading-[20px] tracking-[-0.155px] text-[var(--color-secondary)] mb-4">
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-[22px] text-[var(--color-foreground-muted)]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDentalCare;
