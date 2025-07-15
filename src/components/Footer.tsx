const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-sans">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-sans">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Automation Testing
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Software Maintenance
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  BPO
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Staffing
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-sans">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="mailto:contact@kktekgroup.com" className="hover:text-white transition-colors">
                  contact@kktekgroup.com
                </a>
              </p>
              <p>+1 (555) 123-4567</p>
              <p>123 Business Ave<br />Tech City, TC 12345</p>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-sans">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 KKTEK Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;