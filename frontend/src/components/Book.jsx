import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = () => {
  const buyer_email = sessionStorage.getItem("email");
  const { state } = useLocation();
  const { train, date } = state;

  const navigate = useNavigate();

  const [no_of_seat, setNumberOfSeat] = useState(0);
  const [passanger_name, setPassangerName] = useState("");
  const [passanger_mobile, setPassangerMobile] = useState("");
  let total_price = train.ticketPrice * no_of_seat;
  const handleNumberOfSeat = (e) => {
    setNumberOfSeat(e.target.value);
  };
  const handlePassangerName = (e) => {
    setPassangerName(e.target.value);
  };
  const handlePassangerMobile = (e) => {
    setPassangerMobile(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(
        `http://localhost:5000/api/book/?train_id=${train.id}&date=${date}&no_of_seat=${no_of_seat}&total_price=${total_price}&buyer_email=${buyer_email}&passanger_name=${passanger_name}&passanger_mobile=${passanger_mobile}`
      )
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          alert("Ticket Booked Successfully...✅");
          navigate("/");
        } else {
          alert("Something went wrong, try again");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container d-flex justify-content-between">
      <div>
        <h2>{train.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>Select Number of Seat (max 4 at a time): </label>

          <select
            name="numberOfSeat"
            className="w-5"
            defaultValue="1"
            onChange={handleNumberOfSeat}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <br />
          <br />
          <label>Enter Passanger Name:</label>
          <br />
          <input
            type="text"
            name="passangerName"
            onChange={handlePassangerName}
          />
          <br />
          <br />
          <label>Enter Passanger Mobile</label>
          <br />
          <input
            type="text"
            name="passangerMobile"
            onChange={handlePassangerMobile}
          />
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Book Now
          </button>
        </form>
      </div>
      <div
        className="ticketInfo w-50 p-4 mt-4"
        style={{
          border: "3px solid black",
          borderRadius: "10px",
          color: "green",
        }}
      >
        <h4 className="text-center">Train: {train.name}</h4>
        <div className="d-flex justify-content-evenly">
          <p>Passanger Name: {passanger_name}</p>
          <p>Journey Date: {date}</p>
        </div>
        <p style={{ textAlign: "center" }}>
          Passanger Mobile: {passanger_mobile}
        </p>
        <div className="d-flex justify-content-evenly">
          <p>Number of Seats: </p>
          <p>{no_of_seat}</p>
        </div>
        <hr />
        <div className="d-flex justify-content-evenly">
          <p>Total Price:</p>
          <p>{total_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
