import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileSetup from "../components/ProfileSetup";
import { API_URL } from "../config";


import DashboardLayout from "../components/dashboard/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "../components/dashboard/OverviewPage";
import RoadmapsPage from "../components/dashboard/RoadmapsPage";
import ProgressPage from "../components/dashboard/ProgressPage";
import QuizzesPage from "../components/dashboard/QuizzesPage";
import ResourcesPage from "../components/dashboard/ResourcesPage";
import ProfilePage from "../components/dashboard/ProfilePage";
import SettingsPage from "../components/dashboard/SettingsPage";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [profileData, setProfileData] = useState({
    college: "",
    branch: "",
    year: "",
    targetCompany: "",
    leetcodeSolved: 0,
    currentGoal: "",
  });

  async function fetchProfile() {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${API_URL}/api/auth/profile`, // ${API_URL}  http://localhost:5000
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUser(response.data);

      setProfileData({
        college: response.data.college || "",
        branch: response.data.branch || "",
        year: response.data.year || "",
        targetCompany: response.data.targetCompany || "",
        leetcodeSolved: response.data.leetcodeSolved || 0,
        currentGoal: response.data.currentGoal || "",
      });
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
      navigate("/login");
    }
  }

  useEffect(() => {
    fetchProfile()
  }, []);

  function handleProfileChange(event) {
    const { name, value } = event.target;

    setProfileData({
      ...profileData,
      [name]: value,
    });
  }

  async function handleProfileSubmit(event) {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${API_URL}/api/auth/profile`,  //This is for real backend deployed
        // `http://localhost:5000/api/auth/profile`, //this is for local host
        profileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUser(response.data.user);
      alert("Profile updated successfully");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Profile update failed");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");

    navigate("/login");
  }

  if (!user) {
    return (
      <main className="dashboard-page">
        <p>Loading user...</p>
      </main>
    );
  }

  return (
    <main className="dashboard-page">
      {user.isProfileComplete ? (
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<OverviewPage user={user} />} />

            <Route path="roadmaps" element={<RoadmapsPage />} />

            <Route path="progress" element={<ProgressPage />} />

            <Route path="quizzes" element={<QuizzesPage />} />

            <Route path="resources" element={<ResourcesPage />} />

            <Route path="profile" element={<ProfilePage />} />

            <Route
              path="settings"
              element={<SettingsPage handleLogout={handleLogout} />}
            />
          </Route>
        </Routes>
      ) : (
        <ProfileSetup
          user={user}
          profileData={profileData}
          handleProfileChange={handleProfileChange}
          handleProfileSubmit={handleProfileSubmit}
          handleLogout={handleLogout}
        />
      )}
    </main>
  );
}

export default Dashboard;
