import imageOne from "../assets/work-1.jpg";
import imageTwo from "../assets/work-2.png";
import imageThree from "../assets/work-3.png";

const projects = [
  {
    title: "TravelnWorld Platform",
    description:
      "Travel planning experience with curated destinations, itinerary builder, and personalized booking flows. Focused on modular UI, API orchestration, and high Core Web Vitals.",
    image: imageOne,
    tags: ["Next.js", "Tailwind", "API Integration", "UX Writing"],
    link: "https://travelnworld.com/",
  },
  {
    title: "Trip to Honeymoon",
    description:
      "End-to-end travel planning with curated destinations, itinerary customization, and personalized package flows. Built with React, Tailwind CSS, and REST APIs, focusing on modular UI, smooth state handling, and high performance.",
    image: imageTwo,
    tags: ["React", "Design Systems", "Framer Motion", "SEO"],
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather intelligence app with radar views, alerts, and geolocation-driven recommendations for planners. Built with resilient API handling and skeleton states.",
    image: imageThree,
    tags: ["React", "OpenWeather API", "Data Visualization"],
    link: "#",
  },
];

export default function Portfoliyo() {
  return (
    <section id="portfolio" className="py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1150px] px-6 sm:px-8">
        <div className="max-w-2xl space-y-4 text-left">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Projects</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map(({ title, description, image, link }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[28px] shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/4.2] w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 transition duration-700 group-hover:opacity-0" />
                <div className="absolute inset-0 flex translate-y-10 flex-col items-center justify-end bg-gradient-to-br from-[#ff3d7a]/90 via-[#b54769]/90 to-[#6f1350]/90 px-8 pb-12 text-center text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="text-sm leading-relaxed text-white/90">{description}</p>
                  </div>
                  <a
                    href={link}
                    className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#ff3d7a] shadow-lg shadow-black/30 transition duration-300 hover:scale-105"
                    aria-label={`View case study for ${title}`}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-xl" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="mailto:neha825nv@gmail.com"
            className="rounded-xl border border-[#ff3d7a] bg-transparent px-10 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#b54769]"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
}