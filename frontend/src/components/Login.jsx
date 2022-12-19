import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import LoginBanner from "../assets/login-page-bg.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .get(
        `http://localhost:5000/api/login?email=${email}&password=${password}`
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Logged in Successfully...✅");
          sessionStorage.setItem("email", email);
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          alert("Wrong Password, try again...❌");
        } else if (error.response.status === 404) {
          alert("User not found, please register...❌");
        } else {
          alert("Something Went Wrong, try again...❌");
        }
      });
  };

  return (
    <div className="mt-5">
      <div className="login container">
        <form className="bg-secondary" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-warning">
            Login
          </button>
          <a href="/register" style={{ color: "white" }}>
            Register here
          </a>
          <a href="/admin" style={{ color: "white" }}>
            Admin Panel
          </a>
        </form>
        <img src={LoginBanner} alt="login" />
      </div>
    </div>
  );
};

export default Login;
