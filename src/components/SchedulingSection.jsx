"use client";

import {
  Calendar,
  Clock,
  MessageSquare,
  ArrowRight,
  Shield,
  Activity,
  UserCheck,
  RefreshCw,
  XCircle,
  Bell,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function SchedulingSection() {
  const capabilities = [
    {
      title: "New patient calls",
      desc: "Instantly capture and intake fresh patient inquiries.",
      icon: <UserCheck className="w-5 h-5 text-[#10B981]" />,
      bgColor: "bg-emerald-50",
      borderColor: "hover:border-emerald-200",
    },
    {
      title: "Appointment scheduling",
      desc: "Book appointments directly into your existing software.",
      icon: <Calendar className="w-5 h-5 text-[var(--color-primary)]" />,
      bgColor: "bg-[#E8F3FB]",
      borderColor: "hover:border-blue-200",
    },
    {
      title: "Appointment rescheduling",
      desc: "Easily move times around without staff involvement.",
      icon: <RefreshCw className="w-5 h-5 text-indigo-500" />,
      bgColor: "bg-indigo-50",
      borderColor: "hover:border-indigo-200",
    },
    {
      title: "Appointment cancellations",
      desc: "Free up calendar slots instantly upon request.",
      icon: <XCircle className="w-5 h-5 text-rose-500" />,
      bgColor: "bg-rose-50",
      borderColor: "hover:border-rose-200",
    },
    {
      title: "After-hours calls",
      desc: "Don't lose patients who call in the evening or weekends.",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      bgColor: "bg-amber-50",
      borderColor: "hover:border-amber-200",
    },
    {
      title: "Insurance questions",
      desc: "Answer basic coverage questions using your guidelines.",
      icon: <Shield className="w-5 h-5 text-purple-500" />,
      bgColor: "bg-purple-50",
      borderColor: "hover:border-purple-200",
    },
    {
      title: "SMS confirmations",
      desc: "Auto-send text confirmation and details post-call.",
      icon: <MessageSquare className="w-5 h-5 text-[#2EA8E0]" />,
      bgColor: "bg-sky-50",
      borderColor: "hover:border-sky-200",
    },
    {
      title: "Follow-up reminders",
      desc: "Nudge patients automatically to reduce no-show rates.",
      icon: <Bell className="w-5 h-5 text-[#0F2233]" />,
      bgColor: "bg-gray-100",
      borderColor: "hover:border-gray-300",
    },
  ];

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
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white via-[#F5F9FC] to-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[250px] h-[250px] bg-[var(--color-accent)]/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Copy and Capabilities list */}
        <div className="flex-1 flex flex-col items-start z-10">
          <div className="flex items-center gap-2 mb-4 bg-[#E8F3FB] px-3.5 py-1.5 rounded-full border border-[#D6E7F2]">
            <Sparkles className="w-4 h-4 text-[var(--color-primary)] animate-pulse" />
            <span className="font-bold text-[11px] uppercase tracking-[1.5px] text-[var(--color-primary)]">
              Core Capabilities
            </span>
          </div>

          <h2 className="text-[34px] md:text-[42px] font-extrabold leading-[1.12] tracking-[-0.5px] text-[var(--color-secondary)] mb-6 max-w-[550px]">
            Make scheduling the{" "}
            <span className="text-[var(--color-primary)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              hero
            </span>{" "}
            of your practice
          </h2>

          <p className="text-[17px] leading-[27px] text-[var(--color-foreground-muted)] mb-10 max-w-[580px]">
            While basic AI tools only take messages, Dental Connect Solutions is
            designed to directly manage your calendar. It handles everything
            from new patient calls to cancellations, freeing your team to focus
            on the patients in the chair.
          </p>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3.5 p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-[var(--color-border)]/55 hover:shadow-[0_12px_30px_rgba(11,53,80,0.06)] transition-all duration-300 group hover:-translate-y-0.5 ${item.borderColor}`}
              >
                <div
                  className={`w-[38px] h-[38px] rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[14.5px] text-[var(--color-secondary)] leading-[20px] mb-0.5 group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-[var(--color-foreground-muted)] leading-[18px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual calendar mockup */}
        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-6 w-full relative z-10">
          <div className="relative bg-white/90 backdrop-blur-xl rounded-[28px] border border-[#D6E7F2]/80 p-6 sm:p-8 shadow-[0_30px_60px_rgba(11,53,80,0.1)] overflow-hidden">
            {/* Mock Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E3EDF5] pb-5 mb-6 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] bg-[#E8F3FB] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[16.5px] text-[var(--color-secondary)]">
                    Practice Calendar
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                    </span>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] font-medium">
                      Live sync active
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-[#E6F5ED] border border-[#10B981]/20 rounded-full text-[11px] font-bold text-[#10B981] w-fit">
                <Shield className="w-3.5 h-3.5 fill-[#10B981]/10" />
                HIPAA Compliant
              </div>
            </div>

            {/* Calendar Events List */}
            <div className="space-y-4">
              {/* Event 1 */}
              <div className="bg-white border border-[#E3EDF5] rounded-2xl p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_4px_12px_rgba(11,53,80,0.02)] relative overflow-hidden group hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(21,101,168,0.05)]">
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#10B981]"></div>
                <div className="pl-3 flex items-start gap-3">
                  <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-emerald-400 to-[#10B981] flex items-center justify-center text-white font-extrabold text-[12.5px] shrink-0 shadow-sm">
                    RM
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-[14.5px] text-[var(--color-secondary)]">
                        Robert M.
                      </span>
                      <span className="text-[9.5px] px-2.5 py-0.5 bg-emerald-50 text-[#10B981] font-bold rounded-full border border-emerald-100">
                        New Patient
                      </span>
                    </div>
                    <p className="text-[12.5px] text-[var(--color-foreground-muted)] mt-1 font-medium">
                      Routine Hygiene Cleaning & X-Rays
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:text-right shrink-0 pl-11 sm:pl-0">
                  <div>
                    <span className="font-bold text-[13.5px] text-[var(--color-secondary)] block">
                      Thu, 2:30 PM
                    </span>
                    <span className="text-[11px] text-[#10B981] font-bold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-50" />{" "}
                      Booked by AI
                    </span>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white border border-[#E3EDF5] rounded-2xl p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_4px_12px_rgba(11,53,80,0.02)] relative overflow-hidden group hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(21,101,168,0.05)]">
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[var(--color-primary)]"></div>
                <div className="pl-3 flex items-start gap-3">
                  <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-blue-400 to-[var(--color-primary)] flex items-center justify-center text-white font-extrabold text-[12.5px] shrink-0 shadow-sm">
                    SL
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-[14.5px] text-[var(--color-secondary)]">
                        Sarah L.
                      </span>
                      <span className="text-[9.5px] px-2.5 py-0.5 bg-blue-50 text-[var(--color-primary)] font-bold rounded-full border border-blue-100/50">
                        Existing Patient
                      </span>
                    </div>
                    <p className="text-[12.5px] text-[var(--color-foreground-muted)] mt-1 font-medium">
                      Composite Filling (Tooth #14)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:text-right shrink-0 pl-11 sm:pl-0">
                  <div>
                    <span className="font-bold text-[13.5px] text-[var(--color-secondary)] block">
                      Thu, 4:00 PM
                    </span>
                    <span className="text-[11px] text-[var(--color-primary)] font-bold flex items-center gap-1 mt-0.5">
                      <RefreshCw className="w-3.5 h-3.5" /> Moved via SMS
                    </span>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-[#FAFDFB] border border-[#D1FAE5] rounded-2xl p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_4px_12px_rgba(11,53,80,0.01)] relative overflow-hidden group hover:border-[#10B981]/50 transition-all duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#059669]"></div>
                <div className="pl-3 flex items-start gap-3">
                  <div className="w-[38px] h-[38px] rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] font-extrabold text-[12.5px] shrink-0 border border-[#10B981]/20">
                    ⚡
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-extrabold text-[14.5px] text-[#047857]">
                        Waitlist Auto-Fill
                      </span>
                      <span className="text-[9.5px] px-2.5 py-0.5 bg-[#D1FAE5] text-[#065F46] font-bold rounded-full border border-[#A7F3D0]">
                        Instant Match
                      </span>
                    </div>
                    <p className="text-[12.5px] text-[#065F46]/90 mt-1 font-medium">
                      Filled slot after John D. cancelled root canal.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:text-right shrink-0 pl-11 sm:pl-0">
                  <div>
                    <span className="font-bold text-[13.5px] text-[#047857] block">
                      Fri, 10:00 AM
                    </span>
                    <span className="text-[11px] text-[#059669] font-bold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-[#D1FAE5]" />{" "}
                      Auto-Confirmed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleScrollToReserve}
            className="h-[56px] px-10 md:px-18 rounded-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/95 hover:shadow-[0_0_25px_rgba(11,53,80,0.2)] text-white font-semibold text-[15px] flex items-center justify-center gap-2 group transition-all duration-300"
          >
            Get Started with Scheduling
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
