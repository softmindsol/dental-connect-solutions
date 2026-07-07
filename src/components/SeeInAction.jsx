import { Play, Check } from "lucide-react";
import { DCS } from "../../public/video";

const SeeInAction = () => {
  const features = [
    "New patient inquiry",
    "Insurance questions",
    "Appointment scheduling",
    "Automated SMS follow-up",
  ];

  return (
    <section className="relative w-full py-24 bg-[var(--color-background)]">
      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col">
        {/* Quote Card */}
        <div className="w-full bg-white border border-[#D6E7F2] shadow-[0_2px_10px_rgba(11,61,46,0.06)] rounded-[26px] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 mb-20">
          <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#1565A8] to-[#0B3550] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-[22px]">J</span>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <p className="text-[#0F2233] text-[15.5px] leading-[24px] mb-1 font-medium">
              <b>&quot;I&apos;m Jean, </b> and we&apos;re testing an AI
              receptionist for dental practices in Florida. I&apos;d love to
              hear what you think — your feedback shapes what we build next.
              <b>&quot;</b>
            </p>
            <p className="text-[var(--color-foreground-muted)] text-[13px] font-medium">
              Jean · Founder, Dental Connect Solutions
            </p>
          </div>
        </div>

        {/* Video & Content Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-center">
          {/* Video Thumbnail */}
          <video
            src={DCS}
            controls
            className="w-full lg:w-1/2 aspect-[16/10] rounded-[26px] shadow-[0_24px_60px_rgba(11,53,80,0.16)] object-cover"
          ></video>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-[7px] h-[7px] bg-[var(--color-accent)] rounded-full"></div>
              <h3 className="font-bold text-[12.5px] uppercase tracking-[1.75px] text-[var(--color-primary)]">
                See it in action
              </h3>
            </div>

            <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0F2233] mb-6 max-w-[500px]">
              Watch Jean walk through a real dental call
            </h2>

            <p className="text-[17px] leading-[27px] text-[var(--color-foreground-muted)] mb-10 max-w-[550px]">
              A quick walkthrough showing how Dental Connect answers calls,
              captures patient information, and follows up automatically.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="w-[18px] h-[18px] text-[var(--color-accent)] shrink-0 stroke-[3px]" />
                  <span className="text-[var(--color-foreground-muted)] text-[14.5px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeInAction;
