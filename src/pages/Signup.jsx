import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [strength, setStrength] = useState("");
  const [match, setMatch] = useState("");

  const checkStrength = (password) => {
    if (password.length < 6) return "Weak";

    let hasNumber = /\d/.test(password);
    let hasSpecial = /[!@#$%^&*]/.test(password);
    let hasUpper = /[A-Z]/.test(password);

    if (hasNumber && hasSpecial && hasUpper) return "Strong";
    return "Medium";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "password") {
      setStrength(checkStrength(value));
    }

    if (name === "confirmPassword" || name === "password") {
      if (name === "confirmPassword") {
        setMatch(value === formData.password ? "Matched" : "Not Matched");
      } else {
        setMatch(value === formData.confirmPassword ? "Matched" : "Not Matched");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (match !== "Matched") {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Signup Successful 🚀");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {formData.password && (
            <p className={`strength ${strength.toLowerCase()}`}>
              Strength: {strength}
            </p>
          )}

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          {formData.confirmPassword && (
            <p className={`match ${match === "Matched" ? "ok" : "error"}`}>
              {match === "Matched" ? "Passwords Matched ✅" : "Passwords Not Matched ❌"}
            </p>
          )}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;