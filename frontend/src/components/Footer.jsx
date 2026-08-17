import React from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Deep<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Full Stack Developer passionate about creating modern,
              responsive, and user-friendly web applications using the MERN
              Stack.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:text-blue-500 transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3">
              <p>Email: dadroja92@gmail.com</p>
              <p>Ahmedabad, Gujarat, India</p>
              <p>Available for internships & freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Deep Adroja. All Rights Reserved.
          </p>

          <a
            href="#top"
            className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300"
          >
            <ArrowUp size={18} />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;