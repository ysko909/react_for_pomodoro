import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <br />
      <Link to="Contact">Contact</Link>
      <br />
      <Link to="About">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </div>
  );
}
