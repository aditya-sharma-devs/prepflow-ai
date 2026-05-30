import DashboardSidebar from "../DashboardSidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />

      <section className="dashboard-main">
        <Outlet />
      </section>
    </div>
  );
}

export default DashboardLayout;