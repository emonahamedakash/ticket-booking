import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";

const Trains = () => {
  const [trains, setTrains] = useState([]);
  console.log(trains);
  useEffect(() => {
    fetchTrains().then();
  }, []);
  const fetchTrains = async () => {
    await axios
      .get("http://localhost:5000/api/train")
      .then((response) => {
        console.log(response);
        let temp = [];
        response.data.forEach((element) => {
          temp.push(element);
        });
        setTrains(temp);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="sub-heading">All Trains</h2>
      <table className="admin-table table table-hover">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>From</td>
            <td>To</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {trains.map((train, i) => {
            const { id, name, from, to, startTime } = train;
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{from}</td>
                <td>{to}</td>
                <td> {startTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* </div> */}
    </div>
  );
};

export default Trains;
