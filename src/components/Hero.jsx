export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      <h1 className="hero-title">Hi, I'm Emese!</h1>
      <p className="hero-subtitle">
        I'm a Frontend Developer passionate about <span>React</span>, <span>UI/UX</span>,<br></br> and <span>Data Science</span>.
      </p>

      <div className="hero-buttons">
      <a href="#projects" className="hero-button">View My Projects</a>
        <a
        href="/emese_endrodi_cv_en.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-button secondary"
      >
        Resume 
      </a>
      </div>
    </section>
  );
}