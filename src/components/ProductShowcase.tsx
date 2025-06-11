
import { useState, useEffect } from 'react';
import { Camera, HardDrive, Cpu, Battery, Wifi, Shield } from 'lucide-react';

const ProductShowcase = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSpec, setActiveSpec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation(prev => prev + 0.5);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  const specifications = [
    { icon: Camera, label: "Camera", value: "108MP", detail: "Triple lens AI camera system", color: "from-blue-400 to-cyan-500" },
    { icon: HardDrive, label: "Storage", value: "1TB", detail: "Ultra-fast SSD storage", color: "from-purple-400 to-pink-500" },
    { icon: Cpu, label: "Processor", value: "Quantum X1", detail: "Neural processing unit", color: "from-green-400 to-emerald-500" },
    { icon: Battery, label: "Battery", value: "5000mAh", detail: "Wireless charging capable", color: "from-yellow-400 to-orange-500" },
    { icon: Wifi, label: "Connectivity", value: "6G Ready", detail: "Ultra-low latency", color: "from-red-400 to-rose-500" },
    { icon: Shield, label: "Security", value: "Quantum", detail: "Biometric encryption", color: "from-indigo-400 to-blue-500" }
  ];

  return (
    <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              TechNova Pro
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionary technology meets stunning design. Experience the future in your hands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Specifications List */}
          <div className="space-y-4">
            {specifications.slice(0, 3).map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div 
                  key={index}
                  className={`group p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer ${
                    activeSpec === index ? 'border-cyan-500/70 bg-gray-800/70' : ''
                  }`}
                  onMouseEnter={() => setActiveSpec(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${spec.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm font-medium">{spec.label}</span>
                        <span className="text-white font-bold text-lg">{spec.value}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{spec.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3D Product Display */}
          <div className="relative flex items-center justify-center">
            <div 
              className="relative w-80 h-80 perspective-1000"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main Product */}
              <div 
                className="absolute inset-0 transition-transform duration-500 preserve-3d"
                style={{ 
                  transform: `rotateY(${rotation}deg) ${isHovered ? 'scale(1.1) rotateX(-10deg)' : 'scale(1)'}` 
                }}
              >
                {/* Product Body */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl border border-cyan-500/30 overflow-hidden">
                  {/* Screen */}
                  <div className="absolute top-4 left-4 right-4 h-48 bg-black rounded-2xl border border-gray-700 overflow-hidden">
                    <div className="absolute inset-1 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-xl">
                      <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-40 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/80 text-sm font-light">TechNova OS</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Camera Module */}
                  <div className="absolute top-4 right-6 w-16 h-16 bg-gray-800 rounded-2xl border border-gray-600 flex items-center justify-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-black rounded-full" />
                    </div>
                  </div>
                  
                  {/* Control buttons */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  
                  {/* Brand logo */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      TN
                    </div>
                  </div>

                  {/* Side ports */}
                  <div className="absolute right-0 top-20 w-1 h-8 bg-gray-600 rounded-l" />
                  <div className="absolute right-0 top-32 w-1 h-4 bg-gray-600 rounded-l" />
                  <div className="absolute left-0 top-24 w-1 h-12 bg-gray-600 rounded-r" />
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-20 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {specifications.slice(3, 6).map((spec, index) => {
              const Icon = spec.icon;
              const realIndex = index + 3;
              return (
                <div 
                  key={realIndex}
                  className={`group p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer ${
                    activeSpec === realIndex ? 'border-purple-500/70 bg-gray-800/70' : ''
                  }`}
                  onMouseEnter={() => setActiveSpec(realIndex)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${spec.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm font-medium">{spec.label}</span>
                        <span className="text-white font-bold text-lg">{spec.value}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{spec.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Display", value: "6.8\" OLED", detail: "120Hz ProMotion" },
            { label: "RAM", value: "16GB", detail: "LPDDR5X" },
            { label: "Weight", value: "186g", detail: "Titanium frame" },
            { label: "OS", value: "TechNova 2.0", detail: "AI-powered" }
          ].map((tech, index) => (
            <div 
              key={index}
              className="text-center p-4 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-white mb-1">{tech.value}</div>
              <div className="text-cyan-400 text-sm font-medium mb-1">{tech.label}</div>
              <div className="text-gray-500 text-xs">{tech.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
