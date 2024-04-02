import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <section>
        <nav className="navbar" role="navigation" aria-label="main navigation">

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="Home">
                Home
              </a>

              <a className="navbar-item" href="About">
                About
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    About
                  </a>
                  <a className="navbar-item">
                    Jobs
                  </a>
                  <a className="navbar-item" href="Contact">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      </section>

      {/* <Link to="/">Home</Link>
      <br />
      <Link to="Contact">Contact</Link>
      <br />
      <Link to="About">About</Link> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </div>
  );
}
