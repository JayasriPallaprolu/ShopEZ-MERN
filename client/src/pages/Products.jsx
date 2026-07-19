import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">
        All Products
      </h2>

      <Row>
        {products.map((product) => (
          <Col
            lg={4}
            md={6}
            className="mb-4"
            key={product._id}
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;