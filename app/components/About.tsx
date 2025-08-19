import { Profile } from "../constants";

interface AboutParagraph {
  paragraph: string;
  highlights: string[];
  bold: string[];
  italic: string[];
}

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

    return <p className="mb-4" dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <section id="about">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-accent/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-muted leading-relaxed">
          {Profile.about.map((paragraph: AboutParagraph, index: number) => (
            <div key={index}>{renderParagraph(paragraph)}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
