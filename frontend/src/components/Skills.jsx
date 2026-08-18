const skills = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Python",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <h1 className="text-4xl font-bold">
        Skills
      </h1>

      <p className="mt-4 text-slate-400">
        Technologies and tools I work with.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center transition hover:border-blue-500"
          >
            <p className="font-medium">
              {skill}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;