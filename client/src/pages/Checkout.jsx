import { useCart } from "../context/CartContext";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart } = useCart();

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    alert("Order Placed Successfully");

    localStorage.removeItem("cart");

    navigate("/");
    window.location.reload();
  };

  return (
    <Container className="mt-4">
      <h2>Checkout</h2>

      <h4>Total Amount : ₹ {total}</h4>

      <Button
        variant="success"
        onClick={placeOrder}
      >
        Place Order
      </Button>
    </Container>
  );
}

export default Checkout;