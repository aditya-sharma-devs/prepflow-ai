import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  password: "",
});

function handleChange(event){
  const {name, value} = event.target;

  setFormData({
    ...formData,
    [name]: value,
  });
}

function handleSubmit(event){
  event.preventDefault();

  console.log(formData)
}

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Create account</h1>
        <p>Start your personalized placement preparation journey.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" name="fullName" value={formData.fullName}
            onChange={handleChange}/>
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" name="email" value={formData.email}
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" name="password" value={formData.password}
            onChange={handleChange}/>
          </div>

          <button type="submit">Create Account</button>
        </form>
        
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;