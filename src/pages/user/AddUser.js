import React,{useState} from 'react'

const AddUser = () => {
  const [name, setName] = useState('');

  const handleSave = () => {
    // save user
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div className="form-container">
    <h2>Add User</h2>
      <form className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} placeholder="Enter full name" />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" placeholder="Enter your age" />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <button type="button" onClick={handleSave} className="btn-save">Save</button>
      </form>
    </div>
  )
}

export default AddUser
