export default function ProductCard({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "15px",
        padding: "25px",
        width: "220px",
        background: "white",
        textAlign: "center",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ fontSize: "60px" }}>
        💧
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}