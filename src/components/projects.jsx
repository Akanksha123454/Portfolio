import { useEffect, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    { 
      name: "InvTrack", 
      tech: "React + NodeJs",
      description: "A comprehensive system for managing inventory with real-time updates"
    },
    { 
      name: "Online Mobile Shop", 
      tech: "React"+"SpringBoot",
      description: "A responsive calculator application with modern UI design"
    },
    { 
      name: "Student Management API", 
      tech: "Java Spring Boot",
      description: "RESTful API for managing student records and data"
    },
  ];

  return (
    <section style={styles.section} id="projects">
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
            <span style={styles.badgeText}>💼 Projects</span>
          </div>
          <h2 style={styles.title}>My Projects</h2>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            Here are some of my recent projects showcasing my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            ...styles.grid,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
            >
              {/* <div style={styles.cardIcon}>🚀</div> */}
              <h3 style={styles.projectName}>{project.name}</h3>
              <div style={styles.techBadge}>{project.tech}</div>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.cardFooter}>
                <span style={styles.viewMore}>View Details →</span>
              </div>
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
    background: "linear-gradient(135deg, #f5f7ff 0%, #e3e7ff 100%)",
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
    maxWidth: "1200px",
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
    marginBottom: "60px",
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
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    width: "100%",
    maxWidth: "1100px",
  },
  card: {
    padding: "30px",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    position: "relative",
    overflow: "hidden",
  },
  cardIcon: {
    fontSize: "40px",
    marginBottom: "15px",
    animation: "float 3s ease-in-out infinite",
  },
  projectName: {
    fontSize: "clamp(20px, 2.5vw, 24px)",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#2d3748",
    lineHeight: "1.3",
  },
  techBadge: {
    display: "inline-block",
    padding: "6px 14px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "15px",
    width: "fit-content",
  },
  description: {
    fontSize: "15px",
    color: "#718096",
    lineHeight: "1.7",
    marginBottom: "20px",
    flexGrow: 1,
  },
  cardFooter: {
    marginTop: "auto",
    paddingTop: "15px",
    borderTop: "1px solid rgba(102, 126, 234, 0.1)",
  },
  viewMore: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#667eea",
    transition: "all 0.3s ease",
  },
};