import { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpeg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        {/* LEFT - Profile image */}
        <div 
          style={{
            ...styles.imageWrapper,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <div style={styles.imageGlow}></div>
          <img src={profilePic} alt="Akanksha" style={styles.profileImage} />
          <div style={styles.imageBorder}></div>
        </div>

        {/* RIGHT - Content */}
        <div 
          style={{
            ...styles.content,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          <div style={styles.header}>
            <h2 style={styles.title}>About Me</h2>
            <div style={styles.titleUnderline}></div>
          </div>

          <div style={styles.textContent}>
            <p style={styles.paragraph}>
              Hi, I'm <strong style={styles.highlight}>Akanksha</strong>, a passionate Full Stack Developer 
              who loves building clean, user-friendly, and responsive web applications using
              <strong style={styles.tech}> React</strong> and <strong style={styles.tech}>Java Spring Boot</strong>.
            </p>

            <p style={styles.paragraph}>
              I enjoy solving real-world problems, creating interactive UI designs, 
              and writing backend code that is scalable and efficient.
            </p>

            <p style={styles.paragraph}>
              I am always excited to learn new technologies and improve my development skills 
              to deliver high-quality solutions.
            </p>
          </div>

          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            download 
            style={styles.resumeBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }}
          >
            <span style={styles.btnIcon}>📄</span>
            Download Resume
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    minHeight: "100vh",
    padding: "100px 20px",
    background: "linear-gradient(135deg, #f5f7ff 0%, #e3e7ff 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    gap: "60px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageGlow: {
    position: "absolute",
    width: "320px",
    height: "320px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)",
    animation: "glow 3s ease-in-out infinite",
    pointerEvents: "none",
    zIndex: 0,
  },
  profileImage: {
    width: "300px",
    height: "300px",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(102, 126, 234, 0.1)",
    position: "relative",
    zIndex: 2,
    transition: "transform 0.3s ease",
  },
  imageBorder: {
    position: "absolute",
    top: "-15px",
    left: "-15px",
    right: "-15px",
    bottom: "-15px",
    borderRadius: "25px",
    border: "3px solid rgba(102, 126, 234, 0.2)",
    animation: "float 4s ease-in-out infinite",
    zIndex: 1,
  },
  content: {
    flex: "1 1 500px",
    maxWidth: "600px",
  },
  header: {
    marginBottom: "30px",
  },
  title: {
    fontSize: "clamp(36px, 4vw, 48px)",
    fontWeight: "800",
    marginBottom: "15px",
    color: "#2d3748",
    letterSpacing: "-0.5px",
    lineHeight: "1.2",
  },
  titleUnderline: {
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "2px",
    marginBottom: "10px",
  },
  textContent: {
    marginBottom: "35px",
  },
  paragraph: {
    fontSize: "clamp(16px, 2vw, 18px)",
    lineHeight: "1.9",
    color: "#4a5568",
    marginBottom: "20px",
    fontWeight: "400",
    letterSpacing: "0.2px",
  },
  highlight: {
    color: "#667eea",
    fontWeight: "700",
  },
  tech: {
    color: "#764ba2",
    fontWeight: "600",
  },
  resumeBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "16px 35px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    textDecoration: "none",
    borderRadius: "50px",
    fontSize: "17px",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    letterSpacing: "0.5px",
    border: "none",
  },
  btnIcon: {
    fontSize: "20px",
    animation: "float 2s ease-in-out infinite",
  },
};

// Responsive styles - add media query handling
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const updateStyles = () => {
    if (mediaQuery.matches) {
      styles.container.flexDirection = 'column';
      styles.container.textAlign = 'center';
      styles.profileImage.width = '250px';
      styles.profileImage.height = '250px';
      styles.imageGlow.width = '270px';
      styles.imageGlow.height = '270px';
    } else {
      styles.container.flexDirection = 'row';
      styles.profileImage.width = '300px';
      styles.profileImage.height = '300px';
      styles.imageGlow.width = '320px';
      styles.imageGlow.height = '320px';
    }
  };
  mediaQuery.addEventListener('change', updateStyles);
  updateStyles();
}