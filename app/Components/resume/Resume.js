import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  const education = Data.filter((val) => val.category === "education");
  const experience = Data.filter((val) => val.category === "experience");

  return (
    <section id="resume" className="relative py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#6C63FF]">
            Background
          </p>
          <h2 className="text-4xl font-bold">Experience & Education</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* EXPERIENCE */}
          <div className="relative rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-8 flex items-center gap-2 text-lg font-semibold">
              <Briefcase size={18} className="text-[#6C63FF]" />
              Experience
            </div>

            <div className="relative border-l-2 border-[#6C63FF]/30 pl-6 space-y-10">
              {experience.map((val, id) => (
                <div key={id} className="relative group">
                  {/* Dot */}
                  <span className="absolute -left-[10px] top-1.5 h-4 w-4 rounded-full bg-[#6C63FF] shadow-md group-hover:scale-125 transition"></span>

                  <div className="rounded-2xl bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
                    <Card
                      icon={Briefcase}
                      title={val.title}
                      subtitle={val.company}
                      year={val.year}
                      desc={val.desc}
                      isLast={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="relative rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-8 flex items-center gap-2 text-lg font-semibold">
              <GraduationCap size={18} className="text-[#6C63FF]" />
              Education
            </div>

            <div className="relative border-l-2 border-[#6C63FF]/30 pl-6 space-y-10">
              {education.map((val, id) => (
                <div key={id} className="relative group">
                  {/* Dot */}
                  <span className="absolute -left-[10px] top-1.5 h-4 w-4 rounded-full bg-[#6C63FF] shadow-md group-hover:scale-125 transition"></span>

                  <div className="rounded-2xl bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
                    <Card
                      icon={GraduationCap}
                      title={val.title}
                      subtitle={val.institution}
                      year={val.year}
                      desc={val.desc}
                      isLast={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
