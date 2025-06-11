
import { Zap, Shield, Wifi, Battery, Eye, Cpu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ProductFeatures = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience unprecedented speed with our quantum processor technology and optimized performance algorithms.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      stats: "3.2GHz Boost",
      detail: "40% faster than competitors"
    },
    {
      icon: Shield,
      title: "Military Grade Security",
      description: "Advanced encryption keeps your data safe with biometric authentication and quantum-resistant protocols.",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      stats: "AES-256",
      detail: "Certified secure by NSA"
    },
    {
      icon: Wifi,
      title: "6G Connectivity",
      description: "Stay connected with next-generation wireless technology everywhere you go with ultra-low latency.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      stats: "10Gbps",
      detail: "Global 6G coverage"
    },
    {
      icon: Battery,
      title: "All-Day Battery",
      description: "Revolutionary battery technology that lasts for days, not hours, with intelligent power management.",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      stats: "72 Hours",
      detail: "Wireless charging included"
    },
    {
      icon: Eye,
      title: "AI Vision",
      description: "Smart camera with AI-powered recognition and augmented reality features for enhanced productivity.",
      color: "from-red-400 to-rose-500",
      bgColor: "from-red-500/10 to-rose-500/10",
      stats: "Real-time AR",
      detail: "Object recognition AI"
    },
    {
      icon: Cpu,
      title: "Neural Engine",
      description: "Advanced AI processing for intelligent automation and machine learning capabilities built-in.",
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      stats: "15.8 TOPS",
      detail: "Dedicated ML chip"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleFeatures(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 mb-6">
            <span className="text-cyan-400 text-sm font-medium">Revolutionary Technology</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next-Gen Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology meets elegant design in our most advanced device yet. 
            Experience innovation that reshapes tomorrow.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures.includes(index);
            const isHovered = hoveredFeature === index;
            
            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card group relative overflow-hidden transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } hover:scale-105 hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-2xl transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />
                
                <div className="relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 h-full">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gray-800/80 rounded-full border border-gray-700">
                    <span className="text-xs font-medium text-cyan-400">{feature.stats}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    {feature.description}
                  </p>

                  {/* Detail */}
                  <div className={`text-sm text-purple-400 font-medium transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    {feature.detail}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
                  
                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 blur-xl rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700 backdrop-blur-sm">
            <span className="text-gray-300">Ready to experience the future?</span>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium hover:scale-105 transition-transform duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
