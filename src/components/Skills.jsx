import { useEffect, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "MySQL",
    "HTML",
    "CSS",
    "NodeJS",
    "ExpressJS",
    "Postman",
    "Git & GitHub"
  ];

  return (
    <section style={styles.section} id="skills">
      {/* Animated Background Elements */}
      <div style={styles.backgroundCircle1}></div>
      <div style={styles.backgroundCircle2}></div>
      <div style={styles.backgroundCircle3}></div>

      <div style={styles.container}>
        {/* Header Section */}
        <div 
          style={{
            ...styles.header,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <div style={styles.badge}>
            <span style={styles.badgeText}>🛠️ Skills</span>
          </div>
          <h2 style={styles.title}>My Skills</h2>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        {/* Skills Grid */}
        <div 
          style={{
            ...styles.grid,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              <span style={styles.cardText}>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
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

const styles = {
  section: {
    width: "100%",
    minHeight: "100vh",
    padding: "100px 20px",
    background: "linear-gradient(135deg,rgb(81, 83, 126) 0%,rgb(141, 143, 166) 60%, #7185ff 100%)",
    position: "relative",
    overflow: "hidden",
  },
  backgroundCircle1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
    top: "-100px",
    left: "-100px",
    animation: "pulse 8s ease-in-out infinite",
  },
  backgroundCircle2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(118, 75, 162, 0.12) 0%, transparent 70%)",
    bottom: "-50px",
    right: "-50px",
    animation: "pulse 6s ease-in-out infinite",
  },
  backgroundCircle3: {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animation: "float 10s ease-in-out infinite",
  },
  container: {
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
    width: "100%",
  },
  badge: {
    display: "inline-block",
    padding: "6px 18px",
    background: "rgba(102, 126, 234, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "50px",
    marginBottom: "20px",
    border: "1px solid rgba(102, 126, 234, 0.2)",
  },
  badgeText: {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#667eea",
  },
  title: {
    fontSize: "clamp(36px, 5vw, 48px)",
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
    margin: "0 auto 15px",
  },
  subtitle: {
    fontSize: "clamp(15px, 2vw, 18px)",
    color: "#718096",
    fontWeight: "400",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1000px",
  },
  card: {
    padding: "16px 28px",
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#2d3748",
    minWidth: "130px",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    position: "relative",
    overflow: "hidden",
  },
  cardText: {
    position: "relative",
    zIndex: 1,
  },
};