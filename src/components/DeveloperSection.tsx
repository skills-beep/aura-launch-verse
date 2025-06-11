
import { ExternalLink, Github, Linkedin, Mail, Code, Coffee, Zap } from 'lucide-react';

const DeveloperSection = () => {
  const skills = [
    'React & TypeScript',
    'Frontend Development', 
    'UI/UX Design',
    'Modern Web Technologies',
    'Responsive Design',
    'Performance Optimization'
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Coffee Consumed', value: '∞' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20 mb-8 backdrop-blur-sm">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Meet the Developer</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Built with Passion
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafted by a passionate developer who believes in creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Developer Info */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 group">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">BS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bishal Sharma</h3>
                  <p className="text-cyan-400 font-medium">Frontend Developer & UI/UX Designer</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate frontend developer with expertise in modern web technologies. 
                I specialize in creating intuitive, performant, and visually stunning web applications 
                that deliver exceptional user experiences.
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/bishal-sharma-12b7211b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center space-x-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 hover:border-blue-400/50 rounded-full transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-blue-400 text-sm font-medium">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-blue-400 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="https://github.com/skills-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center space-x-2 px-4 py-2 bg-gray-600/10 hover:bg-gray-600/20 border border-gray-500/30 hover:border-gray-400/50 rounded-full transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-gray-400 group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-gray-400 text-sm font-medium">GitHub</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="mailto:bishalsharma153@gmail.com"
                  className="group/link flex items-center space-x-2 px-4 py-2 bg-green-600/10 hover:bg-green-600/20 border border-green-500/30 hover:border-green-400/50 rounded-full transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-green-400 group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-green-400 text-sm font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 text-purple-400 mr-2" />
                Skills & Expertise
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 group/skill"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover/skill:scale-150 transition-transform duration-300" />
                    <span className="text-gray-300 text-sm group-hover/skill:text-purple-400 transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Achievements */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 group text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Philosophy Card */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <Coffee className="w-6 h-6 text-amber-400 mr-3" />
                <h4 className="text-xl font-bold text-white">My Philosophy</h4>
              </div>
              <blockquote className="text-gray-300 italic leading-relaxed">
                "Great design is not just about making things look beautiful—it's about creating 
                meaningful experiences that solve real problems and delight users every step of the way."
              </blockquote>
              <div className="mt-4 text-right">
                <span className="text-cyan-400 font-medium">— Bishal Sharma</span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-gray-400 mb-4">Interested in working together?</p>
              <a
                href="mailto:bishalsharma153@gmail.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
