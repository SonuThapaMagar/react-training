import React, { useState, useEffect } from "react";
import { useParams } from "react-router"
import axios from 'axios';

const UserDetails = (props) => {
  let params = useParams();
  const [users, setUsers] = useState({
    name: '',
    age: '',
    email: '',
    role: '',
  });
  useEffect(() => {
    axios.get(`http://localhost:4000/users/${params.userId}`)
      .then(function (response) {
        // handle success
        setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <div>Full Name: {users.name}</div>
      <div>Age: {users.age}</div>
      <div>Email: {users.email}</div>
      <div>Role: {users.role}</div>
    </div>
  )
}

export default UserDetails
