import { Profile } from "../constants";
import { AboutParagraph } from "../types";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className="scroll-mt-11">
      <SectionTitle title="About" />
      <div className="space-y-4">
        {Profile.about.map((paragraph: AboutParagraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-secondary">
            {paragraph.paragraph.split(" ").map((word, wordIndex) => {
              const isHighlighted = paragraph.highlights.some((highlight) =>
                word.toLowerCase().includes(highlight.toLowerCase())
              );
              const isBold = paragraph.bold.some((bold) =>
                word.toLowerCase().includes(bold.toLowerCase())
              );
              const isItalic = paragraph.italic.some((italic) =>
                word.toLowerCase().includes(italic.toLowerCase())
              );

              let className = "";
              if (isHighlighted) className += "text-highlight ";
              if (isBold) className += "font-bold ";
              if (isItalic) className += "italic ";

              return (
                <span key={wordIndex} className={className}>
                  {word}{" "}
                </span>
              );
            })}
          </p>
        ))}
      </div>

      {/* Structured data for About section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Bret Axl Sebastian Pura",
            description: Profile.about.map((p) => p.paragraph).join(" "),
            mainEntity: {
              "@type": "Person",
              name: Profile.name,
              jobTitle: Profile.title,
              description: Profile.description,
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
                "AI-assisted development",
                "Three.js",
                "GSAP",
              ],
            },
          }),
        }}
      />
    </section>
  );
};

export default About;
