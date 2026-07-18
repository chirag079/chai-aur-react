function Hero() {
  return (
    <section className="py-24 text-center">
      <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
        React Context API Practice
      </span>

      <h2 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
        Build Your Own
        <span className="block text-indigo-600 dark:text-indigo-400">
          Theme Switcher
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        This project contains no theme logic. Your task is to use Context API
        to make every component respond to theme changes.
      </p>

      <div className="mt-12 flex justify-center gap-5">
        <button className="rounded-xl bg-indigo-600 px-7 py-3 text-white shadow-lg transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
          Get Started
        </button>

        <button className="rounded-xl border border-slate-300 px-7 py-3 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;