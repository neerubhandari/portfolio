import HeaderSocials from "./HeaderSocials";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex  items-center overflow-hidden py-32"
    >
      {/* Background Blobs (subtle) */}
      <div className="absolute left-10 top-1 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
      <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className=" relative z-10 mx-auto max-w-3xl text-center px-4 ">
        {/* Badge */}
        <span className="inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
          👋 Welcome to my portfolio
        </span>

        {/* Name */}
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-gray-900">
          Hi, I'm <span className="text-violet-600">Niru Bhandari</span>
        </h1>

        {/* Role */}
        <h2 className="mt-4 text-xl font-semibold text-gray-600">
          Full Stack Developer
        </h2>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg leading-7 text-gray-500">
          I build AI-powered, fast, and scalable web applications using React,
          Next.js, Node.js, and modern cloud technologies focused on performance
          and user experience.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-700"
          >
            Hire Me
          </a>

          <a
            href="#portfolio"
            className="rounded-xl border border-violet-600 px-7 py-3 font-semibold text-violet-600 transition hover:bg-violet-600 hover:text-white"
          >
            View Projects
          </a>
        </div>

        {/* Socials */}
        <div className="mt-10 flex justify-center">
          <HeaderSocials />
        </div>
      </div>
    </section>
  );
};

export default Home;
