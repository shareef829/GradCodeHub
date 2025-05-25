import PlanCard from './PlanCard';

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: 0,
      features: ["10% of course content", "Basic DSA questions", "1 project template"],
      cta: "Start Learning",
      popular: false
    },
    {
      name: "Starter",
      price: 199,
      features: ["All DSA content", "Web Dev courses", "5 project templates"],
      cta: "Subscribe Now",
      popular: true
    },
    {
      name: "Pro",
      price: 499,
      features: ["Everything in Starter", "Advanced projects", "1:1 code reviews"],
      cta: "Go Pro",
      popular: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}