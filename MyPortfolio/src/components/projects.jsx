export default function Projects() {
  const projects = [
    { name: "Inventory Management System", tech: "React + Spring Boot" },
    { name: "Calculator App", tech: "HTML, CSS, JS" },
    { name: "Student Management API", tech: "Java Spring Boot" },
  ];

  return (
    <div style={styles.container}>
      <h1>Projects</h1>

      <div style={styles.grid}>
        {projects.map((p, index) => (
          <div key={index} style={styles.card}>
            <h3>{p.name}</h3>
            <p>{p.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "40px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    padding: "20px",
    background: "#eee",
    borderRadius: "8px",
  },
};
