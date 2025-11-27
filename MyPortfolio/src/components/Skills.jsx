import "./Skills.css";

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
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
