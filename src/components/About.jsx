import { useState } from "react";

export default function About() {
  const [showFacts, setShowFacts] = useState(false);

  return (
    <section id="about">

  <h2>About Me</h2>

  <p>
    I'm a freshly graduated Frontend Developer, still learning and growing every day.
  </p>
  <p>
    My main focus is creating clean, responsive, and user-friendly web applications using modern technologies — primarily <strong>React</strong>, which I use to build interactive and component-based UIs. <br></br> Like this one :D
  </p>
  <p>
    During my studies, I completed several personal and group projects where I built UIs from scratch, consumed APIs, and experimented with data visualization tools. I enjoy combining logical thinking with creative problem-solving to deliver engaging digital experiences.
  </p>
  <p>
    I'm also deeply interested in Data Science — especially in how data can be visualized and turned into meaningful insights. This interest drives me to explore technologies that bridge the gap between design, development, and data.
  </p>
  <p>
    I'm currently learning more about data handling, backend integration, and machine learning to broaden my skill set and career options.
  </p>

     

      <div className="fun-facts-container">
        <button className="toggle-button" onClick={() => setShowFacts(prev => !prev)}>
          {showFacts ? "Hide Fun Facts" : "Show Fun Facts ✨"}
        </button>

        {showFacts && (
          <ul className={`fun-facts ${showFacts ? "show" : "hide"}`}>
            <li> I love baking delicious cookies from scratch.</li>
            <li> I can crochet small plushies and wearables.</li>
            <li> I go hiking to disconnect from tech and reconnect with nature.</li>
            <li> My cat firmly believes I exist to warm up the keyboard and provide petting breaks.</li>
          </ul>
        )}
      </div>
    </section>
  );
}
