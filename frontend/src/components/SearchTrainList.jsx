import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SearchTrainList = () => {
  const { state } = useLocation();
  const { trains, date } = state;

  const navigate = useNavigate();
  console.log(trains);
  return (
    <div className="container">
      <div>
        <h5
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "teal",
            padding: "10px",
          }}
        >
          <b>Route:</b> {trains[0].from} To {trains[0].to}
        </h5>
        <p>
          <b>Date:</b> {date}
        </p>
      </div>
      <table className="table table-hover m-10">
        <thead>
          <tr>
            <td>SN</td>
            <td>Train Name</td>
            <td>Start Time</td>
            <td>End Time</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {trains.map((train, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{train.name}</td>
                <td>{train.startTime}</td>
                <td>{train.endTime}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      console.log(train);
                      navigate("/search/trains/book", {
                        state: {
                          train: train,
                          date: date,
                        },
                      });
                    }}
                  >
                    Buy Ticket
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTrainList;
