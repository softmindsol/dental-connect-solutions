"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  practiceName: z.string().min(1, "Practice name is required"),
  doctorName: z.string().min(1, "Doctor name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
});

export function StatBand() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      practiceName: "",
      doctorName: "",
      email: "",
    },
  });

  const onSubmit = async (values) => {
    if (loading) return;
    setLoading(true);

    const { data, error } = await supabase.from("pilot_reservations").insert([
      {
        practice_name: values.practiceName,
        doctor_name: values.doctorName,
        email: values.email,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Error:", error);
      toast.error("Failed to reserve your spot. Please try again.");
    } else {
      toast.success("Spot reserved successfully!");
      reset();
    }
  };
  return (
    <section
      suppressHydrationWarning={true}
      className="relative w-full py-16 bg-[var(--color-secondary)]"
    >
      <div className="w-full mx-auto px-6 lg:px-12 flex flex-col xl:flex-row lg:items-center gap-10">
        <div className="flex-1 flex gap-8">
          <div className="hidden lg:block w-[246px] shrink-0">
            <Image
              src="/ai-robot.svg"
              alt="AI Robot"
              width={246}
              height={296}
              className="object-contain animate-float drop-shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-start">
              <span className="font-bold text-[64px] leading-none text-[#2EA8E0]">
                42
              </span>
              <span className="font-bold text-[26px] leading-none text-[#2EA8E0] mt-2">
                %
              </span>
            </div>
            <p className="text-[14.5px] leading-[23px] text-[#84D8FF] mt-2 xl:max-w-[280px]">
              of incoming calls to medical practices go unanswered during
              business hours.
            </p>
            <p className="text-[16.5px] leading-[26px] text-[#D6EFFF] mt-6 xl:max-w-[480px]">
              For a dental practice, a missed call isn&apos;t just a missed
              appointment — it could be a new patient with a toothache calling
              your competitor next. Dental Connect Solutions makes sure that
              never happens.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full lg:w-[600px] bg-white rounded-2xl p-6 lg:p-8 shadow-[0_12px_32px_rgba(11,61,46,0.1)] border border-[var(--color-border)]">
          <div className="flex items-center gap-2 mb-6">
            <Phone className="size-5 text-[#2EA8E0]" />
            <h3 className="font-bold text-[13px] text-[var(--color-secondary)] uppercase tracking-[1px]">
              Reserve your Florida pilot spot
            </h3>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Practice name
                </label>
                <Input
                  type="text"
                  placeholder="e.g. Sunshine Dental"
                  className={`bg-[#FAFCFE] h-12 ${errors.practiceName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  {...register("practiceName")}
                />
                {errors.practiceName && (
                  <p className="text-red-500 text-[11px] mt-1 font-medium">
                    {errors.practiceName.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Doctor name
                </label>
                <Input
                  type="text"
                  placeholder="Dr. Smith"
                  className={`bg-[#FAFCFE] h-12 ${errors.doctorName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  {...register("doctorName")}
                />
                {errors.doctorName && (
                  <p className="text-red-500 text-[11px] mt-1 font-medium">
                    {errors.doctorName.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                Work email
              </label>
              <Input
                type="email"
                placeholder="doctor@sunshinedental.com"
                className={`bg-[#FAFCFE] h-12 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full mt-2.5 h-[53px] text-[15px] rounded-full shadow-[0_10px_24px_rgba(21,101,168,0.3)] disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join Florida Pilot Program"}
            </Button>
            <p className="text-[12.5px] leading-[20px] text-[var(--color-foreground-muted)] mt-4">
              For dental practices in Central Florida. Limited pilot spots. No
              cost. No long-term commitment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
