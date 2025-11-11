import cvFile from "../assets/my-cv.pdf";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit (send to API / email service)
    alert('Form submitted (demo)'); // remove in production
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <i className="fa-solid fa-envelope" /> neha825nv@gmial.com
              </p>
              <p>
                <i className="fa-solid fa-square-phone" /> 9595352951
              </p>
              <div className="social-icon">
                <a href="https://www.facebook.com/shemii.verma" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://github.com/NehaVerma825" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/neha-verma-825nv/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
              <a href={cvFile} download className="btn btn2">
                Download CV
              </a>
            </div>

            <div className="contact-right">
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="your name" required />
                <input type="email" name="email" placeholder="your email" required />
                <textarea name="Message" rows="6" placeholder="Your Message" />
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            copyright @Neha made with <i className="fa-solid fa-heart" />
          </p>
        </div>
      </div>
    </>
  );
}
