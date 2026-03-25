export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="process-header">
          <div>
            <span className="section-label">Our Process</span>
            <h2 className="section-heading">
              How We Deliver<br />
              Exceptional Talent
            </h2>
          </div>
          <div>
            <p className="section-subheading" style={{ maxWidth: "100%" }}>
              A refined five-stage methodology shaped by decades of executive
              recruitment experience — ensuring every placement is precise,
              lasting, and culturally aligned.
            </p>
          </div>
        </div>
        <div className="steps-wrap">
          <div className="connector"></div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-circle">
                <span className="step-num">01</span>
              </div>
              <div className="step-title">Culture Fit Assessment</div>
              <p className="step-desc">
                We evaluate each candidate's values and behavioural alignment —
                critical at executive levels.
              </p>
            </div>
            <div className="step">
              <div className="step-circle">
                <span className="step-num">02</span>
              </div>
              <div className="step-title">Talent Identification</div>
              <p className="step-desc">
                Using your JD and our industry depth, we map and shortlist the
                most suitable candidates.
              </p>
            </div>
            <div className="step">
              <div className="step-circle">
                <span className="step-num">03</span>
              </div>
              <div className="step-title">Employer Branding</div>
              <p className="step-desc">
                We present your brand professionally throughout, ensuring top
                candidates stay engaged.
              </p>
            </div>
            <div className="step">
              <div className="step-circle">
                <span className="step-num">04</span>
              </div>
              <div className="step-title">Candidate Engagement</div>
              <p className="step-desc">
                From scheduling to offer acceptance, we maintain consistent
                communication at every step.
              </p>
            </div>
            <div className="step">
              <div className="step-circle">
                <span className="step-num">05</span>
              </div>
              <div className="step-title">Onboarding & Retention</div>
              <p className="step-desc">
                We support smooth onboarding and implement strategies to
                minimise early attrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
