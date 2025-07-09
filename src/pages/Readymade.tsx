import React, { useState } from 'react';
import { ShoppingCart, Filter, Monitor, Laptop } from 'lucide-react';
import { useParts } from "../context/PartsContext";


//===================================================================================================
import { useCart, CartItem } from "../context/CartContext";
import { v4 as uuidv4 } from "uuid";

//===================================================================================================


const Readymade = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { readyMadePCs } = useParts();
  const { addToCart } = useCart();

 const filteredProducts = readyMadePCs.filter(product => {
    if (product.sold) return false; // Hide sold products
    if (selectedCategory === 'all') return true;
    return product.type === selectedCategory;
  });

 

  const handleAddReadymadeToCart = (product: any) => {
    const item: CartItem = {
      id: uuidv4(),
      type: "readymade", // 👈 TypeScript now accepts it
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 0
    };
    addToCart(item);
    alert(`${product.name} added to cart!`);
  };



  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ready-made PCs & Laptops</h1>
          <p className="text-gray-600">Choose from our collection of pre-built systems</p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md flex items-center ${selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory('desktop')}
              className={`px-4 py-2 rounded-md flex items-center ${selectedCategory === 'desktop'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <Monitor className="h-4 w-4 mr-2" />
              Desktop PCs
            </button>
            <button
              onClick={() => setSelectedCategory('laptop')}
              className={`px-4 py-2 rounded-md flex items-center ${selectedCategory === 'laptop'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <Laptop className="h-4 w-4 mr-2" />
              Laptops
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Specifications:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleAddReadymadeToCart(product)}
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
      </div>
    </div>
  );
};

export default Readymade;
