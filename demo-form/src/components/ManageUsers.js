import React from 'react';
import { Table, Button, Badge, Image } from 'react-bootstrap';
import { FaEdit, FaLock, FaUnlock } from 'react-icons/fa';

const ManageUsers = ({ users, onEdit, onToggleLock }) => {
  return (
    <div className="mt-5">
      <h3 className="mb-4">Manage Users</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Username</th>
            <th>Status</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Image 
                  src={user.avatar} 
                  roundedCircle 
                  width={50} 
                  height={50} 
                  alt={user.username}
                />
              </td>
              <td>{user.username}</td>
              <td>
                <Badge bg={user.status === 'Active' ? 'success' : 'danger'}>
                  {user.status}
                </Badge>
              </td>
              <td>{user.password}</td>
              <td>
                <Button 
                  variant="warning" 
                  size="sm" 
                  className="me-2"
                  onClick={() => onEdit && onEdit(user)}
                >
                  <FaEdit /> Edit
                </Button>
                <Button 
                  variant={user.status === 'Active' ? 'danger' : 'success'}
                  size="sm"
                  onClick={() => onToggleLock && onToggleLock(user)}
                >
                  {user.status === 'Active' ? <FaLock /> : <FaUnlock />}
                  {user.status === 'Active' ? ' Lock' : ' Unlock'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;