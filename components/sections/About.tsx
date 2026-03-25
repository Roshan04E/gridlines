import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-photo-box" style={{ position: "relative" }}>
              <Image
                src="/assets/profile.webp"
                alt="Sunaina Gera"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(13,31,60,0.9) 0%, rgba(13,31,60,0.4) 30%, transparent 60%)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "85px", // Above the about-bar
                  left: 0,
                  right: 0,
                  padding: "0 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div className="about-name" style={{ fontSize: "1.6rem", marginBottom: "4px" }}>Sunaina Gera</div>
                <div className="about-role" style={{ color: "rgba(255,255,255,0.8)" }}>Founder and CEO</div>
              </div>
              <div className="about-bar">
                <div>
                  <div className="about-bar-label">Experience</div>
                  <div className="about-bar-val">3 Decades+</div>
                </div>
                <div className="about-bar-divider"></div>
                <div>
                  <div className="about-bar-label">Board Roles</div>
                  <div className="about-bar-val">2 Listed Cos.</div>
                </div>
              </div>
            </div>
            <div className="about-floating-card">
              <div className="about-fc-label">Base</div>
              <div className="about-fc-val">New Delhi, India</div>
            </div>
          </div>
          <div className="about-body">
            <span className="section-label">About Us</span>
            <h2 className="section-heading">
              Meet Sunaina Gera,<br />
              Founder of Gridlines
            </h2>
            <p>
              Sunaina brings a rare depth of perspective to executive recruitment
              — shaped by a career spanning over three decades across real estate,
              education, travel and tourism, and HR.
            </p>
            <p>
              Operating at top management level has given her an intimate
              understanding of what leaders truly need — from construction
              techniques to financial structures, sales strategy to contract
              procurement. She currently serves on the boards of two listed
              companies and has participated in the acquisition of an auto
              component manufacturing firm through a reverse merger.
            </p>
            <div
              style={{
                marginBottom: "4px",
                fontFamily: "var(--font-body)",
                fontSize: ".75rem",
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--gray)",
              }}
            >
              Industries Spanned
            </div>
            <div className="industry-tags" style={{ marginBottom: "32px" }}>
              <span className="industry-tag">Real Estate</span>
              <span className="industry-tag">Education</span>
              <span className="industry-tag">Travel & Tourism</span>
              <span className="industry-tag">Human Resources</span>
            </div>
            <div className="cred-section">
              <div className="cred-label">Credentials</div>
              <div className="cred-list">
                <div className="cred-item">
                  <div className="cred-check">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 5L4 7L8 3"
                        stroke="#1D5FD4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="cred-title">
                      BA (Hons) English Literature
                    </div>
                    <div className="cred-subtitle">
                      St. Stephen's College, Delhi
                    </div>
                  </div>
                </div>
                <div className="cred-item">
                  <div className="cred-check">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 5L4 7L8 3"
                        stroke="#1D5FD4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="cred-title">LEED Certification</div>
                    <div className="cred-subtitle">Green Building Council</div>
                  </div>
                </div>
                <div className="cred-item">
                  <div className="cred-check">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 5L4 7L8 3"
                        stroke="#1D5FD4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="cred-title">
                      Diploma in Interior Design
                    </div>
                    <div className="cred-subtitle">
                      Professional Accreditation
                    </div>
                  </div>
                </div>
                <div className="cred-item">
                  <div className="cred-check">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 5L4 7L8 3"
                        stroke="#1D5FD4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="cred-title">HR Certification</div>
                    <div className="cred-subtitle">XLRI, Jamshedpur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
