function OverviewPage({ user }) {
  return (
    <>
      <div className="dashboard-header">
        <div>
          <span className="dashboard-badge">Overview</span>
          <h1>Welcome back, {user.fullName}</h1>
          <p>Continue your placement preparation from where you left.</p>
        </div>
      </div>

      <div className="overview-grid">
        <div className="overview-card">
          <span>Target</span>
          <h3>{user.targetCompany || "Not Selected"}</h3>
          <p>Company focus</p>
        </div>

        <div className="overview-card">
          <span>Practice</span>
          <h3>{user.leetcodeSolved || 0}</h3>
          <p>Problems solved</p>
        </div>

        <div className="overview-card">
          <span>Goal</span>
          <h3>{user.currentGoal || "No goal added"}</h3>
          <p>Current focus</p>
        </div>

        <div className="overview-card">
          <span>Roadmaps</span>
          <h3>Coming Soon</h3>
          <p>Active plans</p>
        </div>
      </div>

      <section className="dashboard-section">
        <div className="section-title">
          <h2>Suggested Roadmaps</h2>
          <p>Choose a path and start preparing with structure.</p>
        </div>

        <div className="roadmap-grid">
          <div className="roadmap-card">
            <span>01</span>
            <h3>Placement Foundation</h3>
            <p>A complete starting roadmap for coding, aptitude, and basics.</p>
          </div>

          <div className="roadmap-card">
            <span>02</span>
            <h3>Full Stack Development</h3>
            <p>Learn frontend, backend, APIs, databases, and deployment.</p>
          </div>

          <div className="roadmap-card">
            <span>03</span>
            <h3>Interview Preparation</h3>
            <p>Prepare for HR, technical rounds, projects, and communication.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OverviewPage;