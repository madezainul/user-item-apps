import React, { useState } from "react";
import NowLoading from "./NowLoading";
import { getUsers, deleteUser, infoUser } from "../fetchs/userFetch";

const Profile = (props) => {
  const [users, setUsers] = useState([]);

  const getUserHandler = () => {
    getUsers((result) => setUsers(result));
  }

  //props : sebuah parameter yang diberikan dari parent component nya
  //   const { users } = props;
  return (
    <div className="col-6">
      <h1>Profile Page</h1>
      <p>Profile Table</p>
      <table border="1" cellspacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length !== 0 ? (
            users.map((user, index) => {
              const { id, name, hobby } = user;
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{hobby}</td>
                  <td>
                    <button onClick={() => deleteUser(id)} className="btn btn-danger">Delete</button>
                    <button onClick={() => infoUser(id)} className="btn btn-secondary">Info</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <NowLoading />
          )}
        </tbody>
      </table>
      <div>
        <button onClick={() => getUserHandler()} className="btn btn-primary">Get User</button>
      </div>
    </div>
  );
};

export default Profile;
