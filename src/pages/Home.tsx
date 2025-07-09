import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Laptop, Wrench, Search, Computer } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Build Your Dream PC
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-blue-100">
              Custom PCs • Expert Repairs • Premium Components
            </p>
            <Link 
              to="/custom-build-demo/build-pc"
              className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center shadow-lg"
            >
              Start Building
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Build PC */}
            <Link to="/custom-build-demo/build-pc" className="group bg-white rounded-xl p-6 shadow hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200">
                <Laptop className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Custom PC Builder</h3>
              <p className="text-gray-600">Build your perfect PC with our interactive component selector.</p>
            </Link>

            {/* Ready-made Systems */}
            <Link to="/custom-build-demo/readymade" className="group bg-white rounded-xl p-6 shadow hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200">
                <Search className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ready-made Systems</h3>
              <p className="text-gray-600">Browse our collection of pre-built PCs and laptops.</p>
            </Link>

            {/* Buy Components */}
            <Link to="/custom-build-demo/search-parts" className="group bg-white rounded-xl p-6 shadow hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200">
                <Computer className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Buy Components</h3>
              <p className="text-gray-600">Explore our range of latest processors, GPUs, and more.</p>
            </Link>

            {/* Repair Service */}
            <Link to="/custom-build-demo/repair" className="group bg-white rounded-xl p-6 shadow hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200">
                <Wrench className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Repair Service</h3>
              <p className="text-gray-600">Professional repair services for all your devices.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Resell PC */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Resell Your PC</h3>
              <p className="mb-6">Get the best value for your old computer with our hassle-free resell service.</p>
            </div>
            <Link 
              to="/custom-build-demo/resell"
              className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
            >
              Start Reselling
            </Link>
          </div>

          {/* Contact Us */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="mb-6">Our expert team is ready to assist you with any questions or custom requirements.</p>
            </div>
            <Link 
              to="/custom-build-demo/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
