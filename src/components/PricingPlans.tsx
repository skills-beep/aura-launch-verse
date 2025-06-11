
import { useState } from 'react';
import { Check, Zap, Crown, Star } from 'lucide-react';

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
      color: "from-gray-600 to-gray-700",
      icon: Star,
      description: "Perfect for getting started"
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
      color: "from-cyan-500 to-purple-600",
      icon: Zap,
      description: "Most popular choice"
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
      color: "from-purple-600 to-pink-600",
      icon: Crown,
      description: "Ultimate experience"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          {/* Enhanced Header */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 mb-8 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Choose Your Perfect Plan</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Choose the perfect configuration for your needs. All plans include free shipping, 
            premium setup, and our comprehensive warranty program.
          </p>

          {/* Enhanced Toggle Switch */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <span className={`text-lg font-medium transition-all duration-300 ${!isYearly ? 'text-white scale-110' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-20 h-10 rounded-full transition-all duration-500 transform hover:scale-105 ${
                isYearly ? 'bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/25' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-xl transition-all duration-500 flex items-center justify-center ${
                isYearly ? 'transform translate-x-10' : 'transform translate-x-1'
              }`}>
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isYearly ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-gray-400'}`} />
              </div>
            </button>
            <span className={`text-lg font-medium transition-all duration-300 ${isYearly ? 'text-white scale-110' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <div className="animate-bounce">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Save 17%
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? 'transform scale-105 lg:scale-110' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center space-x-2 shadow-xl animate-pulse">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`relative bg-gray-900/80 backdrop-blur-xl border-2 ${
                plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-gray-700/50'
              } rounded-3xl p-8 hover:border-cyan-500/70 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden`}>
                
                {/* Enhanced Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 group-hover:opacity-15 transition-all duration-500`} />
                
                {/* Animated Border Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.popular ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20' : 'bg-gradient-to-r from-gray-600/20 to-gray-700/20'
                } blur-xl -z-10`} />
                
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-cyan-400' : 'text-gray-400'} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  {/* Enhanced Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-3 text-lg">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-emerald-400 font-medium">
                          Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                        </div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Enhanced Features List */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced CTA Button */}
                  <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-xl hover:shadow-cyan-500/30'
                      : 'border-2 border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-600/10 backdrop-blur-sm'
                  }`}>
                    {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                  </button>
                </div>

                {/* Corner Decorations */}
                <div className={`absolute top-4 right-4 w-4 h-4 bg-gradient-to-br ${plan.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-br ${plan.color} rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Trusted by 10,000+ customers worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {['30-day money back', 'Free shipping', '2-year warranty', '24/7 support'].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
