import React, { useState } from 'react';
import { Upload, DollarSign, Camera, CheckCircle } from 'lucide-react';
import { useResellPC } from '../context/ResellPCContext';

const ResellPC = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    condition: '',
    processor: '',
    ram: '',
    storage: '',
    graphics: '',
    description: '',
    expectedPrice: '',
    contactNumber: '',
    email: ''
  });

  const [images, setImages] = useState([]);
  const { addResellPC } = useResellPC();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Contact number validation (10 digits only)
    const contactRegex = /^\d{10}$/;
    if (!contactRegex.test(formData.contactNumber)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }


    if (images.length === 0) {
      alert("Please upload at least one photo of your PC.");
      return;
    }

    const newResellPC = {
      ...formData,
      images
    };

    addResellPC(newResellPC);

    console.log('Resell form submitted:', newResellPC);
    alert('Your PC has been submitted for evaluation! We will contact you within 24 hours.');

    // Reset form
    setFormData({
      brand: '',
      model: '',
      year: '',
      condition: '',
      processor: '',
      ram: '',
      storage: '',
      graphics: '',
      description: '',
      expectedPrice: '',
      contactNumber: '',
      email: ''
    });
    setImages([]);
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <DollarSign className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Resell Your PC</h1>
          <p className="text-gray-600">Get the best value for your old computer with our hassle-free process</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <Upload className="h-12 w-12 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">1. Submit Details</h3>
            <p className="text-sm text-gray-600">Fill out the form with your PC specifications</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <Camera className="h-12 w-12 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">2. Get Evaluated</h3>
            <p className="text-sm text-gray-600">Our experts will assess your PC's value</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">3. Get Paid</h3>
            <p className="text-sm text-gray-600">Receive instant payment after approval</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">PC Details</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Brand</option>
                  <option value="HP">HP</option>
                  <option value="Dell">Dell</option>
                  <option value="Lenovo">Lenovo</option>
                  <option value="ASUS">ASUS</option>
                  <option value="Acer">Acer</option>
                  <option value="Custom Built">Custom Built</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Pavilion, OptiPlex"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year of Purchase</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 10 }, (_, i) => 2024 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="Excellent">Excellent (Like New)</option>
                  <option value="Good">Good (Minor wear)</option>
                  <option value="Fair">Fair (Some issues)</option>
                  <option value="Poor">Poor (Needs repair)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Processor</label>
                <input
                  type="text"
                  name="processor"
                  value={formData.processor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Intel Core i5-10400, AMD Ryzen 5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">RAM</label>
                <select
                  name="ram"
                  value={formData.ram}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select RAM</option>
                  <option value="4GB">4GB</option>
                  <option value="8GB">8GB</option>
                  <option value="16GB">16GB</option>
                  <option value="32GB">32GB</option>
                  <option value="64GB+">64GB+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Storage</label>
                <input
                  type="text"
                  name="storage"
                  value={formData.storage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 512GB SSD, 1TB HDD"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Graphics Card</label>
                <input
                  type="text"
                  name="graphics"
                  value={formData.graphics}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., RTX 3060, Integrated Graphics"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Price (₹)</label>
                <input
                  type="number"
                  name="expectedPrice"
                  value={formData.expectedPrice}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your expected price"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={(e) => {
                    // Allow only numbers
                    const value = e.target.value.replace(/\D/g, '');
                    setFormData({
                      ...formData,
                      contactNumber: value
                    });
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  minLength={10}
                  inputMode="numeric"
                />



              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any additional details about your PC's condition, accessories included, etc."
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PC Photos (Required)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Preview */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(img)}
                      alt={`PC ${index}`}
                      className="w-full h-32 object-cover rounded"
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Submit for Evaluation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResellPC;
