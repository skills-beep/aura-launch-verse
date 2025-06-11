
import { useState } from 'react';
import { Check, Zap } from 'lucide-react';

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Essential",
      monthlyPrice: 99,
      yearlyPrice: 999,
      features: [
        "Basic AI Features",
        "24/7 Support",
        "Cloud Storage 128GB",
        "Standard Camera",
        "Basic Security"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Pro",
      monthlyPrice: 199,
      yearlyPrice: 1999,
      features: [
        "Advanced AI Features",
        "Priority Support",
        "Cloud Storage 512GB",
        "Pro Camera System",
        "Advanced Security",
        "Wireless Charging",
        "Premium Materials"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-600"
    },
    {
      name: "Ultimate",
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        "All AI Features",
        "White-glove Support",
        "Unlimited Cloud Storage",
        "Pro Max Camera System",
        "Military-grade Security",
        "Wireless + Fast Charging",
        "Premium + Titanium Build",
        "Extended Warranty"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Select the perfect configuration for your needs. All plans include free shipping and setup.
          </p>

          {/* Toggle switch */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${
                isYearly ? 'transform translate-x-8' : 'transform translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`bg-gray-900/50 backdrop-blur-sm border ${
                plan.popular ? 'border-cyan-500/50' : 'border-gray-700'
              } rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105 relative overflow-hidden`}>
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="text-sm text-green-400 mt-1">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25'
                      : 'border-2 border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white hover:bg-cyan-500/10'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
