export default function SuccessFactors() {
  return (
    <section id="success">
      <div className="dark-grid-bg"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-center">
          <span className="dark-section-label">Why Choose Us</span>
          <h2 className="dark-heading">Our Success Factors</h2>
          <p className="dark-subheading">
            What makes Gridlines different is not just what we do — it's how
            personally and precisely we do it.
          </p>
        </div>
        <div className="factors-grid" style={{ marginTop: "48px" }}>
          <div className="factor-card">
            <div className="factor-icon">🌐</div>
            <div className="factor-title">Pan-India Network</div>
            <p className="factor-desc">
              Access to developers, suppliers, and executive talent across
              every major Indian city and market.
            </p>
          </div>
          <div className="factor-card">
            <div className="factor-icon">⏱️</div>
            <div className="factor-title">20+ Years at Top Level</div>
            <p className="factor-desc">
              Deep experience operating at senior management levels across real
              estate, finance, and infrastructure.
            </p>
          </div>
          <div className="factor-card">
            <div className="factor-icon">👤</div>
            <div className="factor-title">Personal Pre-Screening</div>
            <p className="factor-desc">
              Every candidate is individually assessed by Sunaina Gera — no
              delegation, no shortcuts.
            </p>
          </div>
          <div className="factor-card">
            <div className="factor-icon">📊</div>
            <div className="factor-title">Data-Driven Assessments</div>
            <p className="factor-desc">
              Detailed candidate data provided both pre- and post-interview,
              enabling informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
