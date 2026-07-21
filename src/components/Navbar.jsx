function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#0077B6",
        color: "white",
      }}
    >
      <h2>Ari Water</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Products
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Order
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;