
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bovi-blue text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">BOVI Media</h2>
            <p className="text-sm text-gray-300 mb-4">
              Blue Oxygen Ventures Inc.<br />
              A cohesive network of creative minds driven by innovation, simplicity and logic.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-sm text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Our Locations</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Delhi</li>
              <li>Goa</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="block">HQ Address:</span>
                <span className="block">19/6, 6th Main Road</span>
                <span className="block">Vinayaka Nagar (off old airport Road)</span>
                <span className="block">Bangalore – 560017</span>
              </li>
              <li>Phone: <a href="tel:+919900142919" className="hover:text-white transition-colors">+91 9900142919</a></li>
              <li>Email: <a href="mailto:suresh.sanyasi@bovimedia.com" className="hover:text-white transition-colors">suresh.sanyasi@bovimedia.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Blue Oxygen Ventures Inc. (BOVI Media). All rights reserved.</p>
          <p className="mt-2">Registered Address: 59, Sunkalpet Main Road Bangalore – 560002.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
