import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Sab origins k liay allow karnay wala CORS header
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

serve(async (req) => {
  // Browser preflight (OPTIONS) request ko handle karna zaroori hai,
  // warna actual POST request kabhi bhejta hi nahi aur CORS error deta hai
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { practice_name, doctor_name, email } = await req.json()

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Deno.env.get("NEXT_PUBLIC_RESEND_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Dental Connect Solutions <hello@dentalconnectsolutions.com>",
        to: email,
        subject: "Your Florida Pilot Spot is Reserved!",
        html: `<p>Hi ${doctor_name},</p><p>Thank you for reserving your spot for <strong>${practice_name}</strong> in the Florida Pilot Program. We'll be in touch soon!</p>`,
      }),
    })

    const data = await res.json()

    return new Response(JSON.stringify(data), {
      status: res.ok ? 200 : 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("Error:", err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  }
})