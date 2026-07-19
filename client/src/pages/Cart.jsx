import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="border rounded p-3 mb-3"
            >
              <h4>{item.name}</h4>

              <p>Price: ₹ {item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <Button
                variant="secondary"
                onClick={() => decreaseQty(item._id)}
              >
                -
              </Button>

              {" "}

              <Button
                variant="secondary"
                onClick={() => increaseQty(item._id)}
              >
                +
              </Button>

              {" "}

              <Button
                variant="danger"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </Button>
            </div>
          ))}

          <h3>Total: ₹ {totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;