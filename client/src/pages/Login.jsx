import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config";


function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        formData,
      );

      console.log(response.data);

      localStorage.setItem("token", response.data.token)

      alert("Sign in successful");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Sign in failed");
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Welcome back</h1>
        <p>Login to continue your placement preparation.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don&apos;t have an account? <Link to="/Signup">Signup</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
