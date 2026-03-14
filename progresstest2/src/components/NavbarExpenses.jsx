import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function NavbarExpenses() {
    const { state, dispatch } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    Personal Budget
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {state.isAuthenticated && (
                            <>
                                <Navbar.Text className="me-3">
                                    Signed in as <strong>{state.user?.fullName}</strong>
                                </Navbar.Text>
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarExpenses;