const projects = [
  {
    title: "ConstructionIQ AI",
    description:
      "AI-powered application for managing and analyzing construction documents and drawings.",
    tech: "React • TypeScript • Node.js • MongoDB • Gemini API",
  },
  {
    title: "ResumeRanker",
    description:
      "Resume ranking platform that analyzes resumes and ranks candidates based on their scores.",
    tech: "React • Node.js • MongoDB • Gemini API",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website showcasing my skills, projects and experience.",
    tech: "React • Tailwind CSS • JavaScript",
  },
];

const Projects = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <h1 className="text-4xl font-bold">
        Projects
      </h1>

      <p className="mt-4 text-slate-400">
        Some of the projects I've worked on.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >

            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              {project.description}
            </p>

            <p className="mt-6 text-sm text-blue-400">
              {project.tech}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;