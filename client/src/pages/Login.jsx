import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Welcome back</h1>
        <p>Login to continue your placement preparation.</p>

        <form className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Login</button>
        </form>
        
        <p className="auth-switch">
          Don&apos;t have an account? <Link to="/Signup">Signup</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;