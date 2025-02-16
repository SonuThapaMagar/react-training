import React,{useState} from 'react'

const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // save user
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
  return (
    <div className="form-container">
    <h2>Add User</h2>
      <form className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} placeholder="Enter full name" />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={age} onChange={handleAgeChange} placeholder="Enter your age" />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"  value={email} onChange={handleEmailChange} placeholder="Enter your email" />

        <button type="button" onClick={handleSave} className="btn-save">Save</button>
      </form>
    </div>
  )
}

export default AddUser
