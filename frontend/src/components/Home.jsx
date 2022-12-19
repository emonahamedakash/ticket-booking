import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Banner1 from "../assets/banner-1.jpg";
import Search from "../assets/search.svg";
import Pay from "../assets/pay.svg";
import Select from "../assets/select.svg";
import Instruction from "../assets/instruction-section-image.png";
import axios from "axios";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [seatClass, setSeatClass] = useState("");
  const navigate = useNavigate();

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    setTo(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleSeatClass = (e) => {
    setSeatClass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .get(`http://localhost:5000/api/search/?from=${from}&to=${to}`)
      .then((response) => {
        navigate("/search/trains", {
          state: { trains: response.data, date: date, seatClass: seatClass },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="home-container" className="container">
      <div className="search">
        <form
          className="search-train"
          onSubmit={handleSubmit}
          // method="get"
          // action="http://localhost:5000/api/search"
        >
          <div className="inputs-container">
            <div className="inputs">
              <div className="input-field">
                <label>From</label>
                <br />
                <select
                  className="p-2 w-100"
                  defaultValue="choose"
                  name="from"
                  onChange={handleFrom}
                >
                  <option value="choose" disabled>
                    Choose a Station
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option>Sylhet</option>
                </select>
              </div>
              <div className="input-field">
                <label>Date of Journey</label>
                <br />

                <input
                  type="date"
                  value={date}
                  min="2022-12-19"
                  max="2022-12-23"
                  onChange={handleDate}
                  className="w-100 p-1"
                  placeholder="Pick Date"
                />
              </div>
            </div>
            <div className="inputs">
              <div className="input-field">
                <label>To</label>
                <br />
                <select
                  className="p-2 w-100"
                  defaultValue="choose"
                  name="to"
                  onChange={handleTo}
                >
                  <option value="choose" disabled>
                    Choose a Station
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Khulna">Khulna</option>
                  <option>Rajshahi</option>
                  <option>Sylhet</option>
                </select>
              </div>
              {/* <div className="input-field">
                <label>Choose Class</label>
                <br />
                <select
                  className="input-field w-100 p-2"
                  defaultValue="choose"
                  onChange={handleSeatClass}
                >
                  <option value="choose" disabled>
                    Choose a class
                  </option>
                  <option value="AC">AC</option>
                  <option value="Snigdha">SNIGDHA</option>
                  <option value="S_Chair">S_CHAIR</option>
                </select>
              </div> */}
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary mt-5 w-100"
          />
        </form>
        <img src={Banner1} alt="home-banner" />
      </div>
      <div id="demo">
        <div>
          <img src={Search} alt="search" />
          <div>
            <h3>Search</h3>
            <p>
              Choose your origin, destination, journey dates and search for
              trains
            </p>
          </div>
        </div>

        <div>
          <img src={Select} alt="select" />
          <div>
            <h3>Select</h3>
            <p>Select your desired trip and choose your seats</p>
          </div>
        </div>

        <div>
          <img src={Pay} alt="pay" />
          <div>
            <h3>Pay</h3>
            <p>Pay for the tickets via Bkash/Nagad</p>
          </div>
        </div>
      </div>
      <div id="instruction">
        <div>
          <img src={Instruction} alt="instruction" />
        </div>
        <div>
          <ul>
            <li>Tickets can be bought online five days in advance.</li>
            <li>
              You can pay for the tickets using mobile financial services:
              bKash, Nagad
            </li>
            <li>
              In case of payment or transaction failure, the deducted amount
              would be refunded by your bank or MFS provider within 8 business
              days.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
