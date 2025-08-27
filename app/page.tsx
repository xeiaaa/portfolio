"use client";

import { useEffect, useState } from "react";
import { navItems, Profile } from "./constants";
import { NavItem } from "./types";
import ProjectPreviews from "./components/ProjectPreviews";
import ExperienceSection from "./components/ExperienceSection";
import About from "./components/About";
import Socials from "./components/Socials";
import PersonalProjectPreviews from "./components/PersonalProjectPreviews";
import Articles from "./components/Articles";
import Separator from "./components/Separator";
import StructuredData from "./components/StructuredData";

const sectionIds = navItems.map((item) => item.id);

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
  // Update selected section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setSelectedSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setSelectedSection(id);
    scrollToSection(id);
    window.history.replaceState(null, "", id === "about" ? "/" : `#${id}`);
  };

  return (
    <>
      <StructuredData />
      <div className="flex flex-col lg:flex-row lg:justify-center min-h-screen px-4 py-8 lg:px-12 lg:py-24 gap-8 lg:gap-4 bg-main text-primary max-w-screen-xl mx-auto relative">
        {/* Sidebar */}
        <aside className="lg:w-1/2 flex flex-col justify-between lg:h-[calc(100vh-160px)] gap-10 lg:sticky lg:top-24">
          {/* Name & Title */}
          <header className="flex flex-col gap-2">
            <h1
              className="text-5xl font-bold text-primary tracking-wide leading-loose max-w-[18ch]"
              style={{ lineHeight: "1.2" }}
            >
              {Profile.name}
            </h1>
            <p className="text-lg font-medium text-primary">{Profile.title}</p>
            <p className="text-base text-secondary leading-relaxed max-w-sm">
              {Profile.description}
            </p>
            {/* Navigation Links */}
            <nav
              className="lg:flex-col gap-4 mt-10 hidden lg:flex"
              aria-label="Main navigation"
            >
              {navItems.map((item: NavItem) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="flex items-center gap-4 group cursor-pointer transition-all duration-300 ease-in-out"
                  aria-current={
                    selectedSection === item.id ? "page" : undefined
                  }
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
                </a>
              ))}
            </nav>
          </header>

          {/* Social Icons */}
          <Socials />
        </aside>

        {/* Main Content */}
        <main className="lg:w-1/2 flex flex-col gap-4">
          {/* About Section */}
          <About />
          <Separator />

          {/* Experience Section */}
          <ExperienceSection />
          <Separator />

          {/* Projects Section */}
          <ProjectPreviews />
          <Separator />

          {/* Personal Projects Section */}
          <PersonalProjectPreviews />
          <Separator />

          {/* Articles Section */}
          <Articles />

          {/* Footer */}
          <footer className="mt-auto pt-16">
            <div className="text-sm text-secondary leading-relaxed">
              {" "}
              <span>
                Inspired by a{" "}
                <a
                  href="https://brittanychiang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:underline transition-all duration-300 ease-in-out"
                >
                  portfolio
                </a>{" "}
                I admired. Rebuilt with Next.js & Tailwind CSS, deployed with
                Vercel.
              </span>
              <Separator />
              <div className="mt-4 text-xs text-muted italic text-center">
                &ldquo;I look forward to tomorrow, but can I leave yesterday
                behind?&rdquo;
                <br />
                <a
                  href="https://www.youtube.com/watch?v=JbUJq552RqA&ab_channel=Eraserheads-Topic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:underline transition-all duration-300 ease-in-out"
                >
                  Lightyears, Eraserheads
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
