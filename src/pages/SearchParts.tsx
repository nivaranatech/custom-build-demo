import React, { useState } from 'react';
import { Search, ShoppingCart, Filter, Star } from 'lucide-react';
import { useParts } from '../context/PartsContext';
import { useCart, CartItem } from "../context/CartContext";
import { v4 as uuidv4 } from "uuid";

const SearchParts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { parts } = useParts();
  const { addToCart } = useCart();

  const categories = ['all', 'cpu', 'gpu', 'ram', 'storage', 'motherboard', 'psu', 'case', 'cooling', 'monitor', 'keyboard', 'mouse'];

  // ✅ Filter out sold parts
  const filteredParts = parts.filter(part => {
    if (part.sold) return false; // Hide sold parts
    const matchesCategory = selectedCategory === 'all' || part.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  const handleAddToCart = (part: any) => {
    const item: CartItem = {
      id: uuidv4(),
      type: "part", // ✅ part type
      name: part.name,
      price: part.price,
      image: part.image,
      quantity: 0
    };
    addToCart(item);
    alert(`${part.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search PC Components</h1>
          <p className="text-gray-600">Find the perfect parts for your custom build</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParts.map(part => (
            <div key={part.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {part.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{part.name}</h3>
                <p className="text-sm text-gray-600 mb-3">₹{part.price.toLocaleString()}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Key Features:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {part.specs && part.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleAddToCart(part)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredParts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No components found matching your criteria.</p>
            <p className="text-gray-400">Try adjusting your search or filter settings.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchParts;
