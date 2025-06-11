
import { Zap, Shield, Wifi, Battery, Eye, Cpu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ProductFeatures = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience unprecedented speed with our quantum processor technology.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Military Grade Security",
      description: "Advanced encryption keeps your data safe with biometric authentication.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Wifi,
      title: "6G Connectivity",
      description: "Stay connected with next-generation wireless technology everywhere you go.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Battery,
      title: "All-Day Battery",
      description: "Revolutionary battery technology that lasts for days, not hours.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Eye,
      title: "AI Vision",
      description: "Smart camera with AI-powered recognition and augmented reality features.",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: Cpu,
      title: "Neural Engine",
      description: "Advanced AI processing for intelligent automation and learning.",
      color: "from-indigo-400 to-purple-500"
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
            }, index * 200);
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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Revolutionary Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technology meets elegant design in our most advanced device yet.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } hover:scale-105 hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
