
import ProjectCard from "./ProjectCard";
import portfolioImg from '../assets/portfolio.png';
import limesImg from '../assets/limes.png';

export default function Projects() {
 

  const projects = [

    {
      title: "Portfolio",
      image: portfolioImg,
      description: "My personal portfolio site. (You're here!)",
      tech: ["React", "CSS", "Framer Motion"],
      github: "https://github.com/emeseendrodi/portfolio",
    },
     {
      title: "Limes",
      image: limesImg,
      description: "My thesis project, a study-helping app for Calculus.",
      tech: ["React", "Java", "API", "PostgreSQL"],
      github: "https://github.com/emeseendrodi/limes",
    },
    
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
        ))}
      </div>

    </section>
  );
}