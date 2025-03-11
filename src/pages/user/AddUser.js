import React, { useState } from 'react'
import { Card, Button, Form, Input, InputNumber  } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values) => {
  console.log(values);
};


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
    <Card title="Add User" variant="borderless" style={{ width: 300 }}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          width: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
    // <div className="form-container">
    //   <h2>Add User</h2>
    //   <form className="form-group">

    //     <label htmlFor="name">Full Name</label>
    //     <input type="text" id="name" name="name" value={user.name} onChange={handleNameChange} placeholder="Enter full name" />
    //     <div className="error">{error.name}</div>

    //     <label htmlFor="age">Age</label>
    //     <input type="number" id="age" name="age" value={user.age} onChange={handleAgeChange} placeholder="Enter your age" />
    //     <div className="error">{error.age}</div>

    //     <label htmlFor="email">Email</label>
    //     <input type="email" id="email" name="email" value={user.email} onChange={handleEmailChange} placeholder="Enter your email" />
    //     <div className="error">{error.email}</div>

    //     <label htmlFor="role">Role</label>
    //     <select name="role" id="role" onChange={(e) => {
    //       setUser({ ...user, role: e.target.value });
    //       setError({ ...error, role: "" });
    //     }}>
    //       <option value="" >Select a role</option>
    //       <option value="User" selected={user.role === 'user'}>User</option>
    //       <option value="Admin" selected={user.role === 'admin'}>Admin</option>
    //     </select>
    //     <div className="error">{error.role}</div>

    //     <button type="button" onClick={handleSave} className="btn-save">Save</button>
    //   </form>
    // </div>
  )
}
export default AddUser
