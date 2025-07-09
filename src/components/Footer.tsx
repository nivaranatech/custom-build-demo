
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PC</span>
              </div>
              <span className="text-xl font-bold">Premium Sales Corporation</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for custom PC builds, repairs, and premium computer solutions. 
              We bring your digital dreams to life with quality components and expert service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/custom-build-demo/build-pc" className="text-gray-400 hover:text-white transition-colors">Build PC</Link></li>
              <li><Link to="/custom-build-demo/readymade" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/custom-build-demo/repair" className="text-gray-400 hover:text-white transition-colors">Repair Service</Link></li>
              <li><Link to="/custom-build-demo/resell" className="text-gray-400 hover:text-white transition-colors">Resell PC</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/custom-build-demo/track-order" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/custom-build-demo/complaint" className="text-gray-400 hover:text-white transition-colors">Complaints</Link></li>
              <li><Link to="/custom-build-demo/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/custom-build-demo/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Premium Sales Corporation. All rights reserved. Built with passion for technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
