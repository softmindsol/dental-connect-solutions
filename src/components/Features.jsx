import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Phone,
  Users,
  Calendar,
  MessageSquare,
  Building2,
  Smartphone,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Phone className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Never miss a call",
      description:
        "Every caller receives an answer — even during peak call volume.",
    },
    {
      icon: <Users className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "New patient capture",
      description:
        "Collects patient information and appointment requests before they reach your staff.",
    },
    {
      icon: <Calendar className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Appointment scheduling",
      description:
        "Handles appointment requests, reschedules, and cancellations.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "SMS reminders & follow-ups",
      description: "Reduce no-shows and improve patient communication.",
    },
    {
      icon: <Building2 className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Built for dental practices",
      description: "Trained on dental-office workflows — not a generic script.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Works with your current phone number",
      description: "No new hardware required.",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full py-24 bg-[var(--color-background-alt)]"
    >
      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-[125px] h-[7px] bg-[#2EA8E0] rounded-full"></div>
          </div>
          <h3 className="font-bold text-[12.5px] uppercase tracking-[1.75px] text-[var(--color-primary)] mb-6">
            What it handles
          </h3>
          <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0F2233] max-w-[700px]">
            Front-desk coverage that doesn&apos;t take lunch breaks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="h-full hover:scale-105 hover:shadow-lg transition-all duration-300 hover:border-[var(--color-primary)] pt-8 px-2 border-[#EDEEF0]"
            >
              <CardHeader className="pb-4">
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[var(--color-background-alt)] flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-[16.5px] leading-[26px] tracking-[-0.165px]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[14px] leading-[22px]">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
