import { articles } from "../constants";
import SectionTitle from "./SectionTitle";

const Articles = () => {
  return (
    <section id="articles" className="flex flex-col scroll-mt-11">
      <SectionTitle title="Articles & Videos" />

      <div className="group/list flex flex-col gap-16">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.link || "#"}
            target={article.link ? "_blank" : undefined}
            rel={article.link ? "noopener noreferrer" : undefined}
          >
            <div className="group relative flex gap-4 cursor-pointer flex-col md:flex-row transition-all lg:hover:opacity-100 lg:group-hover/list:opacity-80">
              <div className="absolute -inset-x-4 -inset-y-4 lg:-inset-x-6 lg:-inset-y-6 hidden rounded-md transition lg:block lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:bg-accent/50 lg:group-hover:border lg:group-hover:border-[#e6e9ec] lg:group-hover:shadow-[0_2px_6px_rgba(2,12,27,0.1)]"></div>

              <div className="z-10 w-full h-56 md:w-[200px] md:h-[120px] flex-shrink-0">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                ) : (
                  <div className="w-full h-full bg-accent rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out" />
                )}
              </div>

              <div className="z-10 flex flex-col gap-1">
                <div className="text-sm text-secondary">{article.date}</div>
                <div className="text-sm font-bold text-primary flex items-center gap-2 group-hover:text-highlight transition-all duration-300 ease-in-out">
                  {article.title}
                  {article.link && (
                    <span className="text-highlight group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                      →
                    </span>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
