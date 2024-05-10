import React from "react";
import "../../App.js";
import styles from "../styles/Footer.css";

/* ÍCONES DAS REDES SOCIAIS */
import {
  FaGithubAlt,
  FaLinkedinIn,
} from "react-icons/fa"; /* Github Icon e Linkedin Icon */

function Footer() {
  return (
    <footer className="css-footer">
      <ul className="social-media">
        <li>
          <a
            className="icons"
            href="https://github.com/IsaqueRibeiroDuarte"
            target="_blank"
          >
            <FaGithubAlt />
          </a>
        </li>
        <li>
          <a
            className="icons"
            href="https://www.linkedin.com/in/isaque-ribeiro-627245191/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
        <p>
          &copy; 2024 Portfolio Isaque Ribeiro | Todos os Direitos Reservados
        </p>
    </footer>
  );
}
export default Footer;
