export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>
      <p style={styles.sub}>
        Have a question or want to work together? Fill out the form below.
      </p>

      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Message" rows="6" style={styles.textarea}></textarea>
        <button type="submit" style={styles.btn}>Send Message</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  sub: {
    fontSize: "16px",
    marginBottom: "40px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "all 0.3s ease",
  },
  textarea: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "all 0.3s ease",
    resize: "vertical",
  },
  btn: {
    padding: "12px 20px",
    background: "#222",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

/* Add these hover/focus effects in a CSS file or <style> tag */
const css = `
input:focus, textarea:focus {
  border-color: #764ba2;
  box-shadow: 0 0 5px rgba(118, 75, 162, 0.5);
}

button:hover {
  background-color: #444;
  transform: scale(1.03);
}
`;

// You can inject this CSS in your main App or index.html
