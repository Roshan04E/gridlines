"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav id="navbar" className={scrolled || menuOpen ? "scrolled" : ""}>
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <div className="nav-logo-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="1" fill="white" />
                <rect x="12" y="2" width="6" height="6" rx="1" fill="white" fillOpacity=".5" />
                <rect x="2" y="12" width="6" height="6" rx="1" fill="white" fillOpacity=".5" />
                <rect x="12" y="12" width="6" height="6" rx="1" fill="white" />
              </svg>
            </div>
            <span className="nav-logo-text">
              Gridlines <span>Consultancy</span>
            </span>
          </Link>
          
          <div className="nav-text-links">
            <Link href="/#services" className="nav-link">
              Services
            </Link>
            <Link href="/#about" className="nav-link">
              About
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </div>
          
          <div className="nav-actions">
            <Link
              href="/#contact"
              className="btn-primary nav-cta"
              style={{ padding: "10px 22px", fontSize: ".875rem" }}
            >
              Get in Touch
            </Link>
            
            {/* Mobile Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          <Link href="/#services" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/#about" className="mobile-link" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/blog" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </div>
      </div>
    </>
  );
}
