import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

//===================================================================================================
import { useCart } from "../context/CartContext";
//===================================================================================================

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  //===================================================================================================
  const { cart } = useCart(); // ✅ get cart from context
  //===================================================================================================

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/custom-build-demo/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Premium Sales Corporation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/custom-build-demo/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/custom-build-demo/build-pc" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/build-pc') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Build PC
            </Link>
            <Link 
              to="/custom-build-demo/readymade" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/readymade') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/custom-build-demo/search-parts" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/search-parts') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Parts
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link to="/custom-build-demo/search-parts" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Search className="h-5 w-5" />
            </Link>

            <Link to="/custom-build-demo/cart" className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
              <ShoppingCart className="h-5 w-5" />

              {/* ✅ Dynamic Cart Count Badge */}
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            <Link to="/custom-build-demo/login" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link to="/custom-build-demo/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/custom-build-demo/build-pc" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Build PC</Link>
              <Link to="/custom-build-demo/readymade" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Products</Link>
              <Link to="/custom-build-demo/search-parts" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Parts</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
