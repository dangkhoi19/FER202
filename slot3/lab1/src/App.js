import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';
import StudentList from './components/StudentList'; // Đảm bảo đường dẫn đúng

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="FER Logo"
              src="https://img.icons8.com/color/48/000000/react-native.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            FER202 - Student List
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#students">Students</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-4">
        <h1 className="text-center mb-4">🎓 Top Students - Lab 1</h1>
        <p className="text-center text-muted mb-5">
          Danh sách sinh viên xuất sắc của FER202
        </p>
        
        {/* Student List Component */}
        <StudentList />
      </Container>

      <footer className="mt-5 py-3 bg-light text-center">
        <Container>
          <p className="mb-0">© 2024 FER202 - Lab 1. React Bootstrap Student List</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;