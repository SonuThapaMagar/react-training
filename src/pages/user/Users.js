import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Table, Button, Radio, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const Users = (props) => {

  const navigate = useNavigate();
  const [size, setSize] = useState('large');
  const [data, setData] = useState([

  ]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];

  useEffect(() => {
    setData(
      [
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
      ]
    )
  }, [])

  const handleAddUser = () => {
    navigate("addUser");
  }
  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={1} style={{ margin: 8 }}>
        Users
      </Typography.Title>
      <Button
        type="primary"
        shape="round"
        icon={<UserAddOutlined />}
        size={size}
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
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={data}
      />
    </div>
  )
}

export default Users
