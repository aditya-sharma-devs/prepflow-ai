import { useState } from "react";
import axios from "axios";
import DashboardSidebar from "./DashboardSidebar";

function DashboardOverview({ user, handleLogout }) {
  const [topic, setTopic] = useState("");
  const [roadmap, setRoadmap] = useState(null);
  const [activePage, setActivePage] = useState("overview");

  async function handleGenerateRoadmap(event) {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/api/roadmaps/generate",
        { topic },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRoadmap(response.data);
      setTopic("");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to generate roadmap");
    }
  }

  return (
    <div className="dashboard-layout">
      <DashboardSidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <section className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <h1>
              {activePage === "overview" && "Dashboard"}
              {activePage === "roadmaps" && "My Roadmap"}
              {activePage === "progress" && "Progress"}
              {activePage === "notes" && "Notes"}
              {activePage === "profile" && "Profile"}
              {activePage === "settings" && "Settings"}
            </h1>

            <p>Welcome back, {user.fullName}</p>
          </div>

          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>

        {activePage === "overview" && (
          <>
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
                <h3>Generated Roadmaps</h3>
                <p>{roadmap ? "1 active roadmap" : "No roadmap yet"}</p>
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
        )}

        {activePage === "roadmaps" && (
          <>
            <section className="roadmap-generator">
              <h2>Generate AI Roadmap</h2>
              <p>
                Enter any topic like DSA, Flutter, Machine Learning, DevOps.
              </p>

              <form className="roadmap-form" onSubmit={handleGenerateRoadmap}>
                <input
                  type="text"
                  placeholder="Enter topic"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                />

                <button type="submit">Generate Roadmap</button>
              </form>
            </section>

            {roadmap && (
              <section className="roadmap-result">
                <h2>{roadmap.topic} Roadmap</h2>

                <div className="lesson-list">
                  {roadmap.lessons.map((lesson) => (
                    <div className="lesson-card" key={lesson._id}>
                      <span>Step {lesson.order}</span>
                      <h3>{lesson.title}</h3>
                      <p>{lesson.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {activePage === "progress" && (
          <section className="placeholder-page">
            <h2>Progress page coming soon</h2>
            <p>Your learning progress will appear here.</p>
          </section>
        )}

        {activePage === "notes" && (
          <section className="placeholder-page">
            <h2>Notes page coming soon</h2>
            <p>Your saved notes and summaries will appear here.</p>
          </section>
        )}

        {activePage === "profile" && (
          <section className="placeholder-page">
            <h2>Profile page coming soon</h2>
            <p>Your profile settings will appear here.</p>
          </section>
        )}

        {activePage === "settings" && (
          <section className="placeholder-page">
            <h2>Settings page coming soon</h2>
            <p>Theme, account and notification settings will appear here.</p>
          </section>
        )}
      </section>
    </div>
  );
}

export default DashboardOverview;