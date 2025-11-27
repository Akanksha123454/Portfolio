import { useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpeg";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT - Profile + Name */}
      <div className="left-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2 className="logo">Akanksha </h2>
        <h4>Fullstack Devloper</h4>
      </div>

      {/* Mobile Menu Icon */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* RIGHT - Navigation Links */}
      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
