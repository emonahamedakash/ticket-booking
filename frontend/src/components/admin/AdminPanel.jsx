import React, { useState } from "react";
import Trains from "./Trains";
import AddTrain from "./AddTrain";
import Users from "./Users";
import "./admin.css";

const AdminPanel = () => {
  const [comp, setComp] = useState(<Trains />);
  return (
    <div className="admin-container">
      <h1>Easy Booking Admin Panel</h1>
      <div className="admin-body">
        <div className="admin-navigation">
          <button
            className="btn btn-primary"
            onClick={() => {
              setComp(<Trains />);
            }}
          >
            Trains
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setComp(<AddTrain />);
            }}
          >
            Add Train
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setComp(<Users />);
            }}
          >
            Users
          </button>
        </div>
        <div className="admin-component">{comp}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
