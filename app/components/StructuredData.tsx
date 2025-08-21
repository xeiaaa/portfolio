"use client";

import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    // Create and inject structured data script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Bret Axl Sebastian Pura",
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer with 9+ years of experience specializing in React, Node.js, Next.js, and NestJS",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://bretaxlsebastian.dev",
      image: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://bretaxlsebastian.dev"
      }/profile-image.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/bretaxlsebastianpura",
        "https://github.com/xeiaaa",
        "https://x.com/deemid_",
        "https://www.instagram.com/bretaxlsebastian",
        "https://codepen.io/xeiaaa",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Olongapo City",
        addressCountry: "Philippines",
      },
      email: "cosmicdevcs@gmail.com",
      telephone: "+63 995 753 6000",
      knowsAbout: [
        "React",
        "Node.js",
        "Next.js",
        "NestJS",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "Full Stack Development",
        "Web Development",
        "Software Engineering",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      alumniOf: {
        "@type": "Organization",
        name: "Cloudstaff",
      },
    });

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StructuredData;
