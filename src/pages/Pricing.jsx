export default function Pricing() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your learning needs. No hidden fees.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border rounded-lg p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-4">Free</h3>
            <p className="mb-6">For students exploring coding basics</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">✓ 10% of course content</li>
              <li className="flex items-center">✓ Basic DSA questions</li>
              <li className="flex items-center">✓ 1 project template</li>
              <li className="flex items-center">✓ Community support</li>
            </ul>
            <button className="w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium">
              Start Learning
            </button>
          </div>
          
          {/* Starter Plan */}
          <div className="border-2 border-indigo-600 rounded-lg p-6 bg-white dark:bg-gray-800 transform scale-105 shadow-lg">
            <div className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold mb-4">Starter</h3>
            <p className="mb-6">₹199/month - Full course access</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">✓ All DSA content</li>
              <li className="flex items-center">✓ Web Dev courses</li>
              <li className="flex items-center">✓ 5 project templates</li>
              <li className="flex items-center">✓ Priority support</li>
            </ul>
            <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
              Subscribe Now
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="border rounded-lg p-6 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-4">Pro</h3>
            <p className="mb-6">₹499/month - Projects + GitHub tips</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">✓ Everything in Starter</li>
              <li className="flex items-center">✓ Advanced projects</li>
              <li className="flex items-center">✓ GitHub integration</li>
              <li className="flex items-center">✓ 1:1 code reviews</li>
            </ul>
            <button className="w-full py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition dark:bg-gray-700">
              Go Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}