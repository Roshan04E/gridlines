"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">
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
              <rect x="12" y="12" width="6" height="6" rx="1" fill="white" />
            </svg>
          </div>
          <span className="nav-logo-text">
            Gridlines <span>Consultancy</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/#services" className="nav-link">
            Services
          </Link>
          <Link href="/#about" className="nav-link">
            About
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link
            href="/#contact"
            className="btn-primary"
            style={{ padding: "10px 22px", fontSize: ".875rem" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
