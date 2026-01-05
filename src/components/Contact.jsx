import { useEffect, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section style={styles.section} id="contact">
      {/* Background accents */}
      <div style={styles.backgroundCircle1}></div>
      <div style={styles.backgroundCircle2}></div>
      <div style={styles.backgroundCircle3}></div>

      <div style={styles.container}>
        {/* Header */}
        <div
          style={{
            ...styles.header,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.6s ease-out",
          }}
        >
          <div style={styles.badge}>
            <span style={styles.badgeText}>📧 Contact</span>
          </div>
          <h2 style={styles.title}>Contact & Get in Touch</h2>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            Send a quick message and I’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <div
          style={{
            ...styles.formWrapper,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease-out 0.1s",
          }}
        >
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}>👤</span>
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}>📨</span>
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}>💬</span>
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              ></textarea>
            </div>

            <button type="submit" style={styles.btn}>
              <span style={styles.btnIcon}>✉️</span>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Small CSS for focus & hover */}
      <style>{`
        #contact input:focus,
        #contact textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);
          background: #ffffff;
        }
        #contact button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(102, 126, 234, 0.35);
        }
        #contact button:active {
          transform: translateY(0);
          box-shadow: 0 3px 10px rgba(102, 126, 234, 0.25);
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    minHeight: "100vh",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #edf2ff 0%, #dbe4ff 100%)",
    position: "relative",
    overflow: "hidden",
  },
  backgroundCircle1: {
    position: "absolute",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(102,126,234,0.18) 0%, transparent 70%)",
    top: "-90px",
    left: "-90px",
  },
  backgroundCircle2: {
    position: "absolute",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(118,75,162,0.15) 0%, transparent 70%)",
    bottom: "-70px",
    right: "-70px",
  },
  backgroundCircle3: {
    position: "absolute",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(102,126,234,0.12) 0%, transparent 70%)",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  container: {
    width: "100%",
    maxWidth: "540px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
    width: "100%",
  },
  badge: {
    display: "inline-block",
    padding: "5px 16px",
    background: "rgba(102, 126, 234, 0.12)",
    borderRadius: "999px",
    border: "1px solid rgba(102, 126, 234, 0.25)",
    marginBottom: "14px",
  },
  badgeText: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#667eea",
  },
  title: {
    fontSize: "clamp(30px, 4vw, 38px)",
    fontWeight: 800,
    marginBottom: "10px",
    color: "#2d3748",
    letterSpacing: "-0.3px",
  },
  titleUnderline: {
    width: "54px",
    height: "3px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    margin: "0 auto 10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#718096",
    maxWidth: "380px",
    margin: "0 auto",
    lineHeight: 1.5,
  },
  formWrapper: {
    width: "100%",
    background: "rgba(255, 255, 255, 0.98)",
    borderRadius: "16px",
    padding: "26px 22px",
    boxShadow: "0 10px 32px rgba(15, 23, 42, 0.15)",
    border: "1px solid rgba(148, 163, 184, 0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#2d3748",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  labelIcon: {
    fontSize: "14px",
  },
  input: {
    padding: "10px 14px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1.5px solid rgba(148, 163, 184, 0.7)",
    outline: "none",
    background: "rgba(255, 255, 255, 0.9)",
    color: "#1a202c",
    fontFamily: "inherit",
    transition: "all 0.2s ease",
  },
  textarea: {
    padding: "10px 14px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1.5px solid rgba(148, 163, 184, 0.7)",
    outline: "none",
    background: "rgba(255, 255, 255, 0.9)",
    color: "#1a202c",
    fontFamily: "inherit",
    minHeight: "90px",
    resize: "vertical",
    transition: "all 0.2s ease",
  },
  btn: {
    marginTop: "4px",
    padding: "11px 26px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(102, 126, 234, 0.4)",
    transition: "all 0.2s ease",
  },
  btnIcon: {
    fontSize: "16px",
  },
};