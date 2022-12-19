import React from "react";
import "./style.css";

const Footer = () => {
  const email = sessionStorage.getItem("email");
  return (
    <div id="footer">
      <div>
        <h3>Easy Booking</h3>
      </div>
      <div>
        {email === "admin@gmail.com" ? (
          <a href="/admin">Go to Admin Panel</a>
        ) : (
          <p>Welcome to our Website</p>
        )}
      </div>
      <div>
        <h3>Powered by Team 9</h3>
      </div>
    </div>
  );
};

export default Footer;
