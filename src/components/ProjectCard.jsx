export default function ProjectCard({ title, image, description, tech, link, github }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>

      <div className="project-details">
        <p className="project-description">{description}</p>
        <ul className="tech-list">
          {tech.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
        <div className="links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}