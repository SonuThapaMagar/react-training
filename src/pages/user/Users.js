import React from 'react'


const users = (props) => {
  const users = [
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
  return (
    <div>
      {props.title}
      <table class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {/* {
        users.map((user) => {
          return (
            <div>{user.name}</div>
          );
        })
      } */}
    </div>
  )
}

export default users
