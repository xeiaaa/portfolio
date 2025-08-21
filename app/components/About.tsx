import { Profile } from "../constants";
import { AboutParagraph } from "../types";
import SectionTitle from "./SectionTitle";

const About = () => {
  const renderParagraph = (paragraph: AboutParagraph) => {
    let text = paragraph.paragraph;

    // Apply formatting in order: italic -> bold -> highlights
    // This ensures proper nesting of styles

    // Apply italic formatting
    paragraph.italic.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      text = text.replace(regex, '<em class="italic">$1</em>');
    });

    // Apply bold formatting
    paragraph.bold.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      text = text.replace(regex, '<strong class="font-bold">$1</strong>');
    });

    // Apply highlight formatting (should be applied last to override other styles)
    paragraph.highlights.forEach((highlight) => {
      // Escape special regex characters in the highlight word
      const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      // If the highlight word contains apostrophe or hyphen, match it exactly
      // Otherwise, use word boundaries to avoid matching words with apostrophes/hyphens
      let regex;
      if (highlight.includes("'") || highlight.includes("-")) {
        regex = new RegExp(`\\b(${escapedHighlight})\\b`, "gi");
      } else {
        // For words without apostrophes/hyphens, exclude matches that have them
        regex = new RegExp(`\\b(${escapedHighlight})(?!['-])\\b`, "gi");
      }

      text = text.replace(
        regex,
        '<span class="text-highlight font-medium">$1</span>'
      );
    });

    return (
      <p
        className="text-sm leading-relaxed text-secondary text-justify"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  };

  return (
    <section id="about" className="scroll-mt-11">
      <SectionTitle title="About" />
      <div className="space-y-4">
        {Profile.about.map((paragraph: AboutParagraph, index) => (
          <div key={index}>{renderParagraph(paragraph)}</div>
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
