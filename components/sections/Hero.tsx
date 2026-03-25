"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawCanvas();
    }

    function drawCanvas() {
      if (!canvas || !ctx) return;
      const w = canvas.width,
        h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(61,130,220,0.12)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(61,130,220,0.05)";
      for (let i = -h; i < w + h; i += 120) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + h, h);
        ctx.stroke();
      }
      [{ x: 0.15, y: 0.3, r: 200 }, { x: 0.85, y: 0.65, r: 260 }, { x: 0.5, y: 0.1, r: 140 }].forEach(
        ({ x, y, r }) => {
          const g = ctx.createRadialGradient(x * w, y * h, 0, x * w, y * h, r);
          g.addColorStop(0, "rgba(45,110,220,0.2)");
          g.addColorStop(1, "rgba(45,110,220,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x * w, y * h, r, 0, Math.PI * 2);
          ctx.fill();
        }
      );
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(w - 80, 40);
      ctx.lineTo(w - 40, 40);
      ctx.lineTo(w - 40, 80);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(80, h - 40);
      ctx.lineTo(40, h - 40);
      ctx.lineTo(40, h - 80);
      ctx.stroke();
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section id="hero">
      <canvas id="heroCanvas" ref={canvasRef}></canvas>
      <div className="hero-grain"></div>
      <div className="hero-fade"></div>

      <div className="container hero-content">
        <div className="hero-grid">
          {/* Left */}
          <div>
            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              <span>Executive Recruitment Consultancy</span>
            </div>
            <h1 className="hero-title">
              Placing Leaders<br />
              <span className="gradient">Who Shape Industries</span>
            </h1>
            <p className="hero-sub">
              Gridlines Consultancy connects visionary organisations with exceptional
              C-suite and senior talent — across Real Estate, Infrastructure,
              Technology, and beyond.
            </p>
            <div className="hero-btns">
              <Link href="/#contact" className="btn-primary">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="/#services" className="btn-outline">
                Our Services
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-val">30+</div>
                <div className="hero-stat-label">Years Combined Experience</div>
              </div>
              <div>
                <div className="hero-stat-val">50+</div>
                <div className="hero-stat-label">C-Suite Positions Closed</div>
              </div>
              <div>
                <div className="hero-stat-val">12+</div>
                <div className="hero-stat-label">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "420px" }}>
              <div className="hero-card">
                <div className="hero-card-glow"></div>
                <div className="hero-card-label">Sectors We Serve</div>
                <div className="sector-row">
                  <span className="sector-icon">🏗️</span>
                  <span className="sector-label">Real Estate & Infrastructure</span>
                </div>
                <div className="sector-row">
                  <span className="sector-icon">🏛️</span>
                  <span className="sector-label">Architecture & Design</span>
                </div>
                <div className="sector-row">
                  <span className="sector-icon">💹</span>
                  <span className="sector-label">Finance & Investment</span>
                </div>
                <div className="sector-row">
                  <span className="sector-icon">⚙️</span>
                  <span className="sector-label">Technology & Product</span>
                </div>
                <div className="sector-row" style={{ marginBottom: 0 }}>
                  <span className="sector-icon">🌍</span>
                  <span className="sector-label">UK · Europe · Middle East · Africa</span>
                </div>
              </div>
              <div className="hero-badge">
                <div className="badge-icon">✓</div>
                <div>
                  <div className="badge-text-main">Pre-screened Candidates</div>
                  <div className="badge-text-sub">Personally verified by Sunaina</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
