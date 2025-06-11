
import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-70 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.3) 0%, rgba(147, 51, 234, 0.2) 25%, rgba(15, 23, 42, 0.9) 50%)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-cyan-400/30' : 
              i % 3 === 1 ? 'bg-purple-400/30' : 'bg-pink-400/30'
            } blur-sm`} />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div 
          className={`transform transition-all duration-1000 ease-out ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Now Available for Pre-order</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-2">
              The Future
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Is Here
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of technology with our revolutionary TechNova Pro. 
            <span className="text-cyan-400 font-medium"> Designed for tomorrow, available today.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 overflow-hidden">
              <span className="relative z-10">Get Early Access</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-400/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-3">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Demo</span>
            </button>
          </div>
          
          {/* Enhanced Countdown */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">Launch Countdown</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "30", label: "Days", color: "from-cyan-400 to-blue-500" },
                { value: "12", label: "Hours", color: "from-purple-400 to-pink-500" },
                { value: "45", label: "Minutes", color: "from-green-400 to-emerald-500" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                    {item.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature highlights */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            {[
              "✨ AI-Powered Performance",
              "🔒 Quantum Security", 
              "⚡ 6G Connectivity",
              "🔋 72-Hour Battery"
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 rounded-full border border-gray-700/50 backdrop-blur-sm"
              >
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="text-xs text-gray-400 uppercase tracking-wider">Scroll</div>
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
