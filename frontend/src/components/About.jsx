import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* About */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Hello! I'm{" "}
            <span className="text-white font-semibold">Deep Adroja</span>,
            a passionate Full Stack Developer currently pursuing my MCA.
            I enjoy building modern, responsive, and scalable web applications
            using the MERN Stack and continuously learning new technologies.
          </p>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">
            Education
          </h2>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold text-blue-500">
              Master of Computer Applications (MCA)
            </h3>

            <p className="text-gray-300 mt-2">
              LJ University, Ahmedabad
            </p>

            <p className="text-gray-500 mt-1">
              2025 - Present
            </p>
          </div>

           <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition mt-10">
            <h3 className="text-2xl font-semibold text-blue-500">
              Bachelor of Computer Applications (BCA)
            </h3>

            <p className="text-gray-300 mt-2">
              S.R.K. Institute, Kutch
            </p>

            <p className="text-gray-500 mt-1">
              2022 - 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;