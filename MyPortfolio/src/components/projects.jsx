export default function Projects() {
  const projects = [
    { name: "Inventory Management System", tech: "React + Spring Boot" },
    { name: "Calculator App", tech: "HTML, CSS, JS" },
    { name: "Student Management API", tech: "Java Spring Boot" },
  ];

  return (
    <section style={styles.container} id="projects">
      <h2 style={styles.title}>My Projects</h2>

      <div style={styles.grid}>
        {projects.map((p, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.projectName}>{p.name}</h3>
            <p style={styles.tech}>{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    width: "100%",
    padding: "60px 40px",
    minHeight: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "40px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    width: "100%",
  },
  card: {
    padding: "25px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
  },
  projectName: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  tech: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#ddd",
  },
};
