import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

      await api.post("/users/register", form);

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {

      alert(err.response?.data?.message || "Registration Failed");

    }

  };

  return (

    <Container className="mt-5">

      <Card className="mx-auto p-4 shadow" style={{ maxWidth: 500 }}>

        <h2 className="mb-4 text-center">
          Register
        </h2>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>

            <Form.Control
              name="name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Register
          </Button>

        </Form>

      </Card>

    </Container>

  );

}

export default Register;