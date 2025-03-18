import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router";
import { Table, Button, Typography, Space } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import axios from "axios";

const Users = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
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
  }, []);

  const columns = [
    // {
    //   title: 'Id',
    //   dataIndex: 'id',
    //   key: 'id',
    // },
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
          <Button type="button">Delete</Button>
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
      />
    </div>
  );
};

export default Users;
