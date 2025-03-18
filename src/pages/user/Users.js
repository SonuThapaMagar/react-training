import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router";
import { Table, Button, Typography, Space, Popconfirm, message } from "antd"; // Import message here
import { UserAddOutlined } from "@ant-design/icons";
import axios from "axios";

const Users = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // Fetch users data
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:4000/users")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  // Delete user function
  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:4000/users/${userId}`)
      .then(function (response) {
        // handle success
        message.success("User deleted successfully"); // Use message here
        fetchUsers(); // Refresh the users list
      })
      .catch(function (error) {
        // handle error
        message.error("Failed to delete user"); // Use message here
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => (
        <NavLink to={`userDetails/${item.id}`}>{item.name}</NavLink>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Space size="middle">
          <NavLink to={`/admin/users/editUser/${item.id}`}>Edit</NavLink>
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(item.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="button" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleAddUser = () => {
    navigate("addUser");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography.Title level={1} style={{ margin: 8 }}>
        Users
      </Typography.Title>
      <Button
        type="primary"
        shape="round"
        icon={<UserAddOutlined />}
        onClick={handleAddUser}
        style={{ margin: 8 }}
      >
        Add User
      </Button>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
        rowKey="id"
      />
    </div>
  );
};

export default Users;