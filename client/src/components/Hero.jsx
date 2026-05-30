import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Prepflow AI</h1>

        <p>
          Your AI-powered placement preparation system for DSA, notes, quizzes,
          roadmaps, and interview preparation.
        </p>

        <div className="hero-buttons">
          <Link to="/signup">
            <button>Get Started</button>
          </Link>
          <button>Explore Features</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
