import profilePic from "../assets/profile.jpeg";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Profile */}
      <div style={styles.left}>
        <img src={profilePic} alt="Profile" style={styles.profile} />
        <span style={styles.name}>Akanksha</span>
      </div>

      {/* Nav links */}
      <div style={styles.right}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "linear-gradient(135deg, #1b1f8a, #2129b7, #3f52ff)",
    padding: "12px 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
  },
  left: { display: "flex", alignItems: "center", gap: "10px" },
  profile: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "2px solid white" },
  name: { color: "white", fontSize: "18px", fontWeight: "600" },
  right: { display: "flex", gap: "25px" },
  link: { color: "white", textDecoration: "none", fontSize: "18px", fontWeight: "500" },
};
