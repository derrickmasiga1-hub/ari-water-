import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    { title: "250ml", description: "Perfect for events" },
    { title: "500ml", description: "Most popular bottle" },
    { title: "1 Litre", description: "Home and Office" },
    { title: "1.5 Litres", description: "Family Size" },
    { title: "10 Litres", description: "Bulk Water" },
    { title: "20 Litres", description: "Dispenser Refill" },
  ];

  return (
    <section
      style={{
        padding: "70px",
        textAlign: "center",
      }}
    >
      <h2>Our Products</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}