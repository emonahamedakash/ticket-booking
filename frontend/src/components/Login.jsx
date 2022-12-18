import React from "react";
import "./style.css";
import LoginBanner from "../assets/login-page-bg.svg";

const Login = () => {
  return (
    <div className="mt-5">
      <div className="login container">
        <form className="bg-secondary">
          <input
            type="text"
            placeholder="Enter your mobile number"
            name="mobile"
          />

          <input
            type="password"
            placeholder="Enter your password"
            name="mobile"
          />

          <button type="button" className="btn btn-warning">
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
