import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <div className="logo">
              <span>N</span>eha.
            </div>
            <ul id="sidemenu" className={menuOpen ? "open" : ""}>
              <li>
                <a href="#header" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={closeMenu}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>

              <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
            </ul>
            <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
          </nav>
          <div className="header-text">
            <p>Web Developer</p>
            <h1>
              Hi, i am <span>Neha</span> <br /> from India
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}