export default function WhatWeDo() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-center">
          <span className="section-label">What We Do</span>
          <h2 className="section-heading">
            Hiring Models Built for<br />
            Executive Excellence
          </h2>
          <p className="section-subheading">
            Three flexible engagement models — each designed for different
            stages of your talent journey, from board-level searches to
            high-volume functional hiring.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card card-hover">
            <div className="service-card-corner"></div>
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 3L25 9V19L14 25L3 19V9L14 3Z"
                  stroke="#1D5FD4"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 3V25M3 9L25 9M3 19L25 19"
                  stroke="#1D5FD4"
                  strokeWidth="1"
                  strokeOpacity=".4"
                />
              </svg>
            </div>
            <div className="service-title">Retained Search</div>
            <p className="service-desc">
              Deep-engagement, exclusive partnerships for senior leadership
              roles where cultural alignment and confidentiality are paramount.
            </p>
            <div className="service-tags">
              <span className="tag">C-Suite</span>
              <span className="tag">Board</span>
              <span className="tag">Confidential</span>
            </div>
          </div>
          <div className="service-card card-hover">
            <div className="service-card-corner"></div>
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="10" r="5" stroke="#1D5FD4" strokeWidth="1.5" />
                <path
                  d="M5 23C5 18.582 9.029 15 14 15C18.971 15 23 18.582 23 23"
                  stroke="#1D5FD4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 5L22 7L26 3"
                  stroke="#1D5FD4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="service-title">Contingent Hiring</div>
            <p className="service-desc">
              Performance-based recruitment for mid-to-senior roles. You pay
              only on successful placement, ensuring fully aligned incentives.
            </p>
            <div className="service-tags">
              <span className="tag">Mid-Senior</span>
              <span className="tag">Functional Heads</span>
              <span className="tag">Risk-Free</span>
            </div>
          </div>
          <div className="service-card card-hover">
            <div className="service-card-corner"></div>
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M4 20L10 14L14 18L20 10L24 14"
                  stroke="#1D5FD4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="4"
                  y="4"
                  width="20"
                  height="20"
                  rx="3"
                  stroke="#1D5FD4"
                  strokeWidth="1.5"
                  strokeOpacity=".4"
                />
              </svg>
            </div>
            <div className="service-title">Success-Based</div>
            <p className="service-desc">
              Targeted talent acquisition with a clear success milestone — zero
              investment until the right candidate joins your team.
            </p>
            <div className="service-tags">
              <span className="tag">Flexible</span>
              <span className="tag">Milestone-driven</span>
              <span className="tag">Volume Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
