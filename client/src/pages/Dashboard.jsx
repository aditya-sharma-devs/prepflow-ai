import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
  return (
    <main className="dashboard-page">
      <section className="dashboard-card">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            {user && <p>Welcome, {user.fullName}</p>}
          </div>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>

        {user ? (
          <div className="profile-section">
            <h2>Your Profile</h2>
            <p>Email: {user.email}</p>

            <form className="profile-form" onSubmit={handleProfileSubmit}>
              <input
                type="text"
                name="college"
                placeholder="College"
                value={profileData.college}
                onChange={handleProfileChange}
              />

              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={profileData.branch}
                onChange={handleProfileChange}
              />

              <input
                type="text"
                name="year"
                placeholder="Year"
                value={profileData.year}
                onChange={handleProfileChange}
              />

              <input
                type="text"
                name="targetCompany"
                placeholder="Target Company"
                value={profileData.targetCompany}
                onChange={handleProfileChange}
              />

              <input
                type="number"
                name="leetcodeSolved"
                placeholder="Leetcode Problems Solved"
                value={profileData.leetcodeSolved}
                onChange={handleProfileChange}
              />

              <textarea
                name="currentGoal"
                placeholder="Current Goal"
                value={profileData.currentGoal}
                onChange={handleProfileChange}
              />

              <button type="submit">Save Profile</button>
            </form>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </section>
    </main>
  );
}

export default Dashboard;
