
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.3) 0%, rgba(147, 51, 234, 0.2) 25%, rgba(15, 23, 42, 0.8) 50%)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div 
          className="transform transition-all duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Future
            </span>
            <span className="block text-white">
              Is Here
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of technology with our revolutionary smart device. 
            Designed for tomorrow, available today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2">
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-400/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">Launching in</p>
            <div className="flex justify-center space-x-4 text-2xl font-bold">
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-500/20">
                <span className="text-cyan-400">30</span>
                <p className="text-xs text-gray-400">Days</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-500/20">
                <span className="text-cyan-400">12</span>
                <p className="text-xs text-gray-400">Hours</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-500/20">
                <span className="text-cyan-400">45</span>
                <p className="text-xs text-gray-400">Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
