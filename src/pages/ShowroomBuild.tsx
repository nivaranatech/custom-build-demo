
import React, { useState } from 'react';
import { QrCode, Plus } from 'lucide-react';

const ShowroomBuild = () => {
  const [scannedParts, setScannedParts] = useState([]);
  const [barcodeInput, setBarcodeInput] = useState('');

  const mockParts = {
    '123456789': { name: 'Intel Core i5 10th Gen', price: 12500, category: 'CPU' },
    '987654321': { name: '16GB DDR4 RAM', price: 4500, category: 'RAM' },
    '456789123': { name: '1TB SSD', price: 6500, category: 'Storage' }
  };

  const handleScan = (e) => {
    e.preventDefault();
    if (barcodeInput && mockParts[barcodeInput]) {
      const part = { ...mockParts[barcodeInput], barcode: barcodeInput, id: Date.now() };
      setScannedParts([...scannedParts, part]);
      setBarcodeInput('');
    } else {
      alert('Part not found! Try: 123456789, 987654321, or 456789123');
    }
  };

  const getTotalPrice = () => {
    return scannedParts.reduce((total, part) => total + part.price, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <QrCode className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Showroom PC Builder</h1>
          <p className="text-gray-600">Scan barcodes to quickly build PCs in our showroom</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scanner Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Scan Barcode</h2>
            <form onSubmit={handleScan} className="space-y-4">
              <div>
                <label htmlFor="barcode" className="block text-sm font-medium text-gray-700 mb-2">
                  Barcode / Part ID
                </label>
                <input
                  type="text"
                  id="barcode"
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Scan or enter barcode (try: 123456789)"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Add Part
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Demo Barcodes:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>123456789 - Intel Core i5</li>
                <li>987654321 - 16GB RAM</li>
                <li>456789123 - 1TB SSD</li>
              </ul>
            </div>
          </div>

          {/* Build Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Current Build</h2>
            
            {scannedParts.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No parts scanned yet</p>
            ) : (
              <div className="space-y-4">
                {scannedParts.map((part) => (
                  <div key={part.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{part.name}</h3>
                      <p className="text-sm text-gray-600">{part.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{part.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Price:</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Complete Build
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowroomBuild;
