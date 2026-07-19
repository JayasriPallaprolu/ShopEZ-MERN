import { useState, useContext } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/users/login", form);

      login(res.data);

      alert("Login Successful");

      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <Container className="mt-5">

      <Card className="mx-auto p-4 shadow" style={{ maxWidth: 500 }}>

        <h2 className="mb-4 text-center">Login</h2>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>

            <Form.Control
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Login
          </Button>

        </Form>

      </Card>

    </Container>
  );
}

export default Login;