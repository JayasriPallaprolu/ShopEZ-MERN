import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data.products);
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    await api.delete(`/products/${id}`);
    loadProducts();
  };

  return (
    <Container className="mt-4">
      <h2>Product List</h2>

      <Link
        to="/admin/add-product"
        className="btn btn-success mb-3"
      >
        Add Product
      </Link>

      <Table bordered hover striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.category}</td>
              <td>{p.stock}</td>
              <td>
                <Link
                  to={`/admin/edit-product/${p._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteProduct(p._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductList;