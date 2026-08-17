import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      console.log(response.data);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Have an opportunity, project, or just want to connect?
            Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-700 rounded-xl p-8">
          <form className="space-y-6" onSubmit={handleForm}>
            
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700
                rounded-lg text-white placeholder-gray-500
                focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700
                rounded-lg text-white placeholder-gray-500
                focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700
                rounded-lg text-white placeholder-gray-500
                focus:outline-none focus:border-blue-500 transition resize-none"
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700
              py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;