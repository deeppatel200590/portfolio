const Contact = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">

      <h1 className="text-4xl font-bold">
        Contact Me
      </h1>

      <p className="mt-4 text-slate-400">
        Have a project or opportunity? Feel free to get in touch.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="font-semibold">
            Email
          </h2>

          <p className="mt-2 text-slate-400">
            dadroja92@gmail.com
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="font-semibold">
            Location
          </h2>

          <p className="mt-2 text-slate-400">
            India
          </p>
        </div>

      </div>

      <div className="mt-10 flex gap-4">

        <a
          href="https://github.com/"
          target="_blank"
          className="rounded-lg border border-slate-700 px-6 py-3 hover:bg-slate-900"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
};

export default Contact;