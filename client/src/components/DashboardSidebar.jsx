import { Link } from "react-router-dom";

function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand">
        <h2>PrepFlow</h2>
        <p>Placement Hub</p>
      </div>

      <nav className="sidebar-links">
        <Link to="/dashboard">Overview</Link>
        <Link to="/dashboard/roadmaps">Roadmaps</Link>
        <Link to="/dashboard/progress">Progress</Link>
        <Link to="/dashboard/notes">Notes</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}

export default DashboardSidebar;