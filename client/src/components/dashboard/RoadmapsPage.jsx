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

      const response = await axios.get(`${API_URL}/api/roadmaps`, {
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

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API_URL}/api/roadmaps/generate`,
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
    if (expandedRoadmapId === id) {
      setExpandedRoadmapId(null);
    } else {
      setExpandedRoadmapId(id);
    }
  }

  async function handleDeleteRoadmap(id) {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API_URL}/api/roadmaps/${id}`, {
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
    <>
      <div className="dashboard-header">
        <div>
          <h1>My Roadmaps</h1>
          <p>Generate and manage your personalized AI roadmaps</p>
        </div>
      </div>

      <section className="roadmap-generator">
        <h2>Generate AI Roadmap</h2>

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

      <section className="roadmap-result">
        <h2>My Saved Roadmaps</h2>

        {savedRoadmaps.length === 0 ? (
          <p>No saved roadmaps yet.</p>
        ) : (
          <div className="lesson-list">
            {savedRoadmaps.map((item) => (
              <div className="lesson-card" key={item._id}>
                <div className="roadmap-card-header">
                  <div>
                    <h3>{item.topic}</h3>
                    <p>{item.lessons.length} lessons</p>
                  </div>

                  <div className="roadmap-actions">
                    <button onClick={() => handleToggleRoadmap(item._id)}>
                      {expandedRoadmapId === item._id ? "▼" : "▶"}
                    </button>

                    <button onClick={() => handleDeleteRoadmap(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>

                {expandedRoadmapId === item._id && (
                  <div className="expanded-roadmap">
                    {item.lessons.map((lesson) => (
                      <div className="expanded-lesson" key={lesson._id}>
                        <h4>
                          Step {lesson.order}: {lesson.title}
                        </h4>
                        <p>{lesson.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default RoadmapsPage;