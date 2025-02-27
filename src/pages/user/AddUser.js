import React, { useState } from 'react'

const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [role,setRole]=useState('');

  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [roleError,setRoleError]=useState('');

  const handleSave = () => {
    if (name === "") {
      setNameError('Please fill the name');
      return;
    }
    else if (age === 0) {
      setAgeError('Please fill the age');
      return;
    } else if (email === "") {
      setEmailError('Please fill the email');
      return;
    }
    else {
      setNameError('');
      setAgeError('');
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleRoleChange=(e)=>{
    setRole(e.target.value);
  }
  return (
    <div className="form-container">
      <h2>Add User</h2>
      <form className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} placeholder="Enter full name" />
        {nameError && <span className="error">{nameError}</span>}

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={age} onChange={handleAgeChange} placeholder="Enter your age" />
        {ageError && <span className="error">{ageError}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
        {emailError && <span className="error">{emailError}</span>}


        <label htmlFor="role">Role</label>
        <select name="role" id="role" value={role} onChange={handleRoleChange}>
          <option value="" >Select a role</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        {roleError && <span className="error">{roleError}</span>}


        <button type="button" onClick={handleSave} className="btn-save">Save</button>
      </form>
    </div>
  )
}

export default AddUser
