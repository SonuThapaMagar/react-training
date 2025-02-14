const UserRow = ({item}) => {
    return (
      <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.email}</td>
    </tr>
    )
  }
  
  export default UserRow
  