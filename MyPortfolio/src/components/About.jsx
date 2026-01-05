import profilePic from "../assets/profile.jpeg";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT - Profile image */}
        <div className="about-image">
          <img src={profilePic} alt="Akanksha" />
        </div>

        {/* RIGHT - Content */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hi, I'm <strong>Akanksha</strong>, a passionate Full Stack Developer who loves building
            clean, user-friendly, and responsive web applications using
            <strong> React</strong> and <strong>Java Spring Boot</strong>.
          </p>

          <p>
            I enjoy solving real-world problems, creating interactive UI
            designs, and writing backend code that is scalable and efficient.
          </p>

          <p>
            I am always excited to learn new technologies and improve my
            development skills.
          </p>

          {/* Resume Button */}
          <a href="/resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
