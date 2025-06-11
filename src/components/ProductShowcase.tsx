
import { useState, useEffect } from 'react';

const ProductShowcase = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation(prev => prev + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Meet TechNova Pro
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The perfect fusion of innovation and elegance. Every detail crafted for perfection.
          </p>
        </div>

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* 3D Product Container */}
          <div 
            className="relative w-80 h-80 md:w-96 md:h-96 perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Product */}
            <div 
              className="absolute inset-0 transition-transform duration-300 preserve-3d"
              style={{ 
                transform: `rotateY(${rotation}deg) ${isHovered ? 'scale(1.1)' : 'scale(1)'}` 
              }}
            >
              {/* Product Front */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-cyan-500/30">
                <div className="h-full w-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 flex flex-col justify-between">
                  {/* Screen simulation */}
                  <div className="bg-black rounded-2xl h-32 w-full mb-4 relative overflow-hidden">
                    <div className="absolute inset-2 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl">
                      <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Features indicators */}
                  <div className="flex justify-between items-center">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  
                  {/* Logo */}
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      TN
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-20 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Specifications */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="space-y-4">
              {[
                { label: "Display", value: "6.8\" OLED" },
                { label: "Memory", value: "512GB" },
                { label: "Camera", value: "108MP AI" },
                { label: "Battery", value: "5000mAh" }
              ].map((spec, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 transform transition-all duration-500 hover:border-cyan-500/50"
                  style={{ 
                    transform: `translateX(${isHovered ? '0' : '-20px'})`,
                    opacity: isHovered ? 1 : 0.7,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-cyan-400 text-sm font-medium">{spec.label}</div>
                  <div className="text-white font-bold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="space-y-4">
              {[
                { icon: "⚡", label: "Fast Charging" },
                { icon: "🛡️", label: "Secure" },
                { icon: "📡", label: "5G Ready" },
                { icon: "🤖", label: "AI Powered" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 transform transition-all duration-500 hover:border-purple-500/50"
                  style={{ 
                    transform: `translateX(${isHovered ? '0' : '20px'})`,
                    opacity: isHovered ? 1 : 0.7,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-white font-medium">{feature.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
