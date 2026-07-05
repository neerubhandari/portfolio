import React from "react";

const HeaderSocials = () => {
  return (
    <div className="my-6 flex items-center justify-center gap-7">
      <a
        href="https://www.instagram.com/bhandariniru"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-[1.3rem] transition-colors duration-300 hover:text-[hsl(43,100%,68%)] max-[1024px]:text-[1.125rem]"
        style={{ color: "var(--title-color)" }}
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://github.com/neerubhandari"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-[1.3rem] transition-colors duration-300 hover:text-[hsl(43,100%,68%)] max-[1024px]:text-[1.125rem]"
        style={{ color: "var(--title-color)" }}
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/neeru-bhandari/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-[1.3rem] transition-colors duration-300 hover:text-[hsl(43,100%,68%)] max-[1024px]:text-[1.125rem]"
        style={{ color: "var(--title-color)" }}
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
