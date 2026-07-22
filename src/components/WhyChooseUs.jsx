import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "💧",
    title: "Advanced Purification",
    description:
      "Multi-stage filtration for clean and safe drinking water.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description:
      "Reliable delivery to homes, offices and events.",
  },
  {
    icon: "🏢",
    title: "Corporate Supply",
    description:
      "Water solutions for businesses and institutions.",
  },
  {
    icon: "🎉",
    title: "Custom Branding",
    description:
      "Personalized bottled water for events and promotions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12">
          Why Choose Ari Water
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}