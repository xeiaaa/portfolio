import { projects } from "../constants";
import { Project } from "../types";
import PillBadge from "./PillBadge";
import { Star } from "lucide-react";
import Link from "next/link";

const renderProject = (project: Project) => {
  return (
    <div
      key={project.title}
      className="relative flex gap-4 group cursor-pointer lg:hover:opacity-100 lg:group-hover/list:opacity-80"
    >
      <div className="absolute -inset-x-4 -inset-y-4 lg:-inset-x-6 lg:-inset-y-6 hidden rounded-md transition lg:block lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:bg-accent/50 lg:group-hover:border lg:group-hover:border-[#e6e9ec] lg:group-hover:shadow-[0_2px_6px_rgba(2,12,27,0.1)]"></div>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="z-10 w-[200px] h-[120px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      ) : project.video ? (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          className="z-10 w-[200px] h-[120px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      ) : (
        <div className="z-10 w-[200px] h-[120px] bg-accent flex-shrink-0 rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out" />
      )}
      <div className="z-10 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-primary group-hover:text-highlight transition-all duration-300 ease-in-out">
          {project.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-col mt-2">
          <div className="flex items-center gap-4">
            {project.bookmarked && (
              <span className="text-sm text-highlight flex items-center gap-1">
                <Star
                  className="w-3 h-3 inline-block"
                  strokeWidth={1.5}
                  fill="currentColor"
                />
                {project.bookmarked}
              </span>
            )}
            {project.downloads && (
              <span className="text-sm text-highlight">
                ↓ {project.downloads} Installs
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {project.builtWith &&
              project.builtWith.map((skill) => (
                <PillBadge key={skill}>{skill}</PillBadge>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectPreviews = () => {
  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-accent/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary lg:sr-only">
          Projects
        </h2>
      </div>
      {/* PROJECT PREVIEWS */}
      <div className="group/list flex flex-col gap-16">
        {projects
          .sort((a, b) => parseInt(b.date) - parseInt(a.date))
          .slice(0, 5)
          .map((project) => renderProject(project))}
      </div>

      {/* View Full Project Archive Button */}
      <div className="pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-highlight hover:text-primary transition-all duration-300 ease-in-out group"
        >
          <span className="text-sm font-medium">View Full Project Archive</span>
          <span className="text-highlight group-hover:translate-x-1 transition-all duration-300 ease-in-out">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectPreviews;
