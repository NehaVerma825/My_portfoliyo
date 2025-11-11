export default function Services() {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web Design</h2>
            <p>
              I develop scalable, responsive, and high-performance web applications using React.js, Next.js,
              Tailwind CSS, Bootstrap and JavaScript. My focus is on clean code architecture, API integration,
              and optimizing performance across all devices.
            </p>
            <a href="#">Learn more</a>
          </div>

          <div>
            <i className="fa-solid fa-crop-simple"></i>
            <h2>UX/UI Design</h2>
            <p>
              I design intuitive, user-centered interfaces with a focus on accessibility, visual balance,
              and seamless interaction. Using Figma and modern design principles, I create experiences that
              are both aesthetically pleasing and functional.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}