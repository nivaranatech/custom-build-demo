
import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingData, setTrackingData] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // Dummy tracking data
    setTrackingData({
      orderId: orderId,
      status: 'shipped',
      stages: [
        { name: 'Ordered', icon: Package, completed: true, date: '2024-01-15' },
        { name: 'Packed', icon: Package, completed: true, date: '2024-01-16' },
        { name: 'Shipped', icon: Truck, completed: true, date: '2024-01-17' },
        { name: 'Delivered', icon: CheckCircle, completed: false, date: 'Expected: 2024-01-19' }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleTrack} className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Order ID (e.g., INV12345)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Search className="h-5 w-5" />
              Track Order
            </button>
          </form>
        </div>

        {trackingData && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Order Status: {trackingData.orderId}</h2>
            
            <div className="space-y-6">
              {trackingData.stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      stage.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${stage.completed ? 'text-green-600' : 'text-gray-500'}`}>
                        {stage.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{stage.date}</p>
                    </div>
                    {stage.completed && (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
