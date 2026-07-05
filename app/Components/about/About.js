import React from "react";

const About = () => {
  return (
    <section id="about" className="relative  bg-gray-50 py-16">
      {/* Background Glow (subtle) */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className=" mx-auto max-w-4xl px-4">
        {/* Title */}
        <h2 className="mb-10 text-center text-4xl font-bold">
          About <span className="text-[#6C63FF]">Me</span>
        </h2>

        {/* CONTENT */}
        <div className="text-center">
          <p className="text-lg leading-8 text-gray-600">
            Full Stack Developer with 4+ years of experience building scalable,
            high-performance web applications using React, Next.js, Node.js, and
            TypeScript. Experienced in designing and developing RESTful APIs,
            responsive frontend interfaces, and cloud-based backend systems
            deployed on AWS. Strong expertise in the full software development
            lifecycle, including system design, CI/CD pipelines, and Agile
            methodologies. Recently focused on AI-powered application
            development, integrating OpenAI APIs to build intelligent,
            context-aware systems such as chat-based assistants and automated
            response generation workflows. Passionate about building AI-driven,
            performant, and maintainable applications with clean architecture,
            reusable components, and strong emphasis on user experience and
            scalability.
          </p>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-[#6C63FF]">4+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-[#6C63FF]">15+</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-[#6C63FF]">8+</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="resume.pdf"
              download
              className="inline-block rounded-xl bg-[#6C63FF] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold">Frontend Engineering</h3>
            <p className="text-sm text-gray-500">
              React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3,
              Tailwind CSS, UI Performance & Animations
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold">Backend & Cloud</h3>
            <p className="text-sm text-gray-500">
              Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, MySQL, AWS
              (EC2, S3, Lambda), Docker, CI/CD
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold">Architecture & Tools</h3>
            <p className="text-sm text-gray-500">
              System Design, Microservices, Agile/Scrum, Git, GitHub, Jira,
              Postman, AI Integration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
