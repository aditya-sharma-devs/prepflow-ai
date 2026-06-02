function ProgressPage() {
  return (
    <div className="progress-page">
      <div className="page-header">
        <h1>Progress Tracker</h1>
        <p>Monitor your placement preparation journey.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Problems Solved</h3>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <h3>Study Streak</h3>
          <h2>0 Days</h2>
        </div>

        <div className="stat-card">
          <h3>Roadmaps Active</h3>
          <h2>0</h2>
        </div>
      </div>

      <div className="progress-section">
        <h2>Roadmap Progress</h2>

        <div className="roadmap-item">
          <div className="roadmap-info">
            <span>Placement Foundation</span>
            <span>35%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "35%" }}></div>
          </div>
        </div>

        <div className="roadmap-item">
          <div className="roadmap-info">
            <span>Full Stack Development</span>
            <span>20%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "20%" }}></div>
          </div>
        </div>

        <div className="roadmap-item">
          <div className="roadmap-info">
            <span>Interview Preparation</span>
            <span>10%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "10%" }}></div>
          </div>
        </div>
      </div>

      <div className="activity-section">
        <h2>Recent Activity</h2>

        <ul>
          <li>Solved Array Basics Questions</li>
          <li>Started Full Stack Roadmap</li>
          <li>Completed HTML Revision</li>
        </ul>
      </div>
    </div>
  );
}

export default ProgressPage;