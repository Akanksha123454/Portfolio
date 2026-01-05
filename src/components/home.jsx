import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section style={styles.container} id="home">
      {/* Background accents */}
      <div style={styles.backgroundCircle1}></div>
      <div style={styles.backgroundCircle2}></div>
      <div style={styles.backgroundCircle3}></div>

      {/* Main Content */}
      <div
        style={{
          ...styles.content,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s ease-out",
        }}
      >
        {/* Small badge */}
        <div style={styles.badge}>
          <span style={styles.badgeText}>Full Stack Developer</span>
        </div>

        {/* Heading */}
        <h1 style={styles.heading}>
          Hi, I'm <span style={styles.nameHighlight}>Akanksha</span>
        </h1>

        {/* Short sub text */}
        <p style={styles.sub}>
          I build modern, responsive web applications using React and Java Spring Boot.
        </p>

        {/* Tech chips */}
        <div style={styles.techContainer}>
          <span style={styles.techBadge}>React</span>
          <span style={styles.techBadge}>Java Spring Boot</span>
          <span style={styles.techBadge}>JavaScript</span>
        </div>

        {/* Short description */}
        <p style={styles.text}>
          Clean code, simple UX, and reliable backend services — focused on creating
          applications that are fast, maintainable, and easy to use.
        </p>

        {/* CTA buttons */}
        <div style={styles.btnContainer}>
          <a
            href="#projects"
            style={styles.btnPrimary}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={styles.btnSecondary}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
            }}
          >
            Contact Me
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.05); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}

// ... existing styles ...

const styles = {
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // OLD:
    // background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)",
    // NEW (teal/blue):
    background: "linear-gradient(135deg,rgb(98, 100, 160) 0%,rgb(74, 77, 133) 40%,rgb(60, 65, 109) 100%)",
    backgroundSize: "200% 200%",
    animation: "gradientShift 16s ease infinite",
    color: "white",
    width: "100%",
    minHeight: "100vh",
    padding: "140px 16px 32px",
    position: "relative",
    overflow: "hidden",
  },

  // subtle, cooler highlights
  backgroundCircle1: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(134, 179, 173, 0.22) 0%, transparent 70%)",
    top: -90,
    left: -90,
    animation: "pulse 9s ease-in-out infinite",
  },
  backgroundCircle2: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(105, 145, 162, 0.18) 0%, transparent 70%)",
    bottom: -70,
    right: -70,
    animation: "pulse 7s ease-in-out infinite",
  },
  backgroundCircle3: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(15, 118, 110, 0.22) 0%, transparent 70%)",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animation: "float 11s ease-in-out infinite",
  },

  badge: {
    display: "inline-block",
    padding: "4px 14px",
    background: "rgba(15, 23, 42, 0.45)",
    borderRadius: 999,
    border: "1px solid rgba(107, 143, 138, 0.7)",
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#a5f3fc",
  },

  // heading / text colors stay mostly white
  heading: {
    fontSize: "clamp(30px, 4.5vw, 40px)",
    fontWeight: 800,
    marginBottom: 10,
    letterSpacing: -0.5,
    lineHeight: 1.2,
  },
  nameHighlight: {
    background:
      "linear-gradient(135deg, #e0f2fe 0%, #a5f3fc 45%, #f9fafb 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  sub: {
    fontSize: "clamp(15px, 2.5vw, 18px)",
    color: "#e0f2fe",
    marginBottom: 14,
    maxWidth: 520,
    lineHeight: 1.5,
  },
  text: {
    fontSize: "clamp(14px, 2vw, 16px)",
    maxWidth: 580,
    lineHeight: 1.6,
    color: "#e2f3ff",
    marginBottom: 26,
  },

  techBadge: {
    padding: "6px 14px",
    borderRadius: 999,
    border: "1px solid rgba(89, 70, 186, 0.7)",
    background: "rgba(15, 23, 42, 0.6)",
    fontSize: 12,
    fontWeight: 600,
    color: "#ccfbf1",
  },

  btnPrimary: {
    padding: "10px 26px",
    borderRadius: 999,
    border: "2px solid rgba(70, 56, 150, 0.95)",
    background: "linear-gradient(135deg,rgb(130, 128, 156) 0%,rgb(64, 75, 146) 100%)",
    color: "#0f172a",
    fontSize: 14,
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: 0.3,
    boxShadow: "0 4px 14px rgba(15, 23, 42, 0.45)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },

  btnSecondary: {
    padding: "10px 24px",
    borderRadius: 999,
    border: "1px solid rgba(148, 163, 184, 0.8)",
    background: "rgba(15, 23, 42, 0.65)",
    color: "#e0f2fe",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
    letterSpacing: 0.3,
    boxShadow: "0 4px 12px rgba(15, 23, 42, 0.4)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },
};