import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Projects = () => {
  const projects = [
    {
      title: "Resume Ranker",
      description:
        "An AI-powered platform that analyzes resumes and ranks candidates based on their skills and job requirements.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
    },
    {
      title: "ConstructionIQ AI",
      description:
        "A full-stack AI application for analyzing construction drawings and documents and generating useful insights.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini AI"],
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing my skills, projects, education, and experience.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Some of the projects I have built while learning and working
            with modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-700 rounded-xl p-7
              hover:border-blue-500 hover:-translate-y-2
              hover:shadow-lg hover:shadow-blue-500/10
              transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-500">
                {project.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-slate-800
                    border border-slate-700 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button
                className="mt-7 px-5 py-2 rounded-lg bg-blue-600
                hover:bg-blue-700 transition duration-300"
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;