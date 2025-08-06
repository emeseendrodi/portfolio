import { useEffect, useState } from "react";
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFolderOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ul>
        <li>
          <img src={logo} alt="Logo" className="logo" />
        </li>
        <div className="navbar-element-menu">
          <li className="navbar-element">
            <a href="#about">
              <span className="text-label">About Me</span>
              <FontAwesomeIcon icon={faUser} className="icon-label" />
            </a>
          </li>
          <li className="navbar-element">
            <a href="#projects">
              <span className="text-label">Projects</span>
              <FontAwesomeIcon icon={faFolderOpen} className="icon-label" />
            </a>
          </li>
          <li className="navbar-element">
            <a href="#contact">
              <span className="text-label">Contact</span>
              <FontAwesomeIcon icon={faAddressCard} className="icon-label" />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}