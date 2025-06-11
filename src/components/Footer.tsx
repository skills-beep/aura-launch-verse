
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Specifications', 'Reviews'],
    Company: ['About Us', 'Careers', 'Press', 'Partners'],
    Support: ['Help Center', 'Contact', 'Warranty', 'Returns'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookies', 'GDPR']
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              TechNova
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Revolutionizing technology one innovation at a time. Experience the future with TechNova Pro.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <span className="text-gray-400 group-hover:text-cyan-400 text-sm font-medium">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} TechNova. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ for the future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
