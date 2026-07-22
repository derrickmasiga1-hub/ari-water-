export default function Hero() {
  return (
    <section
      style={{
        padding: "120px 20px",
        textAlign: "center",
        background:
          "linear-gradient(135deg,#CAF0F8,#90E0EF,#48CAE4)",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        Pure Water.
        <br />
        Delivered with Care.
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#374151",
        }}
      >
        Safe drinking water delivered to homes,
        businesses and events across Kenya.
      </p>

      <button
        style={{
          marginTop: "40px",
          marginRight: "15px",
          padding: "15px 35px",
          borderRadius: "10px",
          border: "none",
          background: "#0077B6",
          color: "white",
          cursor: "pointer",
        }}
      >
        Order Water
      </button>

      <button
        style={{
          padding: "15px 35px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Request Quote
      </button>
    </section>
  );
}