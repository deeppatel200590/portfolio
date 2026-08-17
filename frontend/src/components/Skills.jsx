import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Python",
    "C",
    "SQL",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold">
              My <span className="text-blue-500">Skills</span>
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
              Technologies and tools I use to build modern, responsive,
              and scalable web applications.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center
                hover:border-blue-500 hover:-translate-y-2
                hover:shadow-lg hover:shadow-blue-500/10
                transition-all duration-300"
              >
                <h3 className="text-lg font-semibold">
                  {skill}
                </h3>

                <div className="w-10 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;