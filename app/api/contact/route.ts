import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `;

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev", // You can update this to your verified domain
      to: process.env.RESEND_TO_EMAIL || "cosmicdevcs@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
      replyTo: email, // This allows you to reply directly to the sender
    });

    console.log("Contact form submission sent:", {
      name,
      email,
      subject,
      message: message.substring(0, 100) + "...",
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500, headers: corsHeaders }
    );
  }
}
