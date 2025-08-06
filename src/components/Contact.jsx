import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; 



export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title"> Get in Touch</h2>
      <p className="contact-description">
        Whether you have a question, want to collaborate, or just want to say hello — feel free to drop a message!
      </p>

      <div className="contact-methods">
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="icon-label" /> Email: <a>endrodi.emese@gmail.com</a>
        </p>
        <p>
           <FontAwesomeIcon icon={faLinkedin} className="icon-label" /> LinkedIn: <a href="https://www.linkedin.com/in/emeseendrodi/" target="_blank">/in/emeseendrodi</a>
        </p>
        <p>
           <FontAwesomeIcon icon={faGithub} className="icon-label" /> GitHub: <a href="https://github.com/emeseendrodi" target="_blank">github.com/emeseendrodi</a>
        </p>
      </div>
    </section>
  );
}