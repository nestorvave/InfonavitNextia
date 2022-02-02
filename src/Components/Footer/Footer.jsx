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
          <img src="/images/github.svg" alt="" />
        </a>
        <a
          href="https://www.instagram.com/nestorvave/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/instagram.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/nestorvave/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/linkedin.svg" alt="" />
        </a>
      </div>
      <p className="footer-title">Made by Nestor Vargas</p>
    </footer>
  );
};
