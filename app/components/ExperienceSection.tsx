import { experiences } from "../constants";
import { Experience } from "../types";
import PillBadge from "./PillBadge";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const renderExperience = (experience: Experience) => {
  return (
    <li key={experience.title} className="mb-8 sm:mb-12">
      <a
        href={experience.company?.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100 lg:group-hover/list:opacity-80">
          <div className="absolute -inset-x-4 -inset-y-4 lg:-inset-x-6 lg:-inset-y-6 hidden rounded-md transition lg:block lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:bg-accent/50 lg:group-hover:border lg:group-hover:border-[#e6e9ec] lg:group-hover:shadow-[0_2px_6px_rgba(2,12,27,0.1)]"></div>

          {/* Date */}
          <header
            className="z-10 mb-2 text-xs font-semibold uppercase tracking-widest leading-5 text-secondary sm:col-span-2"
            aria-label={experience.date}
          >
            {experience.date}
          </header>

          {/* Details */}
          <div className="z-10 sm:col-span-6">
            <div className="flex items-baseline gap-2">
              <h3 className="text-sm font-semibold transition-all duration-300 ease-in-out text-primary group-hover:text-highlight">
                {experience.title}
                {experience.company?.name && <> · {experience.company.name}</>}
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </span>
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              {experience.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <PillBadge key={skill}>{skill}</PillBadge>
              ))}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-11">
      <SectionTitle title="Experience" />

      <ul className="group/list flex flex-col gap-4">
        {experiences.map((experience: Experience) =>
          renderExperience(experience)
        )}
      </ul>

      <div className="">
        <a
          href="/bret-axl-sebastian-pura-resume.pdf"
          download
          className="inline-flex items-center gap-2 text-highlight hover:text-primary transition-all duration-300 ease-in-out group"
        >
          <span className="text-sm font-medium">View Full Resume</span>
          <span className="text-highlight group-hover:translate-x-1 transition-all duration-300 ease-in-out">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default ExperienceSection;
