import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "#ffffff",
        borderBottom: "1px solid #E5E7EB",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "#0077B6" }}>
        💧 Ari Water
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/products">Products</Link>

        <Link to="/order">Order</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}