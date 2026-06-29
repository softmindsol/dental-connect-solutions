import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PilotProgram() {
  const steps = [
    {
      number: "1",
      boldPart: "Apply below",
      regularPart: " — takes under two minutes, no commitment required.",
    },
    {
      number: "2",
      boldPart: "We schedule a short discovery call",
      regularPart:
        " to understand your current call volume and front-desk workflow.",
    },
    {
      number: "3",
      boldPart: "Dental Connect runs alongside your team",
      regularPart:
        " for a trial period — answering overflow calls, not replacing anyone.",
    },
    {
      number: "4",
      boldPart: "Your feedback helps shape",
      regularPart: " the next version.",
    },
  ];

  return (
    <section
      id="pilot-program"
      className="relative w-full py-18 bg-[var(--color-secondary)] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-[-200px] right-[-160px] w-[520px] h-[520px] bg-[radial-gradient(circle_at_50%_50%,rgba(46,168,224,0.18)_0%,rgba(46,168,224,0)_70%)] pointer-events-none"></div>

      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-[60px] relative z-10">
        <div className="flex-1 flex flex-col items-start pt-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-[7px] h-[7px] bg-[#2EA8E0] rounded-full"></div>
            <h3 className="font-bold text-[12.5px] uppercase tracking-[1.75px] text-[#2EA8E0]">
              Florida pilot program
            </h3>
          </div>

          <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.4px] text-white max-w-[600px] mb-8">
            We&apos;re testing this with a small group of Florida dental
            practices first
          </h2>

          <p className="text-[17px] leading-[27px] text-[#D6EFFF] max-w-[600px] mb-12">
            Dental Connect Solutions is currently in early validation. Before a
            wider rollout, we&apos;re partnering with a small number of dental
            offices in the Florida area to test the system on real call volume
            and gather feedback from front-desk teams.
          </p>

          <div className="flex flex-wrap gap-4 w-full">
            <div className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[12.5px] font-semibold text-[#72C8FF]">
              No cost during pilot
            </div>
            <div className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[12.5px] font-semibold text-[#72C8FF]">
              Cancel anytime
            </div>
            <div className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[12.5px] font-semibold text-[#72C8FF]">
              Limited spots available
            </div>
          </div>
        </div>

        {/* Right side box */}
        <div className="flex-1 w-full lg:max-w-[550px]">
          <div className="bg-white/5 border border-white/15 rounded-[26px] p-8 lg:p-10 flex flex-col h-full justify-between backdrop-blur-sm">
            <div className="flex flex-col gap-7">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#2EA8E0] shrink-0 flex items-center justify-center text-[12px] font-bold text-[var(--color-secondary)]">
                    {step.number}
                  </div>
                  <p className="text-[14.5px] leading-[24px] text-[#D6EFFF] pt-0.5">
                    <span className="font-bold text-white">
                      {step.boldPart}
                    </span>
                    {step.regularPart}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button className="w-full h-[54px] text-[15px] font-semibold rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-[0_10px_24px_rgba(21,101,168,0.3)]">
                Apply for the Florida Pilot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
