import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full text-center flex flex-col items-center">

          {/* Status badge */}
          <span className="text-xs font-medium text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 rounded-full mb-6">
            Available for Freelance & Full-time Roles
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building Digital Experiences as a{" "}
            <span className="text-emerald-400">Full Stack Developer</span>
          </h1>

          {/* Description */}
          <p className="text-slate-400 mt-6 text-base md:text-lg leading-relaxed max-w-xl">
            Hi, I'm <span className="text-white font-semibold">Deep</span>. I build modern, responsive, and highly scalable web applications using React, Node.js, and MongoDB.
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind"].map((tech) => (
              <span key={tech} className="text-xs bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3 rounded-lg font-bold transition">
              Explore My Work
            </button>
            <button className="border border-slate-700 hover:border-slate-500 text-slate-200 px-8 py-3 rounded-lg font-semibold transition">
              Let's Talk
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;