export default function PlanCard({ name, price, features, cta, popular }) {
  return (
    <div className={`card ${popular ? 'border-2 border-indigo-600 scale-105 shadow-lg' : ''}`}>
      {popular && (
        <div className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-4">{name}</h3>
      <p className="mb-6">{price === 0 ? 'Free' : `₹${price}/month`}</p>
      <ul className="space-y-3 mb-8">
        {features && features.map((f, i) => <li key={i}>✓ {f}</li>)}
      </ul>
      <button className="btn-primary w-full">{cta}</button>
    </div>
  );
}
