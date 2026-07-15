"use client";

import { useState } from "react";
import {
  Users,
  ArrowRight,
  HelpCircle,
  Sparkles,
  DollarSign,
  TrendingUp,
  Coins,
  Calculator,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function RoiSection() {
  const [patients, setPatients] = useState(3);
  const [patientValue, setPatientValue] = useState(1250);

  const monthlyRevenue = patients * patientValue;
  const annualRevenue = monthlyRevenue * 12;

  // Assuming a conservative average monthly service cost of $199
  const estimatedCost = 199;
  const roiMultiplier = Math.max(1, Math.round(monthlyRevenue / estimatedCost));

  const handleScrollToReserve = () => {
    const element = document.getElementById("reserveYourSpot");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#FAFCFE] via-[#EDF5FA] to-[#E2F0F9] relative overflow-hidden">
      {/* High-end mesh gradient effect in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(46,168,224,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl"></div>
      <div className="absolute -top-20 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(21,101,168,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl"></div>

      <div className="w-full mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D6E7F2]">
            <TrendingUp className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="font-bold text-[11px] uppercase tracking-[1.5px] text-[var(--color-primary)]">
              Practice growth calculator
            </span>
          </div>

          <h2 className="text-[34px] md:text-[42px] font-extrabold leading-[1.12] tracking-[-0.5px] text-[var(--color-secondary)] mb-5">
            What if Dental Connect Solutions captured just…
          </h2>
          <p className="text-[17px] leading-[27px] text-[var(--color-foreground-muted)] max-w-[620px]">
            See the math on how converting missed calls into scheduled
            appointments directly impacts your practice&apos;s bottom line.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-[32px] p-8 shadow-[0_20px_50px_rgba(11,53,80,0.04)] border border-[#E3EDF5] flex flex-col justify-between">
            <div>
              {/* Dynamic Sentence Headline */}
              <div className="mb-8 p-5 bg-[#F4F9FD] rounded-2xl border border-[#D6E7F2]/60">
                <p className="text-[16px] md:text-[18px] leading-[28px] text-[var(--color-secondary)] font-medium">
                  What if Dental Connect Solutions captured just{" "}
                  <strong className="text-[var(--color-primary)] font-extrabold text-[20px] md:text-[22px] px-1 animate-pulse">
                    {patients}
                  </strong>{" "}
                  additional new {patients === 1 ? "patient" : "patients"} per
                  month?
                </p>
                <div className="w-full border-t border-[#D6E7F2]/40 my-3"></div>
                <p className="text-[15px] leading-[24px] text-[var(--color-foreground-muted)]">
                  For many dental practices, that could mean{" "}
                  <strong className="text-[var(--color-secondary)] font-bold text-[16px]">
                    ${annualRevenue.toLocaleString()}
                  </strong>{" "}
                  in additional annual revenue.
                </p>
              </div>

              {/* Patients Slider Container */}
              <div className="mb-8 p-6 bg-[#FAFDFB]/60 border border-emerald-100/50 rounded-2xl hover:border-emerald-200/50 hover:bg-[#FAFDFB] transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-[#10B981]">
                      <Users className="w-4 h-4" />
                    </div>
                    <label className="text-[14.5px] font-bold text-[var(--color-secondary)]">
                      Captured New Patients / Month
                    </label>
                  </div>
                  <span className="text-[32px] font-extrabold leading-none text-[#10B981]">
                    +{patients}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={patients}
                  onChange={(e) => setPatients(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#E8F3FB] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-2 font-semibold">
                  <span>1 patient</span>
                  <span>5 patients</span>
                  <span>10 patients</span>
                  <span>15 patients</span>
                </div>
              </div>

              {/* Patient Value Slider Container */}
              <div className="mb-6 p-6 bg-[#FAFCFE]/60 border border-[#D6E7F2]/50 rounded-2xl hover:border-[var(--color-primary)]/20 hover:bg-[#FAFCFE] transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E8F3FB] flex items-center justify-center text-[var(--color-primary)]">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <label className="text-[14.5px] font-bold text-[var(--color-secondary)]">
                        Avg. New Patient Value (1st Year)
                      </label>
                      <div className="group relative">
                        <HelpCircle className="w-4 h-4 text-gray-400 cursor-pointer" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-[var(--color-secondary)] text-white text-[11px] p-3.5 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-20 leading-relaxed font-normal">
                          Industry standards estimate a new patient is worth
                          $1,000 to $1,500 in their first year (including exams,
                          cleanings, hygiene appointments, and restorative
                          work).
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-[24px] font-extrabold leading-none text-[var(--color-secondary)]">
                    ${patientValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="3000"
                  step="50"
                  value={patientValue}
                  onChange={(e) => setPatientValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#E8F3FB] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-2 font-semibold">
                  <span>$500</span>
                  <span>$1,250 (Avg)</span>
                  <span>$2,000</span>
                  <span>$3,000</span>
                </div>
              </div>
            </div>

            {/* Note & CTA link */}
            <div className="pt-6 border-t border-[#E3EDF5] mt-6 flex flex-col gap-3">
              <div className="flex items-start gap-2.5 p-3.5 bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-100 rounded-xl">
                <CalendarCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[13.5px] leading-[21px] text-amber-800 font-medium">
                  <strong>
                    Now imagine never missing another after-hours inquiry again.
                  </strong>{" "}
                  Dental Connect Solutions captures these high-value
                  opportunities 24/7.
                </p>
              </div>
            </div>
          </div>

          {/* ROI Display Card Wrapper (Gradient Border) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#2EA8E0] via-[var(--color-primary)] to-[#0B3550] p-[1.5px] rounded-[32px] shadow-[0_25px_50px_rgba(11,53,80,0.18)] flex items-stretch">
            <div className="bg-[#0B3550] rounded-[30.5px] p-8 text-white flex flex-col justify-between relative overflow-hidden w-full">
              {/* Visual background highlight */}
              <div className="absolute -right-10 -bottom-10 w-[220px] h-[220px] bg-[var(--color-accent)]/15 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <div className="flex justify-between items-center mb-8 gap-4">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[var(--color-accent)] animate-bounce" />
                    <span className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#A8D8F0]">
                      Growth Projection
                    </span>
                  </div>
                  {roiMultiplier > 1 && (
                    <span className="text-[10px] font-extrabold px-2.5 py-1 bg-[#2EA8E0]/15 text-[#72C8FF] border border-[#2EA8E0]/20 rounded-full">
                      {roiMultiplier}x ROI Est.
                    </span>
                  )}
                </div>

                {/* Annual revenue display */}
                <div className="mb-8">
                  <span className="text-[12px] font-bold text-[#A8D8F0] uppercase tracking-[1px] block mb-1.5">
                    Estimated Annual Revenue
                  </span>
                  <span className="text-[44px] sm:text-[54px] font-extrabold tracking-[-1.5px] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C6EBFF] to-[#3B82F6] block leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                    ${annualRevenue.toLocaleString()}
                  </span>
                </div>

                {/* ROI Breakdown stats */}
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center text-[14px]">
                    <span className="text-[#A8D8F0] font-semibold flex items-center gap-1">
                      Formula:
                    </span>
                    <span className="text-[11.5px] text-gray-300 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      ({patients} Patients × ${patientValue.toLocaleString()}) ×
                      12
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[14px]">
                    <span className="text-[#A8D8F0] font-semibold">
                      Monthly Increase:
                    </span>
                    <span className="font-extrabold text-white text-[16px]">
                      +${monthlyRevenue.toLocaleString()} / mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[14px]">
                    <span className="text-[#A8D8F0] font-semibold">
                      Patients Added:
                    </span>
                    <span className="font-bold text-white text-[15px]">
                      +{patients * 12} / year
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={handleScrollToReserve}
                  className="w-full h-[56px] rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-[15.5px] shadow-[0_10px_25px_rgba(21,101,168,0.4)] flex items-center justify-center gap-2 group transition-all duration-300"
                >
                  Claim Your Pilot Spot
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-[11.5px] text-[#A8D8F0] text-center mt-3.5">
                  No cost during pilot. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
