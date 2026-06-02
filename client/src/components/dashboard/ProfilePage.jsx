function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="page-header">
        <div className="profile-header-logo">
        <h1>Profile</h1>
        <span>PrepFlow</span>
        </div>
        <p>View and manage your placement preparation profile.</p>
      </div>

      <div className="profile-layout">
        <div className="profile-card">
          <div className="profile-avatar">AS</div>

          <h2>Aditya Sharma</h2>
          <p>Frontend Developer • Placement Prep</p>

          <button>Edit Profile</button>
        </div>

        <div className="profile-info-card">
          <h2>Personal Information</h2>

          <div className="info-grid">
            <div>
              <span>Full Name</span>
              <strong>Aditya Sharma</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>adityasharma08oct@gmail.com</strong>
            </div>

            <div>
              <span>Target Role</span>
              <strong>Frontend Developer</strong>
            </div>

            <div>
              <span>Current Goal</span>
              <strong>Placement Preparation</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-stats">
        <div className="profile-stat-card">
          <h3>Problems Solved</h3>
          <h2>0</h2>
        </div>

        <div className="profile-stat-card">
          <h3>Notes Created</h3>
          <h2>3</h2>
        </div>

        <div className="profile-stat-card">
          <h3>Active Roadmaps</h3>
          <h2>0</h2>
        </div>
      </div>

      <div className="skills-card">
        <h2>Current Tech Stack</h2>

        <div className="skill-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;