import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import api from "../../services/api";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    stock: ""
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data.product);
    } catch (error) {
      console.log(error);
      alert("Product not found");
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/products/${id}`, product);

      alert("Product Updated Successfully");

      navigate("/admin/products");

    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Edit Product</h2>

      <Form onSubmit={updateProduct}>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">
          Update Product
        </Button>

      </Form>
    </Container>
  );
}

export default EditProduct;