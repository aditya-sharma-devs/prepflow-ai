import { useState } from "react";
import { Link } from "react-router-dom";

function DashboardSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)}></div>
      )}

      <aside className={`dashboard-sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-menu">
          <div className="sidebar-brand">
            <h2>PrepFlow AI</h2>
            <p>Placement Hub</p>
          </div>

          <button className="sidebar-menu-btn" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>

        <div className="sidebar-nav">
          <div className="drawer-brand">
            <h2>PrepFlow AI</h2>
            <p>Placement Hub</p>
          </div>
          <nav className="sidebar-links">
            <Link to="/dashboard" onClick={() => setOpen(false)}>
              Overview
            </Link>
            <Link to="/dashboard/roadmaps" onClick={() => setOpen(false)}>
              Roadmaps
            </Link>
            <Link to="/dashboard/progress" onClick={() => setOpen(false)}>
              Progress
            </Link>
            <Link to="/dashboard/quizzes" onClick={() => setOpen(false)}>
              Quizzes
            </Link>
            <Link to="/dashboard/resources" onClick={() => setOpen(false)}>
              Resources
            </Link>
            <Link to="/dashboard/profile" onClick={() => setOpen(false)}>
              Profile
            </Link>
            <Link to="/dashboard/settings" onClick={() => setOpen(false)}>
              Settings
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default DashboardSidebar;
