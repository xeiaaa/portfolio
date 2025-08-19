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
    <div className="min-h-screen px-[100px] py-20 bg-main text-primary">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-highlight transition-all duration-300 ease-in-out mb-4"
        >
          <span>←</span>
          <span>Bret Axl Sebastian Pura</span>
        </Link>
        <h1 className="text-4xl font-bold text-primary">All Projects</h1>
      </div>

      {/* Projects Table */}
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr className="text-secondary text-sm uppercase tracking-widest">
              <th className="text-left py-4 pr-8 font-normal">Year</th>
              <th className="text-left py-4 pr-8 font-normal">Project</th>
              <th className="text-left py-4 pr-8 font-normal">Made at</th>
              <th className="text-left py-4 pr-8 font-normal">Built with</th>
              <th className="text-left py-4 font-normal">Link</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr
                key={index}
                className="border-b border-primary hover:bg-accent transition-all duration-300 ease-in-out group"
              >
                <td className="py-4 pr-8 text-secondary text-sm">
                  {project.year}
                </td>
                <td className="py-4 pr-8">
                  <span className="text-primary font-medium group-hover:text-highlight transition-all duration-300 ease-in-out">
                    {project.name}
                  </span>
                </td>
                <td className="py-4 pr-8 text-secondary text-sm">
                  {project.company.name || "-"}
                </td>
                <td className="py-4 pr-8">
                  <div className="flex flex-wrap gap-2">
                    {project.builtWith.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent text-highlight text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4">
                  {project.link && project.linkText ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-highlight transition-all duration-300 ease-in-out group/link"
                    >
                      <span>{project.linkText}</span>
                      <span className="text-highlight group-hover/link:translate-x-1 transition-all duration-300 ease-in-out">
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="text-secondary">-</span>
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
