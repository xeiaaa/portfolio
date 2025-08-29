import { personalProjects } from "../constants";
import { Project } from "../types";
import PillBadge from "./PillBadge";
import { Star, ArrowUpRight, Link, X, Play } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const VideoModal = ({
  isOpen,
  onClose,
  embed,
  projectTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  embed: string;
  projectTitle: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-screen-xl mx-4">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center p-2 sm:p-4 border-b">
            <h3 className="text-sm sm:text-lg font-semibold">
              {projectTitle} Demo Video
            </h3>
            <button
              onClick={onClose}
              className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Video Content */}
          <div className="p-0">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio
            >
              <div
                className="absolute inset-0"
                dangerouslySetInnerHTML={{ __html: embed }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderProject = (
  project: Project,
  onOpenModal: (embed: string, title: string) => void
) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      key={project.title}
      className="block"
    >
      <div
        key={project.title}
        className="relative flex flex-col md:flex-row gap-4 group cursor-pointer rounded-xl bg-transparent shadow-none"
      >
        {/* Overlay only on desktop */}
        <div className="absolute hidden lg:block -inset-x-4 -inset-y-4 lg:-inset-x-6 lg:-inset-y-6 rounded-md transition opacity-0 group-hover:opacity-100 group-hover:bg-accent/50 group-hover:border group-hover:border-[#e6e9ec] group-hover:shadow-[0_2px_6px_rgba(2,12,27,0.1)] pointer-events-none"></div>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="z-10 w-full h-56 md:w-[200px] md:h-[120px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        ) : project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="z-10 w-full h-56 md:w-[200px] md:h-[120px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        ) : (
          <div className="z-10 w-full h-56 md:w-[200px] md:h-[120px] bg-accent flex-shrink-0 rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out" />
        )}
        <div className="z-10 flex flex-col gap-2 group flex-1">
          <h3 className="text-lg font-semibold transition-all duration-300 ease-in-out text-primary group-hover:text-highlight flex items-center">
            {project.title}
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </span>
          </h3>
          <p className="text-sm text-secondary leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-col mt-2 gap-2">
            {/* Demo Button Section */}
            {project.demoLink && project.embed && (
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onOpenModal(project.embed!, project.title);
                  }}
                  className="text-sm text-highlight flex items-center gap-1 hover:underline bg-transparent border-none p-0 cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  Watch Demo
                </button>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-4">
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
            <div className="flex flex-wrap items-center gap-2">
              {project.builtWith &&
                project.builtWith.map((skill) => (
                  <PillBadge key={skill}>{skill}</PillBadge>
                ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const PersonalProjectPreviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmbed, setCurrentEmbed] = useState("");
  const [currentProjectTitle, setCurrentProjectTitle] = useState("");

  const handleOpenModal = (embed: string, title: string) => {
    setCurrentEmbed(embed);
    setCurrentProjectTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentEmbed("");
    setCurrentProjectTitle("");
  };

  return (
    <section id="personal-projects" className="flex flex-col scroll-mt-11">
      <SectionTitle title="Personal Projects" />

      {/* PROJECT PREVIEWS */}
      <div className="group/list flex flex-col gap-16">
        {personalProjects
          .sort((a, b) => parseInt(b.date) - parseInt(a.date))
          .slice(0, 5)
          .map((project) => renderProject(project, handleOpenModal))}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        embed={currentEmbed}
        projectTitle={currentProjectTitle}
      />
    </section>
  );
};

export default PersonalProjectPreviews;
