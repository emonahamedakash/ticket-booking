import React from "react";
import "./admin.css";
const AddTrain = () => {
  return (
    <div>
      <div className="users">
        <h2 className="subHeading">Add New Train</h2>
        <form
          action="http://localhost:5000/api/train"
          method="post"
          className=" add-train-form container p-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Train Name"
            className="w-100"
          />
          <br />
          <input type="text" name="from" placeholder="From Station" />
          <input type="text" name="startTime" placeholder="Start Time" />
          <br />
          <input type="text" name="to" placeholder="To Station" />
          <input type="text" name="endTime" placeholder="End Time" />
          <br />
          <input type="number" name="seat" placeholder="Seat" />
          <input type="number" name="ticketPrice" placeholder="Ticket Price" />
          <br />
          <br />
          <button type="submit" className="btn btn-warning">
            Add Train
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTrain;
