import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

function RoadmapsPage() {
  const [topic, setTopic] = useState("");
  const [savedRoadmaps, setSavedRoadmaps] = useState([]);
  const [expandedRoadmapId, setExpandedRoadmapId] = useState(null);

  async function fetchRoadmaps() {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("${API_URL}/api/roadmaps", {  // ${API_URL}  http://localhost:5000
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSavedRoadmaps(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGenerateRoadmap(event) {
    event.preventDefault();

    if (!topic.trim()) {
      alert("Please enter a topic");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        // "http://localhost:5000/api/roadmaps/generated",
        "${API_URL}/api/roadmaps/generated",
        { topic },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTopic("");
      fetchRoadmaps();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to generate roadmap");
    }
  }

  function handleToggleRoadmap(id) {
    setExpandedRoadmapId(expandedRoadmapId === id ? null : id);
  }

  async function handleDeleteRoadmap(id) {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API_URL}/api/roadmaps/${id}`, { //  http://localhost:5000
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (expandedRoadmapId === id) {
        setExpandedRoadmapId(null);
      }

      fetchRoadmaps();
    } catch (error) {
      console.log(error);
      alert("Failed to delete roadmap");
    }
  }

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  return (
    <div className="roadmaps-page">
      <div className="page-header roadmap-header">
        <div>
          <h1>My Roadmaps</h1>
          <p>Generate and manage personalized preparation paths.</p>
        </div>

        <div className="roadmap-count-card">
          <span>{savedRoadmaps.length}</span>
          <p>Saved Roadmaps</p>
        </div>
      </div>

      <section className="roadmap-generator">
        <div>
          <h2>Generate AI Roadmap</h2>
          <p>Enter any skill or topic and create a structured learning path.</p>
        </div>

        <form className="roadmap-form" onSubmit={handleGenerateRoadmap}>
          <input
            type="text"
            placeholder="Example: React, DSA, MongoDB, System Design"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />

          <button type="submit">Generate</button>
        </form>

        <div className="topic-suggestions">
          <button type="button" onClick={() => setTopic("DSA")}>DSA</button>
          <button type="button" onClick={() => setTopic("React")}>React</button>
          <button type="button" onClick={() => setTopic("Node.js")}>Node.js</button>
          <button type="button" onClick={() => setTopic("MongoDB")}>MongoDB</button>
        </div>
      </section>

      <section className="roadmap-result">
        <div className="section-title-row">
          <div>
            <h2>Saved Roadmaps</h2>
            <p>Your generated learning paths appear here.</p>
          </div>
        </div>

        {savedRoadmaps.length === 0 ? (
          <div className="empty-roadmap-state">
            <h3>No roadmaps yet</h3>
            <p>Generate your first roadmap using the form above.</p>
          </div>
        ) : (
          <div className="lesson-list">
            {savedRoadmaps.map((item) => (
              <div className="lesson-card" key={item._id}>
                <div className="roadmap-card-header">
                  <div>
                    <span className="roadmap-badge">Learning Path</span>
                    <h3>{item.topic}</h3>
                    <p>{item.lessons.length} lessons included</p>
                  </div>

                  <div className="roadmap-actions">
                    <button
                      className="view-btn"
                      onClick={() => handleToggleRoadmap(item._id)}
                    >
                      {expandedRoadmapId === item._id ? "Hide" : "View"}
                    </button>

                    <button
                      className="delete-roadmap-btn"
                      onClick={() => handleDeleteRoadmap(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {expandedRoadmapId === item._id && (
                  <div className="expanded-roadmap">
                    {item.lessons.map((lesson) => (
                      <div className="expanded-lesson" key={lesson._id}>
                        <div className="lesson-step">Step {lesson.order}</div>

                        <div>
                          <h4>{lesson.title}</h4>
                          <p>{lesson.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default RoadmapsPage;