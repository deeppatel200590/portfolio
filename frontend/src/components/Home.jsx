import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-6xl items-center px-6">

      <div className="max-w-3xl">

        <p className="mb-4 text-blue-400">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Deep Adroja
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-400">
          Full Stack Developer
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I build modern, responsive and user-friendly web applications
          using React, JavaScript, Node.js and modern web technologies.
        </p>

        <div className="mt-8 flex gap-4">

          <Link
            to="/projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900"
          >
            Contact Me
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Home;