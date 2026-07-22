export default function ProductCard({
  title,
  description,
  price,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition hover:scale-105 hover:shadow-2xl">

      <div className="text-6xl mb-4">
        💧
      </div>

      <h3 className="text-2xl font-bold text-sky-700">
        {title}
      </h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <p className="text-3xl font-bold text-sky-600 mt-6">
        KSh {price}
      </p>

      <button className="mt-6 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl">
        Order Now
      </button>

    </div>
  );
}