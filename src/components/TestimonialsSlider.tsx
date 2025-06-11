
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Reviewer",
      company: "TechCrunch",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c6db?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "This device completely revolutionized my workflow. The AI features are incredibly intuitive and the battery life is phenomenal."
    },
    {
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "I've tested countless devices, but this one stands out. The performance is unmatched and the design is simply beautiful."
    },
    {
      name: "Emily Watson",
      role: "Creative Director",
      company: "Adobe",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "As someone who works with cutting-edge technology daily, I can confidently say this device is years ahead of anything else."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              What Experts Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Industry leaders and tech experts share their thoughts on our revolutionary device.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12 mx-4">
                    <div className="text-center">
                      {/* Rating stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial content */}
                      <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author info */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-cyan-500/50"
                        />
                        <div className="text-left">
                          <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                          <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                          <div className="text-gray-400 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-cyan-500/50 p-3 rounded-full transition-all duration-300 group"
            >
              <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-cyan-500/50 p-3 rounded-full transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
