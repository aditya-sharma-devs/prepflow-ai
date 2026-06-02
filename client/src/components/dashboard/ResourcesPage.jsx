function ResourcesPage() {
  const resources = [
    {
      title: "DSA Practice Sheet",
      category: "DSA",
      type: "Practice",
      level: "Beginner to Advanced",
      description:
        "A structured problem-solving sheet for arrays, strings, recursion, trees, graphs, and dynamic programming.",
    },
    {
      title: "Frontend Development Guide",
      category: "Web Dev",
      type: "Roadmap",
      level: "Beginner",
      description:
        "Learn HTML, CSS, JavaScript, React, components, APIs, and responsive UI building.",
    },
    {
      title: "DBMS Interview Questions",
      category: "Core CS",
      type: "Interview",
      level: "Intermediate",
      description:
        "Important DBMS concepts like keys, normalization, SQL joins, transactions, and indexing.",
    },
    {
      title: "Operating Systems Revision",
      category: "Core CS",
      type: "Revision",
      level: "Intermediate",
      description:
        "Quick revision for processes, threads, scheduling, deadlocks, memory management, and paging.",
    },
    {
      title: "Aptitude Preparation",
      category: "Aptitude",
      type: "Practice",
      level: "Beginner",
      description:
        "Practice quantitative aptitude, logical reasoning, percentages, ratios, time, speed, and probability.",
    },
    {
      title: "Resume & Interview Prep",
      category: "Placement",
      type: "Guide",
      level: "All Levels",
      description:
        "Resources for resume building, HR questions, project explanation, and interview confidence.",
    },
  ];

  return (
    <div className="resources-page">
      <div className="page-header">
        <h1>Resources</h1>
        <p>Curated preparation resources for coding, core subjects, and placements.</p>
      </div>

      <div className="resources-summary">
        <div className="resource-summary-card">
          <span>Total Resources</span>
          <h2>{resources.length}</h2>
        </div>

        <div className="resource-summary-card">
          <span>Categories</span>
          <h2>5</h2>
        </div>

        <div className="resource-summary-card">
          <span>Saved</span>
          <h2>0</h2>
        </div>
      </div>

      <section className="resource-highlight">
        <div>
          <span className="resource-badge">Recommended</span>
          <h2>Start with DSA + Core CS</h2>
          <p>
            For placements, focus on DSA, DBMS, OS, CN, aptitude, and project explanation.
          </p>
        </div>

        <button>View Plan</button>
      </section>

      <section className="resources-section">
        <div className="section-title">
          <h2>Resource Library</h2>
          <p>Use these resources as your preparation support system.</p>
        </div>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div className="resource-card" key={index}>
              <div className="resource-card-top">
                <span>{resource.category}</span>
                <small>{resource.type}</small>
              </div>

              <h2>{resource.title}</h2>
              <p>{resource.description}</p>

              <div className="resource-level">
                <strong>Level:</strong>
                <span>{resource.level}</span>
              </div>

              <button className="resource-btn">Open Resource</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;