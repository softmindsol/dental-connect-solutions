import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Will this replace my front-desk staff?",
      answer:
        "No. Dental Connect is designed to support your team by handling overflow calls, after-hours inquiries, and repetitive call types — not replace your staff.",
    },
    {
      question: "Can it schedule appointments?",
      answer:
        "Yes, it can integrate with scheduling systems to book, reschedule, or cancel appointments directly based on your availability.",
    },
    {
      question: "Do we need new hardware?",
      answer:
        "No new hardware is required. The system works with your existing phone number and infrastructure.",
    },
    {
      question: "Is it available today?",
      answer:
        "We are currently in a closed pilot program in Florida. By signing up, you can secure early access before our broader public launch.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative w-full py-24 bg-[var(--color-background)]"
    >
      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-[125px] h-[7px] bg-[#2EA8E0] rounded-full"></div>
            <h3 className="font-bold text-[12.5px] uppercase tracking-[1.75px] text-[var(--color-primary)]">
              Common questions
            </h3>
          </div>

          <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0F2233] mb-12">
            Before you sign up
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Why we're asking now Card */}
        <div className="flex-1 lg:max-w-[500px]">
          <div className="bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-[26px] p-8 lg:p-10 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[7px] h-[7px] bg-[#2EA8E0] rounded-full"></div>
              <h3 className="font-bold text-[12.5px] uppercase tracking-[1.75px] text-[var(--color-primary)]">
                Why we&apos;re asking now
              </h3>
            </div>

            <h3 className="font-bold text-[21px] leading-[34px] tracking-[-0.21px] text-[var(--color-secondary)] mb-6">
              Built with the people who answer the phone
            </h3>

            <p className="text-[14.5px] leading-[23px] text-[var(--color-foreground-muted)] mb-8">
              Dental Connect Solutions is a prototype, not a finished product.
              We&apos;re sharing it early with dentists, practice managers, and
              front-desk teams because the people who handle these calls every
              day know what actually breaks.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-[17px] h-[17px] rounded-sm border-[1.4px] border-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-[var(--color-primary)]" />
                </div>
                <p className="text-[14px] leading-[22px] text-[var(--color-foreground-muted)]">
                  Your feedback shapes which features ship first
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[17px] h-[17px] rounded-sm border-[1.4px] border-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-[var(--color-primary)]" />
                </div>
                <p className="text-[14px] leading-[22px] text-[var(--color-foreground-muted)]">
                  Early pilot practices get priority access at launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
