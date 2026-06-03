import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

function SettingsPage() {
  const [activeSetting, setActiveSetting] = useState("account");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const API = `${API_URL}/api/settings`; // http://localhost:5000
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await axios.get(API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFullName(res.data.fullName || "");
        setEmail(res.data.email || "");
        setEmailNotifications(res.data.settings?.emailNotifications ?? true);
        const savedDarkMode = res.data.settings?.darkMode ?? false;
        setDarkMode(savedDarkMode);
        document.body.classList.toggle("dark-mode", savedDarkMode);
      } catch (error) {
        alert(error.response?.data?.message || "Failed to load settings");
      }
    }

    fetchSettings();
  }, [token]);

  async function handleProfileUpdate(e) {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${API}/profile`,
        { fullName, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Profile update failed");
    }
  }

  async function handlePreferencesUpdate(e) {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${API}/preferences`,
        { emailNotifications, darkMode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Preferences update failed");
    }
  }

  async function handlePasswordChange(e) {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${API}/password`,
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert(res.data.message);
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "Password change failed");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  async function handleDeleteAccount() {
    try {
      const res = await axios.delete(`${API}/account`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Account deletion failed");
    }
  }

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
          <form onSubmit={handleProfileUpdate}>
            <h2>Account Settings</h2>

            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className="primary-btn">
              Save Changes
            </button>
          </form>
        )}

        {activeSetting === "preferences" && (
          <form onSubmit={handlePreferencesUpdate}>
            <h2>Preferences</h2>

            <div className="toggle-row">
              <div>
                <h3>Email Notifications</h3>
                <p>Get updates about your preparation progress.</p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-row">
              <div>
                <h3>Dark Mode</h3>
                <p>Switch dashboard appearance.</p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => {
                    setDarkMode(e.target.checked);
                    document.body.classList.toggle(
                      "dark-mode",
                      e.target.checked,
                    );
                  }}
                />
                <span className="slider"></span>
              </label>
            </div>

            <button type="submit" className="primary-btn">
              Save Preferences
            </button>
          </form>
        )}

        {activeSetting === "security" && (
          <form onSubmit={handlePasswordChange}>
            <h2>Security</h2>

            <label>Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />

            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button type="submit" className="primary-btn">
              Update Password
            </button>
          </form>
        )}

        {activeSetting === "danger" && (
          <>
            <h2>Danger Zone</h2>
            <p className="danger-text">
              Be careful. These actions affect your account session and data.
            </p>

            <div className="danger-actions">
              <button onClick={handleLogout} className="settings-logout-btn">
                Logout
              </button>

              <button
                onClick={handleDeleteAccount}
                className="settings-delete-btn"
              >
                Delete Account
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SettingsPage;
