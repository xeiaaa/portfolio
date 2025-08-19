import { articles } from "../constants";
import Link from "next/link";

const Articles = () => {
  return (
    <section className="flex flex-col gap-6 pt-8">
      {articles.map((article) => (
        <div key={article.title} className="flex gap-4 group cursor-pointer">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-[200px] h-[120px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
          ) : (
            <div className="w-[200px] h-[120px] bg-accent flex-shrink-0 rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out" />
          )}
          <div className="flex flex-col gap-1">
            <div className="text-sm text-secondary">{article.date}</div>
            <div className="text-sm font-bold text-primary flex items-center gap-2 group-hover:text-highlight transition-all duration-300 ease-in-out">
              {article.title}
              {article.link && (
                <Link
                  href={article.link}
                  className="text-highlight group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                >
                  →
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Articles;
