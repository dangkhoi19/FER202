import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const response = await fetch(
        `http://localhost:3001/users?username=${username}&password=${password}`
      );

      const data = await response.json();

      if (data.length === 0) {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { error: "Invalid username or password" },
        });
        return;
      }

      const user = data[0];

      if (user.status === "locked") {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { error: "Account is locked" },
        });
        return;
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user },
      });

      navigate("/");

    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { error: "Server error. Try again." },
      });
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "350px" }} className="p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>

        {state.error && (
          <Alert variant="danger">{state.error}</Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Form.Text className="text-muted">
              (at least 6 characters)
            </Form.Text>
          </Form.Group>

          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              style={{ width: "150px" }}
              disabled={state.loading}
            >
              {state.loading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default LoginForm;