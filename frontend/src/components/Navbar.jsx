import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          Deep<span className="text-blue-500">.</span>
        </Link>

        <div className="flex gap-8 text-sm">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>

          <Link to="/skills" className="hover:text-blue-400">
            Skills
          </Link>

          <Link to="/projects" className="hover:text-blue-400">
            Projects
          </Link>

          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;