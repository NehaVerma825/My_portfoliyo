const services = [
  {
    icon: "fa-solid fa-code",
    title: "Web Design",
    description:
      "I develop scalable, responsive, and high-performance web applications using React.js, Next.js, Tailwind CSS, Bootstrap, and JavaScript. My focus is on clean code architecture, API integration, and optimizing performance across all devices.",
    href: "#portfolio",
  },
  {
    icon: "fa-solid fa-crop-simple",
    title: "UX/UI Design",
    description:
      "I design intuitive, user-centered interfaces with a focus on accessibility, visual balance, and seamless interaction. By applying Figma and modern design principles, I create experiences that are both aesthetically pleasing and functional.",
    href: "#portfolio",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1150px] px-6 sm:px-8">
        <div className="space-y-4">
          <h2 className="text-left text-4xl font-bold text-white sm:text-5xl">My Services</h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {services.map(({ icon, title, description, href }) => (
            <article
              key={title}
              className="group flex h-full flex-col gap-6 rounded-[28px] bg-[#102944] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b54769]"
            >
              <div className="text-5xl text-white transition duration-300 group-hover:text-white">
                <i className={icon} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold text-white transition duration-300 group-hover:text-white">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-slate-200 transition duration-300 group-hover:text-white">
                  {description}
                </p>
              </div>
              <a
                href={href}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 transition duration-300 group-hover:text-white"
              >
                Learn more
                <i className="fa-solid fa-arrow-right text-xs" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}