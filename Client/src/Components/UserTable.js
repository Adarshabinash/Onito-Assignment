import axios from "axios";
import React, { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000", { "Content-Type": "application/json" }).then(
      (res) => setUsers(res.data)
    );
  }, []);

  return (
    <div className="userTable">
      <table border={10}>
        <tr>
          <th>Name</th>
          <th>DOB</th>
          <th>Sex</th>
          <th>Mobile</th>
          <th>Govt Id</th>
          <th>Govt Id Number</th>
          <th>Guardian Name</th>
          <th>Relation</th>
          <th>Email</th>
          <th>State</th>
          <th>Emergency Contact</th>
        </tr>

        {/* <tr> */}

        {users.map((user) => {
          const {
            Name,
            DOB,
            Sex,
            Mobile,
            GovtId,
            IdNum,
            GuardianName,
            Guardian,
            Email,
            State,
            EmergencyNumber,
          } = user;
          return (
            <tr>
              <td>{Name}</td>
              <td>{DOB}</td>
              <td>{Sex}</td>
              <td>{Mobile}</td>
              <td>{GovtId}</td>
              <td>{IdNum}</td>
              <td>{GuardianName}</td>
              <td>{Guardian}</td>
              <td>{Email}</td>
              <td>{State}</td>
              <td>{EmergencyNumber}</td>
            </tr>
          );
        })}
        {/* </tr> */}
      </table>
    </div>
  );
};

export default UserTable;
