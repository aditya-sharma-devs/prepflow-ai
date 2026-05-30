import DashboardSidebar from "./DashboardSidebar";

function DashboardOverview({ user, handleLogout }) {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <section className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, {user.fullName}</p>
          </div>

          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
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
            <h3>Course Progress</h3>
            <p>Coming soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardOverview;
