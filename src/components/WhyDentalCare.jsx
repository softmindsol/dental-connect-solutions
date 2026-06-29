import { Users, CheckSquare, Clock, MessageSquare } from "lucide-react";

const WhyDentalCare = () => {
  const cards = [
    {
      icon: <Users className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Never miss a new patient call",
      description:
        "Every missed new patient call is potential revenue walking out the door. Dental Connect makes sure every caller gets an answer.",
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
    <section className="w-full py-24 bg-[#F5F4F4]">
      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col items-center">
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

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EDEEF0] rounded-[20px] p-6 lg:p-7 flex flex-col items-start shadow-[10px_25px_100px_rgba(0,107,32,0.02)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-[42px] h-[42px] bg-[var(--color-secondary)] rounded-[11px] flex items-center justify-center mb-6 shrink-0">
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
    </section>
  );
};

export default WhyDentalCare;
