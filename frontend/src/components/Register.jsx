import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(
        `http://localhost:5000/api/register/?name=${name}&email=${email}&mobile=${mobile}&password=${password}`
      )
      .then((response) => {
        if (response.status === 201) {
          alert("Registered Successfully...✅");
          navigate("/login");
        } else {
          alert("Something Went Wrong, try again...❌");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" register-form container p-5 w-50"
      >
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="w-40"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          id=""
          value={email}
          className="w-40"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Mobile Number"
          name="mobile"
          id=""
          value={mobile}
          className="w-40"
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id=""
          value={password}
          className="w-40"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-warning w-100">
          Register
        </button>
        <br />
        <a href="/login" style={{ color: "white" }}>
          Already Registerd?
        </a>
      </form>
    </div>
  );
};

export default Register;
