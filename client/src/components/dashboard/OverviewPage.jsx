function OverviewPage({ user }) {
  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, {user.fullName}</p>
        </div>
      </div>

      <div className="overview-grid">
        <div className="overview-card">
          <h3>Target Company</h3>
          <p>{user.targetCompany || "Not Selected"}</p>
        </div>

        <div className="overview-card">
          <h3>Leetcode Solved</h3>
          <p>{user.leetcodeSolved || 0}</p>
        </div>

        <div className="overview-card">
          <h3>Current Goal</h3>
          <p>{user.currentGoal || "No goal added yet"}</p>
        </div>

        <div className="overview-card">
          <h3>Active Roadmaps</h3>
          <p>Coming Soon</p>
        </div>
      </div>

      <section className="suggested-section">
        <h2>Suggested Roadmaps</h2>

        <div className="overview-grid">
          <div className="overview-card">
            <h3>DSA</h3>
            <p>Build problem-solving skills</p>
          </div>

          <div className="overview-card">
            <h3>Web Development</h3>
            <p>Frontend + Backend path</p>
          </div>

          <div className="overview-card">
            <h3>Machine Learning</h3>
            <p>AI and data foundations</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OverviewPage;