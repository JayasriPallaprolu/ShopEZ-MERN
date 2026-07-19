import { Container } from "react-bootstrap";

function Orders() {
  return (
    <Container className="mt-4">
      <h2>My Orders</h2>

      <div className="border p-3 rounded">
        <h5>Order #1001</h5>

        <p>Status : Delivered</p>

        <p>Total : ₹5000</p>
      </div>
    </Container>
  );
}

export default Orders;