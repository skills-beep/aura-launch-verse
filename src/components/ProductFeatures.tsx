
import { Camera, HardDrive, Cpu, Battery, Wifi, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ProductFeatures = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Camera,
      label: "Camera",
      spec: "108MP",
      description: "Triple lens AI camera system",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500/20",
      position: "left-top"
    },
    {
      icon: HardDrive,
      label: "Storage", 
      spec: "1TB",
      description: "Ultra-fast SSD storage",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/20",
      position: "left-bottom"
    },
    {
      icon: Cpu,
      label: "Processor",
      spec: "Quantum X1",
      description: "Neural processing unit",
      color: "from-green-400 to-emerald-500", 
      bgColor: "bg-green-500/20",
      position: "left-center"
    },
    {
      icon: Battery,
      label: "Battery",
      spec: "5000mAh",
      description: "Wireless charging capable",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-orange-500/20",
      position: "right-top"
    },
    {
      icon: Wifi,
      label: "Connectivity",
      spec: "6G Ready",
      description: "Ultra-low latency",
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-500/20",
      position: "right-bottom"
    },
    {
      icon: Shield,
      label: "Security",
      spec: "Quantum",
      description: "Biometric encryption",
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-500/20",
      position: "right-center"
    }
  ];

  const leftFeatures = features.filter(f => f.position.startsWith('left'));
  const rightFeatures = features.filter(f => f.position.startsWith('right'));

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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              TechNova Pro
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary technology meets stunning design. Experience the future in your hands.
          </p>
        </div>

        {/* Main Product Layout */}
        <div ref={featuresRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[600px]">
          
          {/* Left Features Column */}
          <div className="space-y-6 lg:space-y-8">
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isVisible = visibleFeatures.includes(index);
              const isHovered = hoveredFeature === index;
              
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`feature-card group relative transition-all duration-700 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } hover:scale-105 lg:ml-auto`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="relative p-6 rounded-2xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 max-w-sm">
                    {/* Glassmorphism Background */}
                    <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    <div className="relative flex items-center gap-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                          {feature.label}
                        </h3>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-1`}>
                          {feature.spec}
                        </div>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Phone Image */}
          <div className="flex justify-center items-center relative">
            <div className="relative group">
              {/* Phone Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-pink-500/30 rounded-3xl blur-2xl scale-110 animate-pulse" />
              
              {/* Phone Container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl border border-gray-700/50">
                {/* Phone Screen */}
                <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-2xl aspect-[9/16] w-48 md:w-56 lg:w-64 relative overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="p-4 text-center text-white">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full mx-auto mb-4 animate-bounce" />
                      <div className="text-xs font-medium opacity-80">TechNova</div>
                    </div>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gray-900 rounded-b-xl" />
                </div>
              </div>
              
              {/* Ambient Light Rings */}
              <div className="absolute inset-0 rounded-3xl border border-purple-500/20 animate-pulse" style={{ animationDelay: '0s' }} />
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/20 animate-pulse scale-110" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-0 rounded-3xl border border-pink-500/20 animate-pulse scale-125" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Right Features Column */}
          <div className="space-y-6 lg:space-y-8">
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const adjustedIndex = index + leftFeatures.length;
              const isVisible = visibleFeatures.includes(adjustedIndex);
              const isHovered = hoveredFeature === adjustedIndex;
              
              return (
                <div
                  key={adjustedIndex}
                  data-index={adjustedIndex}
                  className={`feature-card group relative transition-all duration-700 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  } hover:scale-105`}
                  style={{ transitionDelay: `${adjustedIndex * 150}ms` }}
                  onMouseEnter={() => setHoveredFeature(adjustedIndex)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="relative p-6 rounded-2xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 max-w-sm">
                    {/* Glassmorphism Background */}
                    <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    <div className="relative flex items-center gap-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                          {feature.label}
                        </h3>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-1`}>
                          {feature.spec}
                        </div>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
