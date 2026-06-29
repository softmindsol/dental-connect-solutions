import { MapPin, Clock, Phone, CheckCircle2, Check } from "lucide-react";
import { TbDental } from "react-icons/tb";

export function Hero() {
  return (
    <section className="relative w-full pt-[160px] pb-24 overflow-hidden bg-[radial-gradient(circle_at_88%_-10%,rgba(46,168,224,0.16)_0%,rgba(46,168,224,0)_70%)]">
      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row relative">
        <div className="flex-1 z-10">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-full text-[12.5px] font-semibold text-[var(--color-primary)]">
              <MapPin className="w-4 h-4 text-red-500 fill-red-500/20" />
              <span>Now Piloting in Florida</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-full text-[12.5px] font-semibold text-[var(--color-primary)]">
              <TbDental className="w-4 h-4 text-amber-500" />
              <span>Built for Dental Practices</span>
            </div>
          </div>

          <h1 className="text-[42px] lg:text-[50px] font-bold leading-[1.15] tracking-[-0.58px] text-[var(--color-secondary)] mb-6">
            The 24/7 digital <br className="hidden lg:block" />
            coworker that <br className="hidden lg:block" />
            <span className="text-[var(--color-primary)]">
              never misses a caller.
            </span>
          </h1>

          <p className="text-[18px] leading-[29px] text-[var(--color-foreground-muted)] mb-10 max-w-[580px]">
            Dental Connect Solutions answers every incoming call, captures new
            patient opportunities, handles appointment requests, and follows up
            automatically — even when your front desk is already helping another
            patient.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-[13px] font-semibold text-[var(--color-foreground-muted)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
              Dental-practice focused
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--color-primary)]" />
              Live in &lt; 2 weeks
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[var(--color-primary)]" />
              Uses your existing number
            </div>
          </div>
        </div>

        {/* Signature Element: Live Call Simulation */}
        <div className="flex-1 relative mt-16 lg:mt-0 lg:ml-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_-10%,rgba(46,168,224,0.3)_0%,rgba(46,168,224,0)_65%)] rounded-[28px]"></div>
          <div className="relative w-full h-[482px] bg-[var(--color-secondary)] rounded-[28px] shadow-[0_24px_60px_rgba(11,53,80,0.16)] mx-auto overflow-hidden flex flex-col p-6 border border-white/5">
            {/* Simulation Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-[#2EA8E0] rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#A8D8F0]">
                  Live simulation
                </span>
              </div>
              <div className="flex items-center gap-[3px] opacity-80">
                {[1, 2, 3, 4].map((i) => {
                  const heights = [10, 16, 12, 14];
                  return (
                    <div
                      key={i}
                      className="w-[3px] bg-[#4FB8E8] rounded-full animate-bounce"
                      style={{
                        height: `${heights[i - 1]}px`,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>

            {/* Caller Info */}
            <div className="flex items-center gap-3 border-b border-white/5 pb-6 mb-6">
              <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#2C7DAE] to-[#1B4D73] flex items-center justify-center text-white font-semibold text-[14px]">
                RM
              </div>
              <div>
                <div className="text-white font-semibold text-[14.5px]">
                  Incoming call · Robert M.
                </div>
                <div className="text-[#9FBFD4] text-[12px]">
                  Dental — main line · 00:04
                </div>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="flex-1 flex flex-col gap-4 overflow-hidden">
              {/* User Bubble */}
              <div className="bg-white rounded-[14px_14px_4px_14px] p-4 text-[13.5px] text-[#4A5C6C] self-end max-w-[85%] shadow-sm leading-relaxed">
                Hi, I need to reschedule my cleaning appointment.
              </div>

              {/* AI Bubble */}
              <div className="bg-[#2A4356] border border-white/5 rounded-[14px_14px_14px_4px] p-4 text-[13.5px] text-[#D6EFFF] self-start max-w-[85%] shadow-sm leading-relaxed">
                Of course — I can help with that. Can I get your date of birth
                to pull up your file?
              </div>

              {/* User Bubble */}
              <div className="bg-white rounded-[14px_14px_4px_14px] p-4 text-[13.5px] text-[#4A5C6C] self-end max-w-[85%] shadow-sm mt-2 leading-relaxed">
                Sure, it&apos;s 04/12/1968.
              </div>

              {/* AI Bubble */}
              <div className="bg-[#2A4356] border border-white/5 rounded-[14px_14px_14px_4px] p-4 text-[13.5px] text-[#D6EFFF] self-start max-w-[85%] shadow-sm mt-2 leading-relaxed">
                Got it. I have an opening Thursday at 2:30pm — does that work?
              </div>
            </div>

            {/* Action Banner */}
            <div className="mt-6 bg-[#164766] border border-[#2EA8E0]/20 rounded-[10px] p-3 flex items-center gap-3 shadow-inner">
              <div className="bg-[#22C55E] rounded-sm w-[14px] h-[14px] flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-[12.5px] font-medium text-[#A8D8F0]">
                Appointment rebooked · Confirmation SMS sent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
