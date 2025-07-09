
import React, { useState } from 'react';
import { Wrench, Upload } from 'lucide-react';
import { useRepairs } from '../context/RepairContext';
import { v4 as uuidv4 } from 'uuid';

const Repair = () => {
  const [formData, setFormData] = useState({
    productType: '',
    warranty: '',
    description: '',
    image: null
  });

  const { addRepair } = useRepairs();

 const handleSubmit = (e) => {
    e.preventDefault();

    const newRepair = {
      id: uuidv4(),
      productType: formData.productType,
      warranty: formData.warranty,
      description: formData.description,
      image: formData.image
    };

    addRepair(newRepair);
    alert('Repair request submitted successfully! We will contact you soon.');
    setFormData({ productType: '', warranty: '', description: '', image: null });
  };

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">

        <div className="text-center mb-8">
          <Wrench className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Repair Service</h1>
          <p className="text-gray-600">Get your device fixed by our expert technicians</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                Product Type
              </label>
              <select
                id="productType"
                name="productType"
                required
                value={formData.productType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Product Type</option>
                <option value="laptop">Laptop</option>
                <option value="desktop">Desktop PC</option>
                <option value="component">Individual Component</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Warranty Status
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="warranty"
                    value="in-warranty"
                    checked={formData.warranty === 'in-warranty'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  In Warranty
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="warranty"
                    value="out-of-warranty"
                    checked={formData.warranty === 'out-of-warranty'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Out of Warranty
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Problem Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the issue with your device..."
              />
            </div>

             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Image (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Wrench className="h-5 w-5" />
              Request Repair
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Repair;
