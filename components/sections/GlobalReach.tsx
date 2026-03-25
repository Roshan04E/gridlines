export default function GlobalReach() {
  return (
    <section id="global">
      <div
        style={{
          position: "absolute",
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(29,95,212,.06) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      ></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reach-grid">
          <div>
            <span className="section-label">Global Presence</span>
            <h2 className="section-heading">
              Optimum Solutions<br />
              for Global Success
            </h2>
            <p className="section-subheading" style={{ marginBottom: "32px" }}>
              With a deep-rooted presence in India and an expanding global
              footprint, Gridlines bridges elite talent with world-class
              organisations across six regions.
            </p>
            <div className="region-pills">
              <div className="region-pill">🇮🇳 India</div>
              <div className="region-pill">🇬🇧 United Kingdom</div>
              <div className="region-pill">🇪🇺 Europe</div>
              <div className="region-pill">🇦🇪 Middle East</div>
              <div className="region-pill">🌍 Africa</div>
              <div className="region-pill">🇦🇺 Australia</div>
            </div>
          </div>
          <div className="region-cards">
            <div className="region-card">
              <div className="region-flag">🇮🇳</div>
              <div className="region-name">India</div>
              <div className="region-detail">
                Pan-India network of executives, developers & suppliers
              </div>
            </div>
            <div className="region-card">
              <div className="region-flag">🇬🇧</div>
              <div className="region-name">United Kingdom</div>
              <div className="region-detail">
                Senior talent placements across London & major UK cities
              </div>
            </div>
            <div className="region-card">
              <div className="region-flag">🇪🇺</div>
              <div className="region-name">Europe</div>
              <div className="region-detail">
                Cross-border hiring across major European markets
              </div>
            </div>
            <div className="region-card">
              <div className="region-flag">🇦🇪</div>
              <div className="region-name">Middle East</div>
              <div className="region-detail">
                GCC region placements across UAE, KSA & beyond
              </div>
            </div>
            <div className="region-card">
              <div className="region-flag">🌍</div>
              <div className="region-name">Africa</div>
              <div className="region-detail">
                Growing presence in East and West African markets
              </div>
            </div>
            <div className="region-card">
              <div className="region-flag">🇦🇺</div>
              <div className="region-name">Australia</div>
              <div className="region-detail">
                Senior executive placements across the ANZ region
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
