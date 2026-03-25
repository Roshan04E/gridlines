"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out the required fields (Name, Email, Message).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to send email.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="dark-grid-bg"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="contact-grid">
          <div>
            <span className="dark-section-label">Get in Touch</span>
            <h2 className="dark-heading">
              Let's Find Your<br />
              Next Leader
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "rgba(255,255,255,.55)",
                lineHeight: 1.75,
                margin: "0 0 48px 0",
                maxWidth: "400px",
              }}
            >
              Whether you have a critical vacancy or are planning ahead,
              Gridlines delivers the talent intelligence and personal attention
              your organisation deserves.
            </p>
            <a href="mailto:sunaina@gridlines.in" className="contact-info-item">
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 4H15L9 10L3 4Z"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 4V14H15V4"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-val">sunaina@gridlines.in</div>
              </div>
            </a>
            <a href="tel:+919822599909" className="contact-info-item">
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M4 2H7L8.5 6L6.5 7.5C7.5 9.5 9.5 11.5 11.5 12.5L13 10.5L17 12V15C17 16 16 17 15 17C8 17 1 10 1 3C1 2 2 1 3 1L4 2Z"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="contact-info-label">Phone</div>
                <div className="contact-info-val">+91 98225 99909</div>
              </div>
            </a>
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1C6.24 1 4 3.24 4 6C4 9.5 9 17 9 17C9 17 14 9.5 14 6C14 3.24 11.76 1 9 1Z"
                    stroke="white"
                    strokeWidth="1.2"
                  />
                  <circle cx="9" cy="6" r="2" stroke="white" strokeWidth="1.2" />
                </svg>
              </div>
              <div>
                <div className="contact-info-label">Address</div>
                <div className="contact-info-val">
                  E5 Jhandewalan Extension, Rani Jhansi Road, New Delhi
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form-box" onSubmit={handleSubmit}>
            <div className="form-heading">Send an Enquiry</div>
            
            {status === "success" && (
              <div style={{ padding: "12px", background: "rgba(16,185,129,0.1)", borderRadius: "8px", color: "#059669", fontFamily: "var(--font-body)", fontSize: "0.9rem", marginBottom: "20px", display: "flex", gap: "8px", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Thank you! We've received your enquiry and will be in touch shortly.
              </div>
            )}
            
            {errorMessage && (
              <div style={{ padding: "12px", background: "rgba(220,38,38,0.1)", borderRadius: "8px", color: "#DC2626", fontFamily: "var(--font-body)", fontSize: "0.9rem", marginBottom: "20px" }}>
                {errorMessage}
              </div>
            )}

            <div className="form-field">
              <label className="form-label">Full Name *</label>
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={status === "loading"}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Company</label>
              <input
                className="form-input"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Organisation name"
                disabled={status === "loading"}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Email Address *</label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                disabled={status === "loading"}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Phone</label>
              <input
                className="form-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 xxxxxxxx"
                disabled={status === "loading"}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Message *</label>
              <textarea
                className="form-input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about the role or requirement..."
                required
                disabled={status === "loading"}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary"
              disabled={status === "loading"}
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: "4px",
                opacity: status === "loading" ? 0.7 : 1,
                cursor: status === "loading" ? "not-allowed" : "pointer"
              }}
            >
              {status === "loading" ? "Sending Enquiry..." : "Submit Enquiry"}
              {!status && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
