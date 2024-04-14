import { NavBar } from "@/components/NavBar";
import { PortfolioCard } from "@/components/porfolio-card";
import { config } from "@/config";

const { portfolio } = config;

export default function Projects() {
  return (
    <div className="flex">
      <div className="absolute top-0 left-0 w-full h-20 ">
        <NavBar />
      </div>

      <div className="mt-32 justify-center flex gap-8 md:gap-4 row flex-wrap flex-row">
        {portfolio.projects.map((project) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            description={project.longDescription}
            image={project.image}
            github={project.github}
            siteUrl={project.siteUrl}
          />
        ))}
      </div>
    </div>
  );
}
