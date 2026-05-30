function ProfileSetup({
  user,
  profileData,
  handleProfileChange,
  handleProfileSubmit,
  handleLogout,
}) {
  return (
    <section className="dashboard-card">
      <div className="dashboard-header">
        <div>
          <h1>Complete Your Profile</h1>
          <p>Welcome, {user.fullName}</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      <div className="profile-section">
        <h2>Profile Setup</h2>
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
    </section>
  );
}

export default ProfileSetup;
