/**
 * Dependencies
 */
import React from "react";

/**
 * Styles
 */
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="svg">
        <a
          href="https://github.com/nestorvave"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Images/github.svg" alt="" />
        </a>
        <a
          href="https://www.instagram.com/nestorvave/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Images/instagram.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/nestorvave/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Images/linkedin.svg" alt="" />
        </a>
      </div>
      <p className="footer-title">Made by Nestor Vargas</p>
    </footer>
  );
};
