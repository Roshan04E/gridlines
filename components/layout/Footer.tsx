import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--blue)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="6" height="6" rx="1" fill="white" />
                  <rect
                    x="12"
                    y="2"
                    width="6"
                    height="6"
                    rx="1"
                    fill="white"
                    fillOpacity=".5"
                  />
                  <rect
                    x="2"
                    y="12"
                    width="6"
                    height="6"
                    rx="1"
                    fill="white"
                    fillOpacity=".5"
                  />
                  <rect
                    x="12"
                    y="12"
                    width="6"
                    height="6"
                    rx="1"
                    fill="white"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Gridlines{" "}
                <span
                  style={{ color: "var(--blue-light)", fontWeight: 400 }}
                >
                  Consultancy
                </span>
              </span>
            </div>
            <p className="footer-brand-text">
              Premier executive recruitment consultancy specialising in C-suite
              and senior talent across India and global markets.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="mailto:sunaina@gridlines.in" className="footer-social-btn" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <Link href="/#about" className="footer-link">
              About Us
            </Link>
            <Link href="/#services" className="footer-link">
              Our Services
            </Link>
            <Link href="/#process" className="footer-link">
              Process
            </Link>
            <Link href="/blog" className="footer-link">
              Blog
            </Link>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <Link href="/#services" className="footer-link">
              Retained Search
            </Link>
            <Link href="/#services" className="footer-link">
              Contingent Hiring
            </Link>
            <Link href="/#services" className="footer-link">
              Success-Based
            </Link>
            <Link href="/#services" className="footer-link">
              Global Recruitment
            </Link>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <a href="mailto:sunaina@gridlines.in" className="footer-link">
              sunaina@gridlines.in
            </a>
            <a href="tel:+919822599909" className="footer-link">
              +91 98225 99909
            </a>
            <a href="#" className="footer-link">
              New Delhi, India
            </a>
            <Link href="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Gridlines Consultancy. All Rights Reserved.
          </span>
          <span className="footer-copy">Designed & Built by Roshan</span>
        </div>
      </div>
    </footer>
  );
}
