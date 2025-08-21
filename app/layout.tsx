import type { Metadata } from "next";
import { JetBrains_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bret Axl Sebastian Pura - Full Stack Developer | Portfolio",
  description:
    "Bret Axl Sebastian Pura is a Full Stack Developer with 9+ years of experience specializing in React, Node.js, Next.js, and NestJS. View portfolio, projects, and professional experience.",
  keywords: [
    "Bret Axl Sebastian Pura",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Web Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Philippines Developer",
    "Olongapo City Developer",
  ],
  authors: [{ name: "Bret Axl Sebastian Pura" }],
  creator: "Bret Axl Sebastian Pura",
  publisher: "Bret Axl Sebastian Pura",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://bretaxlsebastian.dev"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bretaxlsebastian.dev",
    title: "Bret Axl Sebastian Pura - Full Stack Developer",
    description:
      "Full Stack Developer with 9+ years of experience specializing in React, Node.js, Next.js, and NestJS. View portfolio, projects, and professional experience.",
    siteName: "Bret Axl Sebastian Pura Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bret Axl Sebastian Pura - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bret Axl Sebastian Pura - Full Stack Developer",
    description:
      "Full Stack Developer with 9+ years of experience specializing in React, Node.js, Next.js, and NestJS.",
    images: ["/og-image.jpg"],
    creator: "@deemid_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
