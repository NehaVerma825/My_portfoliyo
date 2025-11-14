import { useRef } from "react";
import emailjs from "emailjs-com";
import cvFile from "../assets/myCv.pdf";

const socials = [
  { icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/", label: "Facebook" },
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/", label: "Instagram" },
  { icon: "fa-brands fa-github", href: "https://github.com/NehaVerma825", label: "GitHub" },
  { icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/neha-verma-825nv/", label: "LinkedIn" },
];

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Neha_verma", // 👉 Replace with your EmailJS service ID
        "template_fnkp47n", // 👉 Replace with your template ID
        form.current,
        "-LadiyPnCHx-kA3zZ" // 👉 Replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <footer className="bg-[#14181d]">
      <section id="contact" className="bg-[#1D3752] py-24 sm:py-28">
        <div className="mx-auto w-full max-w-[1150px] px-6 sm:px-8">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            {/* Left Section */}
            <div className="space-y-10 text-white">
              <h2 className="text-left text-4xl font-bold sm:text-5xl">Contact Me</h2>

              {/* Contact Info */}
              <div className="space-y-4 text-lg font-medium text-white">
                <p className="flex items-center gap-4 cursor-pointer">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-[#b54769] text-xl hover:bg-[#ff3d7a] transition"
                    onClick={() => (window.location.href = "mailto:neha825nv@gmail.com")}
                  >
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <span
                    className="hover:text-[#b54769] transition"
                    onClick={() => (window.location.href = "mailto:neha825nv@gmail.com")}
                  >
                    neha825nv@gmail.com
                  </span>
                </p>

                <p className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#b54769] text-xl">
                    <i className="fa-solid fa-phone" />
                  </span>
                  9595352951
                </p>
              </div>

              {/* Social Icons */}
              <div className="social-icon mt-8 flex items-center gap-6 text-[30px]">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-[#ababab] inline-block transition-transform duration-500 hover:-translate-y-1 hover:text-[#b54769]"
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>

              {/* Download CV Button */}
              <a
                href={cvFile}
                download
                className="btn btn2 inline-block rounded-lg bg-[#b54769] px-10 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition duration-300 hover:bg-[#ff3d7a]"
              >
                Download CV
              </a>
            </div>

            {/* Right Section - Contact Form */}
            <div className="rounded-2xl bg-[#0f2338] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.35)]">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="from_name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-md border border-[#29374a] bg-[#233044] px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:border-[#b54769] focus:ring-2 focus:ring-[#b54769]/60"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="from_email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-md border border-[#29374a] bg-[#233044] px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:border-[#b54769] focus:ring-2 focus:ring-[#b54769]/60"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    required
                    className="w-full resize-none rounded-md border border-[#29374a] bg-[#233044] px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:border-[#b54769] focus:ring-2 focus:ring-[#b54769]/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#b54769] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#ff3d7a]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="flex items-center justify-center bg-[#0f1114] py-4 text-sm text-white">
        <p>
          copyright @Neha made with <span className="text-[#ff3d7a]">❤</span>
        </p>
      </div>
    </footer>
  );
}
