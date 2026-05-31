import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__tag">
        built for visualizing graph traversal
      </span>
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/saikiran-a73429232/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
          aria-label="LinkedIn"
        >
          <i className="fa fa-linkedin" />
        </a>
        <a
          href="https://github.com/saikiran6694"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
          aria-label="GitHub"
        >
          <i className="fa fa-github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
