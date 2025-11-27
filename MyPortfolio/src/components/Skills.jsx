export default function Skills() {
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
    <div style={styles.container}>
      <h2 style={styles.title}>My Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    padding: "40px 20px",
    background: "linear-gradient(to right, #764ba2, #667eea)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    maxWidth: "900px",
  },
  card: {
    padding: "15px 25px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "500",
    minWidth: "120px",
    transition: "all 0.3s ease",
    cursor: "default",
  },
};
