"use client";

import Link from "next/link";

import { projects } from "../constants";

const projectsData = projects
  .map((project) => ({
    year: parseInt(project.date),
    name: project.title,
    builtWith: project.builtWith,
    link: project.link || "",
    linkText: project.link || "",
    company: {
      url: project.company?.url || "",
      name: project.company?.name || "",
    },
  }))
  .sort((a, b) => b.year - a.year);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 py-8 md:px-[100px] md:py-20 bg-main text-primary">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-highlight transition-all duration-300 ease-in-out mb-4"
        >
          <span>←</span>
          <span>Bret Axl Sebastian Pura</span>
        </Link>
        <h1 className="text-2xl md:text-4xl font-bold text-primary">
          All Projects
        </h1>
      </div>

      {/* Cards for mobile, table for desktop */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs text-secondary">{project.year}</span>
                <span className="text-xs text-secondary">
                  {project.company.name || "-"}
                </span>
              </div>
              <div className="font-semibold text-primary">{project.name}</div>
              <div className="flex flex-wrap gap-2">
                {project.builtWith.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-accent text-highlight text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                {project.link && project.linkText ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-secondary hover:text-highlight transition-all duration-300 ease-in-out text-xs"
                  >
                    <span>{project.linkText}</span>
                    <span className="text-highlight">→</span>
                  </a>
                ) : (
                  <span className="text-secondary text-xs">-</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table for desktop */}
      <div className="w-full overflow-x-auto hidden md:block">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-secondary text-xs md:text-sm uppercase tracking-widest">
              <th className="text-left py-2 md:py-4 pr-4 md:pr-8 font-normal">
                Year
              </th>
              <th className="text-left py-2 md:py-4 pr-4 md:pr-8 font-normal">
                Project
              </th>
              <th className="text-left py-2 md:py-4 pr-4 md:pr-8 font-normal">
                Made at
              </th>
              <th className="text-left py-2 md:py-4 pr-4 md:pr-8 font-normal">
                Built with
              </th>
              <th className="text-left py-2 md:py-4 font-normal">Link</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr
                key={index}
                className="border-b border-primary hover:bg-accent transition-all duration-300 ease-in-out group"
              >
                <td className="py-2 md:py-4 pr-4 md:pr-8 text-secondary text-xs md:text-sm">
                  {project.year}
                </td>
                <td className="py-2 md:py-4 pr-4 md:pr-8">
                  <span className="text-primary font-medium group-hover:text-highlight transition-all duration-300 ease-in-out text-sm md:text-base">
                    {project.name}
                  </span>
                </td>
                <td className="py-2 md:py-4 pr-4 md:pr-8 text-secondary text-xs md:text-sm">
                  {project.company.name || "-"}
                </td>
                <td className="py-2 md:py-4 pr-4 md:pr-8">
                  <div className="flex flex-wrap gap-2">
                    {project.builtWith.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent text-highlight text-xs px-2 md:px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-2 md:py-4">
                  {project.link && project.linkText ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-highlight transition-all duration-300 ease-in-out group/link text-xs md:text-base"
                    >
                      <span>{project.linkText}</span>
                      <span className="text-highlight group-hover/link:translate-x-1 transition-all duration-300 ease-in-out">
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="text-secondary text-xs md:text-base">
                      -
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
