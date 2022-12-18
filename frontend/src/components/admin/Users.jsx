import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";

const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetchUsers().then();
  }, []);
  const fetchUsers = async () => {
    await axios
      .get("http://localhost:5000/api/user")
      .then((response) => {
        let temp = [];
        response.data.forEach((element) => {
          temp.push(element);
        });
        setUser(temp);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(users);
  return (
    <div>
      <h2 className="sub-heading">All Users</h2>
      {users.length === 0 ? (
        <h3 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
          No User Found in The Database
        </h3>
      ) : (
        <table className="admin-table table table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              const { id, name, email } = user;
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* </div> */}
    </div>
  );
};

export default Users;
