export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0077B6",
        color: "white",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h3>Ari Water</h3>

      <p>
        Pure Water. Delivered with Care.
      </p>

      <small>
        © {new Date().getFullYear()} Ari Water. All Rights Reserved.
      </small>
    </footer>
  );
}