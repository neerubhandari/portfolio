import React from "react";
import "./About.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src="profile.png" alt="" className="about__img" />

        <div className="">
          <div className="about__info">
            <p className="about__description">
              I am a Full Stack Developer with 4 years of experience,
              specializing in building scalable, efficient, and user-centric web
              applications. I bring expertise across both frontend and backend
              technologies, and I am passionate about delivering high-quality
              solutions that drive business value and enhance user experience.
            </p>
            <a
              href="/frontend-resume.pdf"
              download={"Niru's Resume"}
              className="btn"
            >
              Download Resume
            </a>
          </div>

          {/* <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Designing</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DSA</h3>
                <span className="skills__number">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage DSA"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <AboutBox/> */}
    </section>
  );
};

export default About;
