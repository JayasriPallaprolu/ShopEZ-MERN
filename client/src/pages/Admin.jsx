import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import api from "../../services/api";

function AddProduct() {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    stock: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/products", formData);

      alert("Product Added Successfully!");

      setFormData({
        name: "",
        price: "",
        image: "",
        description: "",
        category: "",
        stock: ""
      });

    } catch (error) {
      console.log(error);
      alert("Failed to add product.");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Add Product</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">
          Add Product
        </Button>

      </Form>
    </Container>
  );
}

export default AddProduct;