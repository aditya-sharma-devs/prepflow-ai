import DashboardSidebar from "../DashboardSidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


function DashboardLayout() {
  useEffect(() => {
    async function applyTheme() {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/settings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const darkMode = res.data.settings?.darkMode ?? false;

        document.body.classList.toggle("dark-mode", darkMode);
      } catch(error) {
        console.log(error)
        console.log("Theme load failed");
      }
    }

    applyTheme();
  }, []);

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