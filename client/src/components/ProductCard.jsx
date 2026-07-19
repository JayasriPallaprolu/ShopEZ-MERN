import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card className="shadow h-100">
      <Card.Img
        variant="top"
        src={product.image}
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>{product.category}</Card.Text>

        <Card.Text>{product.description}</Card.Text>

        <h5 className="text-success mb-3">
          ₹ {product.price}
        </h5>

        <Button
          variant="success"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;