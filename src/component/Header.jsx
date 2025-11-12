import { useState } from "react";
import heroBackground from "../assets/background1.jpg";

const navItems = [
  { label: "Home", href: "#header" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className="relative isolate min-h-screen overflow-hidden text-white"
    >
      {/* Background Image (keep original brightness) */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBackground}
          alt="Desk workspace backdrop"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Navbar & Hero Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1150px] flex-col px-4 sm:px-14">
        {/* Navbar - shifted upward & left-aligned */}
        <nav className="flex items-center justify-between pt-4 md:pt-4">
          {/* Logo aligned with hero text */}
          <a
            href="#header"
            className="flex items-center text-[38px] font-bold leading-none tracking-[1px] md:text-[48px] md:-ml-12"
          >
            <span className="text-[#ff004f]">N</span>
            <span className="text-white">eha.</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 p-2 text-white transition hover:border-white/60 hover:bg-white/20 lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <i className="fa-solid fa-bars text-2xl" />
          </button>

          {/* Desktop Nav Items */}
          <ul className="hidden items-center gap-10 text-lg font-medium lg:flex">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group relative inline-flex items-center text-white transition"
                >
                  <span>{label}</span>
                  <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-[#ff004f] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="mt-[30vh] flex flex-1 flex-col justify-start md:-ml-12">
          <p className="text-[25px] font-semibold tracking-[0.05em] text-white">
            Web Developer
          </p>
          <h1 className="mt-3 text-[42px] font-semibold leading-tight sm:text-[56px] md:text-[66px]">
            Hi, i am <span className="text-[#ff004f] font-bold">Neha</span>
            <br className="hidden sm:block" /> from India
          </h1>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-72 transform flex-col gap-8 bg-[rgba(8,28,45,0.98)] px-10 py-12 text-left shadow-2xl shadow-black/80 transition-all duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          className="absolute left-6  top-6 text-2xl text-white transition hover:text-[#ff004f]"
          onClick={() => setMenuOpen(false)}
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <ul className="mt-4 flex flex-col gap-5 text-lg font-medium">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-between text-white transition hover:text-[#ff004f]"
              >
                {label}
                <i className="fa-solid fa-arrow-right text-base" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
