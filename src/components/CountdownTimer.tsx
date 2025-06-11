
import { useState, useEffect } from 'react';
import { Clock, Gift, Zap } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes--;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours--;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays--;
        }

        return {
          days: Math.max(0, newDays),
          hours: Math.max(0, newHours),
          minutes: Math.max(0, newMinutes),
          seconds: Math.max(0, newSeconds)
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full border border-red-500/20 mb-6">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Launch Countdown
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience the future. Pre-order starts soon with exclusive early bird benefits!
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Gift, text: "Early Bird 30% Off", color: "text-green-400" },
              { icon: Zap, text: "Priority Shipping", color: "text-blue-400" },
              { icon: Clock, text: "Exclusive Access", color: "text-purple-400" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                <span className="text-gray-300 text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {[
            { value: timeLeft.days, label: 'Days', color: 'from-red-400 to-pink-500', accent: 'border-red-500/50' },
            { value: timeLeft.hours, label: 'Hours', color: 'from-pink-400 to-purple-500', accent: 'border-pink-500/50' },
            { value: timeLeft.minutes, label: 'Minutes', color: 'from-purple-400 to-blue-500', accent: 'border-purple-500/50' },
            { value: timeLeft.seconds, label: 'Seconds', color: 'from-blue-400 to-cyan-500', accent: 'border-blue-500/50' }
          ].map((item, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Main Card */}
              <div className={`relative bg-gray-900/80 backdrop-blur-sm border-2 ${item.accent} rounded-3xl p-8 hover:scale-105 transition-all duration-300 overflow-hidden`}>
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3 transition-transform duration-300 group-hover:scale-110`}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">
                    {item.label}
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute top-2 right-2 w-3 h-3 bg-gradient-to-br ${item.color} rounded-full opacity-60`} />
                <div className={`absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br ${item.color} rounded-full opacity-40`} />
              </div>
              
              {/* Outer Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Don't Miss Out!</h3>
          <p className="text-gray-300 mb-6">Join thousands of tech enthusiasts waiting for the future.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-2">
              <span>Notify Me When Available</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </button>
            
            <button className="border-2 border-gray-600 hover:border-red-400 text-gray-300 hover:text-red-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
