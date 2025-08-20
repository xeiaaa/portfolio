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
  title: "Bret Axl Sebastian Pura",
  description: "Bret Axl Sebastian Pura's personal website",
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
