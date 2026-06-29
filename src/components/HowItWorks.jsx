export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Call comes in",
      description:
        "Patients call your existing office number. No new hardware. No new app.",
    },
    {
      number: "2",
      title: "Dental Connect answers",
      description:
        "The AI greets the caller, identifies their needs, and gathers key information.",
    },
    {
      number: "3",
      title: "Handles the request",
      description:
        "Appointment requests, cancellations, insurance questions, and common inquiries are handled automatically.",
    },
    {
      number: "4",
      title: "Confirms & follows up",
      description:
        "Confirmation texts and reminders are sent automatically, reducing front-desk workload and no-shows.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full py-24 bg-[var(--color-background)]"
    >
      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[7px] h-[7px] bg-[var(--color-accent)] rounded-full"></div>
            <h3 className="font-bold text-[12.5px] uppercase tracking-[1.75px] text-[var(--color-primary)]">
              The call flow
            </h3>
          </div>
          <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0F2233] max-w-[800px] mb-5">
            From ring to resolved — in one continuous flow
          </h2>
          <p className="text-[17px] leading-[27px] text-[var(--color-foreground-muted)] max-w-[650px]">
            Every call follows the same four-step path, from a routine cleaning
            request to a new patient inquiry.
          </p>
        </div>

        <div className="relative w-full mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center md:items-start relative"
              >
                {/* Connector Line Segment */}
                {idx < steps.length - 1 && (
                  <div
                    className={`hidden absolute top-[29px] left-[30px] w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/10 z-0 ${
                      idx === 3 ? "" : "lg:block"
                    } ${idx % 2 === 0 ? "md:block" : ""}`}
                  ></div>
                )}

                <div className="w-[60px] h-[60px] rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-background)] flex items-center justify-center font-bold text-[18px] text-[var(--color-primary)] mb-6 shrink-0 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-bold text-[17px] leading-[27px] tracking-[-0.17px] text-[var(--color-secondary)] mb-3 text-center md:text-left w-full">
                  {step.title}
                </h3>
                <p className="text-[14.5px] leading-[23px] text-[var(--color-foreground-muted)] text-center md:text-left">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
