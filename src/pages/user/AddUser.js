import React, { useState } from 'react'

const AddUser = () => {
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      age: 0,
      role: "",
    }
  );

  const [error, setError] = useState(
    {
      name: "",
      email: "",
      age: "",
      role: "",
    }
  )

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
    setError({ ...error, name: "" });

  }
  const handleAgeChange = (e) => {
    setUser({ ...user, age: e.target.value })
    setError({ ...error, age: "" })
  }
  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value })
    setError({ ...error, email: "" })
  }

  const handleSave = () => {
    const validationError = {
      name: "",
      age: "",
      email: "",
      role: ""
    };

    let isValid = true;
    if (user.name === "") {
      validationError.name = "Name is required";
      isValid = false;
    }
    if (user.email === "") {
      validationError.email = "Email is required";
      isValid = false;
    }
    if (user.age === 0) {
      validationError.age = "Age is required";
      isValid = false;
    }
    if (user.role === "") {
      validationError.role = "Role is required";
      isValid = false;
    }

    setError(validationError);
    if (!isValid) {
      return;
    }
  }
  console.log(user);

  return (
    <div className="form-container">
      <h2>Add User</h2>
      <form className="form-group">

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={user.name} onChange={handleNameChange} placeholder="Enter full name" />
        <div className="error">{error.name}</div>

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={user.age} onChange={handleAgeChange} placeholder="Enter your age" />
        <div className="error">{error.age}</div>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={user.email} onChange={handleEmailChange} placeholder="Enter your email" />
        <div className="error">{error.email}</div>

        <label htmlFor="role">Role</label>
        <select name="role" id="role" onChange={(e) => {
          setRole(e.target.value);
          setUser({ ...user, role: e.target.value });
          setError({ ...error, role: "" });
        }}>
          <option value="" >Select a role</option>
          <option value="User" selected={user.role === 'user'}>User</option>
          <option value="Admin" selected={user.role === 'admin'}>Admin</option>
        </select>
        <div className="error">{error.role}</div>

        <button type="button" onClick={handleSave} className="btn-save">Save</button>
      </form>
    </div>
  )
}
export default AddUser
