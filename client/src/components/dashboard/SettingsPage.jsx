import { useState } from "react";

function SettingsPage() {
  const [activeSetting, setActiveSetting] = useState("account");

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Choose a setting category and manage your preferences.</p>
      </div>

      <div className="settings-tiles">
        <button
          className={`settings-tile ${activeSetting === "account" ? "active" : ""}`}
          onClick={() => setActiveSetting("account")}
        >
          <span>👤</span>
          <h3>Account</h3>
          <p>Name and email</p>
        </button>

        <button
          className={`settings-tile ${activeSetting === "preferences" ? "active" : ""}`}
          onClick={() => setActiveSetting("preferences")}
        >
          <span>⚙️</span>
          <h3>Preferences</h3>
          <p>Theme and alerts</p>
        </button>

        <button
          className={`settings-tile ${activeSetting === "security" ? "active" : ""}`}
          onClick={() => setActiveSetting("security")}
        >
          <span>🔐</span>
          <h3>Security</h3>
          <p>Password update</p>
        </button>

        <button
          className={`settings-tile ${activeSetting === "danger" ? "active" : ""}`}
          onClick={() => setActiveSetting("danger")}
        >
          <span>⚠️</span>
          <h3>Danger Zone</h3>
          <p>Logout or delete</p>
        </button>
      </div>

      <div className="settings-panel">
        {activeSetting === "account" && (
          <>
            <h2>Account Settings</h2>

            <label>Full Name</label>
            <input type="text" defaultValue="Aditya Sharma" />

            <label>Email</label>
            <input type="email" defaultValue="adityasharma08oct@gmail.com" />

            <button className="primary-btn">Save Changes</button>
          </>
        )}

        {activeSetting === "preferences" && (
          <>
            <h2>Preferences</h2>

            <div className="toggle-row">
              <div>
                <h3>Email Notifications</h3>
                <p>Get updates about your preparation progress.</p>
              </div>

              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-row">
              <div>
                <h3>Dark Mode</h3>
                <p>Switch dashboard appearance.</p>
              </div>

              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </>
        )}

        {activeSetting === "security" && (
          <>
            <h2>Security</h2>

            <label>Current Password</label>
            <input type="password" placeholder="Enter current password" />

            <label>New Password</label>
            <input type="password" placeholder="Enter new password" />

            <button className="primary-btn">Update Password</button>
          </>
        )}

        {activeSetting === "danger" && (
          <>
            <h2>Danger Zone</h2>
            <p className="danger-text">
              Be careful. These actions affect your account session and data.
            </p>

            <div className="danger-actions">
              <button className="settings-logout-btn">Logout</button>
              <button className="settings-delete-btn">Delete Account</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SettingsPage;