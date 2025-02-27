import React from 'react'
import { useNavigate } from "react-router";
import UserHeader from './UserHeader';
import UserRow from './UserRow';
import { Routes, Route } from "react-router-dom";
import AddUser from './AddUser';

const Users = (props) => {

  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      email: 'abc@gmail.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 23,
      email: 'jane@gmail.com'
    },
    {
      id: 3,
      name: 'John Smith',
      age: 30,
      email: 'john@gmail.com',
    },
    {
      id: 4,
      name: 'Jane Smith',
      age: 28,
      email: 'smith@gmail.com'
    },
    {
      id: 5,
      name: 'John Doe',
      age: 25,
      email: 'doe@gmail.com',
    }
  ];
  const handleAddUser = () => {
    navigate("admin/users/addUser");
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <button className="addUser" onClick={handleAddUser}>Add User
      </button>
      <table className="styled-table">
        <thead>
          <UserHeader />
        </thead>
        <tbody>
          {
            data.map((user) => (
              <UserRow item={user}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users
