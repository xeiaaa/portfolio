"use client";

import { useState } from "react";
import { navItems, Profile } from "./constants";
import { NavItem } from "./types";
import ProjectPreviews from "./components/ProjectPreviews";
import ExperienceSection from "./components/ExperienceSection";
import About from "./components/About";
import Articles from "./components/Articles";
import Socials from "./components/Socials";

export default function PortfolioLayout() {
  const [selectedSection, setSelectedSection] = useState<string>("about");

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleNavClick = (id: string) => {
    setSelectedSection(id);
    scrollToSection(id);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center min-h-screen px-12 py-24 gap-24 lg:gap-4 bg-main text-primary max-w-screen-xl mx-auto relative">
      {/* Sidebar */}
      <aside className="lg:w-1/2 flex flex-col justify-between lg:h-[calc(100vh-160px)] gap-10 lg:sticky lg:top-24">
        {/* Name & Title */}
        <div className="flex flex-col gap-2">
          <h1
            className="text-5xl font-bold text-primary tracking-wide leading-loose max-w-[18ch]"
            style={{ lineHeight: "1.2" }}
          >
            {Profile.name}
          </h1>
          <p className="text-lg font-medium text-primary">{Profile.title}</p>
          <p className="text-base text-secondary leading-relaxed max-w-xs">
            {Profile.description}
          </p>
          {/* Navigation Links */}
          <nav className="lg:flex-col gap-4 mt-10 hidden lg:flex">
            {navItems.map((item: NavItem) => (
              <div
                key={item.id}
                className="flex items-center gap-4 group cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => handleNavClick(item.id)}
              >
                <div
                  className={`${
                    selectedSection === item.id
                      ? "bg-highlight w-16"
                      : "bg-muted w-8"
                  } h-0.5 transition-all duration-300 ease-in-out rounded-full`}
                ></div>
                <span
                  className={`${
                    selectedSection === item.id
                      ? "text-primary text-highlight"
                      : "text-muted"
                  } text-xs font-bold uppercase tracking-widest group-hover:text-highlight transition-all duration-300 ease-in-out`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Social Icons */}
        <Socials />
      </aside>

      {/* Main Content */}
      <main className="lg:w-1/2 flex flex-col gap-16">
        {/* About Section */}
        <About />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectPreviews />

        {/* Articles Section */}
        {/* <Articles /> */}

        {/* Footer */}
        <footer className="mt-auto pt-16">
          <div className="text-sm text-secondary leading-relaxed">
            Loosely designed in Figma and coded in Visual Studio Code by yours
            truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
            All text is set in the Inter typeface.
          </div>
        </footer>
      </main>
    </div>
  );
}
