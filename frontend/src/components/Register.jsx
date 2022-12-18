import React from "react";

const Register = () => {
  return (
    <div>
      <form
        action="http://localhost:5000/api/register"
        method="post"
        className=" register-form container p-5 w-50"
      >
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="w-40"
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          id=""
          className="w-40"
        />
        <br />
        <input
          type="text"
          placeholder="Mobile Number"
          name="mobile"
          id=""
          className="w-40"
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id=""
          className="w-40"
        />
        <button className="btn btn-warning w-100">Register</button>
        <br />
        <a href="/login" style={{ color: "white" }}>
          Already Registerd?
        </a>
      </form>
    </div>
  );
};

export default Register;
