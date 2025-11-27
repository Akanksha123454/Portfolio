import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hi, I’m Akanksha </h1>
      <h2 style={styles.sub}>Full Stack Developer (React + Java Spring Boot)</h2>
      <p style={styles.text}>
        I build clean, user-friendly, and responsive web applications.
      </p>

      <div style={styles.btnContainer}>
        <Link to="/projects" style={styles.btn}>View Projects</Link>
        <Link to="/contact" style={styles.btn2}>Contact Me</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
    minHeight: "calc(100vh - 100px)", // ensures footer doesn't overlap
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)", // gradient background
    color: "white",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  sub: {
    fontSize: "24px",
    marginBottom: "20px",
    fontWeight: "500",
  },
  text: {
    fontSize: "18px",
    marginBottom: "40px",
    maxWidth: "600px",
    margin: "0 auto 40px auto",
    lineHeight: "1.6",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  btn: {
    padding: "12px 25px",
    background: "#222",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    fontWeight: "500",
  },
  btn2: {
    padding: "12px 25px",
    background: "#555",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    fontWeight: "500",
  },
};

// Add hover effects using inline styles via onMouseEnter/onMouseLeave or move styles to CSS
