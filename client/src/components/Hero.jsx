import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">AI-powered placement preparation</span>

          <h1>
            Learn.
            <br />
            Practice.
            <br />
            <span>Get Placed.</span>
          </h1>

          <p>
            PrepFlow AI helps you organize DSA, notes, quizzes, roadmaps, and
            interview preparation in one clean dashboard built for focused
            learning.
          </p>

          <div className="hero-buttons">
            <Link to="/signup">
              <button className="primary-btn">Start Preparing</button>
            </Link>

            <a href="#features">
              <button className="secondary-btn">Explore Features</button>
            </a>
          </div>
        </div>
        <div className="hero-card landing-preview-card">
          <span className="preview-label">How PrepFlow helps</span>

          <h3>One system for complete placement preparation</h3>

          <p>
            Plan your preparation, organize topics, revise with quizzes, and
            understand what to study next without getting confused.
          </p>

          <div className="preview-list">
            <div className="preview-item">
              <span>01</span>
              <div>
                <h4>Follow a clear roadmap</h4>
                <p>
                  Move step-by-step through DSA, core subjects, projects, and
                  interviews.
                </p>
              </div>
            </div>

            <div className="preview-item">
              <span>02</span>
              <div>
                <h4>Practice with focus</h4>
                <p>
                  Keep your preparation organized instead of randomly switching
                  topics.
                </p>
              </div>
            </div>

            <div className="preview-item">
              <span>03</span>
              <div>
                <h4>Revise smarter</h4>
                <p>
                  Use AI quizzes and notes to quickly revise important concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
