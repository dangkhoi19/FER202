import React, { useState } from 'react';
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import ManageUsers from './components/ManageUsers';
import FlightBookingForm from './components/FlightBookingForm';
import ListOfUsers from './components/ListOfUsers';

function App() {
  const [users, setUsers] = useState(ListOfUsers);
  const [key, setKey] = useState('flight');

  const handleEditUser = (user) => {
    alert(`Editing user: ${user.username}`);
    console.log('Edit user:', user);
  };

  const handleToggleLock = (user) => {
    const updatedUsers = users.map(u => {
      if (u.id === user.id) {
        const newStatus = u.status === 'Active' ? 'Locked' : 'Active';
        return { ...u, status: newStatus };
      }
      return u;
    });
    setUsers(updatedUsers);
    
    alert(`${user.username} has been ${user.status === 'Active' ? 'locked' : 'unlocked'}`);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Demo Form Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setKey('flight')}>Flight Booking</Nav.Link>
              <Nav.Link onClick={() => setKey('login')}>Login Form</Nav.Link>
              <Nav.Link onClick={() => setKey('manage')}>Manage Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="flight" title="Flight Booking">
            <FlightBookingForm />
          </Tab>
          <Tab eventKey="login" title="Login Form">
            <LoginForm />
          </Tab>
          <Tab eventKey="manage" title="Manage Users">
            <ManageUsers 
              users={users} 
              onEdit={handleEditUser}
              onToggleLock={handleToggleLock}
            />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;