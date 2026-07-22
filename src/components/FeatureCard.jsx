export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-sky-700">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

    </div>
  );
}