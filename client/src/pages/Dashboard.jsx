import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileSetup from "../components/ProfileSetup";
import DashboardOverview from "../components/DashboardOverview";

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
        "http://localhost:5000/api/auth/profile",
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
    fetchProfile();
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
        "http://localhost:5000/api/auth/profile",
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
        <DashboardOverview user = {user} handleLogout = {handleLogout} />
      ):(
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
